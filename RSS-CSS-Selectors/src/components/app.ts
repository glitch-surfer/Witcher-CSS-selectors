import './base.scss';
import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { levels } from './game/levels/level-1';
import type { IApp } from '../types/types';
import { Elements } from '../types/types';
import { parseLevelObjToHtmlViewer } from './util/parce-level-obj-to-html-viewer';
import { addToolTips } from './util/add-tooltip';
import { addHighlightedTag } from './util/add-highlighted-tag';
import { ElementGenerator } from './util/element-generator';
import { removeElement } from './util/remove-element';

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
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const htmlViewer = ElementGenerator.elementLinks[Elements.HTML_VIEWER];

    levels[1].forEach((element) => {
      const parsedLevelData = parseLevelObjToHtmlViewer(element);
      htmlViewer.append(parsedLevelData);

      const elementOnTable = new ElementGenerator(element).getElement();
      addToolTips(elementOnTable);
      table.append(elementOnTable);
    });
    addHighlightedTag(htmlViewer, 'table');
  }

  static addKeydownHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;
    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        removeElement(table, selectorsInput.value);
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  static addClickHandler(): void {
    const table = ElementGenerator.elementLinks[Elements.TABLE];
    const submitButton = ElementGenerator.elementLinks[Elements.BUTTON];
    const selectorsInput = ElementGenerator.elementLinks[Elements.INPUT] as HTMLInputElement;

    submitButton.addEventListener('click', () => {
      removeElement(table, selectorsInput.value);
    });
  }
}
