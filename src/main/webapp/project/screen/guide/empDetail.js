function screen_on_submitcomplete(mapid, result, recv_userheader, recv_code, recv_msg)
{
console.log(recv_userheader);
						
	if(recv_code == 200)
	{
						
	screen.alert("수정되었습니다.");
				
	}
	if(recv_userheader == "delete")
	{
	
	screen.alert("삭제되었습니다.");	
	}						
}

function screen_on_load()
{
						
	/* screen으로 부터 얻어온 데이타를 가져온다. */					
	var data = screen.getextradata();
	console.log(data);
	
	/* xDataSet에 클릭한 회원 번호를 저장해준다. */
	this.DS_DETAILREQ.addrow();
	DS_DETAILREQ.setdata(0,0,data);
	
 	screen.requestsubmit("TR_DETAILSELECT",true);

}

function btn_quit_on_mouseup(objInst)
{
	factory.closemenu("상세정보");		
}

function btn_modify_on_mouseup(objInst)
{	
		screen.requestsubmit("TR_UPDATE", true);	
}

function btn_delete_on_mouseup(objInst)
{
	screen.requestsubmit("TR_DELETE", true);
}