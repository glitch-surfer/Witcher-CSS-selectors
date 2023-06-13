import type { IParams, IElementGenerator } from '../../types/types';

class ElementGenerator implements IElementGenerator {
  element: HTMLElement;

  constructor(params: IParams) {
    this.element = this.createElement(params.tag);
    if (params.className !== undefined) this.setStyles(params.className);
    if (params.attributes !== undefined) this.setAttributes(params.attributes);
    if (params.text !== undefined) this.setText(params.text);
    if (params.callback !== undefined) this.setCallback(params.callback);
    if (params.children !== undefined) this.addChild(params.children);
  }

  createElement(tag: string): HTMLElement {
    this.element = document.createElement(tag);
    return this.element;
  }

  setStyles(className: string[]): void {
    this.element?.classList.add(...className);
  }

  setAttributes(attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });
  }

  setText(text: string): void {
    this.element.textContent = text;
  }

  setCallback(callback: () => void): void {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', callback);
    }
  }

  addChild(children: IParams[]): void {
    children.forEach((child) => {
      this.element.append(new ElementGenerator(child).getElement());
    });
  }

  getElement(): HTMLElement {
    return this.element;
  }
}

export { ElementGenerator };
