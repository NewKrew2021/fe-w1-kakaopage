# fe-w1-kakaopage

# 카카오페이지 클론코딩

## 구조
  app.js : Express  -> pm2
  public  
  &nbsp;&nbsp;|- index.html  
  &nbsp;&nbsp;|- js  
  &nbsp;&nbsp;&nbsp;&nbsp;|- category.js  
  &nbsp;&nbsp;&nbsp;&nbsp;|- banner.js  
  &nbsp;&nbsp;&nbsp;&nbsp;|- event.js  
  &nbsp;&nbsp;&nbsp;&nbsp;|- weektop.js  
  &nbsp;&nbsp;|- css  
  &nbsp;&nbsp;&nbsp;&nbsp;|- style.css  
  &nbsp;&nbsp;&nbsp;&nbsp;|- contents.css  
  &nbsp;&nbsp;|- img  
  &nbsp;&nbsp;&nbsp;&nbsp;|- webtoon  
  &nbsp;&nbsp;|- data  
  &nbsp;&nbsp;&nbsp;&nbsp;|- webtoon.json  
  
## start
  - npm install
  - pm2 start app.js
  - url = localhost:3000

## 2021-1-4
  - Node, Express, pm2 설치, 로컬서버환경 구성
  - header, nav 구현
  
## 2021-1-5
  - Genre
  - Banner
  - Dashboard
  - Event
    - 구현

## 2021-1.6
  - NavBar 동적 기능 구현
  - CategoryBar 동적 기능 구현 - 미완
  - 요일별 웹툰 (weektop)
    - View(HTML, CSS) 부분 구현
    - 웹툰 데이터 저장 - data/webtoon.json
    - 요일 클릭시 특정 요일의 웹툰 보여주는 동적 기능 구현 - 미완
  - PR Comments 중 일부 반영
    - 의미있는 변수명 사용
    - HTML 내부에서 JS사용 지양 => addEventListener, querySelector 등 활용
  * 내일부터는 Feature, Issue 단위로 커밋 자주하는 습관...


## 2021-1.7
   - CategoryBar 동적 기능
   - 요일별 웹툰 (weektop)
     - 요일 클릭시 특정 요일의 웹툰 보여주는 기능
   - 장르(genre)
     - 장르별 레이아웃