import './base.scss';
import { HeaderView } from './header/header-view';
import { LevelView } from './game/levels/level-1';
import { MainView } from './main/main-view';
import { AsideView } from './aside/aside-view';
import { FooterView } from './footer/footer-view';
import type { View } from './util/view';
import type {
  IApp, Level, LevelParams,
} from '../types/types';
import { parseLevelObjToHtmlViewer } from './util/parce-level-obj-to-html-viewer';
import { addHightlightedTag } from './util/add-highlighted-tag';

const level: LevelParams = {
  htmlView: 'table.html',
  tag: 'plate',
  className: ['level1'],
  attributes: {
    'data-id': '1',
  },
  children: [
    {
      tag: 'bento',
      className: ['level1_1'],
      attributes: {
        'data-id': '2',
      },
      children: [
        {
          tag: 'sword',
          className: ['level1_2'],
          attributes: {
            'data-id': '3',
          },
        },
      ],
    },
  ],
};

export class App implements IApp {
  header: View;

  level: Level;

  main: View;

  aside: View;

  footer: View;

  table: HTMLElement | null = null;

  htmlViewer: HTMLElement | null = null;

  selectorsInput: HTMLInputElement | null = null;

  submitButton: HTMLButtonElement | null = null;

  constructor() {
    this.header = new HeaderView();
    this.level = new LevelView(level);
    this.main = new MainView();
    this.aside = new AsideView();
    this.footer = new FooterView();
    this.startGame();
    this.addKeydownHandler();
    this.addClickHandler();
  }

  createView(): void {
    document.body.append(this.header.getHtmlElement());
    document.body.append(this.main.getHtmlElement());
    document.body.append(this.aside.getHtmlElement());
    document.body.append(this.footer.getHtmlElement());
  }

  private startGame(): void {
    const table = this.header.viewElement.element.lastElementChild;
    if (!(table instanceof HTMLElement)) throw new Error('table not found');
    this.table = table;

    table.append(this.level.getHtmlElement());

    const htmlViewer = this.main.viewElement.getElement()
      .firstElementChild
      ?.lastElementChild
      ?.lastElementChild;
    if (!(htmlViewer instanceof HTMLElement)) throw new Error('table not found');
    this.htmlViewer = htmlViewer;

    htmlViewer.append(parseLevelObjToHtmlViewer(level));
    addHightlightedTag(this.htmlViewer, 'table');
  }

  static removeElement(area: HTMLElement, selector: string): void {
    if (selector !== '') {
      area.querySelectorAll(selector)?.forEach((element) => {
        element.remove();
      });
    }
  }

  private addKeydownHandler(): void {
    const selectorsInput = this.main.getHtmlElement()
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
    const submitButton = this.main.getHtmlElement()
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
