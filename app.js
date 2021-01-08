const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('data','./data');

/* json 데이터 처리하는 부분 */
const fs = require('fs');
const readJson = (dir) => fs.readFileSync("./public/data/"+dir+".json");

const slideJSON = JSON.parse(readJson('slides'));
const home_totalJSON = JSON.parse(readJson('total'));
const home_topJSON = JSON.parse(readJson('hometop'));
const day_topJSON = JSON.parse(readJson('daytop'));
const day_expectJSON = JSON.parse(readJson('dayexpect'));
const day_top_mainJSON = JSON.parse(readJson('daytopmain'));
const day_rankingJSON = JSON.parse(readJson('dayranking'));

const home_slide = slideJSON.home_slide;
const day_slide = slideJSON.day_slide;
const homeBanner = home_totalJSON.home_total;
const home_top = home_topJSON.data;
const day_top = day_topJSON.data;
const day_expect = day_expectJSON.data;
const day_top_main = day_top_mainJSON.data;
const day_ranking = day_rankingJSON.data;

app.get('/', function(req, res){
  res.render('index', { home_slide, day_top, day_top_main,
    day_expect, homeBanner, home_top, day_ranking, day_slide });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})