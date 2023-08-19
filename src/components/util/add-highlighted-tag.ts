import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('xml', xml);

export const addHighlightedTag = (area: HTMLElement, tag: string): void => {
  const coloredOpenTagAsString = hljs.highlight(`<${tag}>`, { language: 'xml' }).value;
  const coloredCloseTagAsString = hljs.highlight(`</${tag}>`, { language: 'xml' }).value;

  const openElement = document.createElement('span');
  const closeElement = document.createElement('span');

  area.prepend(openElement);
  area.append(closeElement);

  openElement.outerHTML = coloredOpenTagAsString;
  closeElement.outerHTML = coloredCloseTagAsString;
};
