import { wrongAnswerHandler } from '../util/wrong-answer-handler';

describe('wrongAnswerHandler', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('adds "wrong-answer" class to the element', () => {
    wrongAnswerHandler(element);
    expect(element.classList.contains('wrong-answer')).toBe(true);
  });

  it('removes "wrong-answer" class from the element after animation ends', () => {
    jest.useFakeTimers(); // Necessary to simulate the animationend event

    // Add "wrong-answer" class to the element
    element.classList.add('wrong-answer');

    // Call wrongAnswerHandler and simulate the animationend event
    wrongAnswerHandler(element);
    element.dispatchEvent(new Event('animationend'));
    jest.runAllTimers();

    expect(element.classList.contains('wrong-answer')).toBe(false);
  });
});
