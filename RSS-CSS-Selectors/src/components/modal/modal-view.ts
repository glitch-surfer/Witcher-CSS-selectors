import './modal.scss';
import type { IParams } from '../../types/types';

export const modalMessageParams: IParams = {
  tag: 'div',
  className: ['modal'],
  children: [
    {
      tag: 'h2',
      className: ['modal-title'],
      text: 'Hoorah!',
    },
    {
      tag: 'button',
      className: ['btn-modal'],
      text: '✖',
    },
    {
      tag: 'P',
      className: ['modal__text'],
      text: 'Some story about the game about the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the game',
    },
  ],
};
