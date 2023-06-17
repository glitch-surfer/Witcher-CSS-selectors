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
          className: ['levels__item', '1'],
          text: '1',
          attributes: {
            id: '0',
          },
        },
        {
          tag: 'li',
          className: ['levels__item', '2'],
          text: '2',
          attributes: {
            id: '1',
          },
        },
        {
          tag: 'li',
          className: ['levels__item', '3'],
          text: '3',
          attributes: {
            id: '2',
          },
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
