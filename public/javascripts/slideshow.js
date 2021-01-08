const Slideshow = {};

(function(){
    Slideshow.render = (genre) => {
        const data = slideshowData[genre];
        const slideshow = document.querySelector(".content-box > .slideshow");
        slideshow.innerHTML = `<img src=${data[0]['image']} alt=${data[0]['title']}>`
    };
})();
