import { $ } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData } from './data.js';
import { createCarouselElement } from './carousel.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

const WEBTOON_NAV_LIST = [
  { pageIndex: 0, pageName: '홈', renderFunction: null },
  { pageIndex: 1, pageName: '요일연재', renderFunction: null },
  { pageIndex: 2, pageName: '웹툰', renderFunction: null },
  { pageIndex: 3, pageName: '소년', renderFunction: null },
  { pageIndex: 4, pageName: '드라마', renderFunction: null },
  { pageIndex: 5, pageName: '로맨스', renderFunction: null },
  { pageIndex: 6, pageName: '로판', renderFunction: null },
  { pageIndex: 7, pageName: '액션무협', renderFunction: null },
  { pageIndex: 8, pageName: 'BL/GL', renderFunction: null },
];

const WEBTOON_CAROUSEL_LIST = [
  {
    image:
      'http://dn-img-page.kakao.com/download/resource?kid=chJoJc/hyLjfiEthl/g725sWc55RcZl2qZ6I5fcK',
    description: '철벽 황제를 향한 청혼 프로젝트!',
  },
];

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
  contentTag.appendChild(createCarouselElement(WEBTOON_CAROUSEL_LIST[0]));
}

export { renderWebtoonPage };
