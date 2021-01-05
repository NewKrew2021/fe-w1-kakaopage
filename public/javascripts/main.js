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

/* image List */
const slide_img_1 = '/images/toon3.png';
const slide_img_2 = '/images/toon1.png';
const slide_img_3 = '/images/toon4.png';
const slide_img_4 = '/images/toon2.png';

const day_slide_img_1 = '/images/daytoon1.png';
const day_slide_img_2 = '/images/daytoon2.png';
const day_slide_img_3 = '/images/daytoon3.png';

/* Title List */
const slide_numtxt = ['1/4', '2/4', '3/4', '4/4'];
const slide_title = ['마족의 계약', '빅 라이프', '까마귀 우는 밤', '트리거'];
const slide_explain = ['마계공주, 인간세계에서 무료봉사 중?!', '안 팔리는 무명 작가의 인생 대반전!', '우리 다시 만날 수 있어요?', '내 안의 화끈한 방아쇠를 당겨라!'];
const slide_subtxt = ["<img src='/images/badge-up.svg'> 웹툰 <img src='/images/line_top_banner.png'> <img src='/images/ico-bigthum-person.svg'> 42.7만명",
"<img src='/images/badge-up.svg'> 웹툰 <img src='/images/line_top_banner.png'> <img src='/images/ico-bigthum-person.svg'> 43.1만명",
"<img src='/images/badge-up.svg'> 웹툰 <img src='/images/line_top_banner.png'> <img src='/images/ico-bigthum-person.svg'> 34.1만명",
"<img src='/images/badge-up.svg'> 웹툰 <img src='/images/line_top_banner.png'> <img src='/images/ico-bigthum-person.svg'> 33.5만명"];

const day_slide_numtxt = ['1/3','2/3','3/3'];
const day_slide_title = ['핫차!핫차! 차나무생','사실, 그들은 오직 그녀만을 기다리고 있습니다','불사무적'];
const day_slide_explain = ['노는 게 제일 좋아~ 어른이 모여라!', '그녀는 어디로 갔단 말입니까?', '다시 태어난 불사존의 활약!'];

/* slide 객체 */
const home_slide = [
    { numtxt: slide_numtxt[0], img: slide_img_1, title: slide_title[0], exp: slide_explain[0], subtxt : slide_subtxt[0]},
    { numtxt: slide_numtxt[1], img: slide_img_2, title: slide_title[1], exp: slide_explain[1], subtxt : slide_subtxt[1] },
    { numtxt: slide_numtxt[2], img: slide_img_3, title: slide_title[2], exp: slide_explain[2], subtxt : slide_subtxt[2] },
    { numtxt: slide_numtxt[3], img: slide_img_4, title: slide_title[3], exp: slide_explain[3], subtxt : slide_subtxt[3] }
]

const day_slide = [
    { numtxt: day_slide_numtxt[0], img: day_slide_img_1, title: day_slide_title[0], exp: day_slide_explain[0] },
    { numtxt: day_slide_numtxt[1], img: day_slide_img_2, title: day_slide_title[1], exp: day_slide_explain[1] },
    { numtxt: day_slide_numtxt[2], img: day_slide_img_3, title: day_slide_title[2], exp: day_slide_explain[2] },
]

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

/* [웹툰 > 홈]의 경우 이미지, 텍스트 초기 로딩 */
function showInitialHome() {
    for (var i = 0; i < 4; i++) {
        document.getElementById("slide_num" + String(i + 1)).innerHTML = home_slide[i].numtxt;
        document.getElementById("slide_img" + String(i + 1)).src = home_slide[i].img;
        document.getElementById("slide_txt" + String(i + 1)).innerHTML = home_slide[i].title;
        document.getElementById("slide_exp" + String(i + 1)).innerHTML = home_slide[i].exp;
        document.getElementById("slide_subtxt" + String(i + 1)).innerHTML = home_slide[i].subtxt;
    }
}
showInitialHome();

var slideIndex = 0;
var timer;
showSlides("mySlides");

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
        var show_content = document.getElementById(this.classList[1]);

        /* 홈 tab */
        if (show_content.id === "home") {   
            slideIndex = 0;
            clearTimeout(timer);
            showSlides('mySlides'); 
        }

        /* 요일연재 tab */
        else if (show_content.id === "day") {    
            for (var i = 0; i < 3; i++) {
                document.getElementById("day_slide_num" + String(i + 1)).innerHTML = day_slide[i].numtxt;
                document.getElementById("day_slide_img" + String(i + 1)).src = day_slide[i].img;
                document.getElementById("day_slide_txt" + String(i + 1)).innerHTML = day_slide[i].title;
                document.getElementById("day_slide_exp" + String(i + 1)).innerHTML = day_slide[i].exp;
            }
            slideIndex = 0;
            clearTimeout(timer);
            showSlides('daySlides'); 
        }
    })
}

