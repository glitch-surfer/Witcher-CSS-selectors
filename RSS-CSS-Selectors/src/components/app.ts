import { headerParams } from './header/header-view';
import { footerParams } from './footer/footer-view';
import { ElementGenerator } from './util/element-generator';
import './styles/base.scss';
import { StateManager } from './util/state-manager';
import { GameController } from './util/game-controller';
import { Aside } from './aside/aside';
import { Main } from './main/main';
import type { IApp } from '../types/types';

export class App implements IApp {
  private readonly stateManager = StateManager.getInstance();

  private readonly gameConttoller = new GameController();

  constructor(
    private readonly header = new ElementGenerator(headerParams).getElement(),
    private readonly main = new Main().element,
    private readonly footer = new ElementGenerator(footerParams).getElement(),
    private readonly aside = new Aside().element,
  ) {
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
