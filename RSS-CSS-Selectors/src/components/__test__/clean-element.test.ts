import { cleanElement } from '../util/clean-element';

describe('cleanElement', () => {
  let elementParent: HTMLElement;

  beforeEach(() => {
    elementParent = document.createElement('div');
    const elementChild1 = document.createElement('div');
    const elementChild2 = document.createElement('div');
    elementParent.append(elementChild1, elementChild2);
  });

  it('should clean element', () => {
    cleanElement(elementParent);
    expect(elementParent.children.length).toBe(0);
  });
  it('should clean multiple elements', () => {
    const elementParentClone = elementParent.cloneNode(true) as HTMLElement;
    cleanElement(elementParent, elementParentClone);

    expect(elementParent.children.length).toBe(0);
    expect(elementParentClone.children.length).toBe(0);
  });
});
