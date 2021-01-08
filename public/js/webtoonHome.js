(function () {
    const webtoonHome = document.getElementById("genre-home");
    console.log("webtoon",webtoonHome);
    let carouselHTML = `<div id="webtoon-home-carousel"></div>`;
    webtoonHome.innerHTML = carouselHTML;


    const carousel=document.getElementById("webtoon-home-carousel");
    (function carouselInit(){
        const dataList=[
            {src:"https://dn-img-page.kakao.com/download/resource?kid=SSWdU/hyQ9OzbbQK/rMxp2Vnwp722KYMe1griR0",alt:"마족의 계약"},
            {src:"https://dn-img-page.kakao.com/download/resource?kid=X02WF/hyF23OPdUV/bLe5n84gXc7xzxI365lGVK",alt:"빅 라이프"},
            {src:"https://dn-img-page.kakao.com/download/resource?kid=bd1YIi/hyLjaWpLxw/OG6T8AFKeyiEXG3ROoJklK",alt:"까마귀 우는 밤"},
            {src:"https://dn-img-page.kakao.com/download/resource?kid=dd4pcU/hyLi8YzZCF/oYOeq1v6oFslykkyMhveaK",alt:"트리거"},
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

    let innerHTML="";
    let div=`<div class="hotfeature">`;
    (function hotFeatureInit(){
        const dataList=[
            {text:"오늘 UP",count:"201"},
            {text:"오늘 신작",count:"1"},
            {text:"오리지널",count:"1,252"},
        ];
        
        for( let {text,count} of dataList){
            div+=`<div class="hotfeature-item">
                    <div class="hotfeature-text web-font">${text}</div>
                    <div class="hotfeature-count web-font">${count}</div>
                </div>`
        }
        div+=`</div>`
        innerHTML+=div;
    })();

    (function(){
        const dataList=[
            {name:"롱리브더킹",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"16.8만명",src:"https://dn-img-page.kakao.com/download/resource?kid=dAtlY/hyATpI9YDi/0TS5mPhtYK9kVvJcgiV6b0&filename=th2"},
            {name:"도깨비 아빠",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"13.4만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bUqSvk/hyLjhOb3Na/EuUjSS4h6sZO7kdzjJLvaK&filename=th2"},
            {name:"질풍광룡",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf",count:"18.5만명",src:"https://dn-img-page.kakao.com/download/resource?kid=i6xQb/hyfOeIB3yr/1Bv5nEknY601tCtCAyno0K&filename=th2"},
            {name:"환골탈태",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"13만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bkGhnl/hyCvlk4b1c/K1g2B4zW6z51KcDjuiy1Y0&filename=th2"},
            {name:"후궁계약",feature:"TOP",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"51.9만명",src:"https://dn-img-page.kakao.com/download/resource?kid=jHoal/hyATowUXZF/JtV1jLTrSzJNmUkkGGhkF0&filename=th2"},
            {name:"녹음의 관",feature:"1위",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"83.1만명",src:"https://dn-img-page.kakao.com/download/resource?kid=QmCHa/hyLjfWQnOU/n9f2brjdUxZCrSbApRWUFK&filename=th2"},
            {name:"그녀가 공작저로 가야 했던 사정",feature:"2위",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"192.6만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bGxtne/hyCvnb6VWb/Z6w9OMlI9P83urVF0kLahK&filename=th2"},
            {name:"환골탈태",feature:"3위",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"96.1만명",src:"https://dn-img-page.kakao.com/download/resource?kid=bkGhnl/hyCvlk4b1c/K1g2B4zW6z51KcDjuiy1Y0&filename=th2"},
            {name:"그림자 황비",feature:"4위",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"65.8만명",src:"https://dn-img-page.kakao.com/download/resource?kid=8lPj0/hyF24lS0pG/7Q29nkmQqwYntYmlzAWkhK&filename=th2"},
            {name:"묵향 다크레이디",feature:"5위",releaseInfo:"https://static-page.kakao.com/static/common/bmbadge_webtoon.svg?f218f9d5ac717abcf43047ff23145119",count:"106.1만명",src:"https://dn-img-page.kakao.com/download/resource?kid=9Eoo5/hyATyGp2En/pYYjRkJJIrpHEvDible6T0&filename=th2"},
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



    webtoonHome.innerHTML+=innerHTML;
      

})();