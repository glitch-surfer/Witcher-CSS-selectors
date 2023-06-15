/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import './main.scss';
import { View } from '../util/view';
import type { IParams } from '../../types/types';
import { removeElement } from '../game/remove-element';

class MainView extends View {
  constructor() {
    const mainParams: IParams = {
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
                  className: ['editor__title'],
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
                  },
                },
                {
                  tag: 'button',
                  className: ['editor__button'],
                  text: 'enter',
                  callback: removeElement,
                },
              ],
            },
            {
              tag: 'div',
              className: ['html-viewer'],
              children: [
                {
                  tag: 'h2',
                  className: ['html-viewer__title'],
                  text: 'HTML Viewer',
                },
                {
                  tag: 'span',
                  className: ['html-viewer__description'],
                  text: 'table.html',
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
              className: ['story__title'],
              text: 'Story',
            },
            {
              tag: 'p',
              className: ['story__text'],
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste ratione, tempore, corporis delenitLorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste ratione, tempore, corporis delenitLorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste ratione, tempore, corporis delenitLorem ipsum dolor sit amet consectetur adipisicing elit. Provident iste ratione, tempore, corporis delenit',
            },
          ],
        },
      ],
    };
    super(mainParams);
  }
}

export { MainView };
