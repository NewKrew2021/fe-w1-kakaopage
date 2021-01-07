const genreData = {};
const EVENT_DAY_NAVBAR_LOADED = "dayNavbarLoaded";

(function() {

    const BANNER_SLIDESHOW = 0;
    const BUTTONS = 1;
    const AD_SLIDESHOW = 2;
    const CARDBOX_DAILY_TOP = 3;
    const CARDBOX = 4;
    const TWO_BANNER_BOX = 5;
    const CARD_SCROLL_DAILY = 6;

    const genreContentStruct = {
        "home": [
            BANNER_SLIDESHOW,
            // BUTTONS,
            // AD_SLIDESHOW,
            CARDBOX_DAILY_TOP,
            CARDBOX,
            // TWO_BANNER_BOX
        ],
        "daily": [
            BANNER_SLIDESHOW,
            // CARD_SCROLL_DAILY,
        ],
        "webtoon": [

        ],
    }
    const options = document.querySelectorAll('.genre-navbar > ul > li');
    (function() {
        options[0].className = "selected";
        resetGenreContents();
        renderGenreContents("home");
        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener('click', (e) => {
                resetGenreNavbar();
                e.target.className = "selected";
                resetGenreContents();
                renderGenreContents(e.target.id);
            })
        }
    })()

    function resetGenreNavbar() {
        for (let i = 0; i < options.length; i++) {
            options[i].className = "";
        }
    }

    function resetGenreContents() {
        const contents = document.querySelector('.container > .container__contents');
        contents.innerHTML = '';
    }

    function renderGenreContents(genre) {
        const contents = document.querySelector('.container > .container__contents');
        const genreContent = createGenreContentNode(genre);
        contents.appendChild(genreContent);
    }

    function createGenreContentNode(genre) {
        const genreContent = document.createElement("div");
        const contentStruct = getGenreContentStruct(genre);
        for (let i = 0; i < contentStruct.length; i++) {
            genreContent.appendChild(generateContentElement(contentStruct[i], genreData));
        }
        return genreContent;
    }

    function getGenreContentStruct(genre) {
        return genreContentStruct[genre];
    }

    function generateContentElement(contentType, data) {
        const content = document.createElement('div');
        content.className = "content-box"
        switch (contentType) {
            case BANNER_SLIDESHOW:
                content.innerHTML=`<img src="//dn-img-page.kakao.com/download/resource?kid=SSWdU/hyQ9OzbbQK/rMxp2Vnwp722KYMe1griR0" data-src="//dn-img-page.kakao.com/download/resource?kid=SSWdU/hyQ9OzbbQK/rMxp2Vnwp722KYMe1griR0" alt="마족의 계약" draggable="false" class="jsx-922166243" style="width: 720px; display: block;">`;
                break;
            case CARDBOX_DAILY_TOP:
                content.innerHTML = `<div class="content-box">
                    <div class="content-box__header">
                        <div class="content-box__header__title">
                            요일 연재 TOP
                        </div>
                        <div class="content-box__header__more">
                            더보기
                            <img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e" class="css-fvmobz">
                        </div>
                    </div>
                    <div class="content-box__day-navbar">
                        <ul>
                            <li class="selected">월</li>
                            <li>화</li>
                            <li>수</li>
                            <li>목</li>
                            <li>금</li>
                            <li>토</li>
                            <li>일</li>
                            <li>완결</li>
                        </ul>
                    </div>
                    <div class="content-box__day-card-group"></div>
                </div>`;


                const dailycardGroupElement = content.querySelector('.content-box__day-card-group');

                for (let i = 0; i < 10; i++) {
                    const card = Card.create(dailyTopData[0][i]);
                    dailycardGroupElement.appendChild(card);
                }
                (function renderDayNavbar() {
                    
                    const dayOptions = content.querySelectorAll('.content-box__day-navbar > ul > li');
                    (function() {
                        for (let i = 0; i < dayOptions.length; i++) {
                            dayOptions[i].addEventListener('click', (e) => {
                                resetDayNavbar();
                                e.target.className = "selected";
                                resetCards();
                                renderCards(dailyTopData[i])
                            })
                        }
                    })()
                    
                    function resetDayNavbar() {
                        for (let i = 0; i < dayOptions.length; i++) {
                            dayOptions[i].className = "";
                        }
                    }
                    
                    function resetCards() {
                        const cardGroup = document.querySelector('.content-box__day-card-group');
                        cardGroup.innerHTML = '';
                    }
                    
                    function renderCards (data) {
                        const cardGroup = document.querySelector('.content-box__day-card-group');
                        for (let i = 0; i < 10; i++) {
                            const card = Card.create(data[i]);
                            cardGroup.appendChild(card);
                        }
                    }
                }
                )()

                break;
            case CARDBOX:
                content.innerHTML = `<div class="content-box">
                    <div class="content-box__header">
                        <div class="content-box__header__title">
                            로맨스 TOP
                        </div>
                        <div class="content-box__header__more">
                            더보기
                            <img src="https://static-page.kakao.com/static/common/ic-more-gray.svg?639494b81c8127013d0e627243aee94e" class="css-fvmobz">
                        </div>
                    </div>
                    <div class="content-box__card-group"></div>
                </div>`;
                const cardGroupElement = content.querySelector('.content-box__card-group');
                for (let i = 0; i < 5; i++) {
                    const card = Card.create(dailyTopData[0][i]);
                    cardGroupElement.appendChild(card);
                }
                
            default:
                break;
            }
        return content;
    }
})()