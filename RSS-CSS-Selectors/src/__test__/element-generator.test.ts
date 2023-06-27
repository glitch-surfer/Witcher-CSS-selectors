/**
 * @jest-environment jsdom
 */
import { ElementGenerator } from '../components/util/element-generator';

describe('ElementGenerator', () => {
  let elementGenerator: ElementGenerator;

  beforeEach(() => {
    elementGenerator = new ElementGenerator({
      tag: 'div',
      className: ['my-class'],
      attributes: {
        'data-id': 'test-id',
      },
      text: 'Hello, world!',
      children: [
        {
          tag: 'p',
          text: 'This is a paragraph',
        },
      ],
      id: 'my-div',
    });
  });

  test('creates an element with the correct tag', () => {
    const element = elementGenerator.getElement();
    expect(element.tagName).toBe('DIV');
  });

  test('sets the element class correctly', () => {
    const element = elementGenerator.getElement();
    expect(element.classList.contains('my-class')).toBe(true);
  });

  test('sets the element attributes correctly', () => {
    const element = elementGenerator.getElement();
    expect(element.getAttribute('data-id')).toBe('test-id');
  });

  test('adds child elements correctly', () => {
    const element = elementGenerator.getElement();
    expect(element.children.length).toBe(1);
    expect(element.children[0].tagName).toBe('P');
    expect(element.children[0].textContent).toBe('This is a paragraph');
  });

  test('sets the element ID correctly', () => {
    const element = elementGenerator.getElement();
    expect(element.getAttribute('id')).toBe('my-div');
  });
});
