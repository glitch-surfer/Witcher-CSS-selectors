import type { ILevelParams } from '../../../../types/types';
import './level-4.scss';

export const level4: ILevelParams = {
  id: 4,
  task: 'Grab the horseshoes!',
  story: 'Geralt did not forget about his favorite horse, Roach, and decided to buy new horseshoes for her with the remaining money from the last order. Who knows when the next opportunity will be. Witchers have less and less work lately... He liked those new ones in the box!',
  help: 'box horseshoe',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 4 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Great choice. Roach now snoozes 10% faster and snores happily!',
      },
    ],
  },
  layout: [
    {
      tag: 'horseshoe',
      attributes: {
        'data-id': '1',
      },
    },
    {
      tag: 'horseshoe',
      attributes: {
        'data-id': '2',
      },
    },
    {
      tag: 'horseshoe',
      attributes: {
        'data-id': '3',
      },
    },
    {
      tag: 'box',
      attributes: {
        'data-id': '4',
      },
      children: [
        {
          tag: 'horseshoe',
          attributes: {
            'data-id': '5',
            'data-target': 'true',
          },
        },
      ],
    },
  ],
};
