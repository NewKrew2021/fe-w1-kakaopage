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

let currentPage = 0;

// util 함수
const $ = (target, parent = document) => {
  return document.querySelector(target);
};

const createNewElement = (tag, className, innerText) => {
  const newElement = document.createElement(tag);
  newElement.className = className;
  newElement.innerText = innerText;
  return newElement;
};

const deleteClassFromElement = (element, className) => {
  element.classList.remove(className);
};

// render 함수
const renderHeaderNav = () => {
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

  headerNavList.childNodes[currentPage].classList.add(
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
};

const changeClickedNavTab = pageIndex => {
  const headerNavList = $(HEADER_NAV_LIST_CLASS_NAME);
  deleteClassFromElement(
    headerNavList.childNodes[currentPage],
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
  headerNavList.childNodes[pageIndex].classList.add(
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
  currentPage = pageIndex;
};

const createGenreNav = (navItemList, navClassName) => {
  const genreNav = createNewElement('div', 'webtoon-genre-nav', '');
  const genreNavList = createNewElement('ul', 'genre-nav__list', '');

  navItemList.forEach(navItem => {
    const navItemElement = createNewElement(
      LIST_TAG,
      'genre-nav__item',
      navItem
    );
    genreNavList.appendChild(navItemElement);
  });
  genreNav.appendChild(genreNavList);
  return genreNav;
};

function renderHomePage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(pageIndex);
}

function renderWebtoonPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(pageIndex);
  contentTag.appendChild(createGenreNav(WEBTOON_NAV_LIST, 'webtoon-genre-nav'));
}

function renderWebNovelPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(pageIndex);
}

function renderMoviePage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(pageIndex);
}

function renderBroadcastingPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(pageIndex);
}

function renderBookPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(pageIndex);
}

const render = () => {
  renderHeaderNav();
};

window.addEventListener('DOMContentLoaded', () => render());
