import './header.scss';
import { View } from '../util/view';
import type { IParams } from '../../types/types';

class HeaderView extends View {
  constructor() {
    const headerParams: IParams = {
      tag: 'header',
      className: ['header'],
      children: [
        {
          tag: 'h1',
          className: ['header__title'],
          text: 'Witcher`s Adventures',
        },
        {
          tag: 'div',
          className: ['header__table'],
        },
      ],
    };
    super(headerParams);
  }
}

export { HeaderView };
