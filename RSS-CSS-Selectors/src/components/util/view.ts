import { ElementGenerator } from './element-generator';
import type { IParams, IView } from '../../types/types';

abstract class View implements IView {
  viewElement: ElementGenerator;

  constructor(params: IParams) {
    this.viewElement = this.createView(params);
  }

  private createView(params: IParams): ElementGenerator {
    this.viewElement = new ElementGenerator(params);
    return this.viewElement;
  }

  public getHtmlElement(): HTMLElement {
    return this.viewElement.getElement();
  }
}

export { View };
