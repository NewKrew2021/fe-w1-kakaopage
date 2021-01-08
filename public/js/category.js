/* eslint-disable no-unused-vars */

const categoryBtns = document.querySelectorAll("button.category_btn");

categoryBtns.forEach( btn => {
  btn.addEventListener("click", () => {
    setCategory(btn.id);
    cateClickBold(btn.id);
  });
});

const setCategory = ( category ) => {
  if(category === "webtoon") {
    hideElement("dummy_page");
    displayElement("contents");
  } else {
    hideElement("contents");
    displayElement("dummy_page");
  }
}

const displayElement = (element) => {
  let ele = document.getElementById(element);
  ele.style.display = "block";
}

const hideElement = (element) => {
  let ele = document.getElementById(element);
  ele.style.display = "none";
}

const cateClickBold = (element) => {
  let ele = document.getElementById(element);
  categoryBtns.forEach( categoryId => {
    categoryId.className = "category_btn";
  });
  ele.className = "category_clicked";
}

setCategory("webtoon");
cateClickBold("webtoon");