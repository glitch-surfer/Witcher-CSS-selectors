import { App } from './components/app';

const app = new App();
app.createView();

// if (!(app.footer.viewElement.getElement().firstElementChild?.textContent)) {
//   app.footer.viewElement.getElement().firstElementChild?.textContent = '';
// }

// console.log(app.footer.viewElement.getElement().firstElementChild?.textContent);
export { app };
