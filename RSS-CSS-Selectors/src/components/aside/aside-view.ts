import './aside.scss';
import type { IParams } from '../../types/types';

export const asideParams: IParams = {
  tag: 'aside',
  className: ['levels'],
  children: [
    {
      tag: 'h3',
      className: ['levels__title'],
      text: 'Level',
    },
    {
      tag: 'button',
      className: ['levels__button', 'levels__button_prev'],
      text: '❮',
      link: true,
    },
    {
      tag: 'button',
      className: ['levels__button', 'levels__button_next'],
      text: '❯',
      link: true,
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
