import { App } from './components/app';
import { addResetHandler } from './components/util/add-reset-handler';

const app = new App();
app.createView();

document.addEventListener('click', addResetHandler);
