import type { IParams } from '../../../../types/types';
import './level-1.scss';

export const level1: IParams[] = [
  {
    story: 'level11111111111111111',
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
];
