package xframework.com.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import xdataset5.XDataSet5;
import xdataset5spring.XFrame5Util;
import xdataset5spring.XFrame5View;
import xframework.com.service.ExampleService;

@Controller
public class SimpleXDataSet5Contoller {
	
	@Resource(name = "exampleService")
	private ExampleService exampleService;
	
	private Log log = LogFactory.getLog(this.getClass());
	
	/**
	 * xframe5 조회  (기본방식) 
	 * @param request 스프링에서 제공해주는 HttpServletRequest
	 * @param response 스프링에서 제공해주는 HttpServletResponse
	 * @param model 스프링에서 제공해주는 ModelMap
	 */
//	@RequestMapping(value = "/sample/selectSimple.do")
//	public void select(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
//		log.info("xframe5 조회  (기본방식)");
//		
//		XDataSet5 xDataSet5 = null;
//		String strEmpAge = null;
//		Map<String, Object> element = null;
//		int nRow = 0;
//		
//		try {
//			// XDataSet5오브젝트 생성
//			xDataSet5 = new XDataSet5(request, response);
//			
//			// XDataSet5오브젝트에 포함되어 있는 부가 메타 정보를 로깅
//			log.info("ScreenNo : " + xDataSet5.getScreenNo());
//			log.info("IP : " + xDataSet5.getTerminalIpAddress());
//			log.info("Map ID : " + xDataSet5.getTransactionMapId());
//			log.info("User Header : " + xDataSet5.getUserHeader());					
//			
//			// XDataSet5오브젝트로부터 직원 정보 조회 기준인 직원 이름 정보를 얻어온다.
//			// 이 정보는 "TR_SELECT" 트랜잭션의 입력 데이터 셋인 "DS_EMP_AGE"의 "EMP_AGE" 칼럼에서 정보를 가져온다.
//			strEmpAge = xDataSet5.getData("DS_EMP_AGE", "EMP_AGE", 0);	// ds_input 데이터셋의 첫번째줄의 EMP_NAME 값 반환	
//			
//			// 직원 이름으로 DB검색
//			List<Map<String,Object>> empInfoList = exampleService.selectMapListByStr(strEmpAge);
//			Iterator<Map<String, Object>> iterator = empInfoList.iterator();
//			
//			// DB검색 결과와 출력 데이터셋을 XDataSet5 오브젝트에 추가
//			while (iterator.hasNext()) {
//				element = iterator.next();
//				xDataSet5.setData("DS_EMP_INFO", "EMP_NAME", nRow, String.valueOf(element.get("EMP_NAME")));
//				xDataSet5.setData("DS_EMP_INFO", "EMP_NO", nRow, String.valueOf(element.get("EMP_NO")));	
//				xDataSet5.setData("DS_EMP_INFO", "EMP_AGE", nRow, String.valueOf(element.get("EMP_AGE")));	
//				xDataSet5.setData("DS_EMP_INFO", "DEPT_CODE", nRow, String.valueOf(element.get("DEPT_CODE")));	
//				xDataSet5.setData("DS_EMP_INFO", "TITLE_CODE", nRow, String.valueOf(element.get("TITLE_CODE")));	
//				xDataSet5.setData("DS_EMP_INFO", "MAIL_ADDR", nRow,String.valueOf(element.get("MAIL_ADDR")));
//				
//			    nRow++;
//			}
//			// 유저헤더부 세팅시 아래와 같이 호출
//			// xDataSet5.setUserHeader("user_header_msg");
//			// 일반메시지 세팅시 아래와 같이 호출
//			// xDataSet5.setMessage("normal_msg_code", "normal_msg_detail");
//			
//			xDataSet5.returnData();	// response로 데이터 반환처리함		
//			
//		} catch (Exception e) {		
//			log.error("select = " + e);
//			try {
//				if(xDataSet5 != null) {
//					// 로직 처리중 Exception이 발생할 경우, XDataSet5오브젝트에 에러 코드와 에러 메시지를 설정하고 송신
//					xDataSet5.setErrorMessage("error_msg_code", e.toString());
//					xDataSet5.returnData();	//response로 데이터 반환처리	
//				}
//			} catch (Exception ex) {
//				log.error(ex);
//			}
//		}
//	}
//	
	@RequestMapping(value = "/sample/select.do")
	public void simpleSelect(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		
		log.info("회원 목록 조회  (기본방식)");
		XDataSet5 xDataSet5 = null;
		Map<String, Object> element = null;
		int nRow = 0;
		
		try {
			// XDataSet5오브젝트 생성
			xDataSet5 = new XDataSet5(request, response);
			
			// XDataSet5오브젝트에 포함되어 있는 부가 메타 정보를 로깅
			log.info("ScreenNo : " + xDataSet5.getScreenNo());
			log.info("IP : " + xDataSet5.getTerminalIpAddress());
			log.info("Map ID : " + xDataSet5.getTransactionMapId());
			log.info("User Header : " + xDataSet5.getUserHeader());					
			
	
			// 회원 목록 DB검색후 변수에 반환
			List<Map<String,Object>> empInfoList = exampleService.selectList();
			Iterator<Map<String, Object>> iterator = empInfoList.iterator();
			System.out.println(empInfoList);
			
			// DB검색 결과와 출력 데이터셋을 XDataSet5 오브젝트에 추가
			while (iterator.hasNext()) {
				element = iterator.next();
				xDataSet5.setData("DS_REQ", "emp_no", nRow, String.valueOf(element.get("emp_no")));
				xDataSet5.setData("DS_REQ", "emp_name", nRow, String.valueOf(element.get("emp_name")));	
				xDataSet5.setData("DS_REQ", "emp_gender", nRow, String.valueOf(element.get("emp_gender")));	
				xDataSet5.setData("DS_REQ", "emp_addr", nRow, String.valueOf(element.get("emp_addr")));	
				xDataSet5.setData("DS_REQ", "emp_email", nRow, String.valueOf(element.get("emp_email")));	
				xDataSet5.setData("DS_REQ", "emp_birth", nRow,String.valueOf(element.get("emp_birth")).substring(0,10));
				xDataSet5.setData("DS_REQ", "emp_phone", nRow,String.valueOf(element.get("emp_phone")));

			    nRow++;
			}
			// 유저헤더부 세팅시 아래와 같이 호출
			// xDataSet5.setUserHeader("user_header_msg");
			// 일반메시지 세팅시 아래와 같이 호출
			// xDataSet5.setMessage("normal_msg_code", "normal_msg_detail");
			
			xDataSet5.returnData();	// response로 데이터 반환처리함		
			
		} catch (Exception e) {		
			log.error("select = " + e);
			try {
				if(xDataSet5 != null) {
					// 로직 처리중 Exception이 발생할 경우, XDataSet5오브젝트에 에러 코드와 에러 메시지를 설정하고 송신
					xDataSet5.setErrorMessage("error_msg_code", e.toString());
					xDataSet5.returnData();	//response로 데이터 반환처리	
				}
			} catch (Exception ex) {
				log.error(ex);
			}
		}
	}
	
