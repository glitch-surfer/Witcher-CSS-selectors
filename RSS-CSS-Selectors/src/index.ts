import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import { ElementGenerator } from './components/util/element-generator';
import { Elements } from './types/types';
import { App } from './components/app';
import { addResetHandler } from './components/util/add-reset-handler';

const app = new App();
app.createView();

document.addEventListener('click', addResetHandler);

const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLTextAreaElement;

export const editor = CodeMirror.fromTextArea(input, {
  mode: 'css',
  theme: 'monokai',
  lineWrapping: true,
});
editor.setSize('100%', '100%');
