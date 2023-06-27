import { ElementGenerator } from '../components/util/element-generator';
import { unshiftCssClass } from '../components/util/unshift-css-class';

describe('unshiftCssClass', () => {
  const element = new ElementGenerator({
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
  }).getElement();

  const startedClasses = element.classList;

  afterAll(() => {
    element.remove();
  });

  unshiftCssClass(element, 'my-class');
  it('should add class to element', () => {
    expect(element.classList.contains('my-class')).toBe(true);
  });
  it('added class shoult be first', () => {
    expect(element.classList[0]).toBe('my-class');
  });
  it('other classes should be saved', () => {
    expect(element.classList.contains(startedClasses.toString())).toBe(true);
  });
});
