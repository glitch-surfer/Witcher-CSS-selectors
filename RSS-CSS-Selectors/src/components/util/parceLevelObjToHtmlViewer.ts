// lib
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import type { IParams } from '../../types/types';

hljs.registerLanguage('xml', xml);
export const parceLevelObjToHtmlViewer = (level: IParams): HTMLElement => {
  const result = document.createElement('div');
  let start;
  let end;

  if (level.attributes === undefined) throw new Error('no data-id');
  const { attributes } = level;
  result.setAttribute('data-id', attributes['data-id']);

  if (level.className !== undefined) {
    [start, end] = [`<${level.tag} class="${level.className.toString()}">`, `</${level.tag}>`];
  } else if (level.attributes.attr !== undefined) {
    [start, end] = [`<${level.tag} attribute="${level.attributes.attr}">`, `</${level.tag}>`];
  } else if (level.id !== undefined) {
    [start, end] = [`<${level.tag} id="${level.id}">`, `</${level.tag}>`];
  } else {
    [start, end] = [`<${level.tag}>`, `</${level.tag}>`];
  }

  const coloredStartHtmlAsString = hljs.highlight(start, { language: 'xml' }).value;
  const startElement = document.createElement('span');
  startElement.innerHTML = coloredStartHtmlAsString;

  result.append(startElement);

  if (level.children !== undefined) {
    level.children.forEach((child) => {
      const children = parceLevelObjToHtmlViewer(child);
      result.append(children);
    });
  }

  const coloredEndHtmlAsString = hljs.highlight(end, { language: 'xml' }).value;
  const endElement = document.createElement('span');
  endElement.innerHTML = coloredEndHtmlAsString;

  result.append(endElement);
  return result;
};
