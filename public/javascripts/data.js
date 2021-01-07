import { renderCarousel } from './carousel.js';

const headerNavData = { currentPage: 0 };
const webtoonPageData = {
  currentPage: 0,
  WEBTOON_NAV_LIST: [
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
  ],
};

const webtoonSniffetData = {
  headerItemList: [
    {
      pageIndex: 0,
      pageName: '월',
      renderFunction: renderCarousel,
      carouselList: [
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
        {
          sniffetTitle: '롱리브더킹',
          sniffetViewCount: '235만명',
          sniffetImageSrc:
            'http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2',
          sniffetImageDetail: 'TOP',
        },
      ],
    },
    {
      pageIndex: 0,
      pageName: '화',
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
      pageIndex: 0,
      pageName: '수',
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
      pageIndex: 0,
      pageName: '목',
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
      pageIndex: 0,
      pageName: '금',
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
      pageIndex: 0,
      pageName: '토',
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
      pageIndex: 0,
      pageName: '일',
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
      pageIndex: 0,
      pageName: '완결',
      renderFunction: renderCarousel,
      carouselList: [
        {
          image:
            'http://dn-img-page.kakao.com/download/resource?kid=chJoJc/hyLjfiEthl/g725sWc55RcZl2qZ6I5fcK',
          description: '철벽 황제를 향한 청혼 프로젝트!',
        },
      ],
    },
  ],
};

const sniffetDataListText = `
<div class="sniffet-list">
  <div class="sniffet">
    <div class="sniffet-image">
      <img
        src="http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"
        class="sniffet-image__image"
      />
      <div class="sniffet-image__detail">TOP</div>
    </div>
    <div class="sniffet-description">
      <p class="sniffet-title">롱리브더킹</p>
      <p class="sniffet-view-count">235만명</p>
    </div>
  </div>
  <div class="sniffet">
    <div class="sniffet-image">
      <img
        src="http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"
        class="sniffet-image__image"
      />
      <div class="sniffet-image__detail">TOP</div>
    </div>
    <div class="sniffet-description">
      <p class="sniffet-title">롱리브더킹</p>
      <p class="sniffet-view-count">235만명</p>
    </div>
  </div>
  <div class="sniffet">
    <div class="sniffet-image">
      <img
        src="http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"
        class="sniffet-image__image"
      />
      <div class="sniffet-image__detail">TOP</div>
    </div>
    <div class="sniffet-description">
      <p class="sniffet-title">롱리브더킹</p>
      <p class="sniffet-view-count">235만명</p>
    </div>
  </div>
  <div class="sniffet">
    <div class="sniffet-image">
      <img
        src="http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"
        class="sniffet-image__image"
      />
      <div class="sniffet-image__detail">TOP</div>
    </div>
    <div class="sniffet-description">
      <p class="sniffet-title">롱리브더킹</p>
      <p class="sniffet-view-count">235만명</p>
    </div>
  </div>
  <div class="sniffet">
    <div class="sniffet-image">
      <img
        src="http://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"
        class="sniffet-image__image"
      />
      <div class="sniffet-image__detail">TOP</div>
    </div>
    <div class="sniffet-description">
      <p class="sniffet-title">롱리브더킹</p>
      <p class="sniffet-view-count">235만명</p>
    </div>
  </div>
</div>
`;

export {
  headerNavData,
  webtoonPageData,
  webtoonSniffetData,
  sniffetDataListText,
};
