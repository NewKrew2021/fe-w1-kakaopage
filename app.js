const express = require('express');
const app = express();
const port = 3001;

/* data */
const day_slide_numtxt = ['1/3', '2/3', '3/3'];
const day_slide_title = ['핫차!핫차! 차나무생', '사실, 그들은 오직 그녀만을 기다리고 있습니다', '불사무적'];
const day_slide_explain = ['노는 게 제일 좋아~ 어른이 모여라!', '그녀는 어디로 갔단 말입니까?', '다시 태어난 불사존의 활약!'];
const day_slide_img = ["/images/daytoon1.png", "/images/daytoon2.png", "/images/daytoon3.png"];
const slide_numtxt = ['1/4', '2/4', '3/4', '4/4'];
const slide_img = ["/images/toon3.png","/images/toon1.png","/images/toon4.png","/images/toon2.png"]
const slide_title = ['마족의 계약', '빅 라이프', '까마귀 우는 밤', '트리거'];
const slide_explain = ['마계공주, 인간세계에서 무료봉사 중?!', '안 팔리는 무명 작가의 인생 대반전!', '우리 다시 만날 수 있어요?', '내 안의 화끈한 방아쇠를 당겨라!'];
const slide_subtxt_img = ['/images/badge-up.svg','/images/badge-up.svg','/images/badge-up.svg','/images/badge-up.svg'];
const slide_subtxt_dir = ['웹툰','웹툰','웹툰','웹툰'];
const slide_subtxt_person = ['42.7만명','43.1만명','34.1만명','33.5만명'];
const home_banner_1_txt = ['오늘 UP', '오늘 신작', '오리지널'];
const home_banner_1_attr = ['first','second','third'];
const home_banner_1_cnt = ['161','','1,250'];


var day_slide = [
  { numtxt: day_slide_numtxt[0], img: day_slide_img[0], title: day_slide_title[0], exp: day_slide_explain[0] },
  { numtxt: day_slide_numtxt[1], img: day_slide_img[1], title: day_slide_title[1], exp: day_slide_explain[1] },
  { numtxt: day_slide_numtxt[2], img: day_slide_img[2], title: day_slide_title[2], exp: day_slide_explain[2] },
];

var home_slide = [
  { numtxt: slide_numtxt[0], img: slide_img[0], title: slide_title[0], exp: slide_explain[0],
    subtxt_img: slide_subtxt_img[0], subtxt_dir: slide_subtxt_dir[0], subtxt_person: slide_subtxt_person[0]
  },
  { numtxt: slide_numtxt[1], img: slide_img[1], title: slide_title[1], exp: slide_explain[1],
    subtxt_img: slide_subtxt_img[1], subtxt_dir: slide_subtxt_dir[1], subtxt_person: slide_subtxt_person[1]
  },
  { numtxt: slide_numtxt[2], img: slide_img[2], title: slide_title[2], exp: slide_explain[2],
    subtxt_img: slide_subtxt_img[2], subtxt_dir: slide_subtxt_dir[2], subtxt_person: slide_subtxt_person[2]
  },
  { numtxt: slide_numtxt[3], img: slide_img[3], title: slide_title[3], exp: slide_explain[3],
    subtxt_img: slide_subtxt_img[3], subtxt_dir: slide_subtxt_dir[3], subtxt_person: slide_subtxt_person[3]
  },
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

const fs = require('fs');
const data = fs.readFileSync('./public/data/webtoon.json');
const data_parse = JSON.parse(data);
console.log(data_parse.items);

app.get('/', function(req, res){
  res.render('index', { home_slide, homeBanner, day_slide });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})