import { App } from '../app';
import { cleanElement } from './clean-element';
import { CssEditor } from './css-editor';
import { StateManager } from './state-manager';

export const addResetHandler = (event: Event): void => {
  if (event.target instanceof HTMLElement && event.target.classList.contains('aside__button_reset')) {
    cleanElement(document.body);
    const stateManager = StateManager.getInstance();
    stateManager.resetState();
    CssEditor.resetEditor();

    const newApp = new App();
    newApp.createView();
  }
};
