let bannerIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
  changeBanner(bannerIndex += -1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  changeBanner(bannerIndex += 1);
});

const changeBanner = curBanner => {
  let idx;
  let banners = document.getElementsByClassName("banner");
  if (curBanner > banners.length) {bannerIndex = 1}
  if (curBanner < 1) {bannerIndex = banners.length}
  for (idx = 0; idx < banners.length; idx++) {
      banners[idx].style.display = "none";
  }
  banners[bannerIndex-1].style.display = "block";
}

const showBanners = () => {
  let idx;
  let banners = document.getElementsByClassName("banner");
  for (idx = 0; idx < banners.length; idx++) {
    banners[idx].style.display = "none";
  }
  bannerIndex++;
  if (bannerIndex > banners.length) {bannerIndex = 1}
  if(banners[bannerIndex-1].style.display) {
    banners[bannerIndex-1].style.display = "block";
  }
  setTimeout(showBanners, 3000);
}

showBanners();