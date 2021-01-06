/* navBar 클릭 이벤트 리스너 */
const topNavBar = document.querySelectorAll(".nav_dummy");
const topNavWebtoon = document.getElementById("nav_webtoon");
const dummyContent = document.getElementById("dummy");
const mainContent = document.getElementById("contents");
const topNavList = document.getElementsByClassName("nav_dummy");
const contentNavList = document.getElementsByClassName("contents_li");

/* div List */
const content_home = document.getElementById("home");
const content_day = document.getElementById("day");
const content_webtoon = document.getElementById("webtoon");
const content_boy = document.getElementById("boy");
const content_drama = document.getElementById("drama");
const content_romance = document.getElementById("romance");
const content_fantasy = document.getElementById("fantasy");
const content_action = document.getElementById("action");
const content_blgl = document.getElementById("blgl");

const topbannerImg = ['/images/banner1.png', '/images/banner2.png', '/images/banner3.png'];

/* banner에 이미지 추가 */
document.getElementById("banner_prev").style.backgroundImage = "url('/images/before.svg')";
document.getElementById("banner_next").style.backgroundImage = "url('/images/next.svg')";
document.getElementById("banner_img").setAttribute('src','/images/banner1.png');

/* 배너 이미지 변경하기 */
var count = 0;
document.getElementById("banner_prev").addEventListener("click", ()=>{
    if(count > 0){
        count--;
        document.getElementById("banner_img").setAttribute('src',topbannerImg[count]);
    }
    else if (count <= 0){
        count = 2;
        document.getElementById("banner_img").setAttribute('src',topbannerImg[count]);
    }
});
document.getElementById("banner_next").addEventListener("click", ()=>{
    if(count < 2){
        count++;
        document.getElementById("banner_img").setAttribute('src',topbannerImg[count]);
    }
    else if (count >= 2){
        count = 0;
        document.getElementById("banner_img").setAttribute('src',topbannerImg[count]);
    }
});

/* 웹툰 메뉴 이외에는 dummy 보여주기 */
function showDummyArea() {
    for (var i = 0; i < topNavBar.length; i++) {
        topNavBar[i].addEventListener("click", () => {
            mainContent.style.display = 'none';
            dummyContent.style.display = 'block';
        });
    }
}
showDummyArea();

function showContentArea() {
    topNavWebtoon.addEventListener("click", () => {
        mainContent.style.display = 'block';
        dummyContent.style.display = 'none';
    })
}
showContentArea();

/* top_navBar - 누른 요소만 노란색 강조 표시하기 */
for (var i = 0; i < topNavList.length; i++) {
    topNavList[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var slideIndex = 0;
var timer;

/* [웹툰] 슬라이드 애니메이션 함수 */
function showSlides(slidename) {
  var i;
  var slides = document.getElementsByClassName(slidename);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  
  slides[slideIndex-1].style.display = "block";  
  timer = setTimeout(showSlides, 2400, slidename); // 3초마다 이미지 변경
}

/* [웹툰 > navBar] 클릭한 요소에 따라 컨텐츠 div 표시하기 */
for (var i = 0; i < contentNavList.length; i++) {
    contentNavList[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("c_active");
        var cur_content = document.getElementsByClassName("visible");

        /* 웹툰 > navBar 클릭 시 강조 기능 */
        current[0].className = current[0].className.replace(" c_active", "");
        this.className += " c_active";

        /* 웹툰 > navBar 클릭에 따른 컨텐츠 구현 */
        cur_content[0].className = cur_content[0].className.replace(" visible", " invisible");
        document.getElementById(this.classList[1]).className =
            document.getElementById(this.classList[1]).className.replace(" invisible", " visible");

        /* 클릭 후 이미지, 텍스트 로딩 */
        var show_content = this.classList[1];
        console.log(show_content);

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
document.getElementById("content_home").click();
