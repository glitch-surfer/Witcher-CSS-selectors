import type { IParams, IElementGenerator } from '../../types/types';

class ElementGenerator implements IElementGenerator {
  element: HTMLElement;

  constructor(params: IParams) {
    this.element = this.createElement(params.tag);
    if (params.className !== undefined) this.setStyles(params.className);
    if (params.text !== undefined) this.setText(params.text);
    if (params.callback !== undefined) this.setCallback(params.callback);
  }

  createElement(tag: string): HTMLElement {
    this.element = document.createElement(tag);
    return this.element;
  }

  setStyles(className: string[]): void {
    if (className !== undefined) {
      this.element?.classList.add(...className);
    }
  }

  setText(text: string): void {
    if (text !== undefined
      && this.element !== null) {
      this.element.textContent = text;
    }
  }

  setCallback(callback: () => void): void {
    if (callback !== undefined
      && this.element !== null) {
      this.element.addEventListener('click', callback);
    }
  }

  getElement(): HTMLElement {
    return this.element;
  }
}

export { ElementGenerator };
