import './header.scss';
import { View } from '../util/view';
import type { IParams } from '../../types/types';
// import { ElementGenerator } from '../util/element-generator';

class HeaderView extends View {
  constructor() {
    const HeaderParams: IParams = {
      tag: 'header',
      className: ['header'],
      text: 'Header',
      // callback:
    };
    super(HeaderParams);
  }
}

export { HeaderView };
