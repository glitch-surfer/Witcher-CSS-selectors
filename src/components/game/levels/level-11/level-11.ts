import type { ILevelParams } from '../../../../types/types';
import './level-11.scss';

export const level11: ILevelParams = {
  id: 10,
  task: 'Make a choice!',
  story: 'In fact, although Geralt is not going to kill the dragon, he participates in this event because the knight Borkh asked him to do so, and an interesting company of gnomes, mercenaries, knights gathered in the team, and, unexpectedly, even Yenifer joined. Finding a wounded dragon, they discovered that another dragon had flown in to protect it. Yenifer asked Geralt to help the hunters kill the dragon, because she really needs the magic ingredient from the dragon`s body. The Witcher`s Choice...',
  help: 'choice:has(principle[type="duty"])',
  asideTitle: 'Not only CSS selector',
  asideContent: 'This level does not highlight the correct answer, you have to figure out Geralt`s choice yourself based on what you already know about him using the selectors you`ve learned',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 11 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'A witcher`s duty is to protect the weak. Who would have thought that the dragon would be weak in this situation, and the monsters would be people. Geralt helped in protecting the wounded dragon, the defending dragon turned out to be the knight Borch. He thanked Geralt and Yenifer for their help (during the fight, she took Geralt`s side).',
      },
    ],
  },
  layout: [
    {
      tag: 'choice',
      attributes: {
        'data-id': '1',
      },
      children: [
        {
          tag: 'principle',
          attributes: {
            type: 'in-the-name-of-love',
            'data-id': '2',
          },
        },
      ],
    },
    {
      tag: 'choice',
      attributes: {
        'data-id': '3',
        'data-target': 'true',
      },
      children: [
        {
          tag: 'principle',
          attributes: {
            type: 'duty',
            'data-id': '4',
          },
        },
      ],
    },
  ],
};
