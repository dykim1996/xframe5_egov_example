// 메뉴 로드 버튼 이벤트 처리
function btnLoadMenu_on_mouseup(objInst)
{
	// 메뉴 화면의 넓이 및 높이 변수 설정
	var nMenuWidth = 110;
	var nMenuHeight = 80;
	
	// 메뉴 화면의 이름 설정
	var strMenuName = "MENU";
	
	// 버튼의 Left와 Bottom 위치로 메뉴 표시 좌표 설정
	var nMenuXPos = btnLoadMenu.getwindowleft();
	var nMenuYPos = btnLoadMenu.getwindowbottom();
	console.log(nMenuXPos);
	// 메뉴 화면 로드
	factory.loadmenu(strMenuName, "/MENU/Menu",
		nMenuXpos, nMenuYpos, nMenuWidth, nMenuHeight, screen);
		
}

/**
 * 메뉴 화면에서 호출되는 함수이며,
 * 화면 URL 에 대한 정보에 해당하는 화면을 탭 아이템을 추가하면서 로드한다.
 * @param strScreenUrl 로딩할 화면의 URL
 * @return
 * >0 : 추가된 탭 인덱츠
 * -1 : 내부 오류
 * -2 : 화면이 존재하지 않음
 */
function loadScreen(strScreenUrl)
{
// 탭에 화면 경로에 해당하는 화면을 로드하고, 새로 추가된 탭 아이템의 인덱스를 구함
var nTabIndex = tabScreen.addtab("SCREEN_ID", 1, 100, strScreenUrl);
if(nTabIndex < 0) {
 return nTabIndex;
}

// 텝에 링크된 화면 오브젝트를 구함
var objScreen = tabScreen.getchildscreeninstance(nTabIndex);
// 탭에 링크된 화면의 ID 를 구함
var strScreenId = objScreen.getscreenid();

// 탭 아이템 텍스트를 링크돤 화면의 ID 로 변경
tabScreen.settabitemtext(nTabIndex, strScreenId);

return nTabIndex;
}