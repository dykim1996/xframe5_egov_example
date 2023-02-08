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
package xframework.com.service.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;
import xframework.com.service.vo.ExampleVO;

/**
 * @Class Name : XFrameDAO.java
 * @Description : XFrame DAO Class
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
@Repository("exampleDAO")
public class ExampleDAO extends EgovAbstractMapper {

	

	/**
	 * 직원정보를 조회한다.
	 * @param strEmpName - 조회할 정보가 담긴 String
	 * @return 직원정보 리스트
	 * @exception Exception
	 */
	public List<Map<String, Object>> selectMapListByStr(String strEmpName) throws Exception {
		return selectList("sampleMapper.selectMapListByStr", strEmpName);
	}
	
	/**
	 * 모든 회원 정보 조회.
	 */
	public List<Map<String, Object>> selectList() throws Exception {

		 return selectList("sampleMapper.selectList");
	}
	
	/**
	 * 회원 번호로 상세 조회
	 * */

	public Map<String, Object> selectMapByStr(String emp_no) throws Exception {
		System.out.println(emp_no);
		return selectOne("sampleMapper.selectDetail",emp_no);
	}
	
	/**
	 * 직원정보를  조회한다.
	 * @param empMap - 조회할 정보가 담긴 Map
	 * @return 직원정보 리스트
	 * @exception Exception
	 */
	public List<Map<String,Object>> selectMapListByMap(Map<String, Object> empMap)throws Exception {
		return selectList("sampleMapper.selectMapListByMap", empMap);
	}
	
	/**
	 * 직원정보를  조회한다.
	 * @param ExampleVO - 조회할 정보가 담긴 VO
	 * @return 직원정보 리스트
	 * @exception Exception
	 */
	public List<ExampleVO> selectVOListByVO(ExampleVO exampleVO) throws Exception {
		return selectList("sampleMapper.selectVOListByVO", exampleVO);
	}
	
	
	/**
	 * 직원정보를  업데이트한다.
	 * @param empMap - 변경할 정보가 담긴 Map
	 * @return 처리결과
	 * @exception Exception
	 */
	public int updateMapListByMap(Map<String, Object> empMap)throws Exception {
		return update("sampleMapper.updateMapListByMap", empMap);
	}
	
	/**
	 * 직원정보를  삭제한다.
	 * @param empMap - 삭제할 정보가 담긴 Map
	 * @return 처리결과
	 * @exception Exception
	 */
	public int deleteMapListByMap(Map<String, Object> empMap)throws Exception {
		return delete("sampleMapper.deleteMapListByMap", empMap);
	}
	
	/**
	 * 직원정보를  추가한다.
	 * @param empMap - 추가할 정보가 담긴 Map
	 * @return 처리결과
	 * @exception Exception
	 */
	public int insertMapListByMap(Map<String, Object> empMap)throws Exception {
		return insert("sampleMapper.insertMapListByMap", empMap);
	}
	
	/**
	 * ID/PWD를 이용하여 로그인 데이터를 구한다.
	 * @param empMap - 조회할 정보가 담긴 Map
	 * @return 회원정보 데이터
	 * @exception Exception
	 */
	public List<Map<String,Object>> selectLoginData(Map<String, Object> empMap)throws Exception {
		return selectList("sampleMapper.selectLoginData", empMap);
	}

	/**
	 * 회원을 삭제한다. */
	public int deleteByStr(String emp_no) {
		
		return delete("sampleMapper.deleteByStr", emp_no);
	}

	/**
	 * 회원을 검색한다.
	 * @param strEmpName - 조회할 정보가 담긴 String
	 * @return 회원정보 리스트
	 * @exception Exception
	 */
	public List<Map<String, Object>> searchMapListByStr(String strEmpName) throws Exception {
		return selectList("sampleMapper.searchMapListByStr", strEmpName);
	}
	
	

	

}
