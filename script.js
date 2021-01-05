// 슬라이드 정보
let slide = {
    curentId: 0,
    cnt: 3,
    slideDOM: null,
    images: [
        { id: 0, src: "./images/resource-1.png" },
        { id: 1, src: "./images/resource-2.png" },
        { id: 2, src: "./images/resource-3.png" }
    ]
};

function prev() {
    let target = slide.curentId - 1;
    if(target == -1) target = slide.cnt - 1;
    slide.curentId = target;
    slide.slideDOM.style.transform = `translate(${target * -720}px)`;
    page.innerHTML = `${slide.curentId + 1} / ${slide.cnt}`;
}
function next() {
    let target = slide.curentId + 1;
    if(target == slide.cnt) target = 0;
    slide.curentId = target;
    slide.slideDOM.style.transform = `translate(${target * -720}px)`;
    page.innerHTML = `${slide.curentId + 1} / ${slide.cnt}`;
}
window.onload = function() {
    // 슬라이드를 위해 웹툰 포스터 이미지 연결
    slide.slideDOM = document.getElementById("slide");
    for(let img of slide.images) {
        let element = document.createElement("img");
        element.setAttribute("src", img.src);
        element.setAttribute("width", "720px");
        element.setAttribute("height", "480px");
        slide.slideDOM.appendChild(element);
    }

    // slide 버튼 이벤트 등록
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", function(e) {
        prev();
    })
    nextBtn.addEventListener("click", function(e) {
        next();
    })

    // 현재 slide 1로 초기화
    let page = document.getElementById("page");
    page.innerHTML = `${slide.curentId + 1} / ${slide.cnt}`;
}

