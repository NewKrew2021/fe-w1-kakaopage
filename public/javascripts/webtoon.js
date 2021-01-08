import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData, webtoonPageData, webtoonSniffetData } from './data.js';
import { renderCarousel } from './carousel.js';
import {
  createSniffetListContent,
  createDayListHeader,
  DAY_LIST_CLASS_NAME,
} from './sniffet.js';

const CLICKED_HEADER_NAV_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

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

function renderWebtoonPage(pageIndex) {
  const contentTag = $('.content');
  contentTag.innerText = '';
  changeClickedNavTab(
    headerNavData,
    pageIndex,
    HEADER_NAV_LIST_CLASS_NAME,
    CLICKED_HEADER_NAV_ITEM_CLASS_NAME
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
  // 현재는 요일별 웹툰이 고정으로 보이지만, 추후 장르 클릭에 따라 다른 화면이 나오도록 할 예정
  contentTag.appendChild(createWebtoonDayList(webtoonSniffetData));
}

export { renderWebtoonPage };
