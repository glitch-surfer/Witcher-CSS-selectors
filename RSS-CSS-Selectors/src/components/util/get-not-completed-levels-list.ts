import { levels } from '../game/levels';
import type { IParams } from '../../types/types';
import { ElementGenerator } from './element-generator';

export const getNotCompletedLevelsList = (): Array<{ levelBtn: Node, level: IParams[] }> => {
  const notCompletedLevels: Array<{ levelBtn: Node, level: IParams[] }> = [];

  levels.forEach((level, index) => {
    const levelBtn = ElementGenerator.elementLinks[`LI.${index}`];
    if (!levelBtn.classList.contains('done')
      && !levelBtn.classList.contains('helped')) {
      notCompletedLevels.push({ levelBtn, level });
    }
  });
  return notCompletedLevels;
};
