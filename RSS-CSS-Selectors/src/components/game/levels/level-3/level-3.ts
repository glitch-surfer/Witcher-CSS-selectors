import type { ILevelParams } from '../../../../types/types';
import './level-3.scss';

export const level3: ILevelParams = {
  id: 3,
  task: 'Grab the elixir and the doll',
  story: 'Traveling through Vizima, Geralt saw an advertisement about a striga, which became Ada, the daughter of King Foltest, and who needed to be disenchanted (or killed, at worst). To do this, Geralt needs to hold out with her in the castle until dawn. Geralt believes that there is still a child in her and hopes to distract her with a doll. And also, he needs a special elexit that improves vision in the dark.',
  help: 'elixir, doll[type="toy"]',
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 3 done!',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'It was not easy, but Geralt did it. Now he has become richer by 3000 orens, which he intends to spend with his friend Dandelion in the nearest tavern!',
      },
    ],
  },
  layout: [
    {
      tag: 'elixir',
      attributes: {
        'data-id': '1',
        'data-target': 'true',
      },
    },
    {
      tag: 'pillow',
      attributes: {
        'data-id': '2',
      },
    },
    {
      tag: 'doll',
      attributes: {
        'data-id': '3',
        'data-target': 'true',
        type: 'toy',
      },
    },
  ],
};
