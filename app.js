const express = require('express');
const app = express();
const port = 3001;

/* data(json 데이터로 수정해서 없앨 부분) */
const home_banner_1_txt = ['오늘 UP', '오늘 신작', '오리지널'];
const home_banner_1_attr = ['first','second','third'];
const home_banner_1_cnt = ['161','','1,250'];

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
const slideJSON = JSON.parse(slideData);
const home_slide = slideJSON.home_slide;
const day_slide = slideJSON.day_slide;

app.get('/', function(req, res){
  res.render('index', { home_slide, homeBanner, day_slide });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})