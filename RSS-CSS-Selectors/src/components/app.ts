import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { levels } from './game/levels';
import { Elements } from '../types/types';
import { parsedNodeHtml } from './util/parce-level-obj-to-html-viewer';
import { addHighlightedTag } from './util/add-highlighted-tag';
import { ElementGenerator } from './util/element-generator';
import { cleanElement } from './util/clean-element';
import { getAsideState } from './util/get-aside-state';
import { setAsideState } from './util/set-aside-state';
import { getNotCompletedLevelsList } from './util/get-not-completed-levels-list';
import { buildLevel } from './util/build-level';
import { EventHandler } from './util/events-handler';
import './styles/base.scss';
import { ModalWindow } from './modal/modal-window';
import { winModalParams } from './modal/modal-view';
import { generateNotCompletedLevelsModalParams } from './util/generate-not-completed-levels-modal-params';

export class App {
  private readonly eventHandler: EventHandler;

  readonly header: ElementGenerator;

  readonly main: ElementGenerator;

  readonly aside: ElementGenerator;

  readonly footer: ElementGenerator;

  public currentLevel: number = 0;

  public asideState: Record<string, string> = getAsideState();

  public isWin: boolean;

  constructor() {
    this.eventHandler = new EventHandler(this);
    this.header = new ElementGenerator(headerParams);
    this.main = new ElementGenerator(mainParams);
    this.footer = new ElementGenerator(footerParams);
    this.aside = new ElementGenerator(asideParams);
    this.getState();
    this.startGame(this.currentLevel);
    this.eventHandler.addKeydownHandler();
    this.eventHandler.addClickHandler();
    this.eventHandler.addLevelBtnHandler();
    this.eventHandler.addNavButtonsHandler();
    this.eventHandler.addHelpHandler();
    this.eventHandler.addAsideStateHandler();
    this.eventHandler.addInvalidSelectorHandler();
    EventHandler.addNavBurgerHandler();
    EventHandler.addAsideBurgerHandler();
    this.isWin = Boolean(Number(localStorage.getItem('isWin')));
  }

  public createView(): void {
    document.body.append(this.header.getElement());
    document.body.append(this.main.getElement());
    document.body.append(this.aside.getElement());
    document.body.append(this.footer.getElement());
  }

  public startGame(levelNumber: number = 0): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const htmlViewer = ElementGenerator.elementLinks[Elements.HTML_VIEWER];
    const story = ElementGenerator.elementLinks[Elements.STORY];

    cleanElement(table, htmlViewer, story);
    parsedNodeHtml.length = 0;

    buildLevel(levelNumber);

    addHighlightedTag(htmlViewer, 'table');

    this.toggleBtnDataActiveStatus();

    setAsideState();
  }

  public nextLevel(): void {
    const notCompletedLevels = getNotCompletedLevelsList(levels);

    if (this.currentLevel < levels.length - 1) {
      if (notCompletedLevels.length === 0 && !this.isWin) {
        const modal: ModalWindow | null = new ModalWindow(winModalParams);
        modal.appendModal();
        this.isWin = true;
        return;
      }

      this.toggleBtnDataActiveStatus();
      this.currentLevel += 1;
      this.startGame(this.currentLevel);
      this.setState();

      const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
      input.value = '';
    } else if (this.currentLevel === levels.length - 1) { // TODO: msg for finished game
      if (notCompletedLevels.length === 0 && !this.isWin) {
        const modal: ModalWindow | null = new ModalWindow(winModalParams);
        modal.appendModal();
        this.isWin = true;
      } else if (notCompletedLevels.length > 0) {
        const notCompletedModalParams = generateNotCompletedLevelsModalParams(notCompletedLevels);
        const modal: ModalWindow | null = new ModalWindow(notCompletedModalParams);
        modal.appendModal();
      }
    }
  }

  public setState(): void {
    localStorage.setItem('currentLevel', this.currentLevel.toString());
  }

  public getState(): void {
    const currentLevel = localStorage.getItem('currentLevel');
    this.currentLevel = Number(currentLevel);
  }

  public toggleBtnDataActiveStatus(): void {
    const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.currentLevel}`];
    if (currentLevelBtn.getAttribute('data-active') === null) {
      currentLevelBtn.setAttribute('data-active', 'active');
    } else {
      currentLevelBtn.removeAttribute('data-active');
    }
  }
}
