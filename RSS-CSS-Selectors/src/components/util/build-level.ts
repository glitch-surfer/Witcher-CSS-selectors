import { Elements } from '../../types/types';
import { levels } from '../game/levels';
import { addToolTips } from './add-tooltip';
import { ElementGenerator } from './element-generator';
import { parseLevelObjToHtmlViewer } from './parce-level-obj-to-html-viewer';

export const buildLevel = (levelNumber: number): void => {
  const task = ElementGenerator.elementLinks[Elements.TASK];
  const table = ElementGenerator.elementLinks[Elements.TABLE];
  const htmlViewer = ElementGenerator.elementLinks[Elements.HTML_VIEWER];
  const story = ElementGenerator.elementLinks[Elements.STORY];
  const navTitle = ElementGenerator.elementLinks[Elements.NAV_TITLE];
  const asideTitle = ElementGenerator.elementLinks[Elements.ASIDE_TITLE];
  const asideContent = ElementGenerator.elementLinks[Elements.ASIDE_CONTENT];

  task.textContent = levels[levelNumber].task;

  levels[levelNumber].layout.forEach((element) => {
    const parsedLevelData = parseLevelObjToHtmlViewer(element);
    htmlViewer.append(parsedLevelData);

    const elementOnTable = new ElementGenerator(element).getElement();
    addToolTips(elementOnTable);
    table.append(elementOnTable);
  });

  story.append(levels[levelNumber].story);

  navTitle.textContent = `Level ${levels[levelNumber].id} of ${levels.length}`;

  asideTitle.textContent = levels[levelNumber].asideTitle;
  asideContent.textContent = levels[levelNumber].asideContent;
};
