import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData, moviePageData } from './data.js';
import { renderCarousel } from './carousel.js';

const CLICKED_HEADER_NAV_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';
const CLASS_NAME = {
  content: 'content',
  contentList: 'content__list',
  clickedNavItem: 'header-nav__item--clicked',
  navList: '.header-nav__list',
  genreNav: 'movie-genre-nav',
};

function renderMoviePage(pageIndex) {
  const contentTag = $(`.${CLASS_NAME.content}`);
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    CLICKED_HEADER_NAV_ITEM_CLASS_NAME
  );
  contentTag.appendChild(
    createGenreNav(moviePageData.WEBTOON_NAV_LIST, CLASS_NAME.genreNav)
  );
  const contentList = createNewElement('div', CLASS_NAME.contentList, '');
  contentTag.appendChild(contentList);

  renderCarousel(
    0,
    CLASS_NAME.contentList,
    moviePageData.WEBTOON_NAV_LIST[0].carouselList
  );
}

export { renderMoviePage };
