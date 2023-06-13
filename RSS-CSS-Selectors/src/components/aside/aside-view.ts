import './aside.scss';
import type { IParams } from '../../types/types';
import { View } from '../util/view';

class AsideView extends View {
  constructor() {
    const asideParams: IParams = {
      tag: 'aside',
      className: ['levels'],
      children: [
        {
          tag: 'h3',
          className: ['levels__title'],
          text: 'Level',
        },
        {
          tag: 'ul',
          className: ['levels__list'],
          children: [
            {
              tag: 'li',
              className: ['levels__item'],
              text: '1',
            },
            {
              tag: 'li',
              className: ['levels__item'],
              text: '2',
            },
            {
              tag: 'li',
              className: ['levels__item'],
              text: '3',
            },
          ],
        },
        {
          tag: 'button',
          className: ['levels__button'],
          text: 'reset',
        },
        {
          tag: 'button',
          className: ['levels__button'],
          text: 'help',
        },
      ],
    };
    super(asideParams);
  }
}

export { AsideView };