	/* 회원 상세 조회 */
	@RequestMapping(value = "/sample/detailSelect.do")
	public void detailSelect(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		
		log.info("회원상세조회 ");
		
		XDataSet5 xDataSet5 = null;
		String emp_no = null;
		int nRow = 0;
		
		try {
			// XDataSet5오브젝트 생성
			xDataSet5 = new XDataSet5(request, response);
			
			// XDataSet5오브젝트에 포함되어 있는 부가 메타 정보를 로깅
			log.info("ScreenNo : " + xDataSet5.getScreenNo());
			log.info("IP : " + xDataSet5.getTerminalIpAddress());
			log.info("Map ID : " + xDataSet5.getTransactionMapId());
			log.info("User Header : " + xDataSet5.getUserHeader());					
			
			// XDataSet5오브젝트로부터 직원 정보 조회 기준인 직원 번호 정보를 얻어온다.
			// 이 정보는 "TR_DETAILSELECT" 트랜잭션의 입력 데이터 셋인 "DS_DETAILREQ"의 "emp_no" 칼럼에서 정보를 가져온다.
	
			emp_no = xDataSet5.getData("DS_DETAILREQ", 0, 0);	// 데이터셋의 첫번째줄의 emp_no 값 반환
			
			// 직원 이름으로 DB검색
			Map<String,Object> empInfoList = exampleService.selectMapByStr(emp_no);
			System.out.println("empInfoList : " + empInfoList);
			
			// DB검색 결과와 출력 데이터셋을 XDataSet5 오브젝트에 추가

			xDataSet5.setData("DS_DETAILREQ", "emp_no", nRow, String.valueOf(empInfoList.get("emp_no")));
			xDataSet5.setData("DS_DETAILREQ", "emp_name", nRow, String.valueOf(empInfoList.get("emp_name")));	
			xDataSet5.setData("DS_DETAILREQ", "emp_gender", nRow, String.valueOf(empInfoList.get("emp_gender")));	
			xDataSet5.setData("DS_DETAILREQ", "emp_addr", nRow, String.valueOf(empInfoList.get("emp_addr")));	
			xDataSet5.setData("DS_DETAILREQ", "emp_email", nRow, String.valueOf(empInfoList.get("emp_email")));	
			xDataSet5.setData("DS_DETAILREQ", "emp_birth", nRow,String.valueOf(empInfoList.get("emp_birth")).substring(0,10));
			xDataSet5.setData("DS_DETAILREQ", "emp_phone", nRow,String.valueOf(empInfoList.get("emp_phone")));

			xDataSet5.returnData();	// response로 데이터 반환처리함		
			 
		} catch (Exception e) {		
			log.error("select = " + e);
			try {
				if(xDataSet5 != null) {
					// 로직 처리중 Exception이 발생할 경우, XDataSet5오브젝트에 에러 코드와 에러 메시지를 설정하고 송신
					xDataSet5.setErrorMessage("error_msg_code", e.toString());
					xDataSet5.returnData();	//response로 데이터 반환처리	
				}
			} catch (Exception ex) {
				log.error(ex);
			}
		}
	}
	
