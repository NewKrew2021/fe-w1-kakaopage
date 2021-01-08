(function() {
    const mainNavbarData = [
        {
            "link":"/home",
            "image":"https://static-page.kakao.com/static/pc/menu_home.svg?fac7abe73b67dd1eb997d70a2c52d4d0",
            "name":"홈"
        },
        {
            "link":"/webtoon",
            "image":"https://static-page.kakao.com/static/pc/menu_toon.svg?42b75d406ec543b2fcf64e35287f0724",
            "name":"웹툰/만화"
        },
        {
            "link":"/webnovel",
            "image":"https://static-page.kakao.com/static/pc/menu_novel.svg?296e815be15f5e5edcdddb865f9863cd",
            "name":"웹소설/장르"
        },
        {
            "link":"/movie",
            "image":"https://static-page.kakao.com/static/pc/menu_vod.svg?0df7689ed8c083054bd9949aed77c589",
            "name":"영화"
        },
        {
            "link":"/broadcast",
            "image":"https://static-page.kakao.com/static/pc/menu_broadcast.svg?a6b4779526f1fa5dbeb1516607770b16",
            "name":"예능/드라마"
        },
        {
            "link":"/book",
            "image":"https://static-page.kakao.com/static/pc/menu_book.svg?8fd0c5dc69d357fa23dd953d3b7e71aa",
            "name":"책"
        }
    ];
        
    const mainNavbar = document.querySelector('.main-navbar');
    const navListElement = document.createElement('ul');
    mainNavbar.appendChild(navListElement);
    
    mainNavbarData.forEach((navData) => {
        const navElement = document.createElement('li');
        const navLink = document.createElement('a');
        const navImg = document.createElement('img');
        navLink.href = navData['link'];
        navImg.alt = navData['name'];
        navImg.src = navData['image'];
        if (navData['link'] == window.location.pathname) {
            navElement.className="selected";
        }
        navLink.appendChild(navImg);
        navElement.appendChild(navLink);
        navListElement.appendChild(navElement);
    })
    
    const navElementNodelist = mainNavbar.querySelectorAll('li');
    navElementNodelist.forEach((ele) => {
        ele.addEventListener('click', () => {
            navElementNodelist.forEach((nav) => {nav.className = "";});
            ele.className = "selected";
        });
    })
})()