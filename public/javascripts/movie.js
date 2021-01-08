import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData, moviePageData, webtoonSniffetData } from './data.js';
import { renderCarousel } from './carousel.js';
import {
  createSniffetListContent,
  createDayListHeader,
  DAY_LIST_CLASS_NAME,
} from './sniffet.js';

const CLICKED_HEADER_NAV_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';
const CLASS_NAME = {
  content: 'content',
  contentList: 'content__list',
  clickedNavItem: 'header-nav__item--clicked',
  navList: '.header-nav__list',
  genreNav: 'movie-genre-nav',
};

const createWebtoonDayList = webtoonSniffetData => {
  const dayList = createNewElement('div', DAY_LIST_CLASS_NAME.dayList, '');
  const dayListHeader = createDayListHeader();
  dayList.appendChild(dayListHeader);
  dayList.appendChild(
    createGenreNav(webtoonSniffetData.headerItemList, DAY_LIST_CLASS_NAME.nav)
  );
  dayList.appendChild(createSniffetListContent());

  return dayList;
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
  // 현재는 요일별 웹툰이 고정으로 보이지만, 추후 장르 클릭에 따라 다른 화면이 나오도록 할 예정
  contentTag.appendChild(createWebtoonDayList(webtoonSniffetData));
}

export { renderMoviePage };
