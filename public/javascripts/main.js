const HEADER_NAV_LIST = [
  { pageName: '홈', renderFunction: renderHomePage },
  { pageName: '웹툰', renderFunction: renderWebtoonPage },
  { pageName: '웹소설', renderFunction: renderWebNovelPage },
  { pageName: '영화', renderFunction: renderMoviePage },
  { pageName: '방송', renderFunction: renderBroadcastingPage },
  { pageName: '책', renderFunction: renderBookPage },
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
      navItem.renderFunction();
    });
    headerNavList.appendChild(navItemElement);
  });

  headerNavList.firstElementChild.classList.add(
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
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

function renderHomePage() {
  const contentTag = $('.content');
  contentTag.innerText = '';
}

function renderWebtoonPage() {
  const contentTag = $('.content');
  contentTag.innerText = '';
  contentTag.appendChild(createGenreNav(WEBTOON_NAV_LIST, 'webtoon-genre-nav'));
}

function renderWebNovelPage() {
  const contentTag = $('.content');
  contentTag.innerText = '';
}

function renderMoviePage() {
  const contentTag = $('.content');
  contentTag.innerText = '';
}

function renderBroadcastingPage() {
  const contentTag = $('.content');
  contentTag.innerText = '';
}

function renderBookPage() {
  const contentTag = $('.content');
  contentTag.innerText = '';
}

const render = () => {
  renderHeaderNav();
};

window.addEventListener('DOMContentLoaded', () => render());
