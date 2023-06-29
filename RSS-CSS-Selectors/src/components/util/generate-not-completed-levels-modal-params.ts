import type { ILevelParams, IParams } from '../../types/types';
import { ElementGenerator } from './element-generator';

export const generateNotCompletedLevelsModalParams = (
  notCompletedLevels: ILevelParams[],
): IParams => {
  const result: IParams = {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'It was last challenge, but you can try levels, that you don`t complete yet:',
      },
      {
        tag: 'ul',
        className: ['not-completed-levels'],
        children: [],
      },
    ],
  };

  notCompletedLevels.forEach((level) => {
    const levelBtn = ElementGenerator.elementLinks[`LI.${String(level.id - 1)}`];
    const levelName = levelBtn.firstElementChild?.textContent;
    if (levelName === undefined || levelName === null) throw new Error();
    result.children?.push({
      tag: 'li',
      className: ['nav__item', 'nav__item_not-completed'],
      text: levelName,
      attributes: {
        'data-level': String(level.id - 1),
      },
    });
  });

  return result;
};