	/* 회원 검색 */
	@RequestMapping(value = "/sample/search.do")
	public void select(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		log.info("회원 검색 ");
		
		XDataSet5 xDataSet5 = null;
		String strEmpName = null;
		Map<String, Object> element = null;
		int nRow = 0;
		
		try {
			// XDataSet5오브젝트 생성
			xDataSet5 = new XDataSet5(request, response);
			
			// XDataSet5오브젝트에 포함되어 있는 부가 메타 정보를 로깅
			log.info("ScreenNo : " + xDataSet5.getScreenNo());
			log.info("IP : " + xDataSet5.getTerminalIpAddress());
			log.info("Map ID : " + xDataSet5.getTransactionMapId());
			log.info("User Header : " + xDataSet5.getUserHeader());					
			
			// XDataSet5오브젝트로부터 직원 정보 조회 기준인 직원 이름 정보를 얻어온다.
			// 이 정보는 "TR_SELECT" 트랜잭션의 입력 데이터 셋인 "DS_EMP_AGE"의 "EMP_AGE" 칼럼에서 정보를 가져온다.
			strEmpName = xDataSet5.getData("DS_REQ", "emp_name", 0);	// ds_input 데이터셋의 첫번째줄의 EMP_NAME 값 반환	
			System.out.println(strEmpName);
			// 직원 이름으로 DB검색
			List<Map<String,Object>> empInfoList = exampleService.searchMapListByStr(strEmpName);
			Iterator<Map<String, Object>> iterator = empInfoList.iterator();
	

			// DB검색 결과와 출력 데이터셋을 XDataSet5 오브젝트에 추가
			while (iterator.hasNext()) {
				element = iterator.next();
				xDataSet5.setData("DS_REQ", "emp_no", nRow, String.valueOf(element.get("emp_no")));
				xDataSet5.setData("DS_REQ", "emp_name", nRow, String.valueOf(element.get("emp_name")));	
				xDataSet5.setData("DS_REQ", "emp_gender", nRow, String.valueOf(element.get("emp_gender")));	
				xDataSet5.setData("DS_REQ", "emp_addr", nRow, String.valueOf(element.get("emp_addr")));	
				xDataSet5.setData("DS_REQ", "emp_email", nRow, String.valueOf(element.get("emp_email")));	
				xDataSet5.setData("DS_REQ", "emp_birth", nRow,String.valueOf(element.get("emp_birth")).substring(0,10));
				xDataSet5.setData("DS_REQ", "emp_phone", nRow,String.valueOf(element.get("emp_phone")));

			    nRow++;
			}
			// 유저헤더부 세팅시 아래와 같이 호출
			// xDataSet5.setUserHeader("user_header_msg");
			// 일반메시지 세팅시 아래와 같이 호출
			// xDataSet5.setMessage("normal_msg_code", "normal_msg_detail");
			
			xDataSet5.returnData();	// response로 데이터 반환처리함		
	
		} catch (Exception e) {		
			log.error("검색오류 search = " + e);
			try {
				if(xDataSet5 != null) {
					// 로직 처리중 Exception이 발생할 경우, XDataSet5오브젝트에 에러 코드와 에러 메시지를 설정하고 송신
					xDataSet5.setErrorMessage("error_msg_code", e.toString());
					xDataSet5.returnData();	//response로 데이터 반환처리	
				}
			} catch (Exception ex) {
				log.error(ex);
			}
		}
	}
	
