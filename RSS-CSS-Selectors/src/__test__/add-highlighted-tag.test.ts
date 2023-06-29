import { addHighlightedTag } from '../components/util/add-highlighted-tag';

jest.mock('highlight.js/styles/github.css', () => {});

describe('addHighlightedTag', () => {
  let area: HTMLElement;

  beforeEach(() => {
    // Create an area element to use in the tests
    area = document.createElement('div');
  });

  test('adds highlighted opening and closing tags to the area element', () => {
    addHighlightedTag(area, 'some-tag');

    const openingTagElement = area.querySelector('span:first-child');
    const closingTagElement = area.querySelector('span:last-child');

    expect(openingTagElement).not.toBeNull();
    expect(closingTagElement).not.toBeNull();
    expect(openingTagElement?.textContent).toBe('<some-tag>');
    expect(closingTagElement?.textContent).toBe('some-tag');
  });
});
