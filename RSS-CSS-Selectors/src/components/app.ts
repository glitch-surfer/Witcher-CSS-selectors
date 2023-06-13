import { HeaderView } from './header/header-view';
import { LevelView } from './game/levels/level-1';
import { MainView } from './main/main-view';
import { AsideView } from './aside/aside-view';
import { FooterView } from './footer/footer-view';
import type { View } from './util/view';
import type { IParams } from '../types/types';

const level: IParams = {
  tag: 'div',
  className: ['level1'],
};

class App {
  header: View;

  level: View;

  main: View;

  aside: View;

  footer: View;

  constructor() {
    this.header = new HeaderView();
    this.level = new LevelView(level);
    this.main = new MainView();
    this.aside = new AsideView();
    this.footer = new FooterView();
    this.startGame();
  }

  createView(): void {
    document.body.append(this.header.getHtmlElement());
    document.body.append(this.main.getHtmlElement());
    document.body.append(this.aside.getHtmlElement());
    document.body.append(this.footer.getHtmlElement());
  }

  startGame(): void {
    // console.log(this.header.viewElement.element.lastElementChild);
    this.header.viewElement.element.lastElementChild?.append(this.level.getHtmlElement());
  }
}

export { App };
