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
                      text: '1. Introduce',
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
                      text: '2. Arming',
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
                      text: '3. Night with striga',
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
                      text: '4. Present for Roach',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '4'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: "5. Dandelion's love story",
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '5'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '6. Crossroads',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '6'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '7. Love & blood',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '7'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '8. Genie from a bottle',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '8'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '9. Last wish',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '9'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '10. Dragon hunt',
                    },
                  ],
                },
                {
                  tag: 'li',
                  className: ['nav__item', '10'],
                  link: true,
                  children: [
                    {
                      tag: 'div',
                      className: ['nav__level'],
                      text: '11. The bounds of possible',
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
      tag: 'div',
      className: ['progress-bar'],
      children: [
        {
          tag: 'div',
          className: ['progress-bar__progress'],
          link: true,
        },
      ],
    },
    {
      tag: 'h2',
      className: ['title', 'aside__title'],
      link: true,
    },
    {
      tag: 'p',
      className: ['aside__content'],
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
