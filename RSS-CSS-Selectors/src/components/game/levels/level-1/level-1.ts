import type { ILevelParams } from '../../../../types/types';
import './level-1.scss';

export const level1: ILevelParams = {
  id: 1,
  task: 'Grab a sword!',
  story: 'In this game, you will need to enter a valid CSS selector to get the desired item from the table. Geralt the witcher. The witcher is a professional monster hunter. In his work, he uses weapons and various elixirs - alchemical potions that make him faster and stronger. Help him get ready for the hunt. For starters, he needs a sword, of course!',
  help: 'sword',
  asideTitle: 'Selector by tag',
  asideContent: 'You can select elements by tag name. For example: div { some rules.. }',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 1 done!',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'With a sword Geralt look scary, now onlookers on the street do not spit at his feet, but make way...',
      },
    ],
  },
  layout: [
    {
      tag: 'knife',
      attributes: {
        'data-id': '1',
      },
    },
    {
      tag: 'sword',
      attributes: {
        'data-id': '2',
        'data-target': 'true',
      },
    },
    {
      tag: 'stick',
      attributes: {
        'data-id': '3',
      },
    },
  ],
};
