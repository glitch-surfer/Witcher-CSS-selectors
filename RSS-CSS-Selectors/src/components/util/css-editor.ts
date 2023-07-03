/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import { ElementGenerator } from './element-generator';
import { Elements } from '../../types/types';

export class CssEditor {
  private static instance: CodeMirror.Editor | null = null;

  private constructor() {}

  public static getInstance(): CodeMirror.Editor {
    if (CssEditor.instance === null) {
      const input = ElementGenerator.elementLinks[Elements.INPUT] as HTMLTextAreaElement;
      CssEditor.instance = CodeMirror.fromTextArea(input, {
        mode: 'css',
        theme: 'monokai',
        lineWrapping: true,
      });
      CssEditor.instance.setSize('100%', '100%');
    }

    return CssEditor.instance;
  }

  public static resetEditor(): void {
    CssEditor.instance = null;
  }
}
