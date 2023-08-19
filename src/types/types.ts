export interface IParams {
  tag: string
  className?: string[]
  attributes?: Record<string, string>
  id?: string
  text?: string
  children?: IParams[]
  link?: boolean
}

export interface IElementGenerator {
  element: HTMLElement
  getElement: () => HTMLElement
}

export interface IApp {
  createView: () => void
}

export interface IGameController {
  startGame: (levelNumber: number) => void
  nextLevel: () => void
  toggleBtnDataActiveStatus: () => void
}

export interface IStateManager {
  currentLevel: number
  isWin: boolean
  asideState: Record<string, string>
  setState: () => void
  getState: () => void
}

export interface IComponent {
  element: HTMLElement
}

export interface ILevelParams {
  id: number
  task: string
  story: string
  help: string
  modal: IParams
  asideTitle: string
  asideContent: string
  layout: IParams[]
}

export interface IModalWindow {
  modal?: HTMLElement
  appendModal: () => void
  getElement: () => HTMLElement | null
}
