import 'highlight.js/scss/atom-one-dark-reasonable.scss';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import type { ILevelParams } from '../../types/types';

hljs.registerLanguage('xml', xml);

export const parsedNodeHtml: HTMLElement[] = [];

export const parseLevelObjToHtmlViewer = (level: ILevelParams): HTMLElement => {
  const result = document.createElement('div');
  let start;
  let end;

  if (level.attributes === undefined) throw new Error('no data-id');
  const { attributes } = level;
  result.dataset.id = attributes['data-id'];

  if (level.className !== undefined) {
    [start, end] = [`<${level.tag} class="${level.className.toString()}">`, `</${level.tag}>`];
  } else if (level.attributes.attr !== undefined) {
    [start, end] = [`<${level.tag} attribute="${level.attributes.attr}">`, `</${level.tag}>`]; // TODO: fix
  } else if (level.id !== undefined) {
    [start, end] = [`<${level.tag} id="${level.id}">`, `</${level.tag}>`];
  } else {
    [start, end] = [`<${level.tag}>`, `</${level.tag}>`];
  }

  const startElement = document.createElement('span');
  result.append(startElement);
  const coloredStartHtmlAsString = hljs.highlight(start, { language: 'xml' }).value;
  startElement.outerHTML = coloredStartHtmlAsString;

  if (level.children !== undefined) {
    level.children.forEach((child) => {
      result.append(parseLevelObjToHtmlViewer(child));
    });
  }

  const endElement = document.createElement('span');
  result.append(endElement);
  const coloredEndHtmlAsString = hljs.highlight(end, { language: 'xml' }).value;
  endElement.outerHTML = coloredEndHtmlAsString;

  const clone = result.cloneNode(true);
  if (clone instanceof HTMLElement) {
    parsedNodeHtml.push(clone);
  }

  return result;
};
