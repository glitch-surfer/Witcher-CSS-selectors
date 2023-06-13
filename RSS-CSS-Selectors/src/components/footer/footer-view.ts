import { View } from '../util/view';
import type { IParams } from '../../types/types';

class FooterView extends View {
  constructor() {
    const footerParams: IParams = {
      tag: 'footer',
      className: ['footer'],
      children: [
        {
          tag: 'p',
          className: ['footer__text'],
          text: '2023',
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
    super(footerParams);
  }
}

export { FooterView };
