import { $ } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData } from './data.js';
import { createCarouselElement } from './carousel.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

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
