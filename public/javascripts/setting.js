
/* 노란색 밑줄 강조 기능 등록 */
ADD_HIGHLIGHT_BY_CLICKED("daytop-li");
ADD_HIGHLIGHT_BY_CLICKED("nav-dummy");
ADD_HIGHLIGHT_BY_CLICKED("daytop-main-li");

/* 반복되는 그리드 및 요일 내비게이션 기능 등록 */
ADD_DAY_GRID_DATA("../data/daytop.json", "daytop-div-row1", 0);
SHOW_DAY_CONTENT("../data/daytop.json", "daytop-div-row1", "daytop-li");

ADD_DAY_GRID_DATA("../data/daytopmain.json", "daytop-main-div", 0);
SHOW_DAY_CONTENT("../data/daytopmain.json", "daytop-main-div", "daytop-main-li");