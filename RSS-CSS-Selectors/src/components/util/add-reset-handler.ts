import { App } from '../app';
import { cleanElement } from './clean-element';

export const addResetHandler = (event: Event): void => {
  if (event.target instanceof HTMLElement && event.target.classList.contains('aside__button_reset')) {
    localStorage.clear();
    cleanElement(document.body);

    const newApp = new App();
    newApp.createView();
  }
};
