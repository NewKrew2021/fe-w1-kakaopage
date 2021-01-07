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
        webtoonWeekly.innerHTML+=li;
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
        webtoonWeekly.innerHTML+=li;
    })();

    


})();