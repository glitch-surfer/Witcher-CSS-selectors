import './base.scss';
import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { levels } from './game/levels';
import type { IApp } from '../types/types';
import { Elements } from '../types/types';
import { parseLevelObjToHtmlViewer, parsedNodeHtml } from './util/parce-level-obj-to-html-viewer';
import { addToolTips } from './util/add-tooltip';
import { addHighlightedTag } from './util/add-highlighted-tag';
import { ElementGenerator } from './util/element-generator';
import { removeElement } from './util/remove-element';
import { cleanElement } from './util/clean-element';

export class App implements IApp {
  header: ElementGenerator;

  main: ElementGenerator;

  aside: ElementGenerator;

  footer: ElementGenerator;

  public currentLevel: number = 0;

  constructor() {
    this.header = new ElementGenerator(headerParams);
    this.main = new ElementGenerator(mainParams);
    this.aside = new ElementGenerator(asideParams);
    this.footer = new ElementGenerator(footerParams);
    this.getState();
    App.startGame(this.currentLevel);
    this.addKeydownHandler();
    this.addClickHandler();
    this.addLevelHandler();
    this.markAsHelped();
  }

  createView(): void {
    document.body.append(this.header.getElement());
    document.body.append(this.main.getElement());
    document.body.append(this.aside.getElement());
    document.body.append(this.footer.getElement());
  }

  static startGame(levelNumber: number = 0): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const htmlViewer = ElementGenerator.elementLinks[Elements.HTML_VIEWER];
    const story = ElementGenerator.elementLinks[Elements.STORY];
    cleanElement(table);
    cleanElement(htmlViewer);
    cleanElement(story);
    parsedNodeHtml.length = 0;

    levels[levelNumber].forEach((element) => {
      const parsedLevelData = parseLevelObjToHtmlViewer(element);
      htmlViewer.append(parsedLevelData);

      const elementOnTable = new ElementGenerator(element).getElement();
      addToolTips(elementOnTable);
      table.append(elementOnTable);

      if (element.story !== undefined) {
        story.append(element.story);
      }
    });
    addHighlightedTag(htmlViewer, 'table');
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
        }
        this.nextLevel();
      }
    });
  }

  private nextLevel(): void {
    if (this.currentLevel < levels.length - 1) {
      this.currentLevel += 1;
      App.startGame(this.currentLevel);
      this.setState();
    }
  }

  private addLevelHandler(): void {
    const btnNext = ElementGenerator.elementLinks[Elements.BTN_NEXT];
    const btnPrev = ElementGenerator.elementLinks[Elements.BTN_PREV];

    btnNext.addEventListener('click', this.nextLevel.bind(this));

    btnPrev.addEventListener('click', () => {
      if (this.currentLevel > 0) {
        this.currentLevel -= 1;
        App.startGame(this.currentLevel);
        this.setState();
      }
    });

    this.aside.getElement().addEventListener('click', (event) => {
      const levelBtn = event.target;
      if (levelBtn instanceof HTMLElement && levelBtn.classList.contains('levels__item')) {
        const levelBtnIndex = levelBtn.classList[levelBtn.classList.length - 1];
        this.currentLevel = Number(levelBtnIndex);
        App.startGame(this.currentLevel);
        this.setState();
      }
    });
  }

  private markAsHelped(): void {
    const helpBtn = ElementGenerator.elementLinks[Elements.BTN_HELP];

    helpBtn.addEventListener('click', () => {
      const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.currentLevel}`];
      if (!currentLevelBtn.classList.contains('done')) {
        currentLevelBtn.className = `levels__item helped ${this.currentLevel}`;
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
}
