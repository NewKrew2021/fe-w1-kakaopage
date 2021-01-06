const HEADER_NAV_LIST = ['홈', '웹툰', '웹소설', '영화', '방송', '책'];
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
      navItem
    );
    headerNavList.appendChild(navItemElement);
  });

  headerNavList.firstElementChild.classList.add(
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
};

const createGenreNav = (navItemList, navClassName) => {
  const genreNav = $(`.${navClassName}`);
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

const renderWebtoonPage = () => {
  createGenreNav(WEBTOON_NAV_LIST, 'webtoon-genre-nav');
};

const render = () => {
  renderHeaderNav();
  renderWebtoonPage();
};

window.addEventListener('DOMContentLoaded', () => render());
