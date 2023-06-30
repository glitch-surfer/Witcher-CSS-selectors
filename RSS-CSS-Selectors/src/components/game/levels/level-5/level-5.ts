import type { ILevelParams } from '../../../../types/types';
import './level-5.scss';

export const level5: ILevelParams = {
  id: 4,
  task: 'Grab the Lute!',
  story: "Friends stayed too long in Vizima, and, as is usually the case, Dandelion's poetic nature began to demand female attention. The husbands of these ladies do not always agree with this. As it happened more than once, Dandelion was found in the tavern by the husband of one of his admirers. Seeing no reason for a constructive dialogue, Dandelion hurried to get out, but forgot his lute. In order not to meet with the enemy, he asked Geralt to return and pick up the lute.",
  help: '.lute',
  asideTitle: 'Selector by class',
  asideContent: `You can select elements by their class, marked by ' . ' . For example: .title {
    some rules..
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 5 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: "Geralt does not like to get involved in Dandelion's troubles, but usually intervenes when there is a risk of physical harm. Or, as in this case, the soul of the poet, namely his lute, is at stake. Dandelion is very glad that he has not lost his instrument, and promises that this will not happen again, but for some reason Geralt does not believe him...",
      },
    ],
  },
  layout: [
    {
      tag: 'device',
      className: ['lute'],
      attributes: {
        'data-id': '1',
        'data-target': 'true',
      },
    },
    {
      tag: 'device',
      className: ['guitar'],
      attributes: {
        'data-id': '2',
      },
    },
    {
      tag: 'device',
      className: ['bass-guitar'],
      attributes: {
        'data-id': '3',
      },
    },
  ],
};
