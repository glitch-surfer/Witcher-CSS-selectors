import { Elements } from '../../types/types';
import { ElementGenerator } from '../util/element-generator';
import { GameController } from '../util/game-controller';
import { rigthAnswerHandler } from '../util/right-answer-handler';
import { StateManager } from '../util/state-manager';
import { wrongAnswerHandler } from '../util/wrong-answer-handler';
import { mainParams } from './main-view';

export class Main {
  constructor(
    readonly stateManager = StateManager.getInstance(),
    readonly gameConttoller = new GameController(),
    readonly element = new ElementGenerator(mainParams).getElement(),
  ) {
    this.addKeydownHandler();
    this.addClickHandler();
    this.addInvalidSelectorHandler();
  }

  addKeydownHandler(): void {
    const asideBurger = ElementGenerator.elementLinks[Elements.ASIDE_BURGER];

    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter' && !asideBurger.classList.contains('burger-active')) {
        rigthAnswerHandler(this.stateManager, this.gameConttoller, this.element);
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  addClickHandler(): void {
    const submitButton = ElementGenerator.elementLinks[Elements.BTN_SUBMIT];

    submitButton.addEventListener('click', () => {
      rigthAnswerHandler(this.stateManager, this.gameConttoller, this.element);
    });
  }

  addInvalidSelectorHandler(): void {
    window.addEventListener('error', (e) => {
      e.preventDefault();
      wrongAnswerHandler(this.element);
    });
  }
}
