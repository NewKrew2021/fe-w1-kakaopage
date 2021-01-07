(function(){
    const container=document.getElementById("container");
    const dataList=[
        {id:"top-home",display:"block"},
        {id:"top-webtoon",display:"none"},
        {id:"top-webfiction",display:"none"},
        {id:"top-movie",display:"none"},
        {id:"top-broadcast",display:"none"},
        {id:"top-book",display:"none"},
    ]
    let elements="";
    for(let i = 0; i< dataList.length; i++){
        let d=dataList[i];
        elements+=`<div id=${d.id} style="display:${d.display}"
        class="top-contents">${d.id} 페이지 입니다</div>`;
    }
    container.innerHTML=elements;

})();


