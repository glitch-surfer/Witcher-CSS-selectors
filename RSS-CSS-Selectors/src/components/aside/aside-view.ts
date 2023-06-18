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
          className: ['levels__item', '0'],
          text: '1',
          link: true,
        },
        {
          tag: 'li',
          className: ['levels__item', '1'],
          text: '2',
          link: true,
        },
        {
          tag: 'li',
          className: ['levels__item', '2'],
          text: '3',
          link: true,
        },
        {
          tag: 'li',
          className: ['levels__item', '3'],
          text: '4',
          link: true,
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
      className: ['levels__button', 'levels__button_help'],
      text: 'help',
      link: true,
    },
  ],
};
