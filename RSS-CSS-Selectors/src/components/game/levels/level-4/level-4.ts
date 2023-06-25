import type { ILevelParams } from '../../../../types/types';

export const level4: ILevelParams = {
  id: 4,
  task: 'Grab the horseshoes!',
  story: 'Geralt did not forget about his favorite horse, Roach, and decided to buy new horseshoes for her with the remaining money from the last order. Who knows when the next opportunity will be. Witchers have less and less work lately... He liked those new ones in the box!',
  help: ' bento',
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
      tag: 'plate',
      className: ['level1'],
      attributes: {
        'data-id': '1',
      },
      children: [
        {
          tag: 'bento',
          className: ['level1_1'],
          attributes: {
            'data-id': '2',
            'data-target': 'true',
          },
        },
      ],
    },
  ],
};
