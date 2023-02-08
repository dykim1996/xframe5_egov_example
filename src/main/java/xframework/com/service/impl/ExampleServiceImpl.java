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
package xframework.com.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import xframework.com.service.ExampleService;
import xframework.com.service.dao.ExampleDAO;
import xframework.com.service.vo.ExampleVO;

/**
 * @Class Name : XFrame5ServiceImpl.java
 * @Description : XFrame5 Business Implement Class
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

@Service("exampleService")
public class ExampleServiceImpl extends EgovAbstractServiceImpl implements ExampleService {

	/** exampleDAO */
	@Resource(name = "exampleDAO")
	private ExampleDAO exampleDAO;
	
	@Override
	public List<Map<String, Object>> selectMapListByStr(String strEmpData)throws Exception {
		return exampleDAO.selectMapListByStr(strEmpData);
	}
	
	@Override
	public List<Map<String, Object>> selectList() throws Exception {
		return exampleDAO.selectList();
	}
	
	@Override
	public Map<String, Object> selectMapByStr(String emp_no) throws Exception {
	
		return exampleDAO.selectMapByStr(emp_no);
	}

	@Override
	public List<Map<String, Object>> selectMapListByMap(Map<String, Object> empMap)throws Exception {
		return exampleDAO.selectMapListByMap(empMap);
	}
	
	@Override
	public List<ExampleVO> selectVOListByVO(ExampleVO exampleVO) throws Exception {
		return exampleDAO.selectVOListByVO(exampleVO);
	}	
	
	@Override
	public int updateMapListByMap(Map<String, Object> empMap)throws Exception {
		return exampleDAO.updateMapListByMap(empMap);
	}
	
	
	
	@Override
	public int deleteMapListByMap(Map<String, Object> empMap)throws Exception {
		return exampleDAO.deleteMapListByMap(empMap);
	}
	
	@Override
	public int insertMapListByMap(Map<String, Object> empMap)throws Exception {
		return exampleDAO.insertMapListByMap(empMap);
	}
	
	@Override
	public List<Map<String, Object>> selectLoginData(Map<String, Object> empMap)throws Exception {
		return exampleDAO.selectLoginData(empMap);
	}

	@Override
	public int deleteByStr(String emp_no) {
		return exampleDAO.deleteByStr(emp_no);
	}

	@Override
	public List<Map<String, Object>> searchMapListByStr(String strEmpName) throws Exception {

		return exampleDAO.searchMapListByStr(strEmpName);	
	}
	


	
}
