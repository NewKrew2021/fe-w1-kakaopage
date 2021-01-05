/* navBar 클릭 이벤트 리스너 */
var topNavBar = document.querySelectorAll(".nav_dummy");
var topNavWebtoon = document.getElementById("nav_webtoon");
var dummyContent = document.getElementById("dummy");
var mainContent = document.getElementById("contents");
var topNavList = document.getElementsByClassName("nav_dummy");

/* 웹툰 메뉴 이외에는 dummy 보여주기 */
function showDummyArea() {
    for(var i = 0; i <topNavBar.length; i++){
        topNavBar[i].addEventListener("click", ()=>{
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

/* 누른 요소만 노란 밑줄 표시하기 */
for(var i = 0; i<topNavList.length; i++){
    topNavList[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}