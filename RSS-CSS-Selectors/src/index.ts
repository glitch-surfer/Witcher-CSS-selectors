// import { EditorState } from '@codemirror/state';
// import { EditorView, keymap } from '@codemirror/view';
// import { defaultKeymap } from '@codemirror/commands';

import { App } from './components/app';

// const startState = EditorState.create({
//   doc: 'Hello World',
//   extensions: [keymap.of(defaultKeymap)],
// });

// const view = new EditorView({
//   state: startState,
//   parent: document.body,
// });

export const app = new App();
app.createView();

// hljs.highlightAll();

// app.addActiveClass();
// const datatest = app.table?.firstElementChild as HTMLElement;
// console.log(datatest?.dataset);
