/* 카카오 페이지 웹툰 탭
모든 세부 탭 안에 슬라이드가 있습니다.

- 넘어가는 애니매이션
- 마지막 사진에서 오른쪽 클릭 시 오른쪽으로 넘어가며 첫 사진이 나오게 */

// 슬라이드 정보
const slide = {
    curId: 0,
    position: 2,
    cnt: 3,
    timerId: 0,
    slideDOM: null,
    images: [
        { id: 1, src: "../images/resource-1.png", title: "나의 나쁜 연하남", subscriber: "25.5만명" },
        { id: 2, src: "../images/slide-img2.png", title: "화룡왕", subscriber: "38.7만명" },
        { id: 3, src: "../images/slide-img3.png", title: "절대무신", subscriber: "12.2만명" }
    ]
};

function prev() {
    slide.curId -= 1;
    if(slide.curId == 0) slide.curId = slide.cnt;
    page.innerHTML = `${slide.curId} / ${slide.cnt}`;

    let target = --slide.position;
    slide.slideDOM.style.transitionDuration = `0.3s`;
    slide.slideDOM.style.transform = `translate(${(target - 1) * -720}px)`;
    if(target == 1) {
        setTimeout(function() {
            target = slide.position = slide.cnt + 1;
            slide.slideDOM.style.transitionDuration = `0.0s`;
            slide.slideDOM.style.transform = `translate(${(target - 1) * -720}px)`;
            
        }, 300);  
    }
    document.querySelector(".slideTitle").innerHTML = slide.images[slide.curId - 1].title;
}
function next() {
    slide.curId += 1;
    if(slide.curId == slide.cnt + 1) slide.curId = 1;
    page.innerHTML = `${slide.curId} / ${slide.cnt}`;

    let target = ++slide.position;
    slide.slideDOM.style.transitionDuration = `0.3s`;
    slide.slideDOM.style.transform = `translate(${(target - 1) * -720}px)`;
    if(target == slide.cnt + 2) {
        setTimeout(function() {
            target = slide.position = 2;
            slide.slideDOM.style.transitionDuration = `0.0s`;
            slide.slideDOM.style.transform = `translate(${(target - 1) * -720}px)`;
            
        }, 300);  
    }
    document.querySelector(".slideTitle").innerHTML = slide.images[slide.curId - 1].title;
    console.log(document.querySelector(".slideTitle"));
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
    slide.curId = 1;
    slide.position = 2;

    // 슬라이드를 위해 웹툰 포스터 이미지 연결
    slide.slideDOM = document.getElementById("slide");
    slide.slideDOM.style.width = `${(slide.cnt + 2) * 720}px`;

    slide.slideDOM.appendChild(makeImageElement(slide.images[slide.cnt - 1].src, 720, 480));
    for(let img of slide.images) {
        const element = makeImageElement(img.src, 720, 480);
        slide.slideDOM.appendChild(element);
    }
    slide.slideDOM.appendChild(makeImageElement(slide.images[0].src, 720, 480));

    // slide 버튼 이벤트 등록
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", function(e) {
        prev();
        clearInterval(slide.timerId);
        slide.timerId = setInterval(next, 2000);
    })
    nextBtn.addEventListener("click", function(e) {
        next();
        clearInterval(slide.timerId);
        slide.timerId = setInterval(next, 2000);
    })

    // 현재 slide 1로 초기화
    const page = document.getElementById("page");
    page.innerHTML = `${slide.curId} / ${slide.cnt}`;

    // 3 1 2 3 1 중 두번째 1로 한칸 옮기기
    slide.slideDOM.style.transform = `translate(-720px)`;

    slide.timerId = setInterval(next, 2000);
}