import './base.scss';
import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { level } from './game/levels/level-1';
import type { IApp } from '../types/types';
import { Elements } from '../types/types';
import { parseLevelObjToHtmlViewer, parsedNodeHtml } from './util/parce-level-obj-to-html-viewer';
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
    // App.addToolTips(elementLinks[Elements.TABLE]);
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
      const parsedLevelData = parseLevelObjToHtmlViewer(element);
      htmlViewer.append(parsedLevelData);

      const elementOnTable = new ElementGenerator(element).getElement();
      App.addToolTips(elementOnTable);
      table.append(elementOnTable);
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

  static addToolTips(node: Element): void {
    if (node.children.length !== 0) {
      [...node.children].forEach((elem) => {
        App.addToolTips(elem);
      });
    }
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    if (!(node instanceof HTMLElement)) throw new Error('Element is not HTMLElement');
    const dataId = node.dataset.id;
    if (dataId !== undefined) {
      tooltip.dataset.id = dataId;
      const tooltipContent = parsedNodeHtml
        .find((parsedTextNode) => parsedTextNode.dataset.id === dataId);
      if (tooltipContent !== undefined) tooltip.append(tooltipContent);
    }
    node.append(tooltip);
  }
}
