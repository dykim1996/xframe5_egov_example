function screen_on_submitcomplete(mapid, result, recv_userheader, recv_code, recv_msg)
{
	
	console.log(recv_userheader);					
	
}




function btn_regist_on_mouseup(objInst)
{
	DS_DETAILREQ.addrow();
	DS_DETAILREQ.setdatabyname(0,"emp_name",fld_name.gettext());
	if(fld_gender.getcheck()) 
	{
	DS_DETAILREQ.setdatabyname(0,"emp_gender","남");
	}
	else DS_DETAILREQ.setdatabyname(0,"emp_gender","여");
	DS_DETAILREQ.setdatabyname(0,"emp_addr",fld_addr.gettext());
	DS_DETAILREQ.setdatabyname(0,"emp_birth",fld_birth.gettext());
	DS_DETAILREQ.setdatabyname(0,"emp_phone",fld_phone.gettext());
	DS_DETAILREQ.setdatabyname(0,"emp_email",fld_email.gettext());
	
	
	screen.requestsubmit("TR_REGIST", true);
	screen.alert("등록되었습니다.");
	
}

function btn_cancle_on_mouseup(objInst)
{
	factory.closemenu("회원등록");
}



function fld_email_on_click(objInst, buttonclick)
{

}