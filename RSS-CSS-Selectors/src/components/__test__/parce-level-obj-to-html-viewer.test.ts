import type { IParams } from '../../types/types';
import { parseLevelObjToHtmlViewer } from '../util/parce-level-obj-to-html-viewer';

jest.mock('highlight.js/scss/atom-one-dark-reasonable.scss', () => {});

describe('parseLevelObjToHtmlViewer', () => {
  it('returns a div element with correct innerHTML', () => {
    const levelObj: IParams = {
      tag: 'box',
      attributes: {
        'data-id': '4',
      },
      children: [
        {
          tag: 'horseshoe',
          attributes: {
            'data-id': '5',
            'data-target': 'true',
          },
        },
      ],
    };

    const result = parseLevelObjToHtmlViewer(levelObj);

    expect(result.tagName).toBe('DIV');
    expect(result.outerHTML).toMatchInlineSnapshot('"<div data-id="4"><span class="hljs-tag">&lt;<span class="hljs-name">box</span>&gt;</span><div data-id="5"><span class="hljs-tag">&lt;<span class="hljs-name">horseshoe</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">horseshoe</span>&gt;</span></div><span class="hljs-tag">&lt;/<span class="hljs-name">box</span>&gt;</span></div>"');
  });

  it('throws an error when attributes are undefined', () => {
    const levelObj = {
      tag: 'h1',
      children: [],
    };

    expect(() => {
      parseLevelObjToHtmlViewer(levelObj);
    }).toThrow('no data-id');
  });
});
