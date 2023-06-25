import type { ILevelParams, IParams } from '../../types/types';

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
        text: 'You can try this levels, that you not complete yet:',
      },
      {
        tag: 'ul',
        className: ['not-completed-levels'],
        children: [],
      },
    ],
  };
  notCompletedLevels.forEach((level) => {
    result.children?.push({
      tag: 'li',
      className: ['not-completed-level__item'],
      text: `${level.id}. ${level.task}`,
    });
  });
  return result;
};
