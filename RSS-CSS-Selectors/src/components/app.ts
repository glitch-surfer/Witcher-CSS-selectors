import './base.scss';
import { HeaderView } from './header/header-view';
import { LevelView } from './game/levels/level-1';
import { MainView } from './main/main-view';
import { AsideView } from './aside/aside-view';
import { FooterView } from './footer/footer-view';
import type { View } from './util/view';
import type { IApp, Level, LevelParams } from '../types/types';

const level: LevelParams = {
  id: `<div class="header__table">
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
    const table = this.header.viewElement.element.lastElementChild;
    table?.append(this.level.getHtmlElement());
    // const levelContent = table?.outerHTML;
    // const normalizedContent = levelContent?.toString().replace(/></g, '>.<').split('.');
    // console.log(normalizedContent);
    const htmlViewer = this.main.viewElement.getElement()
      .children[0]
      .lastElementChild
      ?.lastElementChild
      ?.firstChild;
    // if (htmlViewer !== null
    //   && htmlViewer !== undefined
    //   && normalizedContent !== undefined) {
    //   normalizedContent.forEach((el) => {
    //     (htmlViewer as HTMLElement).append(el);
    //   });
    // }
    (htmlViewer as HTMLElement).append(this.level.id);
  }
}

export { App };
