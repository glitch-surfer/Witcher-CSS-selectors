interface IParams {
  tag: string
  className?: string[]
  attributes?: Record<string, string>
  id?: string
  text?: string
  callback?: () => void
  children?: IParams[]
  link?: boolean
}

interface IElementGenerator {
  element: HTMLElement
  getElement: () => HTMLElement
}

interface IView {
  getHtmlElement: () => HTMLElement
}

type Level = IView & {
  htmlView: string
};

type LevelParams = IParams & {
  htmlView: string
};

interface IApp {
  header: IElementGenerator
  level: IElementGenerator
  main: IElementGenerator
  aside: IElementGenerator
  footer: IElementGenerator
}

export type {
  IParams,
  IElementGenerator,
  IView,
  IApp,
  Level,
  LevelParams,
};
