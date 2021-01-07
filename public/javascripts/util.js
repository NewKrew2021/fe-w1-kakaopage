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

/* 반복되는 그리드에 썸네일 데이터를 넣는 함수 */
function ADD_DAY_GRID_DATA(jsonFile, parent, daynum) {
    /* json 파일 읽기 */
    let json;
    readTextFile(jsonFile, function (text) {
        json = JSON.parse(text);

        const parentNode = getElement(parent);
        while (parentNode.hasChildNodes()) {
            parentNode.removeChild(parentNode.firstChild);
        }
        // 컨텐츠 추가
        for (let i = 0; i < json.data[daynum].item.length; i++) {
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
            div_flex_btm.innerHTML = json.data[daynum].item[i].rank; // top

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
        }
    });
}

/* 선택한 요일에 따라 컨텐츠 변화시키는 함수 */
function SHOW_DAY_CONTENT(jsonFile, parent, clickedLI) {
    for (let i = 0; i < getQueryAll("li." + clickedLI).length; i++) {
        getQueryAll("li." + clickedLI)[i].addEventListener("click", function () {
            const daynum = Number(this.getAttribute("tab"));
            ADD_DAY_GRID_DATA(jsonFile, parent, daynum);
        });
    }
}

/* [웹툰 > 홈 > 요일 연재 TOP] 기능 등록 */
ADD_DAY_GRID_DATA("../data/daytop.json", "daytop-div-row1", 0);
SHOW_DAY_CONTENT("../data/daytop.json", "daytop-div-row1", "daytop-li");
