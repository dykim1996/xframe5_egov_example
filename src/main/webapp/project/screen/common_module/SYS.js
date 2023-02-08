// 거래용 코드
var LOGIN_SUCCESS     = "login_success"; // 로그인 성공시 코드
var LOGIN_FAIL        = "login_fail";	// 로그인 실패시 코드
var LOGOUT_SUCCESS    = "msg.logout.success";
var LOGOUT_FAIL       = "msg.logout.fail";
var LOGOUT_TIMEOUT    = "msg.common.login.not";
var TRAN_FAILURE_CODE = "0000"; // 실패시 코드

// 공통화면용 인스턴스
var objStartMain   = null;
var objWinMain 	= null;
var objScreenFrame = null;

// 로그인정보용 객체
var loginUserInfo = {user_id:"", user_name:""};

/**
 * 거래완료 후 호출해야 하는 함수
 * @param _screen 해당화면의 screen인스턴스
 */ 
function submitcomplete(_screen, mapid, result, recv_userheader, recv_code, recv_msg){

	// 일반거래시 세션만료로 인한 로그아웃 처리
	if(recv_code == LOGOUT_TIMEOUT){
		_screen.alert(recv_msg);
		loginFormGo(_screen);
	}

	// 로그아웃 버튼 클릭시
	if(recv_code == LOGOUT_SUCCESS){
		_screen.alert(recv_msg);
		loginFormGo(screen);
	}
}

/**
 * 로그인폼으로 보낸다
 * @param _screen 해당화면의 screen인스턴스
 */ 
function loginFormGo(_screen){
	var objMainTab = null;
	
		if(factory.isobject(objStartMain)){
			objMainTab = objStartMain.getinstancebyname("mainTab");
		}	
		
		// 0번 탭아이템(로긴탭) 제외하고 모두 지우기
		for(var i = objMainTab.gettabitemcount(); i > 1; i--){
			objMainTab.deletetab(i - 1);
		}
}

function getLogoutMsg(){
	return LOGOUT_SUCCESS; 
}

/**
 * 화면사이즈를 변경시킨다
 * @param screenHeihgt 변경할 화면height
 */ 
function setWinMainScreenHeight(screenHeihgt)
{
	var screenIns = objScreenFrame;
	var objScreenFrameMember = screenIns.getmembers(XFD_JAVASCRIPT);
	
	objScreenFrameMember.setWinMainScreenHeight(screenHeihgt);
}  

/**
 * 새로운 업무 화면을 오픈한다.
 * @param url 화면 전체 경로 (예: "/CCN/MIDDLE/MiddleMain")
 * @return
 * 	1 성공
 * 	0 실패
 *     -2 화면이 존재하지 않는 경우
 */ 
function loadScreen(url, screenHeight)
{
	var screenIns = objScreenFrame;	
	var objScreenFrameMember = screenIns.getmembers(XFD_JAVASCRIPT);
	
	//objScreenFrameMember.changeTab(url, screenHeight);
	return objScreenFrameMember.screenFrameChangeTab(url);
}       

// 로그인된 사용자의 id를 리턴한다.
function getLoginName(){
	return loginUserInfo.user_id;
}

/**
 * 로그인된 사용자의 name을 리턴한다.
 */ 
function getLoginId(){
	return loginUserInfo.user_name;	
}

/**
 * 로그인된 사용자의 id를 저장한다.
 */ 
function setLoginName(user_name){
	if(user_name === undefined) { return; }

	loginUserInfo.user_name = user_name;
}

/**
 * 로그인된 사용자의 name을 저장한다.
 */ 
function setLoginId(user_id){
	if(user_id === undefined) { return; }

	loginUserInfo.user_id = user_id;	
}