import { headerParams } from './header/header-view';
import { footerParams } from './footer/footer-view';
import { ElementGenerator } from './util/element-generator';
import './styles/base.scss';
import { StateManager } from './util/state-manager';
import { GameController } from './util/game-controller';
import { Aside } from './aside/aside';
import { Main } from './main/main';

export class App {
  readonly header: HTMLElement;

  readonly main: HTMLElement;

  readonly aside: HTMLElement;

  readonly footer: HTMLElement;

  readonly stateManager = StateManager.getInstance();

  readonly gameConttoller = new GameController();

  constructor() {
    this.gameConttoller = new GameController();
    this.header = new ElementGenerator(headerParams).getElement();
    this.main = new Main().element;
    this.footer = new ElementGenerator(footerParams).getElement();
    this.aside = new Aside().element;
    this.stateManager.getState();
    this.gameConttoller.startGame(this.stateManager.currentLevel);
  }

  public createView(): void {
    document.body.append(this.header);
    document.body.append(this.main);
    document.body.append(this.aside);
    document.body.append(this.footer);
  }
}
