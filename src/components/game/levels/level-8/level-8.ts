import type { ILevelParams } from '../../../../types/types';
import './level-8.scss';

export const level8: ILevelParams = {
  id: 7,
  task: 'Grab vessel with genie!',
  story: 'One day, Geralt and Dandelion were traveling and stopped by a river. To eat, they decided to go fishing, but the catch was meager until Dandelion fished out a strange vessel. Opening the vessel, a genie appeared, attempting to kill the bard. Geralt urgently put the genie back in the bottle...',
  help: 'vessel:has(.genie)',
  asideTitle: 'Pseudo-class :has()',
  asideContent: `You can select parent elements if they contain a choosen child element. For example: div:has(.title) {
    some rules..
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 8 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Geralt drove the genie away, but Dandelion was wounded. They went to the nearest town, where they were advised to turn to the local sorceress Yenifer, who could cure him.',
      },
    ],
  },
  layout: [
    {
      tag: 'vessel',
      attributes: {
        'data-id': '1',
        'data-target': 'true',
      },
      children: [
        {
          tag: 'genie',
          className: ['genie'],
          attributes: {
            'data-id': '2',
          },
        },
      ],
    },
    {
      tag: 'vessel',
      attributes: {
        'data-id': '3',
      },
    },
  ],
};
