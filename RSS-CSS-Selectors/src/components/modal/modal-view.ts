import './modal.scss';
import type { IParams } from '../../types/types';

export const winModalParams: IParams = {
  tag: 'div',
  className: ['modal'],
  children: [
    {
      tag: 'h2',
      className: ['title'],
      text: 'Hoorah! YOU WIN!!!',
    },
    {
      tag: 'button',
      className: ['btn-modal'],
      text: '✖',
    },
    {
      tag: 'P',
      className: ['modal__text'],
      text: 'only stronges can go through this game',
    },
  ],
};

export const modalParams: IParams[] = [
  {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 1 level',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Some story about the game about the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the game',
      },
    ],
  },
  {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 2 level',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Some story about the game about the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the game',
      },
    ],
  },
  {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 3 level',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Some story about the game about the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the game',
      },
    ],
  },
  {
    tag: 'div',
    className: ['modal'],
    children: [
      {
        tag: 'h2',
        className: ['title'],
        text: 'Hoorah! 4 level',
      },
      {
        tag: 'button',
        className: ['btn-modal'],
        text: '✖',
      },
      {
        tag: 'P',
        className: ['modal__text'],
        text: 'Some story about the game about the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the gameabout the game',
      },
    ],
  },
];
