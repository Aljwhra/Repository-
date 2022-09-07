<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>checkout</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<style>
* {
    margin: 0;
    padding: 0;
} 


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
 
}

li {
  float: left;
  
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 16px 20px;
  text-decoration: none;
  
}

li a:hover {
  background-color: white;
}


.nav-image {
  background-image: url("/images/image-1.png");
  background-color: #cccccc;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
 
   
}

.nav-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
 
}

body {
        font-size: 17px;
         font-family: 'Roboto', sans-serif;
    }

      input[type=submit] {
         background-color:#125C13;
         color: white;
         padding: 12px 20px;
         border: none;
         border-radius: 4px;
         cursor: pointer;
         align-items: center;
         
}
      
        
        
        input[type=submit]:hover {
          background-color: red;
} 

.last{
font-size: 20px;
margin-left: 5%;
}
</style>
<body>
<div class="nav" >

<div class="nav-image">
<div class="nav-text">
<ul>
  <li><a href="/home">Home</a></li>
    <li><a href="#">Products</a></li>
  <li><a href="/cart">Cart</a></li>
      <li><a href="#">My Profile</a></li>
  <li> <img class="image-2"  alt="" src="/images/image-2.png"> </li>
    
</ul>
</div>
</div>
</div>
<br>
<div class="last">
			<h1>Your orders :</h1>
    <table class="table">
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <c:forEach var="project" items="${Prodects}">
        <tr>
           <td><c:out value="${project.name}"/></td> 
           <td>  <c:out value="${project.price}"/> SR</td> 
        </tr>
        <br>
        </c:forEach>
    </table> 
<p>Total price is  <c:out value="${total}"/> SR</p>
<br>
<form action="done">
        <input type="submit" value="Buy" class="btn btn-primary" />
</form>
</div>
</body>
</html>