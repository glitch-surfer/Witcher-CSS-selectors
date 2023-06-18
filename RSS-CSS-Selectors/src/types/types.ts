export interface IParams {
  tag: string
  className?: string[]
  attributes?: Record<string, string>
  id?: string
  text?: string
  callback?: () => void
  children?: IParams[]
  link?: boolean
  story?: string
}

export interface IElementGenerator {
  element: HTMLElement
  getElement: () => HTMLElement
}

export interface IView {
  getHtmlElement: () => HTMLElement
}

export type LevelParams = Array<Array<IParams & { story?: string }>>;

export interface IApp {
  header: IElementGenerator
  // level: IElementGenerator
  main: IElementGenerator
  aside: IElementGenerator
  footer: IElementGenerator
  currentLevel: number
}

export enum Elements {
  TABLE = 'DIV.header__table',
  HTML_VIEWER = 'DIV.html-viewer__content',
  INPUT = 'INPUT.editor__input',
  BUTTON = 'BUTTON.editor__button',
  STORY = 'P.story__text',
  BTN_NEXT = 'BUTTON.levels__button_next',
  BTN_PREV = 'BUTTON.levels__button_prev',
  BTN_HELP = 'BUTTON.levels__button_help',
  LEVEL_BTN_0 = 'LI.0',
  LEVEL_BTN_1 = 'LI.1',
  LEVEL_BTN_2 = 'LI.2',
  LEVEL_BTN_3 = 'LI.3',
}
