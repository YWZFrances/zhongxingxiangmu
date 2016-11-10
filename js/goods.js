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
		$(".gouwuche").css({"background":"url(../images/gouwucheimg2.png) no-repeat 31px center white","color":"black","border-bottom":"white"})
		$(".gouwuchediv").css("display","block")
	})
	$(".gouwuche").on("mouseout",function(){
		$(".gouwuche").css({"background":"url(../images/gouwuche.png) no-repeat 31px center #f9c81d","color":"#767676",})
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})
