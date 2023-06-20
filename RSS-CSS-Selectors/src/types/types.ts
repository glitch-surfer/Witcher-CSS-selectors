export interface IParams {
  tag: string
  className?: string[]
  attributes?: Record<string, string>
  id?: string
  text?: string
  children?: IParams[]
  link?: boolean
}

export interface ILevelParams extends IParams {
  story?: string
  help?: string
}

export interface IElementGenerator {
  element: HTMLElement
  getElement: () => HTMLElement
}

export interface IView {
  getHtmlElement: () => HTMLElement
}

export type LevelParams = Array<Array<IParams & { story?: string }>>;

export enum Elements {
  TABLE = 'DIV.header__table',
  HTML_VIEWER = 'DIV.html-viewer__content',
  INPUT = 'INPUT.editor__input',
  BUTTON = 'BUTTON.editor__button',
  STORY = 'P.story__text',
  BTN_NEXT = 'BUTTON.aside__button_next',
  BTN_PREV = 'BUTTON.aside__button_prev',
  BTN_HELP = 'BUTTON.aside__button_help',
  BTN_RESET = 'BUTTON.aside__button_reset',
  NAV_TITLE = 'H3.nav__title',
  BURGER = 'DIV.burger',
}
