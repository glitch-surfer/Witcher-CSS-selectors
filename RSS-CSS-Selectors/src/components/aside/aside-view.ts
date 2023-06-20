import './aside.scss';
import './burger.scss';
import type { IParams } from '../../types/types';

export const asideParams: IParams = {
  tag: 'aside',
  className: ['aside'],
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
          className: ['btn', 'aside__button', 'aside__button_prev'],
          text: '❮',
          link: true,
        },
        {
          tag: 'button',
          className: ['btn', 'aside__button', 'aside__button_next'],
          text: '❯',
          link: true,
        },
        {
          tag: 'div',
          className: ['burger'],
          link: true,
          children: [
            {
              tag: 'div',
              className: ['burger__line'],
            },
          ],
        },
        {
          tag: 'div',
          className: ['burger-menu'],
          link: true,
          children: [
            {
              tag: 'ul',
              className: ['aside__list'],
              children: [
                {
                  tag: 'li',
                  className: ['aside__item', '0'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['burger-menu__level'],
                      text: '1',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['aside__item', '1'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['burger-menu__level'],
                      text: '2',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['aside__item', '2'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['burger-menu__level'],
                      text: '3',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['aside__item', '3'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['burger-menu__level'],
                      text: '4',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag: 'h2',
      className: ['title', 'aside__title'],
      text: 'Content',
      link: true,
    },
    {
      tag: 'p',
      className: ['title', 'aside__content'],
      text: 'ContentCo n tentCon t entConte ntConte ntConten tContent Content Content ContentC ontent Conten tContentC ontentCo ntentCo ntentCont entContentCo ntentCont entContentC ontentCo ntentCon tentCont entConten tConten tContentCo ntentCo ntent',
      link: true,
    },
    {
      tag: 'button',
      className: ['btn', 'aside__button', 'aside__button_reset'],
      text: 'reset',
      link: true,
    },
    {
      tag: 'button',
      className: ['btn', 'aside__button', 'aside__button_help'],
      text: 'help',
      link: true,
    },
  ],
};
