/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package xframework.com.service;

import java.util.List;
import java.util.Map;

import xframework.com.service.vo.ExampleVO;

/**
 * @Class Name : XFrameService.java
 * @Description : XFrameService Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2017.05.23           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2017.05.23
 * @version 1.0
 * @see
 *
 *  Copyright (C) by Softbase All right reserved.
 */
public interface ExampleService {

	/**
	 * 직원정보를  조회한다.
	 * @param strEmpName
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> selectMapListByStr(String strEmpData)throws Exception;
	
	/**
	 * 직원정보를  조회한다.
	 * @param empMap
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> selectMapListByMap(Map<String, Object> empMap)throws Exception;
	
	/**
	 * 직원정보를  조회한다.
	 * @param empMap
	 * @return
	 * @throws Exception
	 */
	List<ExampleVO> selectVOListByVO(ExampleVO exampleVO)throws Exception;

	/**
	 * 직원정보를  업데이트한다.
	 * @param empMap
	 * @return
	 * @throws Exception
	 */
	int updateMapListByMap(Map<String, Object> empMap)throws Exception;

	/**
	 * 직원정보를  삭제한다.
	 * @param empMap
	 * @return
	 * @throws Exception
	 */
	int deleteMapListByMap(Map<String, Object> empMap)throws Exception;

	/**
	 * 직원정보를  추가한다.
	 * @param empMap
	 * @return
	 * @throws Exception
	 */
	int insertMapListByMap(Map<String, Object> empMap)throws Exception;

	/**
	 * ID/PWD를 이용하여 로그인 데이터를 구한다.
	 * @param empInfoVO
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> selectLoginData(Map<String, Object> empMap)throws Exception;

	/**
	 * 회원 정보 리스트를 조회한다. */
	List<Map<String, Object>> selectList() throws Exception;

	/**
	 * 회원 상세 정보를 반환한다.*/
	Map<String, Object> selectMapByStr(String emp_no) throws Exception;

	/**
	 * 회원 정보를 삭제한다. */
	int deleteByStr(String emp_no);

	
	/**
	 * 회원 검색을 한다.*/
	List<Map<String, Object>> searchMapListByStr(String strEmpName)throws Exception;

	
}
