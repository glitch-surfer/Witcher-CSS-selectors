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
      text: 'only stronges can go through this game',
    },
  ],
};
