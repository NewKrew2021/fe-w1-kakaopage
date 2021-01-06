const topbannerImg = ['/images/banner1.png', '/images/banner2.png', '/images/banner3.png'];

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

/* 매직 넘버 */
const intervalTime = 2400;

/* 공통 top_nav에 항목 추가 */
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
        let node = creElement("LI");
        node.className = "nav-dummy";
        top_nav.appendChild(node);
    }
    for(var i = 0; i < nav_list.length; i++){
        let node = getElementsClass("nav-dummy");
        node[i].innerHTML = '<a><img src = '+nav_list[i].img+'></a>';
        if(i == 1){
            node[i].className += " webtoon active";
        }
    }
})();

/* top_nav의 웹툰 탭 이외에는 더미 페이지가 보이게 하기 */
(function(){
    const top_nav_li = getElementsClass("nav-dummy");
    for(let i = 0; i < top_nav_li.length; i++){
        if(top_nav_li[i].classList.contains("webtoon")){
            top_nav_li[i].addEventListener("click",()=>{
                getElement("contents").style.display = 'block';
                getElement("dummy").style.display = 'none';
            });
        } else{
            top_nav_li[i].addEventListener("click",()=>{
                getElement("contents").style.display = 'none';
                getElement("dummy").style.display = 'block';
            })
        }
    }
})();

/* top_nav - 누른 요소만 노란색 밑줄 강조 표시 */
for (let i = 0; i < getElementsClass("nav-dummy").length; i++) {
    getElementsClass("nav-dummy")[i].addEventListener("click", () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* [웹툰 > 홈] 의 첫번째 banner에 이미지 추가 */
getElement("banner-prev").style.backgroundImage = "url('/images/before.svg')";
getElement("banner-next").style.backgroundImage = "url('/images/next.svg')";
getElement("banner-img").setAttribute('src','/images/banner1.png');


let slideIndex = 0;
let timer;

/* [웹툰] 슬라이드 애니메이션 함수 */
function showSlides(slidename) {
  let i;
  let slides = getElementsClass(slidename);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  slides[slideIndex-1].style.display = "block";  
  timer = setTimeout(showSlides, intervalTime, slidename); // 3초마다 이미지 변경
}

/* [웹툰 > navBar] 클릭한 요소에 따라 컨텐츠 div 표시하기 */
for (let i = 0; i < getElementsClass("contents-li").length; i++) {
    getElementsClass("contents-li")[i].addEventListener("click", function () {
        let current = getElementsClass("c-active");
        let cur_content = getElementsClass("visible");

        /* 웹툰 > navBar 클릭 시 강조 기능 */
        current[0].className = current[0].className.replace(" c-active", "");
        this.className += " c-active";

        /* 웹툰 > navBar 클릭에 따른 컨텐츠 구현 */
        cur_content[0].className = cur_content[0].className.replace(" visible", " invisible");
        getElement(this.classList[1]).className = getElement(this.classList[1]).className.replace(" invisible", " visible");

        /* 클릭 후 이미지, 텍스트 로딩 */
        let show_content = this.classList[1];

        /* 홈 tab */
        if (show_content == "home") {   
            slideIndex = 0;
            clearTimeout(timer);
            showSlides('mySlides'); 
        }
        /* 요일연재 tab */
        else if (show_content == "day") { 
            slideIndex = 0;
            clearTimeout(timer);
            showSlides('daySlides'); 
        }
    })
}
getElement("content-home").click();
