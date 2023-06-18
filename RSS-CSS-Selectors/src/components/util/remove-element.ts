const isEqual = (a: NodeListOf<Element>, b: NodeListOf<Element>): boolean => {
  if (a.length !== b.length || a.length === 0) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const removeElement = (area: HTMLElement, selector: string): boolean => {
  if (selector === '' || Number.isFinite(Number(selector))) return false;

  const selectedElements = area.querySelectorAll(selector.toString());
  const targetElement = area.querySelectorAll('[data-target]');

  if (isEqual(selectedElements, targetElement)) {
    selectedElements.forEach((element) => {
      element.remove();
    });
    return true;
  }
  return false;
};
