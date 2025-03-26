<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	request.setCharacterEncoding("UTF-8");
	response.setCharacterEncoding("UTF-8");
	response.setContentType("text/html;charset=UTF-8");
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>登录界面</title>

		<meta charset="UTF-8">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="jquery/jquery-1.11.3.js"></script>
	<script type="text/javascript" src="jquery/login.js" ></script>
	<style type="text/css">
	.center{
	width: 80%;
	margin: 0 auto; /*水平居中*/
	}
	</style>
	</head>

	<body>
		<jsp:include page="/jsp/head.jsp" />
		
		<div class="center">
		<form class="center" action="login">
			<div>
			<label for="name">
				用户名:
			</label>
			<input type="text" name="name" id="name">
			<span id="loginName"></span>
			</div>
			<div>
				<label for="pwd">
					密码:
				</label>
				<input type="password" name="pwd" id="pwd">
			</div>
	
			<div>
				<input type="submit" value="登录">
				<input type="button" value="注册1" id="zhuce1">
				<input type="button" value="注册2" onclick="zhuce2()">
			</div>
			<input type="hidden" name="currentPage" value="1">
		</form>
		</div>

		<jsp:include page="/jsp/foot.jsp" />
	</body>
</html>
