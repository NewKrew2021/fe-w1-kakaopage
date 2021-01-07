/*
    [] 선택된 카테고리를 저장한다.
    [] 선택된 카테고리에 표시한다.(노란색, 진한 글씨)
    [] 메인 카테고리의 event를 등록한다.
*/

// name space 생성
const MAIN = {};
MAIN.URL = "http://localhost:5500";

MAIN.mainCategoryDOMs;
MAIN.containerDOM; // DOM 객체로 저장

MAIN.selectedMainMenu; // DOM 객체로 저장

function getCategory(type) {
    return new Promise((resolve, reject) => {
        fetch(`${MAIN.URL}/../data/${type}-category.json`).then(response => {
            resolve(response.json());
        });
    });
}

function drawMenu(menu) {
    if(menu.toString() != "웹툰") {
        MAIN.containerDOM.innerHTML = menu;
        return;
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
        
        // default 홈 설정
        if(MAIN.mainCategoryDOMs[0] != undefined) {
            MAIN.mainCategoryDOMs[0].style.borderBottom = "3px solid #fd0";
            MAIN.selectedMainMenu = MAIN.mainCategoryDOMs[0];
        }
        
        // 이벤트 등록(네모 칸 안의 글자에 등록)
        for(let menu of MAIN.mainCategoryDOMs) {
            if(menu.firstChild == undefined) continue;
            menu.firstChild.addEventListener("click", function(e) {
                MAIN.selectedMainMenu.style.borderBottom = "";
                MAIN.selectedMainMenu = menu;
                MAIN.selectedMainMenu.style.borderBottom = "3px solid #fd0";

                drawMenu(menu.id);                
            });
        }

    });

    
}