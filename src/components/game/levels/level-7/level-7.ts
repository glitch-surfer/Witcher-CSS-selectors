import type { ILevelParams } from '../../../../types/types';
import './level-7.scss';

export const level7: ILevelParams = {
  id: 6,
  task: 'Grab elixir!',
  story: 'The owner introduced himself as Nivelen and told that he was cursed for his crimes, and turned into this monster. For a long time he was looking for love that could disenchant him, but he despaired. As a result, he met love in the face of another monster - bruxes (a kind of vampire) named Vereena. The witcher warned that the brooks are attacking people in the area, and the witcher`s job is to fight such monsters, which he is going to do. Nivelen said he was upset, but he knew it would end there. Brooks are very fast and dangerous, for this fight Geralt will need the "Wolf" potion, which increases the speed and accuracy of strikes.',
  help: '.elixir.wolf',
  asideTitle: 'Combined selector',
  asideContent: `You can select elements more specific by combining their attributes/classes/tag/id together without spaces . For example: button.footer__btn {
    some rules..
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 7 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Geralt met her at the exit from the yard, she was waiting for him. A fight ensued, in which the witcher was close to defeat, but Nivelen intervened and dealt her a mortal blow. At that moment, he turned back into a human...',
      },
    ],
  },
  layout: [
    {
      tag: 'potion',
      className: ['elixir', 'owl'],
      attributes: {
        'data-id': '1',
      },
    },
    {
      tag: 'potion',
      className: ['elixir', 'wolf'],
      attributes: {
        'data-id': '2',
        'data-target': 'true',
      },
    },
    {
      tag: 'book',
      className: ['wolf'],
      attributes: {
        'data-id': '3',
      },
    },
  ],
};
