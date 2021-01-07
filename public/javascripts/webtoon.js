import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData, webtoonPageData } from './data.js';
import { renderCarousel } from './carousel.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

function renderWebtoonPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    HEADER_NAV_CLICKED_ITEM_CLASS_NAME
  );
  contentTag.appendChild(
    createGenreNav(webtoonPageData.WEBTOON_NAV_LIST, 'webtoon-genre-nav')
  );
  const contentList = createNewElement('div', 'content__list', '');
  contentTag.appendChild(contentList);

  renderCarousel(
    0,
    '.content__list',
    webtoonPageData.WEBTOON_NAV_LIST[0].carouselList
  );
}

export { renderWebtoonPage };
