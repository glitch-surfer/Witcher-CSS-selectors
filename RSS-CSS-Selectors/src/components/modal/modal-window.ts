import { Elements } from '../../enums/elements';
import type { IModalWindow, IParams } from '../../types/types';
import { ElementGenerator } from '../util/element-generator';

export class ModalWindow implements IModalWindow {
  modal?: HTMLElement;

  private readonly message: HTMLElement;

  constructor(messageParams: IParams) {
    this.modal = ModalWindow.generateOverlay();
    this.message = new ElementGenerator(messageParams).getElement();
    this.modal.append(this.message);
    this.modal.addEventListener('click', (event) => { this.removeModal(event); });
  }

  private removeModal(event: KeyboardEvent | MouseEvent): void {
    const navBurger = ElementGenerator.elementLinks[Elements.NAV_BURGER];
    const modalOuter = event.target;
    if ((event instanceof MouseEvent
      && modalOuter !== null
      && modalOuter instanceof HTMLElement
      && (modalOuter.closest('.modal') === null || modalOuter.classList.contains('btn-modal')))
      || (event instanceof KeyboardEvent && event.code === 'Enter')) {
      this.message.remove();
      this.modal?.remove();
      delete this.modal;
      ModalWindow.enableButtons();
      navBurger.style.zIndex = '11';
    }
  }

  public appendModal(): void {
    const navBurger = ElementGenerator.elementLinks[Elements.NAV_BURGER];
    const asideBurger = ElementGenerator.elementLinks[Elements.ASIDE_BURGER];

    if (this.modal !== undefined) {
      ModalWindow.disableButtons();
      document.body.append(this?.modal);
      navBurger.classList.remove('burger-active');
      asideBurger.classList.remove('burger-active');

      navBurger.style.zIndex = '1';
    }
  }

  public getElement(): HTMLElement {
    if (this.modal === undefined) throw new Error('modal is undefined');

    return this.modal;
  }

  public static disableButtons(): void {
    const help = ElementGenerator.elementLinks[Elements.BTN_HELP];
    const enter = ElementGenerator.elementLinks[Elements.BTN_SUBMIT];
    const asideBurger = ElementGenerator.elementLinks[Elements.ASIDE_BURGER];

    if (!asideBurger.classList.contains('burger-active')) {
      help.setAttribute('disabled', '');
    }
    enter.setAttribute('disabled', '');
  }

  public static enableButtons(): void {
    const help = ElementGenerator.elementLinks[Elements.BTN_HELP];
    const enter = ElementGenerator.elementLinks[Elements.BTN_SUBMIT];

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
