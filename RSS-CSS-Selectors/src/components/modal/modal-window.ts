import { Elements } from '../../types/types';
import type { IModalWindow, IParams } from '../../types/types';
import { ElementGenerator } from '../util/element-generator';

export class ModalWindow implements IModalWindow {
  modal?: HTMLElement;

  private readonly message: HTMLElement;

  constructor(messageParams: IParams) {
    this.modal = ModalWindow.generateOverlay();
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
      ModalWindow.enableButtons();
    }
  }

  public appendModal(): void {
    if (this.modal !== undefined) {
      ModalWindow.disableButtons();
      document.body.append(this?.modal);
    }
  }

  public getElement(): HTMLElement {
    if (this.modal === undefined) throw new Error('modal is undefined');

    return this.modal;
  }

  public static disableButtons(): void {
    const help = ElementGenerator.elementLinks[Elements.BTN_HELP];
    const enter = ElementGenerator.elementLinks[Elements.BUTTON];
    const asideBurger = ElementGenerator.elementLinks[Elements.ASIDE_BURGER];

    if (!asideBurger.classList.contains('burger-active')) {
      help.setAttribute('disabled', '');
    }
    enter.setAttribute('disabled', '');
  }

  public static enableButtons(): void {
    const help = ElementGenerator.elementLinks[Elements.BTN_HELP];
    const enter = ElementGenerator.elementLinks[Elements.BUTTON];

    help.removeAttribute('disabled');
    enter.removeAttribute('disabled');
  }

  public static generateOverlay(): HTMLElement {
    const overlayParams: IParams = {
      tag: 'div',
      className: ['overlay'],
    };

    const overlay = new ElementGenerator(overlayParams).getElement();
    return overlay;
  }
}
