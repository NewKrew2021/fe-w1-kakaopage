//init webtoon page
(function(){
    const topWebtoonPage=document.getElementById("top-webtoon");
    let innerHTML=`<nav id="genre-nav"></nav>`
    const dataList=[
        {id:"genre-home",display:"block"},
        {id:"genre-weekly",display:"none"},
        {id:"genre-webtoon",display:"none"},
        {id:"genre-boy",display:"none"},
        {id:"genre-drama",display:"none"},
        {id:"genre-romance",display:"none"},
        {id:"genre-romance-fantasy",display:"none"},
        {id:"genre-action",display:"none"},
        {id:"genre-BLGL",display:"none"},
    ];
    for(let i = 0;i<dataList.length;i++){
        const d=dataList[i];
        innerHTML+=`<div id="${d.id}" class="genre-contents" style="display: ${d.display};">
        ${d.id} 페이지 입니다.</div>`
    }
    topWebtoonPage.innerHTML=innerHTML; 
})();