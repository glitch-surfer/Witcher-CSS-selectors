import './modal.scss';
import type { IParams } from '../../types/types';

export const winModalParams: IParams = {
  tag: 'div',
  className: ['modal'],
  children: [
    {
      tag: 'h2',
      className: ['title'],
      text: 'Hoorah! YOU WIN!!!',
    },
    {
      tag: 'button',
      className: ['btn-modal'],
      text: '✖',
    },
    {
      tag: 'P',
      className: ['modal__text'],
      text: 'Only stronges can go through this game. I hope you enjoyed the game! You have practiced with CSS selectors. Perhaps you even became interested in the Witcher universe, if you were not familiar with it before. If you have any ideas about what new levels and stories to add: feel free to write to me (my email in github profile), I will complete the game and point out who helped me!',
    },
  ],
};
