import type { INotCompletedLevelsList, IParams } from '../../types/types';

export const generateNotCompletedLevelsModalParams = (
  notCompletedLevels: INotCompletedLevelsList,
): IParams => {
  const levelItems = notCompletedLevels.map(({ levelIndex, level }) => {
    if (level[0].header === undefined) throw new Error('level[0].header === undefined');
    return {
      tag: 'li',
      className: ['not-completed-level__item'],
      text: `${levelIndex + 1}. ${level[0].header}`,
    };
  });

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
        children: [...levelItems],
      },
    ],
  };
  return result;
};
