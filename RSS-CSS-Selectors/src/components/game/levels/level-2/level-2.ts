import type { ILevelParams } from '../../../../types/types';
import './level-2.scss';

export const level2: ILevelParams = {
  id: 2,
  task: 'Some 2 Header',
  story: 'level222222222222222222',
  help: 'plate',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 2 level',
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
  },
  layout: [
    {
      tag: 'plate',
      className: ['level1'],
      attributes: {
        'data-id': '1',
        'data-target': 'true',
      },
      children: [
        {
          tag: 'bento',
          className: ['level1_1'],
          attributes: {
            'data-id': '2',
          },
          children: [
            {
              tag: 'sword',
              className: ['level1_2'],
              attributes: {
                'data-id': '3',
              },
            },
          ],
        },
      ],
    },
  ],
};
