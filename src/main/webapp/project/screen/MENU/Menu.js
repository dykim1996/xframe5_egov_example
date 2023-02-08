﻿// "Say Hello" 버튼 이벤트 처리
function btnMenu1_on_mouseup(objInst)
{
// 화면 로드 함수 호출
loadScreen("/TEST/say_hello");
}
// "Load Popup" 버튼 이벤트 처리
function btnMenu2_on_mouseup(objInst)
{
// 화면 로드 함수 호출
loadScreen("/POPUP/LoadPopup");
}
/**
 * 화면 URL 에 대한 정보에 해당하는 화면을 로드하기 위해서
 * 부모 화면의 loadScreen 함수를 호출한다.
 * @param strScreenUrl 로딩할 화면의 URL
 */
function loadScreen(strScreenUrl)
{
// 메뉴를 로드한 부모 화면 오브젝트를 구하고, 검사
var objParentScreen = screen.getparent();
if(factory.isobject(objParentScreen) == false) {
 screen.alert("부모 화면을 구할 수 없습니다.");
 return;
}

// 부모 화면의 JavaScript 멤버 오브젝트를 구하고, 검사
var objParentScreenMember = objParentScreen.getmembers(XFD_JAVASCRIPT);
if(factory.isobject(objParentScreenMember) == false) {
 screen.alert("부모 화면 멤버을 구할 수 없습니다.");
 return;
}

// 부모 화면의 JavaScript 멤버 오브젝트를 통해서,
// 부모 화면에 있는 loadScreen 함수 호출
var nRet = objParentScreenMember.loadScreen(strScreenUrl);
if(nRet < 0) {
 screen.alert("화면 로드 오류가 발생하였습니다.");
}
}