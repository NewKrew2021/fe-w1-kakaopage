import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData, webtoonPageData, webtoonSniffetData } from './data.js';
import { renderCarousel } from './carousel.js';
import { createSniffetImage, createSniffetDescription } from './sniffet.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

const DAY_LIST_HEADER_DATA = {
  title: '요일 연재 TOP',
  subtitle: '(1,085)',
  right: '더보기 >',
};

const createWebtoonDayList = webtoonSniffetData => {
  const dayList = createNewElement('div', 'day-list', '');
  dayList.appendChild(
    createGenreNav(webtoonSniffetData.headerItemList, 'day-list__nav')
  );
  return dayList;
};

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
  // 현재는 요일별 웹툰이 고정으로 보이지만, 추후 장르 클릭에 따라 다른 화면이 나오도록 할 예정
  contentTag.appendChild(createWebtoonDayList(webtoonSniffetData));
}

export { renderWebtoonPage };