	/* 회원 등록과 수정을 같이 함*/
	@RequestMapping(value = "/sample/update.do")
	public String update(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		log.info("xframe5 업데이트  (제공 유틸 사용)");
		
		int recordCount 		  = 0;
		int nRow 				  = 0;
		int result 				  = 0;
		Map<String,Object> empMap = null;

		try {
			
			Map<String, Object> reqMap = XFrame5Util.xFrame5Map(request, response, model);
			XFrame5Util.printMetaInfoMap(reqMap); // 화면 메타 정보 로깅
			// 데이타셋의 레코드 갯수를 구함.
			recordCount = XFrame5Util.getCountFromMap(reqMap, "DS_DETAILREQ");
			for (nRow = 0; nRow < recordCount; nRow++) {
				empMap = XFrame5Util.getRecordFromMap(reqMap, "DS_DETAILREQ", nRow);
				// ROW(레코드)의 상태에 따라 서비스 처리
				
				System.out.println("recordCount" + recordCount + "empMap" + empMap);
				
				
				if (XFrame5Util.isUpdateRecord(reqMap, "DS_DETAILREQ", nRow)) {
					result = exampleService.updateMapListByMap(empMap);	
				} 
				 else if (XFrame5Util.isInsertRecord(reqMap, "DS_DETAILREQ", nRow)) {
					result = exampleService.insertMapListByMap(empMap);	
				}
			}
		} catch (Exception e) {			
			log.error("update = " + e);
			
			// 에러발생시 화면으로 보낼 에러메시지를 설정
			model.addAttribute(XFrame5View.XFRAME5_ERR_CODE, "-100");
			model.addAttribute(XFrame5View.XFRAME5_ERR_DETAIL, "데이터 저장에 실패 하였습니다.");
		}

		// 유저헤더부 세팅시 아래와 같이 호출
		model.addAttribute(XFrame5View.XFRAME5_USER_HEADER, "user_header_msg");
		
		// 일반메세지 세팅시 아래와 같이 호출
		model.addAttribute(XFrame5View.XFRAME5_MSG_CODE, "200");
		model.addAttribute(XFrame5View.XFRAME5_MSG_DETAIL, "저장 완료 되었습니다.");
		
		// 화면으로 데이터 송신
		return XFrame5View.XFRAME5_VIEW;	
	}
	

