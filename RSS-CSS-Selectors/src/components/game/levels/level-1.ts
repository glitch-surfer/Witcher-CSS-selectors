import './level-1.scss';
import type { LevelParams } from '../../../types/types';
import { View } from '../../util/view';

class LevelView extends View {
  id: number;

  constructor(level: LevelParams) {
    super(level);
    this.id = level.id;
  }
}

export { LevelView };
