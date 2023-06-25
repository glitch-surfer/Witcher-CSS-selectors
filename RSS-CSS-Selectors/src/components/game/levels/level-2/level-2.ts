import type { ILevelParams } from '../../../../types/types';
import './level-2.scss';

export const level2: ILevelParams = {
  id: 2,
  task: 'Grab a silver sword!',
  story: 'A steel sword is good against people and animals, but evil spirits, as a rule, are not sensitive to it. For monsters, witchers use a silver sword. Help Geralt get one!',
  help: 'sword[type="silver"]',
  asideTitle: 'Selector by attribute',
  asideContent: `You can select elements by any their attributes or attribute value. For example: [type="text"] {
    some rules...
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 2 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Now every tavern owner recognizes a witcher in Geralt and is ready to offer beer, stew with cracklings and a profitable order!',
      },
    ],
  },
  layout: [
    {
      tag: 'sword',
      attributes: {
        type: 'strange',
        'data-id': '1',
      },
    },
    {
      tag: 'stown',
      attributes: {
        'data-id': '2',
      },
    },
    {
      tag: 'sword',
      attributes: {
        type: 'silver',
        'data-id': '3',
        'data-target': 'true',
      },
    },
  ],
};
