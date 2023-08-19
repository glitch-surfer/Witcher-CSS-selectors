import { parsedNodeHtml } from './parce-level-obj-to-html-viewer';

export const addToolTips = (node: Element): void => {
  if (node.children.length !== 0) {
    [...node.children].forEach((elem) => {
      addToolTips(elem);
    });
  }
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  if (!(node instanceof HTMLElement)) throw new Error('Element is not HTMLElement');
  const dataId = node.dataset.id;
  if (dataId !== undefined) {
    tooltip.dataset.id = dataId;
    const tooltipContent = parsedNodeHtml
      .find((parsedTextNode) => parsedTextNode.dataset.id === dataId);
    if (tooltipContent !== undefined) tooltip.append(tooltipContent);
  }
  node.append(tooltip);
};
