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

	//手机号========================================================================
	var phone = /^(13|14|15|18)[0-9]{9}$/;
	var mail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	var passw = /^[a-z0-9_-]{6,18}$/
	var flag1 = false
	var flag2 = false
	var flag3 = false
	var flag4 = false
	$("#txt1").blur(function() {
			if($(this).val() == "") {
				$(".zhanghaodiv").html("账号不能为空")
				$(".zhanghaodiv").css("display", "block")
				$(".jiao1").css("display", "block")
				$(this).css({
					"border": "1px solid #e5004f"
				})
				flag1 = false
			} else if(phone.test($(this).val())) {
				$(".zhanghaodiv").css("display", "none")
				$(".jiao1").css("display", "none")
				$(this).css({
					"border": "1px solid #40fd83"
				})
				flag1 = true
			} else if(mail.test($(this).val())) {
				$(".zhanghaodiv").css("display", "none")
				$(".jiao1").css("display", "none")
				$(this).css({
					"border": "1px solid #40fd83"
				})
				flag1 = true
			} else {
				$(".zhanghaodiv").html("请输入正确的手机号码或者邮箱")
				$(".zhanghaodiv").css("display", "block")
				$(".jiao1").css("display", "block")
				$(this).css({
					"border": "1px solid #e5004f"
				})
				flag1 = false
			}
			//		$(this).css({"border":"1px solid #e5004f"})
		})
		//	密码=======================================================================
	$("#txt2").blur(function() {

			if($(this).val() == "") {
				$(".mimadiv").html("密码不能为空")
				$(".mimadiv").css("display", "block")
				$(".jiao2").css("display", "block")
				$(this).css({
					"border": "1px solid #e5004f"
				})
				flag2 = false
					//			alert("密码不能为空")	
			} else if($("#txt2").val().length < 6 || $("#txt2").val().length > 18) {
				$(".mimadiv").html("密码长度为6到18位")
				$(".mimadiv").css("display", "block")
				$(".jiao2").css("display", "block")
				$(this).css({
					"border": "1px solid #e5004f"
				})
				flag2 = false
					//			alert("密码长度为6到18位")
			} else {
				$(".mimadiv").css("display", "none")
				$(".jiao2").css("display", "none")
				$(this).css({
					"border": "1px solid #40fd83"
				})
				flag2 = true
					//			alert("请输入正确的手机号码或者邮箱")
			}
			//		$(this).css({"border":"1px solid #e5004f"})
		})
		//再次输入密码===============================================================
	$("#txt3").blur(function() {
			if($("#txt3").val() == $("#txt2").val()) {
				$(".zaicimimadiv").css("display", "none")
				$(".jiao3").css("display", "none")
				$(this).css({
					"border": "1px solid #40fd83"
				})
				flag3 = true
			}
			if($("#txt3").val() != $("#txt2").val()) {
				$(".zaicimimadiv").html("两次密码不一致")
				$(".zaicimimadiv").css("display", "block")
				$(".jiao3").css("display", "block")
				$(this).css({
					"border": "1px solid #e5004f"
				})
				flag3 = false
			}
		})
		//	验证码================================================================
	$("#txt4").blur(function() {
		if($("#txt4").val() == $(".chuyanzhengma").text()) {
			$(".yanzhengmadiv").css("display", "none")
			$(".jiao4").css("display", "none")
			$(this).css({
				"border": "1px solid #40fd83"
			})
			flag4 = true

		}
		if($("#txt4").val() != $(".chuyanzhengma").text()) {
			$(".yanzhengmadiv").html("验证码有误")
			$(".yanzhengmadiv").css("display", "block")
			$(".jiao4").css("display", "block")
			$(this).css({
				"border": "1px solid #e5004f"
			})
			flag4 = false
		}
		if($("#txt4").val() == "") {
			$(".yanzhengmadiv").html("验证码不许为空")
			$(".yanzhengmadiv").css("display", "block")
			$(".jiao4").css("display", "block")
			$(this).css({
				"border": "1px solid #e5004f"
			})
			flag4 = false
		}
	})
	
	
	$("#lijizhuce").on("click", function() {
		var nameUser = $("#txt1").val();
		var passUser = $("#txt2").val();
		if(flag1) {
			if(flag2) {
				if(flag3) {
					if(flag4) {
						var strCookie=document.cookie;
						var arrCookie=strCookie.split("; ");
						//出來的是一組一組的鍵值對
						//还需要分割
						for(var i=0;i<arrCookie.length;i++){
						             var arr=arrCookie[i].split("=");
						             if(arr[0]==$("#txt1").val()){
						             	alert("用户名已被注册")
						             	break;
						             }
						             if(arr[0]!=$("#txt1").val()){
						             	location.replace("login.html")
						             }     	     
						}
						cookieUtil.setCookie(nameUser,passUser,30);
					    var cookieValue=cookieUtil.getCookieValue(nameUser);
					    var cookieName = cookieUtil.getCookieName(nameUser);
//					    alert(cookieName)
					} else {
						alert("请输入正确的信息")
					}
				} else {
					alert("请输入正确的信息")
				}
			} else {
				alert("请输入正确的信息")
			}
		} else {
			alert("请输入正确的信息")
		}
	})

})