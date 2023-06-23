import type { ILevelParams } from '../../../../types/types';
import './level-1.scss';

export const level1: ILevelParams[] = [
  {
    story: 'level11111 111111111111 level1111111 1111111111 level1111 1111111111111 level111111 11111111111l evel111111 11111111111 level1111111 1111111111 level111111 11111111111 level111111 11111111111 level111111 11111111111 ',
    help: 'sword',
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
