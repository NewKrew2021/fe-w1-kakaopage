/*
    main.js
    탭별 슬라이드 보이기 기능, 웹툰 > navBar 클릭에 따른 div 표시기능
*/

let slideIndex = 0;
let timer;
let curSlideIndex = 0;
const MAX_SLIDE_COUNT = 2; // 슬라이드에 포함되는 최대 컨텐츠 갯수
const SLIDE_SPEED = 300;
const AUTO_SLIDE_SPEED = 300;
const SLIDE_WIDTH = 720;

/* 슬라이드쇼 버튼 이벤트 추가하기 */
const slideNextBtn = getQuery(".next");
const slidePrevBtn = getQuery(".prev");
const slideList = getQuery(".slide-list");
const slideContent = getQueryAll(".slide-content");

const firstSlide = slideList.firstElementChild;
const lastSlide = slideList.lastElementChild;
const copyFirstSlide = firstSlide.cloneNode(true);
const copyLastSlide = lastSlide.cloneNode(true);

let curSlide = slideContent[0];

// 맨 뒤에 맨 앞 슬라이드를 복사해 넣고,
// 맨 앞에 맨 뒤의 슬라이드를 복사해 넣는다.
slideList.appendChild(copyFirstSlide);
slideList.insertBefore(copyLastSlide, slideList.firstElementChild);

const slideLength = slideContent.length; // 슬라이드 이미지의 갯수

slideList.style.width = SLIDE_WIDTH * (slideLength + 2) + "px";
slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH * (curSlideIndex + 1)) + "px, 0px, 0px)";

slideNextBtn.addEventListener('click', () => {
    if (curSlideIndex <= slideLength - 1) {
        slideList.style.transition = SLIDE_SPEED + "ms";
        slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH * (curSlideIndex + 2)) + "px, 0px, 0px)";
    }
    // 마지막 슬라이드에 도달했을 경우, 맨 처음으로 돌아가게 한다.
    if (curSlideIndex == slideLength - 1) {
        setTimeout(function () {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH) + "px, 0px, 0px)";
        }, AUTO_SLIDE_SPEED);
        curSlideIndex = -1;
    }
    curSlide = slideContent[++curSlideIndex];
});
slidePrevBtn.addEventListener('click', () => {
    if (curSlideIndex >= 0) {
        slideList.style.transition = SLIDE_SPEED + "ms";
        slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH * (curSlideIndex)) + "px, 0px, 0px)";
    }
    // 첫 번째 슬라이드에 도달했을 경우, 맨 끝으로 돌아가게 한다.
    if (curSlideIndex == 0) {
        console.log(curSlideIndex);
        setTimeout(function () {
            slideList.style.transition = "0ms";
            slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH * slideLength) + "px, 0px, 0px)";
        }, AUTO_SLIDE_SPEED);
        curSlideIndex = slideLength;
    }
    curSlide = slideContent[--curSlideIndex];
});

function autoPlaySlideShow() {
    setTimeout(function () { // 초기 바로 이동을 막기 위해
        if (curSlideIndex <= slideLength - 1) {
            slideList.style.transition = SLIDE_SPEED + "ms";
            slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH * (curSlideIndex + 2)) + "px, 0px, 0px)";
        }
        // 마지막 슬라이드에 도달했을 경우, 맨 처음으로 돌아가게 한다.
        if (curSlideIndex == slideLength - 1) {
            setTimeout(function () {
                slideList.style.transition = "0ms";
                slideList.style.transform = "translate3d(-" + (SLIDE_WIDTH) + "px, 0px, 0px)";
            }, AUTO_SLIDE_SPEED);
            curSlideIndex = -1;
        }
        curSlide = slideContent[++curSlideIndex];
    }, SLIDE_SPEED*10);
    setTimeout(autoPlaySlideShow, SLIDE_SPEED * 10);
}
autoPlaySlideShow();

/* 배너 이미지 변경하기 */
var count = 0;
getElement("btn-prev").addEventListener("click", () => {
    if (count > 0) {
        count--;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
    else if (count <= 0) {
        count = MAX_SLIDE_COUNT;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
});
getElement("btn-next").addEventListener("click", () => {
    if (count < MAX_SLIDE_COUNT) {
        count++;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
    else if (count >= MAX_SLIDE_COUNT) {
        count = 0;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
});

/* [웹툰 > navBar] 클릭한 요소에 따라 컨텐츠 div 표시하기 */
function clear__show(showname) {
    slideIndex = 0;
    clearTimeout(timer);
    if (getElementsClass(showname + 'Slides').length != 0) {
        showSlides(showname + 'Slides');
    }
}
for (element of getElementsClass("webtoon-li")) {
    element.addEventListener("click", function () {
        let current = getElementsClass("c-active");
        let cur_content = getElementsClass("visible");

        /* 웹툰 > navBar 클릭 시 강조 기능 */
        current[0].className = current[0].className.replace(" c-active", "");
        this.className += " c-active";

        /* 웹툰 > navBar 클릭에 따른 컨텐츠 구현 */
        cur_content[0].className = cur_content[0].className.replace(" visible", " invisible");
        getElement(this.classList[2]).className = getElement(this.classList[2]).className.replace(" invisible", " visible");

        /* 다른 tab을 클릭하였을 경우 이미지, 텍스트 새로 로딩 */
        let show_content = this.classList[2];
        clear__show(show_content);
    })
}

/* 기능 추가 */
getElement("content-home").click();