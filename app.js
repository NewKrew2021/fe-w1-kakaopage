const express = require('express');
const app = express();
const port = 3001;

/* data(json 데이터로 수정할 부분) */
const day_slide_numtxt = ['1/3', '2/3', '3/3'];
const day_slide_title = ['핫차!핫차! 차나무생', '사실, 그들은 오직 그녀만을 기다리고 있습니다', '불사무적'];
const day_slide_explain = ['노는 게 제일 좋아~ 어른이 모여라!', '그녀는 어디로 갔단 말입니까?', '다시 태어난 불사존의 활약!'];
const day_slide_img = ["/images/daytoon1.png", "/images/daytoon2.png", "/images/daytoon3.png"];
const home_banner_1_txt = ['오늘 UP', '오늘 신작', '오리지널'];
const home_banner_1_attr = ['first','second','third'];
const home_banner_1_cnt = ['161','','1,250'];

var day_slide = [
  { numtxt: day_slide_numtxt[0], img: day_slide_img[0], title: day_slide_title[0], exp: day_slide_explain[0] },
  { numtxt: day_slide_numtxt[1], img: day_slide_img[1], title: day_slide_title[1], exp: day_slide_explain[1] },
  { numtxt: day_slide_numtxt[2], img: day_slide_img[2], title: day_slide_title[2], exp: day_slide_explain[2] },
];

var homeBanner = [
  {text: home_banner_1_txt[0], attr: home_banner_1_attr[0], cnt: home_banner_1_cnt[0]},
  {text: home_banner_1_txt[1], attr: home_banner_1_attr[1], cnt: home_banner_1_cnt[1]},
  {text: home_banner_1_txt[2], attr: home_banner_1_attr[2], cnt: home_banner_1_cnt[2]}
]

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('data','./data');

/* json 데이터 처리하는 부분 */
const fs = require('fs');
const slideData = fs.readFileSync('./public/data/slides.json');
const home_slide = JSON.parse(slideData).home_slide;

app.get('/', function(req, res){
  res.render('index', { home_slide, homeBanner, day_slide });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})