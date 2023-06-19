import type { IParams } from '../../../../types/types';

export const level4: IParams[] = [
  {
    story: 'level4444444444444',
    help: 'level1 bento',
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
];
