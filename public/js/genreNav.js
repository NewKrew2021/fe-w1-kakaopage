(function (){
    const genreNav=document.getElementById("genre-nav");
    //id가 필요한지 생각해보기
    const dataList=[
        {name:"home",text:"홈"},
        {name:"weekly",text:"요일연재"},
        {name:"webtoon",text:"웹툰"},
        {name:"boy",text:"소년"},
        {name:"drama",text:"드라마"},
        {name:"romance",text:"로맨스"},
        {name:"romance-fantasy",text:"로판"},
        {name:"action",text:"액션무협"},
        {name:"BLGL",text:"BL/GL"},
    ]
    let li="";
    for(let i=0;i<dataList.length; i++){
        let data=dataList[i];
        console.log(data.name);
        //참고: 스트링으로 템플레이팅을 해주지만 함수 인자로 넣을때에 쿼트로 감싸주어야한다.
        li+=`<li class="genre-nav-li" style="font-family:sans-serif;font-size:18px"><a onclick="onGenreClick('${data.name}')">${data.text}</a></li>`;
    }
    genreNav.innerHTML=li;
})();

function onGenreClick(name){
    const genreContents=document.getElementsByClassName("genre-contents");
    for(let i = 0; i < genreContents.length;i++){
        const contents=genreContents[i];
        if(contents.id===name){
            console.log("here")
            contents.style.display="block";
        }else{
            contents.style.display="none";
        }
    }
}

