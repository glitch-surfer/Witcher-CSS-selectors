import './level-1.scss';
import type { IParams } from '../../../types/types';
import { View } from '../../util/view';

class LevelView extends View {
  id: string;

  constructor(level: IParams) {
    super(level);
    this.id = level.tag;
  }
}

export { LevelView };
