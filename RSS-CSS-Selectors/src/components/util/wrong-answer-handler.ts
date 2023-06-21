export const wrongAnswerHandler = (element: HTMLElement): void => {
  element.addEventListener('animationend', () => {
    element.classList.remove('wrong-answer');
  });

  element.classList.add('wrong-answer');
};
