/* 카카오 페이지 웹툰 탭
모든 세부 탭 안에 슬라이드가 있습니다.

- 넘어가는 애니매이션
- 마지막 사진에서 오른쪽 클릭 시 오른쪽으로 넘어가며 첫 사진이 나오게 */

// 슬라이드 정보
let slide = {
    curId: 1,
    position: 2,
    cnt: 3,
    timerId: 0,
    slideDOM: null,
    images: [
        { id: 1, src: "../images/resource-1.png" },
        { id: 2, src: "../images/resource-2.png" },
        { id: 3, src: "../images/resource-3.png" }
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
}
function makeImageElement(src, width, height) {
    let element = document.createElement("img");
    element.setAttribute("src", src);
    element.setAttribute("width", `${width}px`);
    element.setAttribute("height", `${height}px`);
    return element;
}