import { cleanElement } from '../util/clean-element';

describe('cleanElement', () => {
  const elementParent = document.createElement('div');
  let elementParentClone: HTMLElement;
  beforeEach(() => {
    const elementChild1 = document.createElement('div');
    const elementChild2 = document.createElement('div');
    elementParent.append(elementChild1, elementChild2);

    elementParentClone = elementParent.cloneNode(true) as HTMLElement;
  });

  it('should clean element', () => {
    cleanElement(elementParent);
    expect(elementParent.children.length).toBe(0);
  });
  it('should clean multiple elements', () => {
    cleanElement(elementParent, elementParentClone);
    expect(elementParent.children.length).toBe(0);
    expect(elementParentClone.children.length).toBe(0);
  });
});
