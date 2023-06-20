/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import './main.scss';
import type { IParams } from '../../types/types';

export const mainParams: IParams = {
  tag: 'main',
  className: ['main'],
  children: [
    {
      tag: 'section',
      className: ['workspace'],
      children: [
        {
          tag: 'div',
          className: ['editor'],
          children: [
            {
              tag: 'h2',
              className: ['editor__title', 'title'],
              text: 'CSS Editor',
            },
            {
              tag: 'span',
              className: ['editor__description'],
              text: 'style.css',
            },
            {
              tag: 'input',
              className: ['editor__input'],
              attributes: {
                type: 'text',
                autofocus: '',
                placeholder: 'Type your CSS selector here',
              },
              link: true,
            },
            {
              tag: 'button',
              className: ['btn', 'editor__button'],
              text: 'enter',
              link: true,
            },
          ],
        },
        {
          tag: 'div',
          className: ['html-viewer'],
          children: [
            {
              tag: 'h2',
              className: ['html-viewer__title', 'title'],
              text: 'HTML Viewer',
            },
            {
              tag: 'span',
              className: ['html-viewer__description'],
              text: 'table.html',
            },
            {
              tag: 'div',
              className: ['html-viewer__content'],
              link: true,
            },
          ],
        },
      ],
    },
    {
      tag: 'section',
      className: ['story'],
      children: [
        {
          tag: 'h2',
          className: ['story__title', 'title'],
          text: 'Story',
        },
        {
          tag: 'p',
          className: ['story__text'],
          link: true,
        },
      ],
    },
  ],
};
