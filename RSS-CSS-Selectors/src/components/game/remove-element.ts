import { app } from '../../index';

const removeElement = (): void => {
  const input = app.main.getHtmlElement().children[0].children[0].children[2] as HTMLInputElement;
  const selector = input.value;
  const table = app.header.getHtmlElement().lastElementChild;
  if (selector !== '') {
    table?.querySelectorAll(selector)?.forEach((element) => {
      element.remove();
    });
  }
};

export { removeElement };
