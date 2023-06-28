import { Elements } from '../../types/types';
import type { IComponent } from '../../types/types';
import { levels } from '../game/levels';
import { ModalWindow } from '../modal/modal-window';
import { ElementGenerator } from '../util/element-generator';
import { GameController } from '../util/game-controller';
import { StateManager } from '../util/state-manager';
import { unshiftCssClass } from '../util/unshift-css-class';
import { asideParams } from './aside-view';

export class Aside implements IComponent {
  constructor(
    public readonly element = new ElementGenerator(asideParams).getElement(),
    private readonly stateManager = StateManager.getInstance(),
    private readonly gameController = new GameController(),
  ) {
    this.addNavButtonsHandler();
    this.addHelpHandler();
    this.addAsideStateHandler();
    this.addLevelBtnHandler();
    Aside.addNavBurgerHandler();
    Aside.addAsideBurgerHandler();
  }

  private addNavButtonsHandler(): void {
    const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const btnNext = ElementGenerator.elementLinks[Elements.BTN_NEXT];
    const btnPrev = ElementGenerator.elementLinks[Elements.BTN_PREV];

    btnNext.addEventListener('click', this.gameController.nextLevel.bind(this.gameController));

    btnPrev.addEventListener('click', () => {
      if (this.stateManager.currentLevel > 0) {
        this.gameController.toggleBtnDataActiveStatus();
        this.stateManager.currentLevel -= 1;
        this.gameController.startGame(this.stateManager.currentLevel);
        this.stateManager.setState();
        input.value = '';
      }
    });
  }

  private addLevelBtnHandler(): void {
    const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const navBurger = ElementGenerator.elementLinks[Elements.NAV_BURGER];

    const levelHandler = (event: MouseEvent): void => {
      const levelBtn = event.target;
      if (!(levelBtn instanceof HTMLElement)) throw new Error();

      const parent = levelBtn.parentElement;
      if (parent === null || !(parent instanceof HTMLElement)) throw new Error();

      if (parent.classList.contains('nav__item')) {
        this.gameController.toggleBtnDataActiveStatus();
        const levelBtnIndex = parent.classList[parent.classList.length - 1];
        this.stateManager.currentLevel = Number(levelBtnIndex);
        this.gameController.startGame(this.stateManager.currentLevel);
        this.stateManager.setState();
        input.value = '';
        navBurger.classList.remove('burger-active');
      }
    };

    this.element.addEventListener('click', levelHandler.bind(this));
  }

  private addHelpHandler(): void {
    const helpBtn = ElementGenerator.elementLinks[Elements.BTN_HELP];

    const helpHandler = (): void => {
      const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.stateManager.currentLevel}`];
      const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

      helpBtn.removeEventListener('click', helpHandler);

      if (!currentLevelBtn.classList.contains('done')) {
        unshiftCssClass(currentLevelBtn, 'helped');
        this.stateManager.asideState[`LI.${this.stateManager.currentLevel}`] = currentLevelBtn.className;
      }

      input.value = '';
      const text = levels[this.stateManager.currentLevel].help;
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

  private addAsideStateHandler(): void {
    window.addEventListener('beforeunload', () => {
      const sereilizedAside = JSON.stringify(this.stateManager.asideState);
      localStorage.setItem('asideState', sereilizedAside);

      if (this.stateManager.isWin) localStorage.setItem('isWin', '1');
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
}
