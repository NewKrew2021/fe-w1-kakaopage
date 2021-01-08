/* 
    메인 카테고리의 웹툰 메뉴 중 slide 관련 기능입니다.
 
    [v] 여러 이미지 연결
    [v] 슬라이드가 넘어가는 prev, next 함수 구현, 화살표에 event 등록
    [v] 2초마다 자동으로 오른쪽으로 넘어가게 event 등록
    [v] 마지막 항목에서 next 함수 호출 시 오른쪽으로 넘어가면서 첫번째 항목 표시(첫번째 -> 마지막도 마찬가지)
*/
    
// 슬라이드 정보
const slide = {
    curId: 1,
    position: 2,
    itemCnt: undefined,
    timerId: undefined,
    slideDOM: undefined,
    pageDOM: undefined,

    itemWidth: 720,
    itemHeight: 480,
    items: [
        { id: 1, src: "../images/resource-1.png", title: "나의 나쁜 연하남", subscriber: "25.5만명" },
        { id: 2, src: "../images/slide-img2.png", title: "화룡왕", subscriber: "38.7만명" },
        { id: 3, src: "../images/slide-img3.png", title: "절대무신", subscriber: "12.2만명" }
    ]
};

function translate(position, duration) {
    slide.slideDOM.style.transitionDuration = `${duration}s`;
    slide.slideDOM.style.transform = `translate(${(position - 1) * -slide.itemWidth}px)`;
}

function prev() {
    // 페이지 표시 업데이트
    slide.curId -= 1;
    if(slide.curId == 0) slide.curId = slide.itemCnt;
    page.innerHTML = `${slide.curId} / ${slide.itemCnt}`;

    // tanslate
    slide.position--;
    translate(slide.position, 0.3);
    
    // 1번 item에서 왼쪽으로 갔을 때
    if(slide.position == 1) {

        setTimeout(function() {
            slide.position = slide.itemCnt + 1;
            translate(slide.position, 0);
        }, 300);  
    }

    // item 제목 업데이트
    document.querySelector(".slideTitle").innerHTML = slide.items[slide.curId - 1].title;

    // 자동 넘김 이벤트 초기화
    clearInterval(slide.timerId);
    slide.timerId = setInterval(next, 2000);
}
function next() {
    // 페이지 표시 업데이트
    slide.curId += 1;
    if(slide.curId == slide.itemCnt + 1) slide.curId = 1;
    page.innerHTML = `${slide.curId} / ${slide.itemCnt}`;

    // tanslate
    slide.position++;
    translate(slide.position, 0.3);
    
    // 마지막 item에서 오른쪽으로 갔을 때
    if(slide.position == slide.itemCnt + 2) {

        setTimeout(function() {
            slide.position = 2;
            translate(slide.position, 0);
        }, 300);  
    }

    // item 제목 업데이트
    document.querySelector(".slideTitle").innerHTML = slide.items[slide.curId - 1].title;

    // 자동 넘김 이벤트 초기화
    clearInterval(slide.timerId);
    slide.timerId = setInterval(next, 2000);
}
function makeImageElement(src, width, height) {
    const element = document.createElement("img");
    element.setAttribute("src", src);
    element.setAttribute("width", `${width}px`);
    element.setAttribute("height", `${height}px`);
    return element;
}

function setSlide() {
    // 초기화
    slide.itemCnt = slide.items.length;

    // 슬라이드를 위해 웹툰 포스터 이미지 연결
    slide.slideDOM = document.getElementById("slide");
    slide.slideDOM.style.width = `${(slide.itemCnt + 2) * 720}px`;

    slide.slideDOM.appendChild(makeImageElement(slide.items[slide.itemCnt - 1].src, 720, 480));
    for(let img of slide.items) {
        const element = makeImageElement(img.src, 720, 480);
        slide.slideDOM.appendChild(element);
    }
    slide.slideDOM.appendChild(makeImageElement(slide.items[0].src, 720, 480));

    // slide 버튼 이벤트 등록
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", function(e) {
        prev(); 
    });
    nextBtn.addEventListener("click", function(e) {
        next();
    });

    // 현재 slide 1로 초기화
    slide.pageDOM = document.getElementById("page");
    slide.pageDOM.innerHTML = `${slide.curId} / ${slide.itemCnt}`;

    // 3 1 2 3 1 중 두번째 1로 한칸 옮기기
    slide.slideDOM.style.transform = `translate(-720px)`;

    slide.timerId = setInterval(next, 2000);
}