/* eslint-disable no-unused-vars */

var request = new XMLHttpRequest();

const weekBtns = document.querySelectorAll("button.weektop_btn");
const jsonFilePath = "../data/webtoon.json";

weekBtns.forEach( btn => {
  btn.addEventListener("click", () => {
    getWebtoonData(btn.id);
    weekClickBold(btn.id);
  });
});

const readjsonFile = (filePath, callback) => {
  var jsonFile = new XMLHttpRequest();
  jsonFile.overrideMimeType("application/json");
  jsonFile.open("GET", filePath, true);
  jsonFile.onreadystatechange = () => {
      if(jsonFile.readyState === 4 && jsonFile.status == "200") {
          callback(jsonFile.responseText);
      }
  }
  jsonFile.send(null);
}

const getWebtoonData = (week) => {
  readjsonFile(jsonFilePath, text => {
    var data = JSON.parse(text);
    var top = [];
    var rank= []
    data["webtoon"].forEach(webtoon => {
      if(webtoon["week"] == week){
        if(webtoon["top"]) {
          top.push([webtoon["id"], webtoon["title"], webtoon["numofwatch"]]);
        }
        if(webtoon["rank"]>=1 && webtoon["rank"]<=5){
          rank[webtoon["rank"]-1] = [webtoon["id"], webtoon["title"], webtoon["numofwatch"]];
        }
      }
    });
    const webtoonImg = document.querySelectorAll("img.weektop_img");
    const webtoonTitle = document.querySelectorAll("div.webtoon_title");
    const webtoonWatch = document.querySelectorAll("div.numofwatch");
    var idx=0;

    top.forEach(webtoonInfo => {
      webtoonImg[idx].src = encodeURI("./img/webtoon/webtoon" + webtoonInfo[0] + ".png");
      webtoonTitle[idx].innerHTML = webtoonInfo[1];
      webtoonWatch[idx].innerHTML = "<img style='height:12px' src='./img/person.png'> " + webtoonInfo[2]/10000 + " 만명"; 
      idx+=1;
    });
    rank.forEach(webtoonInfo => {
      webtoonImg[idx].src = encodeURI("./img/webtoon/webtoon" + webtoonInfo[0] + ".png");
      webtoonTitle[idx].innerHTML = webtoonInfo[1];
      webtoonWatch[idx].innerHTML = "<img style='height:12px' src='./img/person.png'> " + webtoonInfo[2]/10000 + " 만명";
      idx+=1;
    });
  });
}

const drawWebtoonLayout = () => {
  const weekTop = document.getElementById("weektop_top");
  const weekRank = document.getElementById("weektop_rank");
  for(var idx=0; idx<5; idx++){
    weekTop.innerHTML = weekTop.innerHTML + 
            "<li class='weektop_list'>" +
              "<img class='weektop_img' />" +
              "<div class='webtoon_title'></div>" +
              "<div class='numofwatch'></div>" +
            "</li>"
    weekRank.innerHTML = weekRank.innerHTML +
            "<li class='weektop_list'>" +
              "<img class='weektop_img'></img>" +
              "<div class='webtoon_title'></div>" +
              "<div class='numofwatch'></div>" +
            "</li>"
  }
}

const weekClickBold = (element) => {
  let ele = document.getElementById(element);
  weekBtns.forEach( categoryId => {
    categoryId.style = "font-size:20%";
  })
  ele.style = "font-size:22%;font-weight:900";
}

drawWebtoonLayout();
getWebtoonData("mon");
weekClickBold("mon")

