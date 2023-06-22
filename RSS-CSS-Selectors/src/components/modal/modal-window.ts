import type { IModalWindow, IParams } from '../../types/types';
import { ElementGenerator } from '../util/element-generator';

export class ModalWindow implements IModalWindow {
  modal?: HTMLElement;

  private readonly message: HTMLElement;

  constructor(messageParams: IParams) {
    const modalParams: IParams = {
      tag: 'div',
      className: ['overlay'],
    };
    this.modal = new ElementGenerator(modalParams).getElement();
    this.message = new ElementGenerator(messageParams).getElement();
    this.modal.append(this.message);
    this.modal.addEventListener('click', this.removeModal.bind(this));
    document.addEventListener('keydown', this.removeModal.bind(this));
  }

  private removeModal(event: KeyboardEvent | MouseEvent): void {
    const modalOuter = event.target;
    if ((event instanceof MouseEvent
      && modalOuter !== null
      && modalOuter instanceof HTMLElement
      && (modalOuter.closest('.modal') === null || modalOuter.classList.contains('btn-modal')))
      || (event instanceof KeyboardEvent && event.code === 'Enter')) {
      this.message.remove();
      this.modal?.remove();
      document.removeEventListener('keydown', this.removeModal.bind(this));
      delete this.modal;
    }
  }

  public appendModal(): void {
    if (this.modal !== undefined) {
      document.body.append(this?.modal);
    }
  }

  public getElement(): HTMLElement {
    if (this.modal === undefined) throw new Error('modal is undefined');

    return this.modal;
  }
}
