/*
    메인 카테고리, 웹툰 카테고리 제어
    웹툰 카테고리의 container 생성

    [v] 선택된 카테고리를 저장한다.
    [v] 선택된 카테고리에 표시한다.(노란색, 진한 글씨)
    [v] 메인 카테고리의 event를 등록한다.
    [v] 웹툰 카테고리의 event를 등록한다.
*/

// name space 생성
const MAIN = {};
MAIN.URL = "http://localhost:5500";

// 선택된 카테고리, container 정보 DOM 객체로 저장
MAIN.mainCategoryDOMs;
MAIN.webtoonCategoryDOMs;

MAIN.containerDOM;

MAIN.selectedMainMenuDOM;
MAIN.selectedWebtoonMenuDOM;

MAIN.contentDOM;

MAIN.webtoons;

function getWebtoon() {
    return new Promise((resolve, reject) => {
        fetch(`${MAIN.URL}/../data/webtoon.json`).then(response => {
            resolve(response.json());
        });
    });
}

function getCategory(type) {
    return new Promise((resolve, reject) => {
        fetch(`${MAIN.URL}/../data/${type}-category.json`).then(response => {
            resolve(response.json());
        });
    });
}

function setContainer(menu) {
    if(menu != "웹툰") {
        // 웹툰 외 더미 데이터
        MAIN.containerDOM.innerHTML = `<p style="font-size:240px;text-align:center">${menu}</p>`;

        // 웹툰 외 slide 없음 event 호출 취소
        clearInterval(slide.timerId);
    }
    else {
        // 공통(navigator, slide) + content container
        MAIN.containerDOM.innerHTML = `<div class="navigator"><ul class="navigator" id="webtoonCategory"></ul></div>`;
        MAIN.containerDOM.innerHTML += `<div class="slide"><div id="slide"></div><div id="prevBtn"><img src="./images/slide_prev.svg"></div><div id="nextBtn"><img src="./images/slide_next.svg"></div><div id="page"></div></div>`;
        MAIN.containerDOM.innerHTML += `<div class="content" id="content"></div>`;
        
        // 세부 카테고리 그리기
        MAIN.webtoonCategory = document.getElementById("webtoonCategory");
        getCategory("webtoon").then(function(category) {
            for(let name in category) {
                MAIN.webtoonCategory.innerHTML += `<li class="menu2"><a>${name}</a></li>`;
            }
            MAIN.webtoonCategoryDOMs = document.querySelectorAll(".menu2");

            // default 홈(맨 왼쪽) 설정
            if(MAIN.webtoonCategoryDOMs[0] != undefined) {
                MAIN.selectedWebtoonMenuDOM = MAIN.webtoonCategoryDOMs[0];
                MAIN.selectedWebtoonMenuDOM.firstChild.style.color = "#000";
            }

            // 웹툰 카테고리 이벤트 등록
            for(let menu of MAIN.webtoonCategoryDOMs) {
                if(menu.firstChild == undefined) continue;
                menu.firstChild.addEventListener("click", function(e) {
                    MAIN.selectedWebtoonMenuDOM.firstChild.style.color = "#bbb";
                    MAIN.selectedWebtoonMenuDOM = menu;
                    MAIN.selectedWebtoonMenuDOM.firstChild.style.color = "#000";
                });
            }

            // 슬라이드
            setSlide();

            // 슬라이드 및 content DOM 객체 저장
            MAIN.contentDOM = document.getElementById("content");

            // default 홈
            setContent(MAIN.contentDOM, "웹툰 전체",MAIN.webtoons);
        });

        

        
    }
}

window.onload = function() {
    MAIN.containerDOM = document.getElementById("container");

    // 메인 카테고리 데이터를 받아서 그림, 카테고리 선택 이벤트 등록
    getCategory("main").then(function(category) {
        const mainCategoryDOM = document.getElementById("mainCategory");
        
        // 메인 카테고리 그리기
        for(let name in category) {
            mainCategoryDOM.innerHTML += `<li class="menu" id="${name}"><img src="./images/${category[name]}" class="menuImage"></li>`;
        }
        MAIN.mainCategoryDOMs = document.querySelectorAll(".menu");
        
        // default 홈(맨 왼쪽) 설정
        if(MAIN.mainCategoryDOMs[0] != undefined) {
            MAIN.selectedMainMenuDOM = MAIN.mainCategoryDOMs[0];
            MAIN.selectedMainMenuDOM.style.borderBottom = "3px solid #fd0";
            MAIN.containerDOM.innerHTML = `<p style="font-size:240px;text-align:center">${MAIN.selectedMainMenuDOM.id}</p>`;
        }
        
        // 이벤트 등록(네모 칸 안의 글자에 등록)
        for(let menu of MAIN.mainCategoryDOMs) {
            if(menu.firstChild == undefined) continue;
            menu.firstChild.addEventListener("click", function(e) {
                MAIN.selectedMainMenuDOM.style.borderBottom = "";
                MAIN.selectedMainMenuDOM = menu;
                MAIN.selectedMainMenuDOM.style.borderBottom = "3px solid #fd0";

                setContainer(menu.id);                
            });
        }

    });

    getWebtoon().then(function(webtoon) {
        MAIN.webtoons = webtoon.webtoon;
        
    });
}