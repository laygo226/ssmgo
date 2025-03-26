<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>My JSP 'head.jsp' starting page</title>
    <style>
        header {
            height: 40px;
            width: 80%;
            background-color: rgb(147, 205, 221);
            margin: 0 auto; /*水平居中*/
        }
    </style>
</head>

<body>
<header>
    <div>
        <div style="float: left;">
            首页
        </div>
        <div style="float: right;" id="time">
            <p>当前时间：<fmt:formatDate value="<%= new java.util.Date() %>" pattern="yyyy-MM-dd HH:mm:ss"/></p>
        </div>
    </div>
    <br>
</header>
</body>
</html>
