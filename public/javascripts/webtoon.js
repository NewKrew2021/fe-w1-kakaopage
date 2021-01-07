import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import {
  headerNavData,
  webtoonPageData,
  webtoonSniffetData,
  sniffetDataListText,
} from './data.js';
import { renderCarousel } from './carousel.js';
import { createSniffetImage, createSniffetDescription } from './sniffet.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

const DAY_LIST_HEADER_DATA = {
  title: '요일 연재 TOP',
  subtitle: '(1,085)',
  right: '더보기 >',
};

const createSniffetListContent = () => {
  const dayListContent = createNewElement('div', 'day-list__content', '');
  dayListContent.innerHTML = sniffetDataListText + sniffetDataListText;
  return dayListContent;
};

const createDayListHeader = dayListHeaderData => {
  const dayListHeader = createNewElement('div', 'day-list__header', '');
  const dayListHeaderLeft = createNewElement(
    'div',
    'day-list__header-left',
    ''
  );
  const dayListHeaderRight = createNewElement(
    'div',
    'day-list__header-right',
    dayListHeaderData.right
  );
  dayListHeaderLeft.appendChild(
    createNewElement(
      'p',
      'day-list__header-left-title',
      dayListHeaderData.title
    )
  );
  dayListHeaderLeft.appendChild(
    createNewElement(
      'p',
      'day-list__header-left-subtitle',
      dayListHeaderData.subtitle
    )
  );
  dayListHeader.appendChild(dayListHeaderLeft);
  dayListHeader.appendChild(dayListHeaderRight);
  return dayListHeader;
};

const createWebtoonDayList = webtoonSniffetData => {
  const dayList = createNewElement('div', 'day-list', '');
  const dayListHeader = createDayListHeader(DAY_LIST_HEADER_DATA);
  dayList.appendChild(dayListHeader);
  dayList.appendChild(
    createGenreNav(webtoonSniffetData.headerItemList, 'day-list__nav')
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
