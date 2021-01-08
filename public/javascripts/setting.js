
/* 노란색 밑줄 강조 기능 등록 */
addBorderOnClicked("daytop-li");
addBorderOnClicked("nav-dummy");
addBorderOnClicked("daytop-main-li");

/* 반복되는 그리드 및 요일 내비게이션 기능 등록 */
addDayGridData("../data/daytop.json", "daytop-div-row1", 0);
showDayContent("../data/daytop.json", "daytop-div-row1", "daytop-li");

addDayGridData("../data/daytopmain.json", "daytop-main-div", 0);
showDayContent("../data/daytopmain.json", "daytop-main-div", "daytop-main-li");