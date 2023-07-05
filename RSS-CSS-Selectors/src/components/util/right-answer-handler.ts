import { Elements } from '../../enums/elements';
import { levels } from '../game/levels';
import { ModalWindow } from '../modal/modal-window';
import { CssEditor } from './css-editor';
import { ElementGenerator } from './element-generator';
import type { GameController } from './game-controller';
import { removeElement } from './remove-element';
import type { StateManager } from './state-manager';
import { unshiftCssClass } from './unshift-css-class';
import { wrongAnswerHandler } from './wrong-answer-handler';

export const rigthAnswerHandler = (
  state: StateManager,
  gameConttoller: GameController,
  main: HTMLElement,
): void => {
  const table = ElementGenerator.elementLinks[Elements.TABLE];
  const gameState = state;
  const editor = CssEditor.getInstance();

  const isRightSelector = removeElement(table, editor.getValue());
  ModalWindow.disableButtons();
  editor.setValue('');
  if (isRightSelector) {
    const currentLevelBtn = ElementGenerator.elementLinks[`LI.${state.currentLevel}`];
    if (!currentLevelBtn.classList.contains('helped')) {
      unshiftCssClass(currentLevelBtn, 'done');
      gameState.asideState[`LI.${state.currentLevel}`] = currentLevelBtn.className;
    }
    let modal: ModalWindow | null = new ModalWindow(
      levels[state.currentLevel].modal,
    );
    table.addEventListener('animationend', modal.appendModal.bind(modal));

    const observer = new MutationObserver(() => {
      modal = null;
      gameConttoller.nextLevel();
      observer.disconnect();
    });

    observer.observe(modal.getElement(), { childList: true });
  } else {
    wrongAnswerHandler(main);
  }
  ModalWindow.enableButtons();
};
