import { $ } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData } from './data.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

const WEB_NOVEL_NAV_LIST = [
  '홈',
  '요일연재',
  '웹소설',
  '판타지',
  '현판',
  '로맨스',
  '로판',
  '무협',
  '단행본',
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
