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

export interface IView {
  getHtmlElement: () => HTMLElement
}

export interface ILevelParams {
  id: number
  task: string
  story: string
  help: string
  modal: IParams
  layout: IParams[]
}

export interface IModalWindow {
  modal?: HTMLElement
  appendModal: () => void
  getElement: () => HTMLElement | null
}

export enum Elements {
  TABLE = 'DIV.header__table',
  HTML_VIEWER = 'DIV.html-viewer__content',
  INPUT = 'INPUT.editor__input',
  BTN_SUBMIT = 'BUTTON.editor__button',
  STORY = 'P.story__text',
  BTN_NEXT = 'BUTTON.nav__button_next',
  BTN_PREV = 'BUTTON.nav__button_prev',
  BTN_HELP = 'BUTTON.aside__button_help',
  BTN_RESET = 'BUTTON.aside__button_reset',
  NAV_TITLE = 'H3.nav__title',
  NAV_BURGER = 'DIV.nav__burger',
  ASIDE_BURGER = 'DIV.aside-burger',
  HAND = 'DIV.header__hand-img',
  TASK = 'P.header__task',
}
