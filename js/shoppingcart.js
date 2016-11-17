$(document).ready(function() {

//	var yanzheng = "";
//	//$(".loginp2").on("click",function(){
//	yanzheng = ""
//	for(var i = 0; i < 4; i++) {
//		yanzheng += Math.floor(Math.random() * 10)
//	}
//	$(".chuyanzhengma").html(yanzheng)
//		//})
//	var yanzheng = "";
//	$(".loginp2").on("click", function() {
//		yanzheng = ""
//		for(var i = 0; i < 4; i++) {
//			yanzheng += Math.floor(Math.random() * 10)
//		}
//		$(".chuyanzhengma").html(yanzheng)
//	})
//
//	//验证======================================================================
//	$("#txt3").blur(function() {
//		if($("#txt3").val() == $(".chuyanzhengma").text()) {
//			$(".zaicimimadiv").css("display", "none")
//			$(".jiao3").css("display", "none")
//			$(this).css({
//				"border": "1px solid #40fd83"
//			})
//			flag4 = true
//
//		}
//		if($("#txt3").val() != $(".chuyanzhengma").text()) {
//			$(".zaicimimadiv").html("验证码有误")
//			$(".zaicimimadiv").css("display", "block")
//			$(".jiao3").css("display", "block")
//			$(this).css({
//				"border": "1px solid #e5004f"
//			})
//			flag4 = false
//		}
//		if($("#txt3").val() == "") {
//			$(".zaicimimadiv").html("验证码不许为空")
//			$(".zaicimimadiv").css("display", "block")
//			$(".jiao3").css("display", "block")
//			$(this).css({
//				"border": "1px solid #e5004f"
//			})
//			flag4 = false
//		}
//	})
//
//	$("#denglu").on("click", function() {
//		//cookie有 写得没有 不存在该用户
//		//cookie有 写得有 密码错 请输入正确的密码
//		//cookie有 写得有 密码对 验证码对 登录了
//		//	alert(2)
//		var strCookie = document.cookie;
//		var arrCookie = strCookie.split("; ");	
//		for(var i = 0; i < arrCookie.length; i++) {
//			var arr = arrCookie[i].split("=");
//			console.log(arr)
////alert(arr)
//			if(arr[0] == $("#txt1").val()) {
//				if(arr[1] == $("#txt2").val()  && $("#txt3").val() == $(".chuyanzhengma").text()) {
//
//					location.replace("../index.html")
//
//				} 
//				if($("#txt3").val() != $(".chuyanzhengma").text()){
//					alert("请输入正确的验证码")
//				}
//			}
//			if(arr[0] == $("#txt1").val()) {
//				if(arr[1] != $("#txt2").val()) {
//					alert("密码错误")
//				}
//			}
////			var obj = arr[0]
//			
////			for(var k = 0;k<obj.length;k++){
////				
////			}
//			
//		}

		var arr = cookieUtil.getCookieValue("shopping")
		gouwuche();
		$(".jian").on("click",function(){
				
						changeValuejian();
					})
		$(".jia").on("click",function(){
						changeValue();
					})
		$(".shanchu").on("click",function(){
						cookieUtil.removeCookie("shopping")
						location.replace("shoppingcart.html")
					})
//		alert(arr)


//cookie -》 data   遍历data 生成DOM
function gouwuche(){
	for(var i=0;i<arr.length;i++){
				
					//name+"&&"+imgSrc+"&&"+price
					var arrShopping=arr.split("&&");
					var name=arrShopping[1];
					var imgSrc=arrShopping[0];
					var price=arrShopping[2];
					var count =arrShopping[3];	
					
//					alert(imgSrc)
					//oShopList.innerHTML=strShopping;
					var str = "<div class='quanxuan2'><input type='checkbox' name='' id='' value='全选' /></div>"
//					str += "<div class = ''><img src ='"+imgSrc+"'><div/>"
					str += "<div class = 'shangpinmingcheng2'><img src = '"+imgSrc+"'>"+name+"</div>"
					str += "<div class = 'chengjiaojia2'>"+price+"</div>"
					str += "<div class = 'shuliang2'><input class='jian' type='button' name='' id='' value='-' /><span class = 'shuliang2span'>"+count+"</span><input class='jia' type='button' name='' id='' value='+' /></div>"
					
					str += "<div class = 'xiaoji2'>"+price*count+"</div>"
					str += "<div class = 'caozuo2'><input class='shanchu' type='button' name='' id='' value='清空购物车' /></div>"
		$(".ziliao").html(str)
		
		}
	
}
function changeValue(){
	var num = $(".shuliang2span").html()
	var price = $(".chengjiaojia2").html()
	num++
	var total = price*num;
	$(".xiaoji2").html(total);
	$(".shuliang2span").html(num)
	var imgSrc = $(".shangpinmingcheng2 img").attr("src")
	var name = $(".shangpinmingcheng2").text()
	var price = $(".chengjiaojia2").html()
	var count = $(".shuliang2span").html()
	var strShopping	= imgSrc+"&&"+name+"&&"+price+"&&"+count+"&&"+count*price
		cookieUtil.setCookie("shopping",strShopping,30)
}
function changeValuejian(){
	var num = $(".shuliang2span").html()
	var price = $(".chengjiaojia2").html()
	num--
	if(num <= 0){
		num =0
	}
	var total = price*num;
	$(".xiaoji2").html(total);
	$(".shuliang2span").html(num)
	var imgSrc = $(".shangpinmingcheng2 img").attr("src")
	var name = $(".shangpinmingcheng2").text()
	var price = $(".chengjiaojia2").html()
	var count = $(".shuliang2span").html()
	var strShopping	= imgSrc+"&&"+name+"&&"+price+"&&"+count+"&&"+count*price
		cookieUtil.setCookie("shopping",strShopping,30)
}
			


window.onload=function(){
	var user = cookieUtil.getCookieValue("userlogin");
//	alert(user)
			if(user != ""){
				$(".dl").replaceWith("<li class='noborder'><a href='login.html'>欢迎您："+user+"</a></li>");	
			}

}







//
//	})

	





























})