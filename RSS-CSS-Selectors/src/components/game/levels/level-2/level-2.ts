import type { IParams } from '../../../../types/types';
import './level-2.scss';

export const level2: IParams[] = [
  {
    story: 'level222222222222222222',
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
];