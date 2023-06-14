import './base.scss';
import { HeaderView } from './header/header-view';
import { LevelView } from './game/levels/level-1';
import { MainView } from './main/main-view';
import { AsideView } from './aside/aside-view';
import { FooterView } from './footer/footer-view';
import type { View } from './util/view';
import type { IApp, Level, LevelParams } from '../types/types';
import { removeElement } from './game/remove-element';

const level: LevelParams = {
  htmlView: `<div class="table">
  <div class="level1"></div>
</div>`,
  tag: 'div',
  className: ['level1'],
};

class App implements IApp {
  header: View;

  level: Level;

  main: View;

  aside: View;

  footer: View;

  table: HTMLElement | null = null;

  htmlViewer: HTMLElement | null = null;

  constructor() {
    this.header = new HeaderView();
    this.level = new LevelView(level);
    this.main = new MainView();
    this.aside = new AsideView();
    this.footer = new FooterView();
    this.startGame();
    App.addKeydownHandler();
  }

  createView(): void {
    document.body.append(this.header.getHtmlElement());
    document.body.append(this.main.getHtmlElement());
    document.body.append(this.aside.getHtmlElement());
    document.body.append(this.footer.getHtmlElement());
  }

  startGame(): void {
    const table = this.header.viewElement.element.lastElementChild;
    if (!(table instanceof HTMLElement)) throw new Error('table not found');

    this.table = table;
    table.append(this.level.getHtmlElement());
    const htmlViewer = this.main.viewElement.getElement()
      .children[0]
      .lastElementChild
      ?.lastElementChild;
    if (!(htmlViewer instanceof HTMLElement)) throw new Error('table not found');

    this.htmlViewer = htmlViewer;
    htmlViewer.append(this.level.htmlView);
  }

  static addKeydownHandler(): void {
    const keydownHandler = (event: KeyboardEvent): void => {
      if (event.code === 'Enter') {
        event.preventDefault();
        removeElement();
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }
}

export { App };
