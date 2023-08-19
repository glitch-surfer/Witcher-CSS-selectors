import { wrongAnswerHandler } from '../components/util/wrong-answer-handler';

describe('wrongAnswerHandler', () => {
  const element = document.createElement('div');

  afterAll(() => {
    element.remove();
  });

  it('adds "wrong-answer" class to the element', () => {
    wrongAnswerHandler(element);
    expect(element.classList.contains('wrong-answer')).toBe(true);
  });

  it('removes "wrong-answer" class from the element after animation ends', () => {
    jest.useFakeTimers();

    element.classList.add('wrong-answer');
    wrongAnswerHandler(element);
    element.dispatchEvent(new Event('animationend'));
    jest.runAllTimers();

    expect(element.classList.contains('wrong-answer')).toBe(false);
  });
});
