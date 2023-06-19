import { Elements } from '../../types/types';
import { levels } from '../game/levels';
import { addToolTips } from './add-tooltip';
import { ElementGenerator } from './element-generator';
import { parseLevelObjToHtmlViewer } from './parce-level-obj-to-html-viewer';

export const buildLevel = (levelNumber: number): void => {
  const table = ElementGenerator.elementLinks[Elements.TABLE];
  const htmlViewer = ElementGenerator.elementLinks[Elements.HTML_VIEWER];
  const story = ElementGenerator.elementLinks[Elements.STORY];

  levels[levelNumber].forEach((element) => {
    const parsedLevelData = parseLevelObjToHtmlViewer(element);
    htmlViewer.append(parsedLevelData);

    const elementOnTable = new ElementGenerator(element).getElement();
    addToolTips(elementOnTable);
    table.append(elementOnTable);

    if (element.story !== undefined) {
      story.append(element.story);
    }
  });
};
