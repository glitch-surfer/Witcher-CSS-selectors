import { winModalParams } from '../components/modal/modal-view';
import { ModalWindow } from '../components/modal/modal-window';

jest.mock('../components/modal/modal.scss', () => {});

describe('ModalWindow', () => {
  let modalWindow: ModalWindow;

  beforeEach(() => {
    modalWindow = new ModalWindow(winModalParams);
  });

  afterEach(() => {
    modalWindow.getElement().remove();
  });

  test('getElement returns the modal element', () => {
    const modalElement = modalWindow.getElement();

    expect(modalElement).toBeDefined();
    expect(modalElement.classList.contains('overlay')).toBe(true);
  });

  test('generateOverlay generates an overlay element', () => {
    const overlay = ModalWindow.generateOverlay();

    expect(overlay.tagName).toBe('DIV');
    expect(overlay.classList.contains('overlay')).toBe(true);
  });
});