	@RequestMapping(value = "/sample/delete.do")
	public void delete(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		log.info("xframe5 상세조회  (기본방식)");
		
		XDataSet5 xDataSet5 = null;
		String emp_no = null;
		
		try {
			// XDataSet5오브젝트 생성
			xDataSet5 = new XDataSet5(request, response);
			
			// XDataSet5오브젝트에 포함되어 있는 부가 메타 정보를 로깅
			log.info("ScreenNo : " + xDataSet5.getScreenNo());
			log.info("IP : " + xDataSet5.getTerminalIpAddress());
			log.info("Map ID : " + xDataSet5.getTransactionMapId());
			log.info("User Header : " + xDataSet5.getUserHeader());					
			
			// XDataSet5오브젝트로부터 회원 정보를 가져온다.
	
			emp_no = xDataSet5.getData("DS_DETAILREQ", 0, 0);	// 데이터셋의 첫번째줄의 emp_no 값 반환
			
			// 직원 이름으로 DB검색
			int result = exampleService.deleteByStr(emp_no);
			

//			 유저헤더부 세팅시 아래와 같이 호출
			 xDataSet5.setUserHeader("delete");
			// 일반메시지 세팅시 아래와 같이 호출
			// xDataSet5.setMessage("normal_msg_code", "normal_msg_detail");
			
			xDataSet5.returnData();	// response로 데이터 반환처리함		
			 
		} catch (Exception e) {		
			log.error("select = " + e);
			try {
				if(xDataSet5 != null) {
					// 로직 처리중 Exception이 발생할 경우, XDataSet5오브젝트에 에러 코드와 에러 메시지를 설정하고 송신
					xDataSet5.setErrorMessage("error_msg_code", e.toString());
					xDataSet5.returnData();	//response로 데이터 반환처리	
				}
			} catch (Exception ex) {
				log.error(ex);
			}
		}
	}
	
	
	/** 참고사항
	 * UI(xFrame5)에서 전달된 데이터 정보를 추출하는 예제. 
	 * 데이터 MAP에서  XDATASET5 이름, 컬럼이름, 컬럼데이터를 출력한다.
	 */
	public void printDataSetfromMap(Map<String, Object> reqMap) { 
		 
		try {
			log.info("printDataSetfromMap =============");
			XDataSet5 xdataset5 = (XDataSet5)reqMap.get("XFRAME5_XDATASET5"); // Map에서 XDataset5 객체로 데이터 변환
			int	i, j;
			int	nRow, nCol;
			StringBuffer sbLog = new StringBuffer();
			
			log.info("xdataset5 + " + xdataset5);
			Vector vXDataSetNames = xdataset5.getDataSetNames();	// 데이터셋 이름을 구함 : getDataSetNames()
			log.info("vXDataSetNames + " + vXDataSetNames);
			// 데이터셋 수만큼 데이터를 출력
			for (i = 0; i < vXDataSetNames.size(); i++) {		
				String 	sXDataSetName = (String)vXDataSetNames.get(i);
				log.info("[" + sXDataSetName + "]"); // 데이터셋 이름 출력
				
				Vector	vXDataColumnNames = xdataset5.getColumnNames(sXDataSetName); // 컬럼이름을 구함 : getColumnNames()
				int	nColumnCount = xdataset5.getColumnCount(sXDataSetName);	// 컬럼수를 구함 : getColumnCount()
				int	nRecordCount = xdataset5.getRecordCount(sXDataSetName);	// 레코드수를 구함 : getRecordCount()
				
				log.info("[Column List]");
				for(j = 0; j < vXDataColumnNames.size(); j++) {
					sbLog.append("[" + (String)vXDataColumnNames.get(j) + "]");					
				}
				log.info(sbLog.toString());	// 컬럼 이름 출력
				StringBuffer	sbRecordData = new StringBuffer();
				log.info("[Data]");	
				for (nRow = 0; nRow < nRecordCount; nRow++) {
					sbRecordData.delete(0, sbRecordData.length());
					for (nCol = 0; nCol < nColumnCount; nCol++) {
						sbRecordData.append("[" + xdataset5.getData(sXDataSetName, (String)vXDataColumnNames.get(nCol), nRow) + "]");
					}
					log.info(sbRecordData.toString());	// 컬럼 데이터  출력			
				}
			}
		}catch (Exception e) {
			// TODO: handle exception
			log.error("printDataSetfromMap = " + e);
		}	
	}
	
}
