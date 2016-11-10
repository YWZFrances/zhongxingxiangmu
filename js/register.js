
$(document).ready(function(){


var yanzheng = "";
//$(".loginp2").on("click",function(){
	yanzheng = ""
	for(var i = 0;i<4;i++){
		yanzheng += Math.floor(Math.random()*10)
	}
	$(".chuyanzhengma").html(yanzheng)
//})
var yanzheng = "";
$(".loginp2").on("click",function(){
	yanzheng = ""
	for(var i = 0;i<4;i++){
		yanzheng += Math.floor(Math.random()*10)
	}
	$(".chuyanzhengma").html(yanzheng)
})


//手机号========================================================================
	$("#txt1").blur(function(){
		var phone=/^(13|14|15|18)[0-9]{9}$/;
		var mail=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	
		if($(this).val()==""){
			$(".zhanghaodiv").html("账号不能为空")
			$(".zhanghaodiv").css("display","block")
			$(".jiao1").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
		}else if(phone.test($(this).val())){
			$(".zhanghaodiv").css("display","none")
			$(".jiao1").css("display","none")
			$(this).css({"border":"1px solid #40fd83"})
		}else if(mail.test($(this).val())){
			$(".zhanghaodiv").css("display","none")
			$(".jiao1").css("display","none")
			$(this).css({"border":"1px solid #40fd83"})
		}else{
			$(".zhanghaodiv").html("请输入正确的手机号码或者邮箱")
			$(".zhanghaodiv").css("display","block")
			$(".jiao1").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
		}
//		$(this).css({"border":"1px solid #e5004f"})
	})
//	密码=======================================================================
	$("#txt2").blur(function(){
	var passw = /^[a-z0-9_-]{6,18}$/
		if($(this).val()==""){
			$(".mimadiv").html("密码不能为空")
			$(".mimadiv").css("display","block")
			$(".jiao2").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
//			alert("密码不能为空")	
		}else if($("#txt2").val().length<6 || $("#txt2").val().length>18){
			$(".mimadiv").html("密码长度为6到18位")
			$(".mimadiv").css("display","block")
			$(".jiao2").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
//			alert("密码长度为6到18位")
		}else{
			$(".mimadiv").css("display","none")
			$(".jiao2").css("display","none")
			$(this).css({"border":"1px solid #40fd83"})
//			alert("请输入正确的手机号码或者邮箱")
		}
//		$(this).css({"border":"1px solid #e5004f"})
	})
//再次输入密码===============================================================
	$("#txt3").blur(function(){
		if($("#txt3").val() == $("#txt2").val()){
			$(".zaicimimadiv").css("display","none")
			$(".jiao3").css("display","none")
			$(this).css({"border":"1px solid #40fd83"})
		}
		if($("#txt3").val() != $("#txt2").val()){
			$(".zaicimimadiv").html("两次密码不一致")
			$(".zaicimimadiv").css("display","block")
			$(".jiao3").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
		}
	})
//	验证码================================================================
	$("#txt4").blur(function(){
		if($("#txt4").val() == $(".chuyanzhengma").text()){
			$(".yanzhengmadiv").css("display","none")
			$(".jiao4").css("display","none")
			$(this).css({"border":"1px solid #40fd83"})		
		}
		if($("#txt4").val() != $(".chuyanzhengma").text()){
			$(".yanzhengmadiv").html("验证码有误")
			$(".yanzhengmadiv").css("display","block")
			$(".jiao4").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
		}
		if($("#txt4").val() == ""){
			$(".yanzhengmadiv").html("验证码不许为空")
			$(".yanzhengmadiv").css("display","block")
			$(".jiao4").css("display","block")
			$(this).css({"border":"1px solid #e5004f"})
		}
	})



























})
