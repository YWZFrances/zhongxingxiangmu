$(document).ready(function() {

	var yanzheng = "";
	//$(".loginp2").on("click",function(){
	yanzheng = ""
	for(var i = 0; i < 4; i++) {
		yanzheng += Math.floor(Math.random() * 10)
	}
	$(".chuyanzhengma").html(yanzheng)
		//})
	var yanzheng = "";
	$(".loginp2").on("click", function() {
		yanzheng = ""
		for(var i = 0; i < 4; i++) {
			yanzheng += Math.floor(Math.random() * 10)
		}
		$(".chuyanzhengma").html(yanzheng)
	})

	//验证======================================================================
	$("#txt3").blur(function() {
		if($("#txt3").val() == $(".chuyanzhengma").text()) {
			$(".zaicimimadiv").css("display", "none")
			$(".jiao3").css("display", "none")
			$(this).css({
				"border": "1px solid #40fd83"
			})
			flag4 = true

		}
		if($("#txt3").val() != $(".chuyanzhengma").text()) {
			$(".zaicimimadiv").html("验证码有误")
			$(".zaicimimadiv").css("display", "block")
			$(".jiao3").css("display", "block")
			$(this).css({
				"border": "1px solid #e5004f"
			})
			flag4 = false
		}
		if($("#txt3").val() == "") {
			$(".zaicimimadiv").html("验证码不许为空")
			$(".zaicimimadiv").css("display", "block")
			$(".jiao3").css("display", "block")
			$(this).css({
				"border": "1px solid #e5004f"
			})
			flag4 = false
		}
	})

	$("#denglu").on("click", function() {
		//cookie有 写得没有 不存在该用户
		//cookie有 写得有 密码错 请输入正确的密码
		//cookie有 写得有 密码对 验证码对 登录了
		//	alert(2)
		
		
//		console.log(yonghuming)
		var strCookie = document.cookie;
//		var yonghuming = $("#txt1").val()       
		
//		var bucunzai = $.cookie("yonghuming")
//		var bucunzai = cookieUtil.getCookieName(yonghuming)
//		console.log(bucunzai)
//		if(bucunzai == undefined){
//			alert("用户不存在")
//		}
//console.log(bucunzai)
		var arrCookie = strCookie.split("; ");	
		for(var i = 0; i < arrCookie.length; i++) {
			var arr = arrCookie[i].split("=");
//			console.log(arr)
//alert(arr)
			if(arr[0] == $("#txt1").val()) {
				if(arr[1] == $("#txt2").val()  && $("#txt3").val() == $(".chuyanzhengma").text()) {
					
				cookieUtil.setCookie("userlogin", yonghuming, 365,"/");
					window.location.href="../index.html"

				} 
				if($("#txt3").val() != $(".chuyanzhengma").text()){
					alert("请输入正确的验证码")
				}
			}
			if(arr[0] == $("#txt1").val()) {
				if(arr[1] != $("#txt2").val()) {
					alert("密码错误")
				}
			}
			
//			var obj = arr[0]
			
//			for(var k = 0;k<obj.length;k++){
//				
//			}
			
			
			
		}
		

	})



window.onload=function(){
	var user = cookieUtil.getCookieValue("userlogin");
//	alert(user)
			if(user != ""){
				$(".dl").replaceWith("<li class='noborder'><a href='login.html'>欢迎您："+user+"</a></li>");	
			}

}










})