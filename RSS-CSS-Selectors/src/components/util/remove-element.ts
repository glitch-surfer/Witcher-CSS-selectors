import { Elements } from '../../enums/elements';
import { ElementGenerator } from './element-generator';

export const isEqual = <T>(listA: T, listB: T): boolean => {
  if (listA instanceof NodeList && listB instanceof NodeList) {
    if (listA.length !== listB.length || listA.length === 0) return false;
    for (let i = 0; i < listA.length; i += 1) {
      if (listA[i] !== listB[i]) return false;
    }
    return true;
  }
  return false;
};

const removeTargetWithAnimation = (element: Element, index: number): void => {
  const ANIMATION_DELAY = 300;

  element.addEventListener('animationend', () => {
    element.remove();
  });
  setTimeout(() => {
    element.classList.add('right-answer');
  }, ANIMATION_DELAY * index);
};

const grabbingHandHandler = (): void => {
  const hand = ElementGenerator.elementLinks[Elements.HAND];
  hand.classList.add('grab');
  hand.addEventListener('transitionend', () => {
    hand.classList.remove('grab');
  });
};

export const isInvalidSelector = (selector: string): boolean => selector === '' || Number.isFinite(Number(selector));

export const removeElement = (area: HTMLElement, selector: string): boolean => {
  if (isInvalidSelector(selector)) return false;

  const selectedElements = area.querySelectorAll(selector.toString());
  const targetElements = area.querySelectorAll('[data-target]');

  if (isEqual(selectedElements, targetElements)) {
    grabbingHandHandler();
    selectedElements.forEach(removeTargetWithAnimation);
    return true;
  }
  return false;
};
