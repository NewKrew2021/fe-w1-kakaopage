const genreBtns = document.querySelectorAll("button.genre_btn");
const jsonPath = "../data/webtoon.json";
const genreList = ["romance", "rofan", "drama", "blgl", "boy", "action"];

genreBtns.forEach( btn => {
  btn.addEventListener("click", () => {
    setGenre(btn.id);
    genreClickBold(btn.id);
  });
});

const setGenre = genre => {
  genreBtns.forEach( btn => {
    hideGenre(btn.id);
  });
  displayGenre(genre);
  if(genre==="genreHome"){
    drawGenreTopLayout();
  }
}

const displayGenre = (element) => {
  let ele = document.querySelector("div." + element);
  ele.style.display = "block";
}

const hideGenre = (element) => {
  let ele = document.querySelector("div." + element);
  ele.style.display = "none";
}

const genreClickBold = (element) => {
  let ele = document.getElementById(element);
  genreBtns.forEach( genreId => {
    genreId.className = "genre_btn";
  })
  ele.className = "genre_clicked";
}

const drawGenreTopLayout = () => {
  const domList = [];
  genreList.forEach( genre => {
    domList.push(document.getElementById("genretop_"+genre))
  });
  domList.forEach( dom => {
    for(let idx=0; idx<5; idx++){
      dom.innerHTML = dom.innerHTML + 
        "<li class='genretop_list'>" +
          "<img class='genretop_img' />" +
          "<div class='genre_title'></div>" +
          "<div class='genre_watch'></div>" +
        "</li>";
    }
  })

  getGenreTop();
}

const readJson = (filePath, callback) => {
  let jsonFile = new XMLHttpRequest();
  jsonFile.overrideMimeType("application/json");
  jsonFile.open("GET", filePath, true);
  jsonFile.onreadystatechange = () => {
      if(jsonFile.readyState === 4 && jsonFile.status == "200") {
          callback(jsonFile.responseText);
      }
  }
  jsonFile.send(null);
}

const getGenreTop = () => {
  readJson(jsonPath, text => {
    let data = JSON.parse(text);
    const webtoonImg = document.querySelectorAll("img.genretop_img");
    const webtoonTitle = document.querySelectorAll("div.genre_title");
    const webtoonWatch = document.querySelectorAll("div.genre_watch");
    let idx=0;
    const genreInfo = {
      "romance" : [],
      "rofan" : [],
      "drama" : [],
      "blgl" : [],
      "boy" : [],
      "action" : [],
    }

    data["webtoon"].forEach(webtoon => {
      if(webtoon["genre"] != ""){
        genreInfo[webtoon["genre"]].push([webtoon["id"], webtoon["title"], webtoon["numofwatch"]]);
      }
    });
    
    genreList.forEach( genre => {
      genreInfo[genre].forEach(webtoonInfo => {
        webtoonImg[idx].src = encodeURI("./img/webtoon/webtoon" + webtoonInfo[0] + ".png");
        webtoonTitle[idx].innerHTML = webtoonInfo[1];
        webtoonWatch[idx].innerHTML = "<img class='webtoon_img' src='./img/person.png'> " + webtoonInfo[2]/10000 + " 만명"; 
        idx+=1;
      });
    });
  });
}

setGenre("genreHome");
genreClickBold("genreHome");