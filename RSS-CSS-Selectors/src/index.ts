import { App } from './components/app';

const app = new App();
app.createView();

const addResetHandler = (event: Event): void => {
  if (event.target instanceof HTMLElement && event.target.classList.contains('levels__button_reset')) {
    localStorage.clear();
    while (document.body.firstChild !== null) {
      document.body.firstChild.remove();
    }
    const newApp = new App();
    newApp.createView();
  }
};
document.addEventListener('click', addResetHandler);
