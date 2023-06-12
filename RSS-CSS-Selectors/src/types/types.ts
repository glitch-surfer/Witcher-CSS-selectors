interface IParams {
  tag: string
  className?: string[]
  text?: string
  callback?: () => void
}

interface IElementGenerator {
  element: HTMLElement
  createElement: (tag: string) => HTMLElement
  setStyles: (className: string[]) => void
  setText: (text: string) => void
  setCallback: (callback: () => void) => void
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
