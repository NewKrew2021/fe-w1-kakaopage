import { $, createNewElement } from './utils.js';
import { createGenreNav, changeClickedNavTab } from './genre-nav.js';
import { headerNavData } from './data.js';
import { createCarouselElement } from './carousel.js';

const HEADER_NAV_CLICKED_ITEM_CLASS_NAME = 'header-nav__item--clicked';
const HEADER_NAV_LIST_CLASS_NAME = '.header-nav__list';

const WEBTOON_NAV_LIST = [
  {
    pageIndex: 0,
    pageName: '홈',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=chJoJc/hyLjfiEthl/g725sWc55RcZl2qZ6I5fcK',
        description: '철벽 황제를 향한 청혼 프로젝트!',
      },
    ],
  },
  {
    pageIndex: 1,
    pageName: '요일연재',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=BJAXj/hyEdj6C9rD/DxkXMbZTsnUKOtrD6OO7c0',
        description: '나는 한 마리의 짐승이다',
      },
    ],
  },
  {
    pageIndex: 2,
    pageName: '웹툰',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=bnhmk3/hyLjbOwfAS/2QxIk5LV223MS7a8S9ZY70',
        description: '결코 평범할 수 없는 능력자 세계',
      },
    ],
  },
  {
    pageIndex: 3,
    pageName: '소년',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=8Tuhs/hyQ9RW1LE0/TXnfXQbObdMQqMYCGEG9EK',
        description: '기다리면 무료 런칭 이벤트',
      },
    ],
  },
  {
    pageIndex: 4,
    pageName: '드라마',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=jNTBu/hyLjekd9TC/pRP1kzBBCZdNt9wRkW3VB0',
        description: '마왕님 왜 그렇게 뿔에 집착하나요?!',
      },
    ],
  },
  {
    pageIndex: 5,
    pageName: '로맨스',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=chJoJc/hyLjfiEthl/g725sWc55RcZl2qZ6I5fcK',
        description: '철벽 황제를 향한 청혼 프로젝트!',
      },
    ],
  },
  {
    pageIndex: 6,
    pageName: '로판',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=jNTBu/hyLjekd9TC/pRP1kzBBCZdNt9wRkW3VB0',
        description: '마왕님 왜 그렇게 뿔에 집착하나요?!',
      },
    ],
  },
  {
    pageIndex: 7,
    pageName: '액션무협',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=bnhmk3/hyLjbOwfAS/2QxIk5LV223MS7a8S9ZY70',
        description: '결코 평범할 수 없는 능력자 세계',
      },
    ],
  },
  {
    pageIndex: 8,
    pageName: 'BL/GL',
    renderFunction: renderCarousel,
    carouselList: [
      {
        image:
          'http://dn-img-page.kakao.com/download/resource?kid=chJoJc/hyLjfiEthl/g725sWc55RcZl2qZ6I5fcK',
        description: '철벽 황제를 향한 청혼 프로젝트!',
      },
    ],
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
  const contentList = createNewElement('div', 'content__list', '');
  contentTag.appendChild(contentList);

  renderCarousel(0, '.content__list', WEBTOON_NAV_LIST[0].carouselList);
}

function renderCarousel(pageIndex, contentListClassName, carouselList) {
  const contentList = $(contentListClassName);
  contentList.innerHTML = '';
  contentList.appendChild(createCarouselElement(carouselList[0]));
}

export { renderWebtoonPage };
