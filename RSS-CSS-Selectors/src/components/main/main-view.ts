import { View } from '../util/view';
import type { IParams } from '../../types/types';

class MainView extends View {
  constructor() {
    const MainParams: IParams = {
      tag: 'main',
      className: ['main'],
      text: 'main',
    };
    super(MainParams);
  }
}

export { MainView };
