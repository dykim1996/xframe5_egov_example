function screen_on_load()
{
	//screen.setscreenprotect(true); //화면 잠금
	screen.requestsubmit("TR_SELECT",true);
	
}

function empList_on_itemdblclick(objInst, nDblClickRow, nDblClickColumn, bBtnClick, nImgIndex, strImgUrl)
{
	var empNo = empList.getitemtext(nDblClickRow,0);
	
	

  // 메뉴 화면의 넓이 및 높이 변수 설정
	var nMenuWidth = 600;
	var nMenuHeight = 380;
	
	// 메뉴 화면의 이름 설정
	var strMenuName = "MENU";
	
	// 버튼의 Left와 Bottom 위치로 메뉴 표시 좌표 설정
	var nMenuXPos = 530;
	var nMenuYPos = 100;
	
	// 메뉴 화면 로드
	factory.loadmenu("상세정보", "/guide/empDetail",
		nMenuXPos, nMenuYPos, nMenuWidth, nMenuHeight, screen,empNo);
	
}

function screen_on_activate()
{
	screen.requestsubmit("TR_SELECT",true);
	console.log("수정된 데이터로 리로드");
}

function btn_regist_on_mouseup(objInst)
{

  	// 메뉴 화면의 넓이 및 높이 변수 설정
	var nMenuWidth = 600;
	var nMenuHeight = 380;
	
	// 메뉴 화면의 이름 설정

	
	// 버튼의 Left와 Bottom 위치로 메뉴 표시 좌표 설정
	var nMenuXPos = 530;
	var nMenuYPos = 100;
	
	// 메뉴 화면 로드
	factory.loadmenu("회원등록", "/guide/empRegist",
	nMenuXPos, nMenuYPos, nMenuWidth, nMenuHeight,screen);
}

function btn_search_on_mouseup(objInst)
{

	/* 검색을 할 회원 이름을 입력한다. */
	DS_REQ.addrow();
	
	DS_REQ.setdata(0,1,fld_name.gettext());
	console.log(DS_REQ);
 	screen.requestsubmit("TR_SEARCH",true);
 

}