import { App } from '../app';
import { cleanElement } from './clean-element';
import { StateManager } from './state-manager';

export const addResetHandler = (event: Event): void => {
  if (event.target instanceof HTMLElement && event.target.classList.contains('aside__button_reset')) {
    cleanElement(document.body);
    StateManager.resetState();

    const newApp = new App();
    newApp.createView();
  }
};
