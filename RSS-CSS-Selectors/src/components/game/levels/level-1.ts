import './level-1.scss';
import type { LevelParams } from '../../../types/types';

export const levels: LevelParams = [[{
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
  story: 'level11111111111111111',
}, {
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
      },
      children: [
        {
          tag: 'sword',
          className: ['level1_4'],
          attributes: {
            'data-id': '6',
          },
        },
      ],
    },
  ],
}],
[{
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
  story: 'level222222222222222222',
}],
[{
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
  story: 'level33333333333',
}],
[{
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
    },
  ],
  story: 'level4444444444444',
}]];
