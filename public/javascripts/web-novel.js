import { $ } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData } from './data.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

const WEB_NOVEL_NAV_LIST = [
  { pageIndex: 0, pageName: '홈', renderFunction: null },
  { pageIndex: 1, pageName: '요일연재', renderFunction: null },
  { pageIndex: 2, pageName: '웹소설', renderFunction: null },
  { pageIndex: 3, pageName: '판타지', renderFunction: null },
  { pageIndex: 4, pageName: '현판', renderFunction: null },
  { pageIndex: 5, pageName: '로맨스', renderFunction: null },
  { pageIndex: 6, pageName: '로판', renderFunction: null },
  { pageIndex: 7, pageName: '무협', renderFunction: null },
  { pageIndex: 8, pageName: '단행본', renderFunction: null },
];

function renderWebNovelPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
  contentTag.appendChild(
    createGenreNav(WEB_NOVEL_NAV_LIST, 'web-novel-genre-nav')
  );
}

export { renderWebNovelPage };
