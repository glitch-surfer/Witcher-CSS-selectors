import { Elements } from '../../types/types';
import type { App } from '../app';
import { levels } from '../game/levels';
import { ModalWindow } from '../modal/modal-window';
import { ElementGenerator } from './element-generator';
import { removeElement } from './remove-element';
import { unshiftCssClass } from './unshift-css-class';
import { wrongAnswerHandler } from './wrong-answer-handler';

export class EventHandler {
  private readonly this: App;

  constructor(obj: App) {
    this.this = obj;
  }

  addKeydownHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const asideBurger = ElementGenerator.elementLinks[Elements.ASIDE_BURGER];

    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter' && !asideBurger.classList.contains('burger-active')) {
        const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.this.currentLevel}`];
        const isRightSelector = removeElement(table, selectorsInput.value);
        ModalWindow.disableButtons();
        selectorsInput.value = '';
        if (isRightSelector) {
          if (!currentLevelBtn.classList.contains('helped')) {
            unshiftCssClass(currentLevelBtn, 'done');
            this.this.asideState[`LI.${this.this.currentLevel}`] = currentLevelBtn.className;
          }
          let modal: ModalWindow | null = new ModalWindow(levels[this.this.currentLevel].modal);
          table.addEventListener('animationend', modal.appendModal.bind(modal));

          const observer = new MutationObserver(() => {
            modal = null;
            this.this.nextLevel();
            observer.disconnect();
          });

          observer.observe(modal.getElement(), { childList: true });
        } else {
          const main = this.this.main.getElement();
          wrongAnswerHandler(main);
        }
        ModalWindow.enableButtons();
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  addClickHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const submitButton = ElementGenerator.elementLinks[Elements.BTN_SUBMIT];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

    submitButton.addEventListener('click', () => {
      const isRightSelector = removeElement(table, selectorsInput.value);
      selectorsInput.value = '';
      if (isRightSelector) {
        const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.this.currentLevel}`];
        if (!currentLevelBtn.classList.contains('helped')) {
          unshiftCssClass(currentLevelBtn, 'done');
          this.this.asideState[`LI.${this.this.currentLevel}`] = currentLevelBtn.className;
        }
        let modal: ModalWindow | null = new ModalWindow(levels[this.this.currentLevel].modal);
        table.addEventListener('animationend', modal.appendModal.bind(modal));

        const observer = new MutationObserver(() => {
          modal = null;
          this.this.nextLevel();
          observer.disconnect();
        });

        observer.observe(modal.getElement(), { childList: true });
      } else {
        const main = this.this.main.getElement();
        wrongAnswerHandler(main);
      }
    });
  }

  addNavButtonsHandler(): void {
    const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const btnNext = ElementGenerator.elementLinks[Elements.BTN_NEXT];
    const btnPrev = ElementGenerator.elementLinks[Elements.BTN_PREV];

    btnNext.addEventListener('click', this.this.nextLevel.bind(this.this));

    btnPrev.addEventListener('click', () => {
      if (this.this.currentLevel > 0) {
        this.this.toggleBtnDataActiveStatus();
        this.this.currentLevel -= 1;
        this.this.startGame(this.this.currentLevel);
        this.this.setState();
        input.value = '';
      }
    });
  }

  addLevelBtnHandler(): void {
    const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const navBurger = ElementGenerator.elementLinks[Elements.NAV_BURGER];

    this.this.aside.getElement().addEventListener('click', (event) => {
      const levelBtn = event.target;
      if (!(levelBtn instanceof HTMLElement)) throw new Error();

      const parent = levelBtn.parentElement;
      if (parent === null || !(parent instanceof HTMLElement)) throw new Error();

      if (parent.classList.contains('nav__item')) {
        this.this.toggleBtnDataActiveStatus();
        const levelBtnIndex = parent.classList[parent.classList.length - 1];
        this.this.currentLevel = Number(levelBtnIndex);
        this.this.startGame(this.this.currentLevel);
        this.this.setState();
        input.value = '';
        navBurger.classList.remove('burger-active');
      }
    });
  }

  addHelpHandler(): void {
    const helpBtn = ElementGenerator.elementLinks[Elements.BTN_HELP];
    // const CHILD_WITH_HELP_PROP = 0;

    const helpHandler = (): void => {
      const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.this.currentLevel}`];
      const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

      helpBtn.removeEventListener('click', helpHandler);

      if (!currentLevelBtn.classList.contains('done')) {
        unshiftCssClass(currentLevelBtn, 'helped');
        this.this.asideState[`LI.${this.this.currentLevel}`] = currentLevelBtn.className;
      }

      input.value = '';
      const text = levels[this.this.currentLevel].help;
      const splittedText = text?.split('');

      if (splittedText === undefined) throw new Error('no help text');
      splittedText.forEach((letter, index) => {
        setTimeout(() => {
          input.value += letter;
        }, 100 * index);
      });

      setTimeout(() => {
        helpBtn.addEventListener('click', helpHandler);
      }, 100 * splittedText.length);
    };

    helpBtn.addEventListener('click', helpHandler);
  }

  addAsideStateHandler(): void {
    window.addEventListener('beforeunload', () => {
      const sereilizedAside = JSON.stringify(this.this.asideState);
      localStorage.setItem('asideState', sereilizedAside);

      if (this.this.isWin) localStorage.setItem('isWin', '1');
      else localStorage.setItem('isWin', '0');
    });
  }

  static addAsideBurgerHandler(): void {
    const asideBurger = ElementGenerator.elementLinks[Elements.ASIDE_BURGER];

    asideBurger.addEventListener('click', () => {
      asideBurger.classList.add('burger-active');

      const overlay = ModalWindow.generateOverlay();
      document.body.append(overlay);
      ModalWindow.disableButtons();

      const observer = new MutationObserver(() => {
        overlay.remove();
        observer.disconnect();
      });
      observer.observe(asideBurger, { attributes: true });

      const removeOverlayHandler = (): void => {
        asideBurger.classList.remove('burger-active');
        overlay.remove();
        ModalWindow.enableButtons();
      };

      overlay.addEventListener('click', removeOverlayHandler);
    });
  }

  static addNavBurgerHandler(): void {
    const navBurger = ElementGenerator.elementLinks[Elements.NAV_BURGER];

    navBurger.addEventListener('click', () => {
      navBurger.classList.toggle('burger-active');
    });
  }

  addInvalidSelectorHandler(): void {
    window.addEventListener('error', (e) => {
      e.preventDefault();
      wrongAnswerHandler(this.this.main.getElement());
    });
  }
}
