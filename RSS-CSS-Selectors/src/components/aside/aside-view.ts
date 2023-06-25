import './aside.scss';
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
          link: true,
        },
        {
          tag: 'button',
          className: ['nav__button_prev'],
          text: '❮',
          link: true,
        },
        {
          tag: 'button',
          className: ['nav__button_next'],
          text: '❯',
          link: true,
        },
        {
          tag: 'div',
          className: ['nav__burger'],
          link: true,
        },
        {
          tag: 'div',
          className: ['nav__menu'],
          link: true,
          children: [
            {
              tag: 'ul',
              className: ['nav__list'],
              children: [
                {
                  tag: 'li',
                  className: ['nav__item', '0'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '1',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '1'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '2',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '2'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '3',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '3'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '4',
                    },
                  ],
                },
              ],
            },
            {
              tag: 'button',
              className: ['btn', 'aside__button_reset'],
              text: 'reset',
              link: true,
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
      className: ['aside__content'],
      text: 'ContentCo n tentCon t entConte ntConte ntConten tContent Content Content ContentC ontent Conten tContentC ontentCo ntentCo ntentCont entContentCo ntentCont entContentC ontentCo ntentCon tentCont entConten tConten tContentCo ntentCo ntent',
      link: true,
    },
    {
      tag: 'button',
      className: ['btn', 'aside__button_help'],
      text: 'help',
      link: true,
    },
  ],
};
