(function() {const options = document.querySelectorAll('.genre-navbar > ul > li');
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', (e) => {
        resetGenreNavbar();
        e.target.className = "selected";
        resetGenreContents();
        renderGenreContents(e.target.id);
    })
}

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
        genreContent.appendChild(generateContentElement(contentStruct[i], {}));
    }
    return genreContent;
}

const BANNER_SLIDESHOW = 0;
const BUTTONS = 1;
const AD_SLIDESHOW = 2;
const CARDBOX_DAILY_TOP = 3;
const CARDBOX = 4;
const TWO_BANNER_BOX = 5;
const CARD_SCROLL_DAILY = 6;

const genreContentStruct = {
    "home": [
        // BANNER_SLIDESHOW,
        // BUTTONS,
        // AD_SLIDESHOW,
        CARDBOX_DAILY_TOP,
        CARDBOX,
        // TWO_BANNER_BOX
    ],
    "daily": [
        // BANNER_SLIDESHOW,
        // CARD_SCROLL_DAILY,
    ],
    "webtoon": [

    ],
}

function getGenreContentStruct(genre) {
    return genreContentStruct[genre];
}

function generateContentElement(contentType, data) {
    const content = document.createElement('div');
    content.className = "content-box"
    switch (contentType) {
        // case BANNER_SLIDESHOW:
            // content.innerHTML=
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
                        <li>월</li>
                        <li>화</li>
                        <li>수</li>
                        <li>목</li>
                        <li>금</li>
                        <li>토</li>
                        <li>일</li>
                        <li>완결</li>
                    </ul>
                </div>
                <div class="content-box__card-group"></div>
            </div>`;
            const dailycardGroupElement = content.querySelector('.content-box__card-group');
            for (let i = 0; i < 10; i++) {
                const card = document.createElement("div");
                card.innerHTML=`<div class="card-container">
                    <div class="card">
                        <img src="//dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&amp;filename=th2" data-src="//dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&amp;filename=th2" alt="롱리브더킹" draggable="false">
                        <div class="card-footer">
                            <span>TOP</span>
                            <!-- <img src="https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119"> -->
                            <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf">
                        </div>
                    </div>
                    <div class="title">기이이이이이이이인제목</div>
                    <img class="viewers-icon" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="인원수">
                    <div class="viewers">
                        126만명
                    </div>
                </div>`
                dailycardGroupElement.appendChild(card);
            }
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
                const card = document.createElement("div");
                card.innerHTML=`<div class="card-container">
                    <div class="card">
                        <img src="//dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&amp;filename=th2" data-src="//dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&amp;filename=th2" alt="롱리브더킹" draggable="false">
                        <div class="card-footer">
                            <span>TOP</span>
                            <!-- <img src="https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119"> -->
                            <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf">
                        </div>
                    </div>
                    <div class="title">기이이이이이이이인제목</div>
                    <img class="viewers-icon" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="인원수">
                    <div class="viewers">
                        126만명
                    </div>
                </div>`
                cardGroupElement.appendChild(card);
            }
            
        default:
            break;
        }
    return content;
}
})()