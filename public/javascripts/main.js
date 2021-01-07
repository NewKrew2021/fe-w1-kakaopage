/*
    main.js
    슬라이드 애니메이션, 웹툰 > navBar 클릭에 따른 div 표시기능
*/

let slideIndex = 0;
let timer;

/* 배너 이미지 변경하기 */
var count = 0;
getElement("btn-prev").addEventListener("click", () => {
    if (count > 0) {
        count--;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
    else if (count <= 0) {
        count = 2;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
});
getElement("btn-next").addEventListener("click", () => {
    if (count < 2) {
        count++;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
    else if (count >= 2) {
        count = 0;
        getElement("banner-img").setAttribute('src', topbannerImg[count]);
    }
});

/* [웹툰 > navBar] 클릭한 요소에 따라 컨텐츠 div 표시하기 */
for (let i = 0; i < getElementsClass("webtoon-li").length; i++) {
    getElementsClass("webtoon-li")[i].addEventListener("click", function () {
        let current = getElementsClass("c-active");
        let cur_content = getElementsClass("visible");

        /* 웹툰 > navBar 클릭 시 강조 기능 */
        current[0].className = current[0].className.replace(" c-active", "");
        this.className += " c-active";

        /* 웹툰 > navBar 클릭에 따른 컨텐츠 구현 */
        cur_content[0].className = cur_content[0].className.replace(" visible", " invisible");
        getElement(this.classList[2]).className = getElement(this.classList[2]).className.replace(" invisible", " visible");

        /* 클릭 후 이미지, 텍스트 로딩 */
        let show_content = this.classList[2];

        /* 홈 tab */
        if (show_content == "home") {   
            slideIndex = 0;
            clearTimeout(timer);
            showSlides('homeSlides'); 
        }
        /* 요일연재 tab */
        else if (show_content == "day") { 
            slideIndex = 0;
            clearTimeout(timer);
            showSlides('daySlides'); 
        }
    })
}

/* 기능 추가 */
getElement("content-home").click();