import type { IParams } from '../../../../types/types';
import './level-3.scss';

export const level3: IParams[] = [
  {
    story: 'level33333333333',
    help: 'bento',
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
];
