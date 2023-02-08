// 팝업 버튼 이벤트 처리
function btnLoadPopup_on_mouseup(objInst)
{
	// 팝업 이름 변수 선언 및 값 지정
	var strPopupName = "POPUP_NAME";
	
	// factory 오브젝트를 이용하여 팝업 화면 생성
	factory.loadpopup(strPopupName, "/POPUP/Popup", "팝업 타이틀",
		false, 2, 0, 0, true, true, screen);
		
	// 생성한 팝업 화면을 팝업 이름을 이용하여 찾음
	var objPopup = factory.findpopup(strPopupName);
	
	// 팝업 화면을 모달 형식으로 화면에 표시
	var nReturn = objPopup.domodal();
		
		
		
		
}



	