import { ElementGenerator } from './element-generator';

export const setAsideState = (): void => {
  const asideStateJson = localStorage.getItem('asideState');
  if (asideStateJson !== null) {
    const asideState = JSON.parse(asideStateJson);
    Object.entries(asideState).forEach(([selector, stateClass]) => {
      const levelBtn = ElementGenerator.elementLinks[selector];
      levelBtn.className = stateClass as string;
    });
  }
};
