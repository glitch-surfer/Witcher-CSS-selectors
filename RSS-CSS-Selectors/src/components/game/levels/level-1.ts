import './level-1.scss';
import type { LevelParams } from '../../../types/types';

export const level: LevelParams = {
  htmlView: 'table.html',
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
          },
        },
      ],
    },
  ],
};
