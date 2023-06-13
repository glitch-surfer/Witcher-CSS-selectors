interface IParams {
  tag: string
  className?: string[]
  attributes?: Record<string, string>
  text?: string
  callback?: () => void
  children?: IParams[]
}

interface IElementGenerator {
  element: HTMLElement
  createElement: (tag: string) => HTMLElement
  setStyles: (className: string[]) => void
  setAttributes: (attributes: Record<string, string>) => void
  setText: (text: string) => void
  setCallback: (callback: () => void) => void
  addChild: (children: IParams[]) => void
  getElement: () => HTMLElement
}

interface IView {
  getHtmlElement: () => HTMLElement
}

export type {
  IParams,
  IElementGenerator,
  IView,
};
