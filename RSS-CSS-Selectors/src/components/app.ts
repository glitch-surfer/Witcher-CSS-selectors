import './base.scss';
import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { levels } from './game/levels';
import type { IApp } from '../types/types';
import { Elements } from '../types/types';
import { parsedNodeHtml } from './util/parce-level-obj-to-html-viewer';
import { addHighlightedTag } from './util/add-highlighted-tag';
import { ElementGenerator } from './util/element-generator';
import { removeElement } from './util/remove-element';
import { cleanElement } from './util/clean-element';
import { getAsideState } from './util/get-aside-state';
import { setAsideState } from './util/set-aside-state';
import { getNotCompletedLevelsList } from './util/get-not-completed-levels-list';
import { buildLevel } from './util/build-level';

export class App implements IApp {
  header: ElementGenerator;

  main: ElementGenerator;

  aside: ElementGenerator;

  footer: ElementGenerator;

  private currentLevel: number = 0;

  private asideState: Record<string, string> = getAsideState();

  private isWin: boolean = false;

  constructor() {
    this.header = new ElementGenerator(headerParams);
    this.main = new ElementGenerator(mainParams);
    this.footer = new ElementGenerator(footerParams);
    this.aside = new ElementGenerator(asideParams);
    this.getState();
    this.startGame(this.currentLevel);
    this.addKeydownHandler();
    this.addClickHandler();
    this.addLevelHandler();
    this.addMarkAsHelpedHandler();
    this.addAsideStateHandler();
  }

  public createView(): void {
    document.body.append(this.header.getElement());
    document.body.append(this.main.getElement());
    document.body.append(this.aside.getElement());
    document.body.append(this.footer.getElement());
  }

  private startGame(levelNumber: number = 0): void {
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

  private addKeydownHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        const isRightSelector = removeElement(table, selectorsInput.value);
        if (isRightSelector) {
          const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.currentLevel}`];
          if (!currentLevelBtn.classList.contains('helped')) {
            currentLevelBtn.className = `levels__item done ${this.currentLevel}`;
            this.asideState[`LI.${this.currentLevel}`] = currentLevelBtn.className;
          }
          this.nextLevel();
        }
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  private addClickHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const submitButton = ElementGenerator.elementLinks[Elements.BUTTON];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

    submitButton.addEventListener('click', () => {
      const isRightSelector = removeElement(table, selectorsInput.value);
      if (isRightSelector) {
        const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.currentLevel}`];
        if (!currentLevelBtn.classList.contains('helped')) {
          currentLevelBtn.className = `levels__item done ${this.currentLevel}`;
          this.asideState[`LI.${this.currentLevel}`] = currentLevelBtn.className;
        }
        this.nextLevel();
      }
    });
  }

  private nextLevel(): void {
    const notCompletedLevels = getNotCompletedLevelsList();

    if (this.currentLevel < levels.length - 1) {
      if (notCompletedLevels.length === 0 && !this.isWin) {
        alert('Вы прошли игру!');
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
        alert('Вы прошли игру!');
        this.isWin = true;
      } else if (notCompletedLevels.length > 0) {
        alert('Остались эти уровни, попробуй!');
        console.log(notCompletedLevels);
        // TODO: add modal with btns for notCompletedLevels
      }
    }
  }

  private addLevelHandler(): void {
    const btnNext = ElementGenerator.elementLinks[Elements.BTN_NEXT];
    const btnPrev = ElementGenerator.elementLinks[Elements.BTN_PREV];

    btnNext.addEventListener('click', this.nextLevel.bind(this));

    btnPrev.addEventListener('click', () => {
      if (this.currentLevel > 0) {
        this.toggleBtnDataActiveStatus();
        this.currentLevel -= 1;
        this.startGame(this.currentLevel);
        this.setState();
      }
    });

    this.aside.getElement().addEventListener('click', (event) => {
      const levelBtn = event.target;
      if (levelBtn instanceof HTMLElement && levelBtn.classList.contains('levels__item')) {
        this.toggleBtnDataActiveStatus();
        const levelBtnIndex = levelBtn.classList[levelBtn.classList.length - 1];
        this.currentLevel = Number(levelBtnIndex);
        this.startGame(this.currentLevel);
        this.setState();
      }
    });
  }

  private addMarkAsHelpedHandler(): void {
    const helpBtn = ElementGenerator.elementLinks[Elements.BTN_HELP];

    helpBtn.addEventListener('click', () => {
      const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.currentLevel}`];
      if (!currentLevelBtn.classList.contains('done')) {
        currentLevelBtn.className = `levels__item helped ${this.currentLevel}`;
        this.asideState[`LI.${this.currentLevel}`] = currentLevelBtn.className;
      }
    });
  }

  private setState(): void {
    localStorage.setItem('currentLevel', this.currentLevel.toString());
  }

  private getState(): void {
    const currentLevel = localStorage.getItem('currentLevel');
    this.currentLevel = Number(currentLevel);
  }

  private addAsideStateHandler(): void {
    window.addEventListener('beforeunload', () => {
      const sereilizedAside = JSON.stringify(this.asideState);
      localStorage.setItem('asideState', sereilizedAside);
    });
  }

  private toggleBtnDataActiveStatus(): void {
    const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.currentLevel}`];
    if (currentLevelBtn.getAttribute('data-active') === null) {
      currentLevelBtn.setAttribute('data-active', 'active');
    } else {
      currentLevelBtn.removeAttribute('data-active');
    }
  }
}
