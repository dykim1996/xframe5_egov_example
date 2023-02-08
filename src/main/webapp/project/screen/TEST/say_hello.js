// 화면 내 스크립트에서 전역적으로 사용할 변수 선언
var m_strDefaultName = "홍길동";

// 화면 로드 이벤트 처리
function screen_on_load()
{
	// 이름 필드에 값을 설정한다.
	fldName.settext(m_strDefaultName);
}


/*
버튼의 마우스 업 이벤트를 처리한다.
objInst 파라미터는 이벤트가 발생한 UI 컨트롤의 오브젝트이다.
*/
function btnSayHello_on_mouseup(objInst)
{
	// factory 오브젝트를 이용해서 콘솔 창에 objInst 파라미터의 이름을 출력한다.
	factory.consoleprint("Object Name : " + objInst.getname());
	
	// 현재 시간을 구하는 함수를 호출하여 값을 구한다.
	var strTime = TimeUtil.getCurrentTime();
	
	// screen 오브젝트를 이용해서 화면에 Alert 창을 표시한다.
	screen.alert("Hi! " + fldName.gettext() + ", 현재 시각 : " + strTime);
		
}

