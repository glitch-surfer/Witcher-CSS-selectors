import { levels } from '../game/levels';
import type { INotCompletedLevelsList } from '../../types/types';
import { ElementGenerator } from './element-generator';

export const getNotCompletedLevelsList = (): INotCompletedLevelsList => {
  const notCompletedLevels: INotCompletedLevelsList = [];

  levels.forEach((level, index) => {
    const levelBtn = ElementGenerator.elementLinks[`LI.${index}`];
    if (!levelBtn.classList.contains('done')
      && !levelBtn.classList.contains('helped')) {
      notCompletedLevels.push(level);
    }
  });
  return notCompletedLevels;
};
