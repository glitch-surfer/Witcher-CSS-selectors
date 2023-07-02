import type { ILevelParams } from '../../../../types/types';
import './level-9.scss';

export const level9: ILevelParams = {
  id: 8,
  task: 'Select last wish!',
  story: 'Yenifer healed Dandelion, and wanted to capture the genie herself, but failed. To help Yenifer defeat the genie, Geralt needs to make a last wish...',
  help: 'wish:not(.wealth, .power)',
  asideTitle: 'Pseudo-class :not()',
  asideContent: `You can select all elements excluding specified options. For example: div:not(.wrapper) {
    some rules..
  }`,
  modal: {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! Level 9 done',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Geralt made a wish that brought their paths together forever...',
      },
    ],
  },
  layout: [
    {
      tag: 'wish',
      className: ['wealth'],
      attributes: {
        'data-id': '1',
      },
    },
    {
      tag: 'wish',
      attributes: {
        'data-id': '2',
        'data-target': 'true',
      },
    },
    {
      tag: 'wish',
      className: ['power'],
      attributes: {
        'data-id': '3',
      },
    },
  ],
};
