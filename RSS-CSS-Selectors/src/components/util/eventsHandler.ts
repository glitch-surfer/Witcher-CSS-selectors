import { Elements } from '../../types/types';
import type { App } from '../app';
import { ElementGenerator } from './element-generator';
import { removeElement } from './remove-element';

export class EventHandler {
  private readonly this: App;

  constructor(obj: App) {
    this.this = obj;
  }

  addKeydownHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        const isRightSelector = removeElement(table, selectorsInput.value);
        if (isRightSelector) {
          const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.this.currentLevel}`];
          if (!currentLevelBtn.classList.contains('helped')) {
            currentLevelBtn.className = `levels__item done ${this.this.currentLevel}`;
            this.this.asideState[`LI.${this.this.currentLevel}`] = currentLevelBtn.className;
          }
          this.this.nextLevel();
        }
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  addClickHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const submitButton = ElementGenerator.elementLinks[Elements.BUTTON];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

    submitButton.addEventListener('click', () => {
      const isRightSelector = removeElement(table, selectorsInput.value);
      if (isRightSelector) {
        const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.this.currentLevel}`];
        if (!currentLevelBtn.classList.contains('helped')) {
          currentLevelBtn.className = `levels__item done ${this.this.currentLevel}`;
          this.this.asideState[`LI.${this.this.currentLevel}`] = currentLevelBtn.className;
        }
        this.this.nextLevel();
      }
    });
  }

  addLevelHandler(): void {
    const btnNext = ElementGenerator.elementLinks[Elements.BTN_NEXT];
    const btnPrev = ElementGenerator.elementLinks[Elements.BTN_PREV];

    btnNext.addEventListener('click', this.this.nextLevel.bind(this.this));

    btnPrev.addEventListener('click', () => {
      if (this.this.currentLevel > 0) {
        this.this.toggleBtnDataActiveStatus();
        this.this.currentLevel -= 1;
        this.this.startGame(this.this.currentLevel);
        this.this.setState();
      }
    });

    this.this.aside.getElement().addEventListener('click', (event) => {
      const levelBtn = event.target;
      if (levelBtn instanceof HTMLElement && levelBtn.classList.contains('levels__item')) {
        this.this.toggleBtnDataActiveStatus();
        const levelBtnIndex = levelBtn.classList[levelBtn.classList.length - 1];
        this.this.currentLevel = Number(levelBtnIndex);
        this.this.startGame(this.this.currentLevel);
        this.this.setState();
      }
    });
  }

  addMarkAsHelpedHandler(): void {
    const helpBtn = ElementGenerator.elementLinks[Elements.BTN_HELP];

    helpBtn.addEventListener('click', () => {
      const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.this.currentLevel}`];
      if (!currentLevelBtn.classList.contains('done')) {
        currentLevelBtn.className = `levels__item helped ${this.this.currentLevel}`;
        this.this.asideState[`LI.${this.this.currentLevel}`] = currentLevelBtn.className;
      }
    });
  }

  addAsideStateHandler(): void {
    window.addEventListener('beforeunload', () => {
      const sereilizedAside = JSON.stringify(this.this.asideState);
      localStorage.setItem('asideState', sereilizedAside);
    });
  }
}
