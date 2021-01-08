const Card = {};

(function(){
    Card.create = (data) => {        
        const card = document.createElement("div");
        card.innerHTML = `<div class="card-container">
        <div class="card">
        <img src=${data['image']}>
        <div class="card-footer">
        <span>${data['tag']}</span>
        <!-- <img src="https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119"> -->
        <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf">
        </div>
        </div>
        <div class="title">${data['title']}</div>
        <img class="viewers-icon" src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="인원수">
        <div class="viewers">
        ${data['viewer_num']}
        </div>
        </div>`
        return card;
    }
})();