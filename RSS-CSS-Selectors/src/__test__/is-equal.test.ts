import { isEqual } from '../components/util/remove-element';

describe('isEqual', () => {
  let parent: HTMLElement;
  let nodeList: NodeListOf<Element>;
  let emptyNodeList: NodeListOf<Element>;
  beforeEach(() => {
    parent = document.createElement('div');
    for (let i = 0; i < 10; i += 1) {
      parent.append(document.createElement('div'));
    }
    nodeList = parent.querySelectorAll('div');
    emptyNodeList = parent.querySelectorAll('p');
  });

  afterEach(() => {
    parent.remove();
  });

  it('should return true', () => {
    expect(isEqual(nodeList, nodeList)).toBe(true);
  });

  it('should return false', () => {
    expect(isEqual(nodeList, emptyNodeList)).toBe(false);
  });
});
