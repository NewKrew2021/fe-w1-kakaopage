/*
    [] 선택된 카테고리를 저장한다.
    [] 선택된 카테고리에 표시한다.(노란색, 진한 글씨)
    [] 메인 카테고리의 event를 등록한다.
*/

// name space 생성
const MAIN = {};
MAIN.URL = "http://localhost:5500";

MAIN.mainCategory = {
    currentMenu: "홈",
    kinds : ["홈", "웹툰", "웹소설", "영화", "방송", "책"],
    DOMs : undefined
}
MAIN.webtoonCategory = {
    currentMenu: "홈",
    kinds : ["홈", "요일연재", "웹툰", "소년", "드라마", "로맨스", "로판", "액션무협", "BL/GL"],
    DOMs : undefined
}

MAIN.containerDOM;

function getCategory(type) {
    return new Promise(function(resolve, reject) {
        fetch(`${MAIN.URL}/${type}-category.json`).then(function(response) {
            resolve(response.json());
        });
    });
}
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

    MAIN.mainCategory.DOMs = document.querySelectorAll('.menu');
    MAIN.containerDOM = document.getElementById("container");
    
    getCategory("main").then(function(category) {
        const mainCategoryDOM = document.getElementById("mainCategory");
        for(let name in category) {
            mainCategoryDOM.innerHTML += `<li class="menu"><img src="./images/${category[name]}" class="menuImage"></li>`;
        }
    });
}