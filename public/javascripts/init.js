/*
    init.js
    > 렌더링 직후 바로 초기화 해야 하는 것들
*/
const topbannerImg = ['/images/banner1.png', '/images/banner2.png', '/images/banner3.png'];

/* 매직 넘버 */
const intervalTime = 2400;

/* [공통] 공통 top_nav에 항목 추가 */
(function(){
    const nav_list = [
        { name : "홈", img : "https://static-page.kakao.com/static/pc/menu_home.svg?fac7abe73b67dd1eb997d70a2c52d4d0" },
        { name : "웹툰", img : "https://static-page.kakao.com/static/pc/menu_toon.svg?42b75d406ec543b2fcf64e35287f0724" },
        { name : "웹소설", img : "https://static-page.kakao.com/static/pc/menu_novel.svg?296e815be15f5e5edcdddb865f9863cd" },
        { name : "영화", img : "https://static-page.kakao.com/static/pc/menu_vod.svg?0df7689ed8c083054bd9949aed77c589" },
        { name : "방송", img : "https://static-page.kakao.com/static/pc/menu_broadcast.svg?a6b4779526f1fa5dbeb1516607770b16" },
        { name : "책", img : "https://static-page.kakao.com/static/pc/menu_book.svg?8fd0c5dc69d357fa23dd953d3b7e71aa" },
    ];
    const top_nav = getElement('top-nav-ul');
    for(var i = 0; i < nav_list.length; i++){
        let node = getElementsClass("nav-dummy");
        node[i].innerHTML = '<a><img src = '+nav_list[i].img+'></a>';
    }
})();

/* [공통] top_nav의 웹툰 탭 이외에는 더미 페이지가 보이게 하기 */
(function(){
    const top_nav_li = getElementsClass("nav-dummy");
    for(let i = 0; i < top_nav_li.length; i++){
        if(top_nav_li[i].classList.contains("webtoon")){
            top_nav_li[i].addEventListener("click",()=>{
                getElement("contents").style.display = 'block';
                getElement("blank").style.display = 'none';
            });
        } else{
            top_nav_li[i].addEventListener("click",()=>{
                getElement("contents").style.display = 'none';
                getElement("blank").style.display = 'block';
            })
        }
    }
})();

/* [웹툰 탭] navBar 요소 추가 */
(function(){
    const webtoon_ul = getElement("webtoon-nav");
    const tabtext = [['홈','home'],['요일연재','day'],['웹툰','webtoon'],
    ['소년','boy'],['드라마','drama'],['로맨스','romance'],['로판','fantasy'],
    ['액션무협','action'],['BL/GL','blgl']];
    tabtext.forEach(function(element){
        let webtoon_li = document.createElement("LI");
        webtoon_li.className += "webtoon-li contents-li "+element[1];
        if(element[0] === '홈'){
            webtoon_li.setAttribute("id","content-home");
            webtoon_li.className += " c-active";
        }
        webtoon_li.innerHTML = element[0];
        webtoon_ul.appendChild(webtoon_li);
    });
})();

/* [웹툰 > 홈 > 요일 연재 TOP] navBar 요소 추가 */
(function(){
    const daytop_ul = getElement("daytop-nav");
    const daytext = ['월','화','수','목','금','토','일','완결'];
    daytop_ul.className += " contents-ul";
    for(let i = 0; i<=7; i++){
        let daytop_li = document.createElement("LI");
        daytop_li.className += "daytop-li contents-li font-title gray";
        if(i == 0){
            daytop_li.className += " active";
        }
        daytop_li.setAttribute('tab', i);
        daytop_li.innerHTML = daytext[i];
        daytop_ul.appendChild(daytop_li);
    }
})();

/* [웹툰 > 홈] 이미지 추가 */
getElement("btn-prev").setAttribute('src','/images/before.svg');
getElement("btn-next").setAttribute('src','/images/next.svg');
getElement("banner-img").setAttribute('src','/images/banner1.png');
getQueryAll("img.more").forEach(function(element){
    element.setAttribute('src','/images/more_btn.svg');
});


/* [웹툰 > 요일 연재] navBar 요소 추가 */
(function(){
    const daytop_main_ul = getElement("daytop-main-nav");
    const daytext = ['월','화','수','목','금','토','일','완결'];
    daytop_main_ul.className += " contents-ul";
    let i = 0;

    daytext.forEach(function(day){
        let daytop_main_li = document.createElement("LI");
        daytop_main_li.className += "daytop-main-li contents-li font-title gray";
        if(day === '월'){
            daytop_main_li.className += " active";
        }
        daytop_main_li.setAttribute('tab', i++);
        daytop_main_li.innerHTML = day;
        daytop_main_ul.appendChild(daytop_main_li);
    });
})();