import type { ILevelParams } from '../../../../types/types';
import './level-2.scss';

export const level2: ILevelParams[] = [
  {
    story: 'level222222222222222222',
    help: 'plate',
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
