/*
    [] 선택된 카테고리를 저장한다.
    [] 선택된 카테고리에 표시한다.(노란색, 진한 글씨)
    [] 메인 카테고리의 event를 등록한다.
*/

// name space 생성
const MAIN = {};

MAIN.mainCategory = "홈";
MAIN.mainCategoryDOMs = {};

MAIN.webtoonCategory = "홈";
MAIN.webtoonCategoryDOMs = {};

MAIN.containerDOM;

window.onload = function() {
    // 슬라이드를 위해 웹툰 포스터 이미지 연결
    slide.slideDOM = document.getElementById("slide");
    slide.slideDOM.style.width = `${(slide.cnt + 2) * 720}px`;

    slide.slideDOM.appendChild(makeImageElement(slide.images[slide.cnt - 1].src, 720, 480));
    for(let img of slide.images) {
        let element = makeImageElement(img.src, 720, 480);
        slide.slideDOM.appendChild(element);
    }
    slide.slideDOM.appendChild(makeImageElement(slide.images[0].src, 720, 480));

    // slide 버튼 이벤트 등록
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", function(e) {
        prev();
        clearInterval(slide.timerId);
        slide.timerId = setInterval(next, 2000);
    })
    nextBtn.addEventListener("click", function(e) {
        next();
        clearInterval(slide.timerId);
        slide.timerId = setInterval(next, 2000);
    })

    // 현재 slide 1로 초기화
    let page = document.getElementById("page");
    page.innerHTML = `${slide.curId} / ${slide.cnt}`;

    // 3 1 2 3 1 중 두번째 1로 한칸 옮기기
    slide.slideDOM.style.transform = `translate(-720px)`;

    slide.timerId = setInterval(next, 2000);

    // main category DOM 객체 저장
    MAIN.mainCategoryDOMs = document.querySelectorAll('.menu');

    MAIN.containerDOM = document.getElementById("container");
}