(function () {
    const webtoonWeekly = document.getElementById("genre-weekly");
    let innerHTML = `<div id="webtoon-weekly-carousel"></div>`;
    webtoonWeekly.innerHTML = innerHTML;
    const carousel=document.getElementById("webtoon-weekly-carousel");
    (function carouselInit(){
        const dataList=[
            {src:"https://dn-img-page.kakao.com/download/resource?kid=BJAXj/hyEdj6C9rD/DxkXMbZTsnUKOtrD6OO7c0",alt:"꽃을 문 짐승"},
            {src:"https://dn-img-page.kakao.com/download/resource?kid=bnAjVs/hyLjcsoTu0/O9qdDYukCPMSrOUUUkUhG1",alt:"시월드 게임"},
            {src:"https://dn-img-page.kakao.com/download/resource?kid=rHPGt/hyEddFoeIp/Mk3B1kKTtjNXh3lluWT4F1",alt:"더 킬 히어로"},
        ]
        let img="";
        for(let i=0;i<dataList.length; i++){
            let data=dataList[i];
            img+=`<img class="main-carousel" src="${data.src}" alt=${data.alt} draggable="false" style="width: 720px; display: block;"></img>`;
        }
        carousel.innerHTML=img;
    })();
    
    let index = 0;
    (function runCarousel() {
        let x = carousel.getElementsByClassName("main-carousel");
        for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        index++;
        if (index > x.length) {index = 1}    
        x[index-1].style.display = "block";  
        setTimeout(runCarousel, 4000); 
    })();

    (function weekNavInit(){
        dataList=[
            {text:"월"},
            {text:"화"},
            {text:"수"},
            {text:"목"},
            {text:"금"},
            {text:"토"},
            {text:"일"},
            {text:"완결"},
        ];
        let li=`<div id="webtoon-weekly-day-nav">`;
        for(let i = 0 ; i<dataList.length;i++){
            let d=dataList[i];
            li+=`<li class="webtoon-weekly-day-nav-item">${d.text}</li>`;
        }
        li+=`</div>`
        li+=`<div></div>`
        innerHTML+=li;
    })();
    
    (function releaseFilter(){
        dataList=[
            {text:"전체"},
            {text:"웹툰"},
            {text:"웹툰",icon:true,url:"https://static-page.kakao.com/static/common/ico_wait-off.svg?0802826157e51a202584fb39ffeb70c0"},
        ];
        let li=`<div id="webtoon-weekly-release-filter">`;
        for(let i = 0 ; i<dataList.length;i++){
            
            let d=dataList[i];
            console.log(d);
            li+=`<li class="webtoon-weekly-release-filter-item">`;
            if(d.icon) li+=`<img src="${d.url}" style="margin-right:10px"></img>`
            li+=`${d.text}</li>`;
        }
        li+=`</div>`
        innerHTML+=li;
    })();
    
    (function(){
        const dataList=[
            {name:"롱리브더킹",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"16.8만명",src:"https://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"},
            {name:"도깨비 아빠",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"13.4만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bUqSvk/hyLjhOb3Na/EuUjSS4h6sZO7kdzjJLvaK&filename=th2"},
            {name:"질풍광룡",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf",count:"18.5만명",src:"https://dn-img-page.kakao.com/download/resource?kid=i6xQb/hyfOeIB3yr/1Bv5nEknY601tCtCAyno0K&filename=th2"},
            {name:"환골탈태",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"13만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bkGhnl/hyCvlk4b1c/K1g2B4zW6z51KcDjuiy1Y0&filename=th2"},
            {name:"후궁계약",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"51.9만명",src:"https://dn-img-page.kakao.com/download/resource?kid=jHoal/hyATowUXZF/JtV1jLTrSzJNmUkkGGhkF0&filename=th2"},
            {name:"롱리브더킹",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"16.8만명",src:"https://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"},
            {name:"도깨비 아빠",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"13.4만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bUqSvk/hyLjhOb3Na/EuUjSS4h6sZO7kdzjJLvaK&filename=th2"},
            {name:"질풍광룡",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf",count:"18.5만명",src:"https://dn-img-page.kakao.com/download/resource?kid=i6xQb/hyfOeIB3yr/1Bv5nEknY601tCtCAyno0K&filename=th2"},
            {name:"환골탈태",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"13만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bkGhnl/hyCvlk4b1c/K1g2B4zW6z51KcDjuiy1Y0&filename=th2"},
            {name:"후궁계약",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"51.9만명",src:"https://dn-img-page.kakao.com/download/resource?kid=jHoal/hyATowUXZF/JtV1jLTrSzJNmUkkGGhkF0&filename=th2"},
        ];
        let li=`<div class="card-list">`;
        for(let i=0;i<dataList.length;i++){
            let d=dataList[i];
            li+=`<li class="card" style="display:inline-block">
                <div class="card-frame">
                    <img class="card-image" src=${d.src}></img>
                    <div class="card-bar">
                        <div class="card-feature">${d.feature}</div>
                        <img class="card-release"src=${d.releaseInfo}></img>
                    </div>
                </div>
                <div class="web-font card-name">${d.name}</div>
                <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871">
                <div class="web-font card-count"  style="display:inline-block">${d.count}</div>
            </li>`
        }
        li+="</div>";
        
        innerHTML+=li;

    })();
    webtoonWeekly.innerHTML+=innerHTML;

})();