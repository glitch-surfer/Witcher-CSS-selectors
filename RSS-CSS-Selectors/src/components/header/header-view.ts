import './header.scss';
import type { IParams } from '../../types/types';

export const headerParams: IParams = {
  tag: 'header',
  className: ['header'],
  children: [
    {
      tag: 'h1',
      className: ['header__title'],
      text: 'Witcher`s Adventures',
    },
    {
      tag: 'p',
      className: ['header__description'],
      text: 'Grab this box!!!',
      link: true,
    },
    {
      tag: 'div',
      className: ['header__table'],
      link: true,
    },
  ],
};
