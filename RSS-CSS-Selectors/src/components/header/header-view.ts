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
      tag: 'div',
      className: ['header__hand-img'],
      link: true,
    },
    {
      tag: 'div',
      className: ['aside-burger'],
      link: true,
      children: [
        {
          tag: 'div',
          className: ['burger__line'],
        },
      ],
    },
    {
      tag: 'p',
      className: ['header__task'],
      link: true,
    },
    {
      tag: 'div',
      className: ['header__table'],
      link: true,
    },
  ],
};
