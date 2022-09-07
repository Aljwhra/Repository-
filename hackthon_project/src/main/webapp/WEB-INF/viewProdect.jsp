<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>${pro.name}</title>
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
        font-size: 15px;
         font-family: 'Roboto', sans-serif;
    }
    
    main{

    justify-content: center;
    padding: 20px;   


}

.img{
 border-radius: 200px;
    margin: 20px;
    height:450px ;
    width:400px ;
}
.this{
    width: 48% ;
}

.main2{
    display: flex;
}

     button {
         background-color:#125C13;
         color: white;
         padding: 12px 20px;
         border: none;
         border-radius: 4px;
         cursor: pointer;
         
         
}
  
 
       button:hover {
       background-color: red;
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
			<h1>Our Prodects :</h1>
             
             <div class="main" >
             <div class="main2">
             <div class="this">
			<p>Name: <c:out value = "${pro.name}"></c:out></p>
			<p>Description:<c:out value = "${pro.description}"></c:out></p>
			<p>Price : <c:out value = "${pro.price}"></c:out> SR</p>
    <form action="/add/user/${pro.id}">
    <button>Add to cart</button>
    </form>
			</div>
			
			<div>
			<img class="img" src="${pro.img}" >
             </div>
             
             </div> 
             </div>
</body>
</html>