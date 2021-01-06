/* 배너 이미지 변경하기 */
var count = 0;
getElement("btn-prev").addEventListener("click", ()=>{
    if(count > 0){
        count--;
        getElement("banner-img").setAttribute('src',topbannerImg[count]);
    }
    else if (count <= 0){
        count = 2;
        getElement("banner-img").setAttribute('src',topbannerImg[count]);
    }
});
getElement("btn-next").addEventListener("click", ()=>{
    if(count < 2){
        count++;
        getElement("banner-img").setAttribute('src',topbannerImg[count]);
    }
    else if (count >= 2){
        count = 0;
        getElement("banner-img").setAttribute('src',topbannerImg[count]);
    }
});
