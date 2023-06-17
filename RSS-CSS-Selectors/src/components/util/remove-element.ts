export const removeElement = (area: HTMLElement, selector: string): void => {
  if (selector !== '') {
    area.querySelectorAll(selector)?.forEach((element) => {
      element.remove();
    });
  }
};
