import type { ILevelParams } from '../../../../types/types';
import './level-6.scss';

export const level6: ILevelParams = {
  id: 5,
  task: 'Select path!',
  story: 'The friends split up, Dandelion went to look for a larger city where they could appreciate his talent as a bard, and the witcher went to the wilderness, where he could find work for him. And on the highway, he discovers the corpses of travelers, obviously with traces of a monster attack. Not far from the road, there was a path deep into the forest, Geralt decided to follow it...',
  help: '#into-the-forest',
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
        text: 'The road led Geralt to an old mansion. He went into the yard, but a bear-like creature in human clothes jumped out of the house and demanded that he clean up. The witcher prepared to defend himself, but the owner of the house relented and invited him to spend the night, because it was late....',
      },
    ],
  },
  layout: [
    {
      tag: 'path',
      attributes: {
        id: 'main-road',
        'data-id': '1',
      },
    },
    {
      tag: 'path',
      className: ['go-back'],
      attributes: {
        'data-id': '2',
      },
    },
    {
      tag: 'path',
      attributes: {
        id: 'into-the-forest',
        'data-id': '3',
        'data-target': 'true',
      },
    },
  ],
};
