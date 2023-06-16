import './base.scss';
import { headerParams } from './header/header-view';
import { mainParams } from './main/main-view';
import { asideParams } from './aside/aside-view';
import { footerParams } from './footer/footer-view';
import { level } from './game/levels/level-1';
import type { IApp } from '../types/types';
import { parseLevelObjToHtmlViewer } from './util/parce-level-obj-to-html-viewer';
import { addHighlightedTag } from './util/add-highlighted-tag';
import { ElementGenerator } from './util/element-generator';

export class App implements IApp {
  header: ElementGenerator;

  level: ElementGenerator;

  main: ElementGenerator;

  aside: ElementGenerator;

  footer: ElementGenerator;

  table: HTMLElement | null = null;

  htmlViewer: HTMLElement | null = null;

  selectorsInput: HTMLInputElement | null = null;

  submitButton: HTMLButtonElement | null = null;

  constructor() {
    this.header = new ElementGenerator(headerParams);
    this.level = new ElementGenerator(level);
    this.main = new ElementGenerator(mainParams);
    this.aside = new ElementGenerator(asideParams);
    this.footer = new ElementGenerator(footerParams);
    this.startGame();
    this.addKeydownHandler();
    this.addClickHandler();
  }

  createView(): void {
    document.body.append(this.header.getElement());
    document.body.append(this.main.getElement());
    document.body.append(this.aside.getElement());
    document.body.append(this.footer.getElement());
  }

  private startGame(): void {
    const table = this.header.getElement().lastElementChild;
    if (!(table instanceof HTMLElement)) throw new Error('table not found');
    this.table = table;

    table.append(this.level.getElement());
    console.log(this.level.getElement());

    const htmlViewer = this.main.getElement()
      .firstElementChild
      ?.lastElementChild
      ?.lastElementChild;
    if (!(htmlViewer instanceof HTMLElement)) throw new Error('table not found');
    this.htmlViewer = htmlViewer;

    htmlViewer.append(parseLevelObjToHtmlViewer(level));
    addHighlightedTag(this.htmlViewer, 'table');
  }

  static removeElement(area: HTMLElement, selector: string): void {
    if (selector !== '') {
      area.querySelectorAll(selector)?.forEach((element) => {
        element.remove();
      });
    }
  }

  private addKeydownHandler(): void {
    const selectorsInput = this.main.getElement()
      .firstElementChild
      ?.firstElementChild
      ?.children[2] as HTMLInputElement;
    this.selectorsInput = selectorsInput;
    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        if (this.table === null) throw new Error('table not found');
        App.removeElement(this.table, selectorsInput.value);
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  private addClickHandler(): void {
    const submitButton = this.main.getElement()
      .firstElementChild
      ?.firstElementChild
      ?.lastElementChild;
    if (!(submitButton instanceof HTMLButtonElement)) throw new Error('table not found');
    this.submitButton = submitButton;
    submitButton.addEventListener('click', () => {
      if (this.table === null || this.selectorsInput === null) throw new Error('table not found');
      App.removeElement(this.table, this.selectorsInput.value);
    });
  }
}
