import './base.scss';
import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { level } from './game/levels/level-1';
import type { IApp } from '../types/types';
import { Elements } from '../types/types';
import { parseLevelObjToHtmlViewer } from './util/parce-level-obj-to-html-viewer';
import { addHighlightedTag } from './util/add-highlighted-tag';
import { ElementGenerator, elementLinks } from './util/element-generator';

export class App implements IApp {
  header: ElementGenerator;

  // level: ElementGenerator | null = null;

  main: ElementGenerator;

  aside: ElementGenerator;

  footer: ElementGenerator;

  constructor() {
    this.header = new ElementGenerator(headerParams);
    this.main = new ElementGenerator(mainParams);
    this.aside = new ElementGenerator(asideParams);
    this.footer = new ElementGenerator(footerParams);
    App.startGame();
    App.addKeydownHandler();
    App.addClickHandler();
  }

  createView(): void {
    document.body.append(this.header.getElement());
    document.body.append(this.main.getElement());
    document.body.append(this.aside.getElement());
    document.body.append(this.footer.getElement());
  }

  static startGame(): void {
    const table = elementLinks[Elements.TABLE];
    const htmlViewer = elementLinks[Elements.HTML_VIEWER];

    level.forEach((element) => {
      table.append(new ElementGenerator(element).getElement());
      htmlViewer.append(parseLevelObjToHtmlViewer(element));
    });

    addHighlightedTag(htmlViewer, 'table');
  }

  static removeElement(area: HTMLElement, selector: string): void {
    if (selector !== '') {
      area.querySelectorAll(selector)?.forEach((element) => {
        element.remove();
      });
    }
  }

  static addKeydownHandler(): void {
    const table = elementLinks[Elements.TABLE];
    const selectorsInput = elementLinks[Elements.INPUT] as HTMLInputElement;
    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        App.removeElement(table, selectorsInput.value);
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  static addClickHandler(): void {
    const table = elementLinks[Elements.TABLE];
    const submitButton = elementLinks[Elements.BUTTON];
    const selectorsInput = elementLinks[Elements.INPUT] as HTMLInputElement;

    submitButton.addEventListener('click', () => {
      App.removeElement(table, selectorsInput.value);
    });
  }
}
