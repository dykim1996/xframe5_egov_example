<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  	<!-- <meta charset="utf-8"> -->
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="pragma" content="no-cache">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>Insert title here</title>
    
	<link rel="shortcut icon" href="<c:url value="xframe5.ico"/>">
    
    <!-- xFrame CORE/BASIC/EXT CSS -->
	<link rel="stylesheet" type="text/css" href="<c:url value="/xf5/css/xf_engine.min.css"/>">
	<link rel="stylesheet" type="text/css" href="<c:url value="xframe5.css"/>">
	<%-- <link rel="stylesheet" type="text/css" href="<c:url value="/xf5/css/site.css"/>"> --%>
</head>
<body>

<div id="_xf_loader_box" class="_xf_loader_box" style="display:none;">
    <div class="_xf_loader_view">
        <div class="_xf_loader_content">
            <button draggable="true" tabindex="-1" id="_xf_menu_btn" class="_xf_load_btn">
                <i id="_xf_loader_menu">&lt;</i>
            </button>&nbsp;
            Screen URL <input id="_xf_screen_url" class="_xf_screen_url"  tabindex="-1" type="text" value="">&nbsp;
            Screen <select id="_xf_screen_url_select" class="_xf_screen_url_select" tabindex="-1">
                <option value="/DEMO/start">DEMO</option>
            </select>&nbsp;
            <select id="_xf_language_select" class="_xf_language_select" tabindex="-1">
                <option value="ko" selected="selected">한국어</option>
                <option value="en">영어</option>
            </select>&nbsp;
            <select id="_xf_country_select" class="_xf_country_select" tabindex="-1">
                <option value="kr" selected="selected">한국</option>
                <option value="us">미국</option>
            </select>&nbsp;
            <button tabindex="-1" id="_xf_load_btn" class="_xf_load_btn">Load</button>&nbsp;
            <button tabindex="-1" id="_xf_console_btn" class="_xf_load_btn">Console</button>
        </div>
    </div>
</div>

<!-- External JS -->
<script type="text/javascript" src="<c:url value="/xf5/ext/lib/jquery-2.1.4.min.js"/>"></script>

<!-- xFrame CONST/CORE/BASIC/GRID/EXT JS -->
<script type="text/javascript" src="<c:url value="/xf5/lib/xf_const.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/xf5/lib/xf_engine.min.js"/>"></script>

<!-- xFrame Page JS -->
<script type="text/javascript" src="<c:url value="index.js"/>"></script>


</body>
</html>