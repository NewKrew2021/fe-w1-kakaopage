const genreBtns = document.querySelectorAll("button.genre_btn");

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
  genreBtns.forEach( categoryId => {
    categoryId.style = "font-size:18%";
  })
  ele.style = "font-size:19%;font-weight:900";
}

setGenre("genreHome");
genreClickBold("genreHome");