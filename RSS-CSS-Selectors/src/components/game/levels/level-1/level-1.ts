import type { ILevelParams } from '../../../../types/types';
import './level-1.scss';

export const level1: ILevelParams = {
  id: 1,
  header: 'Some 1 Header',
  story: 'level1',
  help: 'sword',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 1 level',
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
          },
          children: [
            {
              tag: 'sword',
              className: ['level1_2'],
              attributes: {
                'data-id': '3',
                'data-target': 'true',
              },
            },
          ],
        },
      ],
    },
    {
      tag: 'plate',
      className: ['level1'],
      attributes: {
        'data-id': '4',
      },
      children: [
        {
          tag: 'sword',
          className: ['level1_3'],
          attributes: {
            'data-id': '5',
            'data-target': 'true',
          },
          children: [
            {
              tag: 'sword',
              className: ['level1_4'],
              attributes: {
                'data-id': '6',
                'data-target': 'true',
              },
            },
          ],
        },
      ],
    },
  ],
};
