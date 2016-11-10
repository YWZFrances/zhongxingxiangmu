
$(document).ready(function(){
	
	//hei===============================
	
//	var tuo = document.getElementById("tuo")
////	alert(tuo.offsetLeft)
//	tuo.onmousedown = function(e){
//		document.onmousemove = function(e){
//			e = e || window.event;
//			var left = e.clientX;
//			tuo.style.left = left-300+"px"
//			if(tuo.offsetLeft<=0){
//				tuo.style.left = 0
//			}
//			if(tuo.offsetLeft>=700){
//				tuo.style.left = 700+"px"
//			}
//		}
//	}
//	tuo.onmouseup = function(){
//		document.onmousemove = null;
//		if(tuo.offsetLeft>=500 && tuo.offsetLeft<=650){
//			$(".hei").fadeOut(500)
//		}else{
//			tuo.style.left = 0
//		}
//	}
	
//	head====================================================================

//	logo=================================================================
	$(".gouwuche").on("mouseover",function(){
		$(".gouwuche").css({"background":"url(images/gouwucheimg2.png) no-repeat 31px center white","color":"black","border-bottom":"white"})
		$(".gouwuchediv").css("display","block")
	})
	$(".gouwuche").on("mouseout",function(){
		$(".gouwuche").css({"background":"url(images/gouwuche.png) no-repeat 31px center #f9c81d","color":"#767676",})
		$(".gouwuchediv").css("display","none")
	})
	
//	nav=================================================================
$(".navdiv1").on("mouseover",function(){
	$(".xilie").stop().animate({"height":238},300)
})
$(".navdiv2").on("mouseover",function(){
	$(".jingpin").stop().animate({"height":238},300)
})
$(".navdiv1").on("mouseout",function(){
	$(".xilie").stop().animate({"height":0},300)
})
$(".navdiv2").on("mouseout",function(){
	$(".jingpin").stop().animate({"height":0},300)
})

$(".xiliediv1,.xiliediv3").on("mouseover",function(){
	$(this).stop().animate({"padding-top":10},500)
})
$(".xiliediv1,.xiliediv3").on("mouseout",function(){
	$(this).stop().animate({"padding-top":23},500)
})

var time;
	var i=0;
	clearInterval(time);
	time = setInterval(function(){	
		i++;
		
		if(i==8){
//			$(".navul2").css("marginTop",0)
			i=0
		}
		$(".navul2").animate({"marginTop":-1*20*i});
	},1500)
//	function gundong(){
//	timer = setInterval(function(){
//		if(!flag){
//			if(index1 == 8){
//			ul1.style.left = 0+"px";
//			index1 = 1
//		}
//		index1++
//		move(ul1,{"left":-1*(index1-1)*1263})
//		for(var i = 0;i<li.length;i++){
//			li[i].className = "liun";
//		}
//		if(index1 == 8){
//			li[0].className = "lion";
//		}else{
//			li[index1-1].className = "lion";
//		}
//		}
//	},4000)
//}
	
//	banner========================================================================

//	ul1.onmousemove = function(){
//		flag = true
//	}
//	ul1.onmouseout = function(){
//		flag = false
//	}
$(".leftbutton").on("mouseover",function(){
	$(".leftbutton").css({"cursor":"pointer","opacity":0.7})
})
$(".rightbutton").on("mouseover",function(){
	$(".rightbutton").css({"cursor":"pointer","opacity":0.7})
})
$(".leftbutton").on("mouseout",function(){
	$(".leftbutton").css({"opacity":0.4})
})
$(".rightbutton").on("mouseout",function(){
	$(".rightbutton").css({"opacity":0.4})
})
//$(".rightbutton").on("click",function(){
//	clearInterval(timer)
//	$(".lunboul1").animate({"left":1300},1000)
//})
var ul1 = document.getElementById("imgul");
	var li = document.getElementById("navulid").children;
	var index1 = 1// 第一张图片
	var timer;
	var flag = false;
	gundong()
for(var i = 0;i<li.length;i++){
	//用index实时获取i
	li[i].index = i;
	li[i].onclick = function(){
		clearInterval(timer);
		index1 = this.index+1;
		move(ul1,{"left":-1*(this.index)*1263},gundong);
		for(var k = 0;k<li.length;k++){
			li[k].className = "liun";
		}
		this.className = "lion"
		
	}
}
function gundong(){
	
	timer = setInterval(function(){
		if(!flag){
			if(index1 == 9){
			ul1.style.left = 0+"px";
			index1 = 1
			}
		index1++
		move(ul1,{"left":-1*(index1-1)*1263})
		for(var i = 0;i<li.length;i++){
			li[i].className = "liun";
		}
		if(index1 == 9){
			li[0].className = "lion";
		}else{
			li[index1-1].className = "lion";
		}
		}
	},4000)
	
}
//for(var i = 0;i<($(".bannerleftdiv'+i'").children()).length;i++){
//	$(".bannerleftdiv'+i").children().eq(i+1).css({"background":"url(images/bannerleftdiv'+'i'img'+'i'.png) no-repeat 30px center"})
	$(".bannerleftdiv1").children().eq(1).css({"background":"url(images/bannerleftdiv1img1.png) no-repeat 30px center"})
	$(".bannerleftdiv1").children().eq(2).css({"background":"url(images/bannerleftdiv1img2.png) no-repeat 30px center"})
	$(".bannerleftdiv1").children().eq(3).css({"background":"url(images/bannerleftdiv1img3.png) no-repeat 30px center"})
	$(".bannerleftdiv1").children().eq(4).css({"background":"url(images/bannerleftdiv1img4.png) no-repeat 30px center"})
	$(".bannerleftdiv1").children().eq(5).css({"background":"url(images/bannerleftdiv1img5.png) no-repeat 30px center"})
	$(".bannerleftdiv1").children().eq(6).css({"background":"url(images/bannerleftdiv1img6.png) no-repeat 30px center"})
//}
	
	$(".bannerleftdiv2").children().eq(1).css({"background":"url(images/bannerleftdiv2img1.png) no-repeat 30px center"})
	$(".bannerleftdiv2").children().eq(2).css({"background":"url(images/bannerleftdiv2img2.png) no-repeat 30px center"})
	$(".bannerleftdiv2").children().eq(3).css({"background":"url(images/bannerleftdiv2img3.png) no-repeat 30px center"})
	$(".bannerleftdiv2").children().eq(4).css({"background":"url(images/bannerleftdiv2img4.png) no-repeat 30px center"})
	
	$(".bannerleftdiv3").children().eq(1).css({"background":"url(images/bannerleftdiv3img1.png) no-repeat 30px center"})
	$(".bannerleftdiv3").children().eq(2).css({"background":"url(images/bannerleftdiv3img2.png) no-repeat 30px center"})
	$(".bannerleftdiv3").children().eq(3).css({"background":"url(images/bannerleftdiv3img3.png) no-repeat 30px center"})
	
	$(".bannerleftdiv4").children().eq(1).css({"background":"url(images/bannerleftdiv4img1.png) no-repeat 30px center"})
	$(".bannerleftdiv4").children().eq(2).css({"background":"url(images/bannerleftdiv4img2.png) no-repeat 30px center"})
	$(".bannerleftdiv4").children().eq(3).css({"background":"url(images/bannerleftdiv4img3.png) no-repeat 30px center"})
	
	$(".bannerleftdiv5").children().eq(1).css({"background":"url(images/bannerleftdiv5img1.png) no-repeat 30px center"})
	$(".bannerleftdiv5").children().eq(2).css({"background":"url(images/bannerleftdiv5img2.png) no-repeat 30px center"})
	$(".bannerleftdiv5").children().eq(3).css({"background":"url(images/bannerleftdiv5img3.png) no-repeat 30px center"})
	
	$(".bannerleftdiv6").children().eq(1).css({"background":"url(images/bannerleftdiv6img1.png) no-repeat 30px center"})
	$(".bannerleftdiv6").children().eq(2).css({"background":"url(images/bannerleftdiv6img2.png) no-repeat 30px center"})
	$(".bannerleftdiv6").children().eq(3).css({"background":"url(images/bannerleftdiv6img3.png) no-repeat 30px center"})
	
	$(".bannerleftdiv7").children().eq(1).css({"background":"url(images/bannerleftdiv7img1.png) no-repeat 30px center"})
	$(".bannerleftdiv7").children().eq(2).css({"background":"url(images/bannerleftdiv7img2.png) no-repeat 30px center"})
	$(".bannerleftdiv7").children().eq(3).css({"background":"url(images/bannerleftdiv7img3.png) no-repeat 30px center"})


$(".bannerul1 li").on("mouseover",function(){
	$(this).css("background","#BFBFBF")
	$(this).children("div").css("display","block").stop().animate({"width":"222px"},500)
})
$(".bannerul1 li").on("mouseout",function(){
	$(this).css("background","white")
	$(this).children("div").css("display","none").stop().animate({"width":"0"},500)
})
$(".banner2 img").on("mouseover",function(){
	$(this).stop().animate({"height":"170px"},200)
})
$(".banner2 img").on("mouseout",function(){
	$(this).stop().animate({"height":"163px"},200)
})
//今日推荐===================================================================
$(".jinrituijianzuo").on("mouseover",function(){
	$(".jinrituijianzuo").css("background","url(images/jinrituijianzuored.png) no-repeat center")
})
$(".jinrituijianyou").on("mouseover",function(){
	$(".jinrituijianyou").css("background","url(images/jinrituijianyoured.png) no-repeat center")
})
$(".jinrituijianyou").on("mouseout",function(){
	$(".jinrituijianyou").css("background","url(images/jinrituijianyou.png) no-repeat center")
})
$(".jinrituijianzuo").on("mouseout",function(){
	$(".jinrituijianzuo").css("background","url(images/jinrituijianzuo.png) no-repeat center")
})

	$(".jinri2 dl").on("mouseover",function(){
		$(this).stop().animate({"paddingTop":30},300)
	})
	$(".jinri2 dl").on("mouseout",function(){
		$(this).stop().animate({"paddingTop":40},300)
	})
	$(".jinri2 a").on("mouseover",function(){
		$(this).css("background","orange")
	})
	$(".jinri2 a").on("mouseout",function(){
		$(this).css("background","#ff3b3c")
	})
	//main1================================================================
	$(".main1 div").on("mouseover",function(){
		$(this).stop().animate({"marginTop":-8},200).css("boxShadow", "0px 4px 8px rgba(0,0,0,.2)")
	})
	$(".main1 div").on("mouseout",function(){
		$(this).stop().animate({"marginTop":0},200).css("boxShadow", "none")
	})
//	$(".main1 div dl").children("dd").first().css("color","red")
	//main2===================================================================================
	$(".main2ul1 li").eq(0).css("background","url(images/main2ulbg.png) repeat-x center bottom")
	$(".main3ul1 li").eq(0).css("background","url(images/main2ulbg.png) repeat-x center bottom")
	$(".main2ul1 li").on("mouseover",function(){
		$(this).css("background","url(images/main2ulbg.png) repeat-x center bottom").siblings().css("background","none")
		$(".main2box1,.main2box2,.main2box3,.main3box1,.main3box2,.main3box3").css("boxShadow", "none")
	})
	$(".main2 div").on("mouseover",function(){
		$(this).stop().animate({"marginTop":10},200).css("boxShadow", "0px 4px 8px rgba(0,0,0,.2)")
		$(".main2box1,.main2box2,.main2box3,.main3box1,.main3box2,.main3box3").css("boxShadow", "none")
	})
	$(".main2 div").on("mouseout",function(){
		$(this).stop().animate({"marginTop":18},200).css("boxShadow", "none")
		$(".main2box1,.main2box2,.main2box3,.main3box1,.main3box2,.main3box3").css("boxShadow", "none")
	})
	$(".main2head").on("mouseover",function(){
		$(this).stop().css("boxShadow", "none")
		$(".main2box1,.main2box2,.main2box3,.main3box1,.main3box2,.main3box3").css("boxShadow", "none")
	})
	$(".main2head").on("mouseout",function(){
		$(this).stop().css("boxShadow", "none")
		$(".main2box1,.main2box2,.main2box3,.main3box1,.main3box2,.main3box3").css("boxShadow", "none")
	})
	
	$(".main2ul1 li").eq(0).on("mouseover",function(){
		$(".main2box1").css("display", "block")
		$(".main2box2,.main2box3").css("display", "none")
	})
	$(".main2ul1 li").eq(1).on("mouseover",function(){
		$(".main2box2").css("display", "block")
		$(".main2box1,.main2box3").css("display", "none")
	})
	$(".main2ul1 li").eq(2).on("mouseover",function(){
		$(".main2box3").css("display", "block")
		$(".main2box1,.main2box2").css("display", "none")
	})
	$(".main3ul1 li").eq(0).on("mouseover",function(){
		$(".main3box1").css("display", "block")
		$(".content,.main").css({"height":"2622px"})
		$(".main3box2,.main3box3").css("display", "none")
	})
	$(".main3ul1 li").eq(1).on("mouseover",function(){
		$(".main3box2").css({"display":"block"})
		$(".content,.main").css({"height":"2312px"})
		$(".main3box1,.main3box3").css("display", "none")
	})
	$(".main3ul1 li").eq(2).on("mouseover",function(){
		$(".main3box3").css("display", "block")
		$(".content,.main").css({"height":"2312px"})
		$(".main3box1,.main3box2").css("display", "none")
	})
	
	
	
	
	
	
	
	
	
	
	
	
})
	
