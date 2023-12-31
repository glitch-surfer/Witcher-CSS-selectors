import './footer.scss';
import type { IParams } from '../../types/types';

export const footerParams: IParams = {
  tag: 'footer',
  className: ['footer'],
  children: [
    {
      tag: 'p',
      className: ['footer__text'],
      text: 'Made by Glitch_surfer. 2023',
    },
    {
      tag: 'a',
      className: ['github-link'],
      attributes: {
        href: 'https://github.com/glitch-surfer',
      },
    },
    {
      tag: 'a',
      className: ['school-link'],
      attributes: {
        href: 'https://rs.school/js/',
      },
    },
  ],
};
