/*
* mapid : requestsubmit() 함수를 호출할때, 첫번째 파라미터인 트랜잭션 MAP ID값 
* result : 서버와의 데이터 수신에 대한 처리 결과 (Rmeart 참조) 
* recv_userheader : 서버에서 setUserHeader 함수를 통해 설정한 데이터 
* recv_code : 서버에서 setMessage 함수 또는 setErrorMessage 함수를 통해서 설정한 코드 
* recv_msg : 서버에서 setMessage 함수 또는 setErrorMessage 함수를 통해서 설정한 메세지 
*/
function screen_on_submitcomplete(mapid, result, recv_userheader, recv_code, recv_msg)
{
	screen.setscreenprotect(false);   // 화면 잠금 해제

	//처리결과에 대한 내용을 표시
	fldMapId.settext(mapid);
	fldResult.settext(result);
	fldUserHeader.settext(recv_userheader);
	fldRecvCode.settext(recv_code);
	mulRecvMsg.settext(recv_msg);
}

/*
* 조회 버튼 마우스 클릭업시 이벤트 호출
*/
function btn_search_on_mouseup(objInst)
{
	screen.setscreenprotect(true);   // 화면 잠금 
	
	// arg 1 : 전송시 사용할 TranMapID 
	// arg 2 : 동기/비동기 처리 여부 
	screen.requestsubmit("TR_SELECT", true);	
}

/*
* 업데이트(제공 유틸 사용) 버튼 마우스 클릭업시 이벤트 호출
*/
function btn_updateUtil_on_mouseup(objInst)
{
	screen.setscreenprotect(true);   // 화면 잠금 
	
	screen.requestsubmit("TR_UPDATE_UTIL", true);	
}


/*
* 추가 버튼 마우스 클릭업시 이벤트 호출
* 그리드에 행 추가
*/
function btn_insert_on_mouseup(objInst)
{
	grid.additem();
}

/*
* 삭제 버튼 마우스 클릭업시 이벤트 호출
* 그리드에 체크한 행 삭제
*/
function btn_delete_on_mouseup(objInst)
{
	grid.deletecheckedrow();
}

function fldEmpAge_on_keydown(objInst, keycode, bctrldown, bshiftdown, baltdown, bnumpadkey)
{
	if(keycode == "13") { btn_search_on_mouseup(); }
	return 0;
}