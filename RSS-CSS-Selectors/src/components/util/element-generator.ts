import type { IParams, IElementGenerator } from '../../types/types';

export class ElementGenerator implements IElementGenerator {
  element: HTMLElement;

  static elementLinks: Record<string, HTMLElement> = {};

  constructor(params: IParams) {
    this.element = this.createElement(params.tag);
    if (params.className !== undefined) this.setStyles(params.className);
    if (params.attributes !== undefined) this.setAttributes(params.attributes);
    if (params.text !== undefined) this.setText(params.text);
    if (params.children !== undefined) this.addChild(params.children);
    if (params.link !== undefined) this.setElementLink();
  }

  private createElement(tag: string): HTMLElement {
    this.element = document.createElement(tag);
    return this.element;
  }

  private setStyles(className: string[]): void {
    this.element?.classList.add(...className);
  }

  private setAttributes(attributes: Record<string, string>): void {
    Object.entries(attributes).forEach(([key, value]) => {
      this.element.setAttribute(key, value);
    });
  }

  private setText(text: string): void {
    this.element.textContent = text;
  }

  private addChild(children: IParams[]): void {
    children.forEach((child) => {
      const childElement = new ElementGenerator(child).getElement();
      this.element.append(childElement);
    });
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  private setElementLink(): void {
    ElementGenerator.elementLinks[`${this.element.tagName}.${this.element.classList[this.element.classList.length - 1]}`] = this.element;
  }
}
