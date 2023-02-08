package xframework.com.controller;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
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
import xframework.com.service.vo.ExampleVO;

/**
 * @Class Name : ViewXDataSet5Contoller.java
 * @Description : ViewXDataSet5Contoller Controller Class
 * @Modification Information
 * @
 * @  수정일                          수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2018.09.03     최초생성
 * @ 2020.11.20     기능수정		getBeanFromMap API 추가, 소스 정리
 *
 * @author 소프트베이스 개발팀
 * @since 2019. 06. 13
 * @version 1.0
 * @see 
 * 		서버 처리 샘플 클래스
 * Copyright (C) by Softbase All right reserved.
 *  
 */

@Controller
public class ViewXDataSet5Contoller {
	
	@Resource(name = "exampleService")
	private ExampleService exampleService;
		
	private Log log = LogFactory.getLog(this.getClass());
	
	/**
	 * 샘플 페이지로 보내기
	 * @param request HttpServletRequest
	 * @param model ModelMap
	 */
	@RequestMapping("/xframe5.do")
	public Object xframe5(HttpServletRequest request, ModelMap model){
		
		return "index";
	}	
	
	
	// 맵데이터 구조
	// 사용방법 : Map<String, Object> dataMap = XFrame5Util.xFrame5Map(request, response, model)
	// return Map :
	// 1.데이터셋 오브젝트: XFrame5View.XFRAME5_XDATASET5, xDataSet5 오브젝트
	// 2.파라미터 데이터: 파라미터네임, 파라미터값(xTranMap Url의 지정한 파라미터 데이터)
	// 3.데이터셋 데이터: 데이터셋이름, 데이터셋 데이터
	// 		데이터셋 데이터 구조: 데이터셋 레코드 데이터 리스트
	// 		데이터셋 레코드 데이터 구조: 맵<데이터셋 칼럼 이름(문자열), 데이터셋 칼럼 값(문자열)>
	
	
	/**
	 * xframe5 조회  (XFrame5Util 사용) 
	 * BeanNameViewResolver 를 사용하여 조회 데이터를 처리한다.
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @param model ModelMap
	 */
	@RequestMapping(value = "/sample/selectView.do")
	public String select(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		log.info("xframe5 조회  (XFrame5Util 사용)");
		try {
			
			/**
			 * UI(xFrame5)에서 전달된 데이터를 Map으로 변환.
			 * XFrame5Util.xFrame5Map(request, response, model)
			 */
			Map<String, Object> reqMap = XFrame5Util.xFrame5Map(request, response, model);
			XFrame5Util.printMetaInfoMap(reqMap); // 변환된 맵으로 화면 메타 정보 로그 출력
			printDataSetfromMap(reqMap); // 데이터셋 정보 출력
			log.info("===========" + reqMap + "=========");
			/**
			 * 서비스 처리 예제
			 * 서비스의 데이터 처리방식에 따라 String, Map, VO 형태의 데이터로 변환
			 */
			// case1: 
			// 입력 형식: 입력 조회 기준 데이터 형식으로 String형을 사용하는 경우
			// 출력 형식: 출력 데이터 형식은 Map리스트 형식
			String strEmpName = XFrame5Util.getDataFromMap(reqMap, "DS_REQ", 0 , "EMP_AGE");
			List<Map<String,Object>> empMapList1 = exampleService.selectMapListByStr(strEmpName);	
			// 해당 데이터셋 명으로 화면으로 송신할 데이터를 추가
			XFrame5Util.setOutputData("DS_RES", empMapList1, model);
			
			// case2: 
			// 입력 형식: 입력 조회 기준 데이터 형식으로 Map형을 사용하는 경우
			// 출력 형식: 출력 데이터 형식은 Map리스트 형식
			// Map<String, List<Map<String,Object>>>에서  ds_input 키값의  리스트의 0번째 Map 반환  
			Map<String,Object> empMap = XFrame5Util.getRecordFromMap(reqMap, "DS_REQ", 0);
			log.info("==========" + empMap + "=========");
			List<Map<String,Object>> empMapList2 = exampleService.selectMapListByMap(empMap);
			// 해당 데이터셋 명으로 화면으로 송신할 데이터를 추가
			XFrame5Util.setOutputData("DS_RES_MAP", empMapList2, model);
			
			
			// case3: 
			// 입력 형식: 입력 조회 기준 데이터 형식으로 VO형을 사용하는 경우
			// 출력 형식: 출력 데이터 형식은 VO리스트 형식
			ExampleVO exampleVO = (ExampleVO) XFrame5Util.getBeanFromMap(reqMap, "DS_REQ", 0, ExampleVO.class);
			List<ExampleVO> empVOList = (List<ExampleVO>)exampleService.selectVOListByVO(exampleVO);
			// 해당 데이터셋 명으로 화면으로 송신할 데이터를 추가
			XFrame5Util.setOutputData("DS_RES_VO", empVOList, model);
			
			
		} catch (Exception e) {			
			log.error("select = " + e);
			
			// 에러발생시 화면으로 보낼 에러메시지를 설정
			model.addAttribute(XFrame5View.XFRAME5_ERR_CODE, "-100");
			model.addAttribute(XFrame5View.XFRAME5_ERR_DETAIL, "데이터 조회에 실패 하였습니다.");
		}

		// 유저헤더부 세팅시 아래와 같이 호출
		model.addAttribute(XFrame5View.XFRAME5_USER_HEADER, "user_header_msg");
		
		// 일반메세지 세팅시 아래와 같이 호출
		model.addAttribute(XFrame5View.XFRAME5_MSG_CODE, "100");
		model.addAttribute(XFrame5View.XFRAME5_MSG_DETAIL, "조회 완료 되었습니다.");
	
		// 화면으로 데이터 송신
		return XFrame5View.XFRAME5_VIEW;	
	}
	
	/**
	 * xframe5 업데이트  (제공 유틸 사용) 
	 * 여러건의 레코드 데이터를 갱신하는 샘플
	 * BeanNameViewResolver 를 사용하는 방식
	 * @param request 스프링에서 제공해주는 HttpServletRequest
	 * @param response 스프링에서 제공해주는 HttpServletResponse
	 * @param model 스프링에서 제공해주는 ModelMap
	 */
	@RequestMapping(value = "/sample/updateView.do")
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
			recordCount = XFrame5Util.getCountFromMap(reqMap, "DS_RES");
			log.info("reqMap" + reqMap);
			for (nRow = 0; nRow < recordCount; nRow++) {
				empMap = XFrame5Util.getRecordFromMap(reqMap, "DS_RES", nRow);
				// ROW(레코드)의 상태에 따라 서비스 처리
				if (XFrame5Util.isUpdateRecord(reqMap, "DS_RES", nRow)) {
					result = exampleService.updateMapListByMap(empMap);	
				} else if (XFrame5Util.isDeleteRecord(reqMap, "DS_RES", nRow)) {
					result = exampleService.deleteMapListByMap(empMap);	
				} else if (XFrame5Util.isInsertRecord(reqMap, "DS_RES", nRow)) {
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
