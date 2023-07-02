import type { ILevelParams } from '../../../../types/types';
import './level-10.scss';

export const level10: ILevelParams = {
  id: 9,
  task: 'Grab bag!',
  story: 'The witcher heard that a dragon appeared and was wounded in a nearby town. The king announced the gathering of a detachment to find and finish off the dragon, and divide the dragon`s treasures. To get into the squad, Geralt needs to prove his strength and courage. It will be enough to show the witcher`s medallion...',
  help: 'bag:has(medallion):not(:first-child)',
  asideTitle: 'Pseudo-class :first-child',
  asideContent: `You can select first fit among all (or not first!). For example: div:first-child {
    some rules..
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 10 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Geralt was accepted into the team, although he does not need treasure and does not kill dragons, because they are intelligent creatures and do not attack people if they do not give a reason...',
      },
    ],
  },
  layout: [
    {
      tag: 'bag',
      attributes: {
        'data-id': '1',
      },
      children: [
        {
          tag: 'medallion',
          attributes: {
            'data-id': '2',
          },
        },
      ],
    },
    {
      tag: 'bag',
      attributes: {
        'data-id': '3',
        'data-target': 'true',
      },
      children: [
        {
          tag: 'medallion',
          attributes: {
            'data-id': '4',
          },
        },
      ],
    },
    {
      tag: 'bag',
      attributes: {
        'data-id': '5',
      },
    },
  ],
};
