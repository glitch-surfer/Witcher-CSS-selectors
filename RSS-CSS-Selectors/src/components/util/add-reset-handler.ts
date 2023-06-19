import { App } from '../app';

export const addResetHandler = (event: Event): void => {
  if (event.target instanceof HTMLElement && event.target.classList.contains('levels__button_reset')) {
    localStorage.clear();
    while (document.body.firstChild !== null) {
      document.body.firstChild.remove();
    }
    const newApp = new App();
    newApp.createView();
  }
};
