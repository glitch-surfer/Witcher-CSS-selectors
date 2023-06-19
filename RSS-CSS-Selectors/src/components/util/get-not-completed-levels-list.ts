import { levels } from '../game/levels';
import type { ILevelParams } from '../../types/types';
import { ElementGenerator } from './element-generator';

export const getNotCompletedLevelsList = (): Array<{ levelBtn: Node, level: ILevelParams[] }> => {
  const notCompletedLevels: Array<{ levelBtn: Node, level: ILevelParams[] }> = [];

  levels.forEach((level, index) => {
    const levelBtn = ElementGenerator.elementLinks[`LI.${index}`];
    if (!levelBtn.classList.contains('done')
      && !levelBtn.classList.contains('helped')) {
      notCompletedLevels.push({ levelBtn, level });
    }
  });
  return notCompletedLevels;
};
