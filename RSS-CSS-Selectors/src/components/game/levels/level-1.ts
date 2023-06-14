import './level-1.scss';
import type { LevelParams } from '../../../types/types';
import { View } from '../../util/view';

class LevelView extends View {
  htmlView: string;

  constructor(level: LevelParams) {
    super(level);
    this.htmlView = level.htmlView;
  }
}

export { LevelView };
