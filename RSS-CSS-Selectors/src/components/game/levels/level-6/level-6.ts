import type { ILevelParams } from '../../../../types/types';
import './level-6.scss';

export const level6: ILevelParams = {
  id: 5,
  task: 'Grab the letter and jewelry!',
  story: 'From Vizima, friends went on, but 6 bandits were waiting for them on the highway. They introduced themselves as border guards and demanded a fee. Their clothes were of different sizes and styles, obviously belonging to different people. There was blood on the sword of one of the bandits. Geralt and Dandelion did not have as much money as the "border guards" demanded, and apparently they were not going to stop there. The fight was so short. In the pocket of one of the attackers, Geralt found a letter...',
  help: '#letter, #ring',
  asideTitle: 'Selector by id',
  asideContent: `You can select elements by their id, marked by ' # ' . For example: #form {
    some rules..
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 6 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: "The letter bore the seal of a certain merchant Hanfrey. In a letter, he complains that because of the warlike dryads, who do not let anyone near their forest of Brokilon, his goods have to make a long detour, which is bad for trade. He's contemplating how to end this problem...",
      },
    ],
  },
  layout: [
    {
      tag: 'wallet',
      attributes: {
        'data-id': '1',
      },
      children: [
        {
          tag: 'ring',
          attributes: {
            id: 'ring',
            'data-id': '2',
            'data-target': 'true',
          },
        },
      ],
    },
    {
      tag: 'letter',
      attributes: {
        id: 'letter',
        'data-id': '3',
        'data-target': 'true',
      },
    },
    {
      tag: 'bottle',
      className: ['firewater'],
      attributes: {
        'data-id': '4',
      },
    },
  ],
};
