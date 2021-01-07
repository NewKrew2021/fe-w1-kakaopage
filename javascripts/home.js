/*
    홈 메뉴를 클릭했을 때 content를 추가한다.

    [v] 모든 웹툰을 보여준다.
*/

function makeWebtoonElement(webtoon) {
    let element = document.createElement("div");
    element.className = "webtoon";
    element.innerHTML = `<div id="imgBox"><img id="webtoonImage" src="../webtoon-images/${webtoon.src}"></div>`;
    element.innerHTML += `<div id="webtoonInfo"><div class="title">${webtoon.title}
            <div class="webtoonAInfo"><img src="../images/subscriber.png"> ${(webtoon.subscriber / 10000.0).toFixed(1)}만명 | ${webtoon.author}</div>
            <div class="webtoonAInfo">${webtoon.day} 연재</div>
            <div class="webtoonAInfo">${webtoon.description}</div>
            </div></div>`;
    return element;
}

function webtoonFilter(webtoons, condition) {
    if(condition == null) return webtoons;
    let ret = [];
    for(let webtoon of webtoons) {
        let select = true;
        for(let key in condition) {
            if(webtoon[key] != condition[key]) {
                select = false;
                break;
            } 
        }
        if(select == true) ret.push(webtoon);
    }
    return ret;
}

function setContent(contentDOM, subject, webtoons) {
    contentDOM.innerHTML = `<div id="subject">${subject}</div>`;
    if(contentDOM == undefined) return;
    for(let webtoon of webtoons) {
        let element = makeWebtoonElement(webtoon);
        contentDOM.appendChild(element);
    }
}