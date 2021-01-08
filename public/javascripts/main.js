/*
    main.js
    슬라이드 애니메이션, 웹툰 > navBar 클릭에 따른 div 표시기능
*/

let slideIndex = 0;
let timer;
const MAX_SLIDE_COUNT = 2; // 슬라이드에 포함되는 최대 컨텐츠 갯수

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
function clear__show(showname){
    slideIndex = 0;
    clearTimeout(timer);
    if(getElementsClass(showname+'Slides').length != 0){
        showSlides(showname+'Slides');
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