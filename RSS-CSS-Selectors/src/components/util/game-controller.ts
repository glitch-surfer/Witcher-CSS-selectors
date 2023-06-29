import { Elements } from '../../types/types';
import type { IGameController } from '../../types/types';
import { levels } from '../game/levels';
import { winModalParams } from '../modal/modal-view';
import { ModalWindow } from '../modal/modal-window';
import { addHighlightedTag } from './add-highlighted-tag';
import { buildLevel } from './build-level';
import { cleanElement } from './clean-element';
import { ElementGenerator } from './element-generator';
import { generateNotCompletedLevelsModalParams } from './generate-not-completed-levels-modal-params';
import { getNotCompletedLevelsList } from './get-not-completed-levels-list';
import { parsedNodeHtml } from './parce-level-obj-to-html-viewer';
import { StateManager } from './state-manager';

export class GameController implements IGameController {
  constructor(readonly stateManager = StateManager.getInstance()) { }

  public startGame(levelNumber: number = 0): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const htmlViewer = ElementGenerator.elementLinks[Elements.HTML_VIEWER];
    const story = ElementGenerator.elementLinks[Elements.STORY];

    cleanElement(table, htmlViewer, story);
    parsedNodeHtml.length = 0;

    buildLevel(levelNumber);

    addHighlightedTag(htmlViewer, 'table');

    this.toggleBtnDataActiveStatus();

    StateManager.setAsideState();
  }

  public nextLevel(): void {
    const notCompletedLevels = getNotCompletedLevelsList(levels);
    const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

    if (this.stateManager.currentLevel < levels.length - 1) {
      if (notCompletedLevels.length === 0 && !this.stateManager.isWin) {
        const modal: ModalWindow | null = new ModalWindow(winModalParams);
        modal.appendModal();
        this.stateManager.isWin = true;
        return;
      }

      this.toggleBtnDataActiveStatus();
      this.stateManager.currentLevel += 1;
      this.startGame(this.stateManager.currentLevel);
      this.stateManager.setState();

      input.value = '';
    } else if (this.stateManager.currentLevel === levels.length - 1) {
      if (notCompletedLevels.length === 0 && !this.stateManager.isWin) {
        const modal: ModalWindow | null = new ModalWindow(winModalParams);
        modal.appendModal();
        this.stateManager.isWin = true;
      } else if (notCompletedLevels.length > 0) {
        const notCompletedModalParams = generateNotCompletedLevelsModalParams(notCompletedLevels);
        const modal: ModalWindow | null = new ModalWindow(notCompletedModalParams);
        modal.appendModal();

        modal.getElement().addEventListener('click', (event: MouseEvent): void => {
          const level = event.target;
          if (level instanceof HTMLElement && level.classList.contains('nav__item')) {
            this.toggleBtnDataActiveStatus();
            this.stateManager.currentLevel = Number(level.dataset.level);
            this.startGame(this.stateManager.currentLevel);
            this.stateManager.setState();
            input.value = '';
            modal.getElement().remove();
            ModalWindow.enableButtons();
          }
        });
      }
    }
  }

  public toggleBtnDataActiveStatus(): void {
    const currentLevelBtn = ElementGenerator.elementLinks[`LI.${this.stateManager.currentLevel}`];
    if (currentLevelBtn.getAttribute('data-active') === null) {
      currentLevelBtn.setAttribute('data-active', 'active');
    } else {
      currentLevelBtn.removeAttribute('data-active');
    }
  }
}
