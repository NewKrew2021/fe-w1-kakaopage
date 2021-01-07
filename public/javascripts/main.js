import { $, createNewElement, deleteClassFromElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData } from './data.js';

const HEADER_NAV_LIST = [
  { pageIndex: 0, pageName: '홈', renderFunction: renderHomePage },
  { pageIndex: 1, pageName: '웹툰', renderFunction: renderWebtoonPage },
  { pageIndex: 2, pageName: '웹소설', renderFunction: renderWebNovelPage },
  { pageIndex: 3, pageName: '영화', renderFunction: renderMoviePage },
  { pageIndex: 4, pageName: '방송', renderFunction: renderBroadcastingPage },
  { pageIndex: 5, pageName: '책', renderFunction: renderBookPage },
];

const WEBTOON_NAV_LIST = [
  '홈',
  '요일연재',
  '웹툰',
  '소년',
  '드라마',
  '로맨스',
  '로판',
  '액션무협',
  'BL/GL',
];

const HEADER_NAV_ITEM_CLASS_NAME = 'header-nav__item';
const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const LIST_TAG = 'li';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

// render 함수
const renderHeaderNav = headerNavData => {
  const headerNavList = $(HEADER_NAV_LIST_CLASS_NAME);

  HEADER_NAV_LIST.forEach(navItem => {
    const navItemElement = createNewElement(
      LIST_TAG,
      HEADER_NAV_ITEM_CLASS_NAME,
      navItem.pageName
    );
    navItemElement.addEventListener('click', () => {
      navItem.renderFunction(navItem.pageIndex);
    });
    headerNavList.appendChild(navItemElement);
  });

  headerNavList.childNodes[headerNavData.currentPage].classList.add(
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
};

function renderHomePage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
}

function renderWebtoonPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
  contentTag.appendChild(createGenreNav(WEBTOON_NAV_LIST, 'webtoon-genre-nav'));
}

function renderWebNovelPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
}

function renderMoviePage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
}

function renderBroadcastingPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
}

function renderBookPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
}

const render = () => {
  renderHeaderNav(headerNavData);
};

window.addEventListener('DOMContentLoaded', () => render());
