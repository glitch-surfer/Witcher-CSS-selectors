const isEqual = (listA: NodeListOf<Element>, listB: NodeListOf<Element>): boolean => {
  if (listA.length !== listB.length || listA.length === 0) return false;
  for (let i = 0; i < listA.length; i += 1) {
    if (listA[i] !== listB[i]) return false;
  }
  return true;
};

const removeTargetWithAnimation = (element: Element, index: number): void => {
  element.addEventListener('animationend', () => {
    element.remove();
  });
  setTimeout(() => {
    element.classList.add('right-answer');
  }, 300 * index);
};

const isInvalidSelector = (selector: string): boolean => selector === '' || Number.isFinite(Number(selector));

export const removeElement = (area: HTMLElement, selector: string): boolean => {
  if (isInvalidSelector(selector)) return false;

  const selectedElements = area.querySelectorAll(selector.toString());
  const targetElements = area.querySelectorAll('[data-target]');

  if (isEqual(selectedElements, targetElements)) {
    selectedElements.forEach(removeTargetWithAnimation);
    return true;
  }
  return false;
};
