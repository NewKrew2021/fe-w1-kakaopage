/*
    [] 선택된 카테고리를 저장한다.
    [] 선택된 카테고리에 표시한다.(노란색, 진한 글씨)
    [] 메인 카테고리의 event를 등록한다.
*/

const { response } = require("express");

// name space 생성
const MAIN = {};
MAIN.URL = "http://localhost:5500";

function getCategory(type) {
    return new Promise(function(resolve, reject) {
        fetch(`${MAIN.URL}/${type}-category.json`).then(function(response) {
            resolve(response.json());
        });
    });
}

window.onload = function() {
    // main category 데이터를 받아서 그리기
    getCategory("main").then(function(category) {
        const mainCategoryDOM = document.getElementById("mainCategory");
        for(let name in category) {
            mainCategoryDOM.innerHTML += `<li class="menu"><img src="./images/${category[name]}" class="menuImage"></li>`;
        }
    });
}