export const cleanElement = (element: HTMLElement): void => {
  while (element.firstChild !== null) {
    element.firstChild?.remove();
  }
};
