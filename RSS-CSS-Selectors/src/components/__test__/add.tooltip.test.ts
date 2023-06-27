import { addToolTips } from '../util/add-tooltip';
import { ElementGenerator } from '../util/element-generator';

jest.mock('highlight.js/scss/atom-one-dark-reasonable.scss', () => {});

describe('addToolTips', () => {
  let rootElement: HTMLElement;

  beforeEach(() => {
    // Create a root element with some child elements to use in the tests
    rootElement = new ElementGenerator({
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
        {
          tag: 'p',
          attributes: {
            'data-id': 'test-id',
          },
          text: 'This is a paragraph',
        },
      ],
      id: 'my-div',
    }).getElement();
  });

  afterEach(() => {
    rootElement.remove();
  });

  it('adds tooltips to element', () => {
    addToolTips(rootElement);

    expect(rootElement.querySelector('.tooltip')).not.toBeNull();
  });

  it('adds tooltips to elements child', () => {
    addToolTips(rootElement);

    expect(rootElement.firstElementChild?.querySelector('.tooltip')).not.toBeNull();
  });
});
