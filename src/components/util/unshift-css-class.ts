export const unshiftCssClass = (element: HTMLElement, cssClass: string): void => {
  const classListArr = [...element.classList];
  classListArr.unshift(cssClass);

  while (element.classList.length > 0) {
    element.classList.remove(element.classList[0]);
  }

  element.classList.add(...classListArr);
};
