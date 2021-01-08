/*
    util.js
    유틸성 함수 목록
    자주 사용하는 함수 간소화, 슬라이드 애니메이션 함수, 배너 이미지 변경 함수, json 파일 읽는 함수,
    반복되는 그리드를 그리는 함수, 요일 선택에 따라 변화시키는 함수
*/

/* 자주 사용하는 함수 간소화 */
function getElement(id){
    return document.getElementById(id);
}
function creElement(id){
    return document.createElement(id);
}
function getElementsClass(className){
    return document.getElementsByClassName(className);
}
function getQueryAll(node){
    return document.querySelectorAll(node);
}
/* [웹툰] 슬라이드 애니메이션 함수 */
function showSlides(slidename) {
    let slides = getElementsClass(slidename);
    for (element of slides){
        element.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    slides[slideIndex-1].style.display = "block";  
    timer = setTimeout(showSlides, intervalTime, slidename); // 3초마다 이미지 변경
}
/* .js에서 json 파일을 읽는 함수 */
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
/* navBar 클릭한 요소만 밑줄 강조하는 등록 함수 */
function addBorderOnClicked(element){
    getQueryAll("li."+element).forEach(function(node, i){
        node.addEventListener("click", function() {
            let current = getElementsClass(element+ " active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    });
}
/* 반복되는 그리드에 썸네일 데이터를 넣는 등록 함수 */
function addDayGridData(jsonFile, parent, daynum) {
    /* json 파일 읽기 */
    let json;
    readTextFile(jsonFile, function (text) {
        json = JSON.parse(text);

        const parentNode = getElement(parent);
        while (parentNode.hasChildNodes()) {
            parentNode.removeChild(parentNode.firstChild);
        }
        // 컨텐츠 추가
        json.data[daynum].item.forEach(function(data, i){
            let div_wrapper = document.createElement("div");
            let div_thumb = document.createElement("div");
            div_wrapper.className = "mg-top-10";
            div_wrapper.style = "width: 120px";
            div_thumb.className = "thumb";
            let thumb_img = document.createElement("img");
            thumb_img.setAttribute("src", json.data[daynum].item[i].image);

            let div_thumb_btm = document.createElement("div");
            div_thumb_btm.className = "thumb-bottom bottom flex";
            let div_flex = document.createElement("div");
            div_flex.className = "flex";
            let div_flex_btm = document.createElement("div");
            div_flex_btm.className = "yellow font-18 mg-left-5 mg-top-3";

            if(json.data[daynum].item[i].s_img != null){
                div_flex_btm.innerHTML = "<img src = '/images/star.svg'>";
            }
            div_flex_btm.innerHTML += json.data[daynum].item[i].rank; // top
            let clock_img = document.createElement("img");
            clock_img.setAttribute("src", json.data[daynum].item[i].c_img);

            let div_title = document.createElement("div");
            div_title.className = "text-ellipsis bottom mg-top-25 letter-spacing";
            div_title.innerHTML = json.data[daynum].item[i].title;
            let div_title_btm = document.createElement("div");
            div_title_btm.className = "bottom";
            let div_title_btm2 = document.createElement("div");
            div_title_btm2.className = "flex mg-top-3";

            let people_img = document.createElement("img");

            people_img.setAttribute("src", json.data[daynum].item[i].p_img);

            let div_count = document.createElement("div");
            div_count.className = "font-15 gray";
            div_count.innerHTML = json.data[daynum].item[i].count;

            parentNode.appendChild(div_wrapper);
            div_wrapper.appendChild(div_thumb);
            div_thumb.appendChild(thumb_img);
            div_thumb.appendChild(div_thumb_btm);
            div_thumb_btm.appendChild(div_flex);
            div_flex.appendChild(div_flex_btm);
            div_thumb_btm.appendChild(clock_img);

            div_wrapper.appendChild(div_title);
            div_wrapper.appendChild(div_title_btm);
            div_title_btm.appendChild(div_title_btm2);
            div_title_btm2.appendChild(people_img);
            div_title_btm2.appendChild(div_count);
        });
    });
}
/* 선택한 요일에 따라 컨텐츠 변화시키는 등록 함수 */
function showDayContent(jsonFile, parent, clickedLI) {
    for (element of getQueryAll("li."+clickedLI)){
        element.addEventListener("click", function () {
            const daynum = Number(this.getAttribute("tab"));
            ADD_DAY_GRID_DATA(jsonFile, parent, daynum);
        });
    }
}
