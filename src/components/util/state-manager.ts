import type { IStateManager } from '../../types/types';
import { ElementGenerator } from './element-generator';

export class StateManager implements IStateManager {
  private static instance: StateManager | null = null;

  public currentLevel: number;

  public asideState: Record<string, string>;

  public isWin: boolean;

  private constructor() {
    this.currentLevel = 0;
    this.asideState = StateManager.getAsideState();
    this.isWin = Boolean(Number(localStorage.getItem('isWin')));
  }

  public static getInstance(): StateManager {
    if (StateManager.instance === null) {
      StateManager.instance = new StateManager();
    }

    return StateManager.instance;
  }

  public setState(): void {
    localStorage.setItem('currentLevel', this.currentLevel.toString());
  }

  public getState(): void {
    const currentLevel = localStorage.getItem('currentLevel');
    this.currentLevel = Number(currentLevel);
  }

  public static setAsideState(): void {
    const asideStateJson = localStorage.getItem('asideState');
    if (asideStateJson !== null) {
      const asideState = JSON.parse(asideStateJson);
      Object.entries(asideState).forEach(([selector, stateClass]) => {
        const levelBtn = ElementGenerator.elementLinks[selector];
        levelBtn.className = stateClass as string;
      });
    }
  }

  public static getAsideState(): Record<string, string> {
    const asideState = localStorage.getItem('asideState');
    if (asideState !== null) {
      return JSON.parse(asideState);
    }
    return {};
  }

  public resetState(): void {
    localStorage.clear();
    this.currentLevel = 0;
    this.asideState = StateManager.getAsideState();
    this.isWin = Boolean(Number(localStorage.getItem('isWin')));
  }
}
