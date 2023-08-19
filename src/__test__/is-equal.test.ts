import { isEqual } from '../components/util/remove-element';

describe('isEqual', () => {
  const RANDOM_NUMBER_OF_CHILD_NODES = 10;
  let parent: HTMLElement;
  let firstNodeList: NodeListOf<Element>;
  let secondNodeList: NodeListOf<Element>;
  let emptyNodeList: NodeListOf<Element>;
  beforeEach(() => {
    parent = document.createElement('div');
    for (let i = 0; i < RANDOM_NUMBER_OF_CHILD_NODES; i += 1) {
      parent.append(document.createElement('div'));
    }
    firstNodeList = parent.querySelectorAll('div');
    secondNodeList = parent.querySelectorAll('div');
    emptyNodeList = parent.querySelectorAll('p');
  });

  afterEach(() => {
    parent.remove();
  });

  it('should return true', () => {
    expect(isEqual(firstNodeList, secondNodeList)).toBe(true);
  });

  it('should return false', () => {
    expect(isEqual(firstNodeList, emptyNodeList)).toBe(false);
  });
});
