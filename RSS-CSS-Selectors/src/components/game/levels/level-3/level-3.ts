import type { ILevelParams } from '../../../../types/types';
import './level-3.scss';

export const level3: ILevelParams = {
  id: 3,
  header: 'Some 3 Header',
  story: 'level33333333333',
  help: 'bento',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 3 level',
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
      },
      children: [
        {
          tag: 'bento',
          className: ['level1_1'],
          attributes: {
            'data-id': '2',
            'data-target': 'true',
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
