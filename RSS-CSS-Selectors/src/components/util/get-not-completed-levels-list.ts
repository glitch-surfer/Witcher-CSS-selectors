import { levels } from '../game/levels';
import type { ILevelParams } from '../../types/types';
import { ElementGenerator } from './element-generator';

export const getNotCompletedLevelsList = (): ILevelParams[] => {
  const notCompletedLevels: ILevelParams[] = [];

  levels.forEach((level, index) => {
    const levelBtn = ElementGenerator.elementLinks[`LI.${index}`];
    if (!levelBtn.classList.contains('done')
      && !levelBtn.classList.contains('helped')) {
      notCompletedLevels.push(level);
    }
  });
  return notCompletedLevels;
};
