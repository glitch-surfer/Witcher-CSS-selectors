import './aside.scss';
import type { IParams } from '../../types/types';

export const asideParams: IParams = {
  tag: 'aside',
  className: ['levels'],
  children: [
    {
      tag: 'nav',
      className: ['nav'],
      children: [
        {
          tag: 'h3',
          className: ['title', 'nav__title'],
          text: 'Level 1 of 10',
          link: true,
        },
        {
          tag: 'button',
          className: ['btn', 'levels__button', 'levels__button_prev'],
          text: '❮',
          link: true,
        },
        {
          tag: 'button',
          className: ['btn', 'levels__button', 'levels__button_next'],
          text: '❯',
          link: true,
        },
        {
          tag: 'button',
          className: ['btn', 'levels__button', 'levels__button_burger'],
          text: 'BURG',
          link: true,
        },
      ],
    },
    {
      tag: 'h2',
      className: ['title', 'levels__title'],
      text: 'Content',
      link: true,
    },
    {
      tag: 'p',
      className: ['title', 'levels__content'],
      text: 'ContentCo n tentCon t entConte ntConte ntConten tContent Content Content ContentC ontent Conten tContentC ontentCo ntentCo ntentCont entContentCo ntentCont entContentC ontentCo ntentCon tentCont entConten tConten tContentCo ntentCo ntent',
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
      className: ['btn', 'levels__button', 'levels__button_reset'],
      text: 'reset',
      link: true,
    },
    {
      tag: 'button',
      className: ['btn', 'levels__button', 'levels__button_help'],
      text: 'help',
      link: true,
    },
  ],
};
