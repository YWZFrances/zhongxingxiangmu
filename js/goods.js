$(document).ready(function() {

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
//	$(".gouwuche").on("mouseover", function() {
//		$(".gouwuche").css({
//			"background": "url(../images/gouwucheimg2.png) no-repeat 31px center white",
//			"color": "black",
//			"border-bottom": "white"
//		})
//		$(".gouwuchediv").css("display", "block")
//	})
//	$(".gouwuche").on("mouseout", function() {
//		$(".gouwuche").css({
//			"background": "url(../images/gouwuche.png) no-repeat 31px center #f9c81d",
//			"color": "#767676",
//		})
//		$(".gouwuchediv").css("display", "none")
//	})
$(".gouwuche").on("click",function(){
		location.replace("shoppingcart.html")
	})
	//	nav=================================================================
	$(".navdiv1").on("mouseover", function() {
		$(".xilie").stop().animate({
			"height": 238
		}, 300)
	})
	$(".navdiv2").on("mouseover", function() {
		$(".jingpin").stop().animate({
			"height": 238
		}, 300)
	})
	$(".navdiv1").on("mouseout", function() {
		$(".xilie").stop().animate({
			"height": 0
		}, 300)
	})
	$(".navdiv2").on("mouseout", function() {
		$(".jingpin").stop().animate({
			"height": 0
		}, 300)
	})

	$(".xiliediv1,.xiliediv3").on("mouseover", function() {
		$(this).stop().animate({
			"padding-top": 10
		}, 500)
	})
	$(".xiliediv1,.xiliediv3").on("mouseout", function() {
		$(this).stop().animate({
			"padding-top": 23
		}, 500)
	})

	var time;
	var r = 0;
	clearInterval(time);
	time = setInterval(function() {
		r++;
		if(r == 7) {
			$(".navul2").css("marginTop", 0)
			r = 0
		}
		$(".navul2").animate({
			"marginTop": -1 * 20 * r
		});
	}, 2500)

	//navp1============================================
	$(".navp1").on("mouseover", function() {
		$(".bannerleft").css("display", "block")
	})
	$(".navp1").on("mouseout", function() {
		$(".bannerleft").css("display", "none")
	})

	$(".bannerleftdiv1").children().eq(1).css({
		"background": "url(../images/bannerleftdiv1img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv1").children().eq(2).css({
		"background": "url(../images/bannerleftdiv1img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv1").children().eq(3).css({
		"background": "url(../images/bannerleftdiv1img3.png) no-repeat 30px center"
	})
	$(".bannerleftdiv1").children().eq(4).css({
		"background": "url(../images/bannerleftdiv1img4.png) no-repeat 30px center"
	})
	$(".bannerleftdiv1").children().eq(5).css({
		"background": "url(../images/bannerleftdiv1img5.png) no-repeat 30px center"
	})
	$(".bannerleftdiv1").children().eq(6).css({
			"background": "url(../images/bannerleftdiv1img6.png) no-repeat 30px center"
		})
		//}

	$(".bannerleftdiv2").children().eq(1).css({
		"background": "url(../images/bannerleftdiv2img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv2").children().eq(2).css({
		"background": "url(../images/bannerleftdiv2img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv2").children().eq(3).css({
		"background": "url(../images/bannerleftdiv2img3.png) no-repeat 30px center"
	})
	$(".bannerleftdiv2").children().eq(4).css({
		"background": "url(../images/bannerleftdiv2img4.png) no-repeat 30px center"
	})

	$(".bannerleftdiv3").children().eq(1).css({
		"background": "url(../images/bannerleftdiv3img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv3").children().eq(2).css({
		"background": "url(../images/bannerleftdiv3img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv3").children().eq(3).css({
		"background": "url(../images/bannerleftdiv3img3.png) no-repeat 30px center"
	})

	$(".bannerleftdiv4").children().eq(1).css({
		"background": "url(../images/bannerleftdiv4img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv4").children().eq(2).css({
		"background": "url(../images/bannerleftdiv4img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv4").children().eq(3).css({
		"background": "url(../images/bannerleftdiv4img3.png) no-repeat 30px center"
	})

	$(".bannerleftdiv5").children().eq(1).css({
		"background": "url(../images/bannerleftdiv5img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv5").children().eq(2).css({
		"background": "url(../images/bannerleftdiv5img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv5").children().eq(3).css({
		"background": "url(../images/bannerleftdiv5img3.png) no-repeat 30px center"
	})

	$(".bannerleftdiv6").children().eq(1).css({
		"background": "url(../images/bannerleftdiv6img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv6").children().eq(2).css({
		"background": "url(../images/bannerleftdiv6img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv6").children().eq(3).css({
		"background": "url(../images/bannerleftdiv6img3.png) no-repeat 30px center"
	})

	$(".bannerleftdiv7").children().eq(1).css({
		"background": "url(../images/bannerleftdiv7img1.png) no-repeat 30px center"
	})
	$(".bannerleftdiv7").children().eq(2).css({
		"background": "url(../images/bannerleftdiv7img2.png) no-repeat 30px center"
	})
	$(".bannerleftdiv7").children().eq(3).css({
		"background": "url(../images/bannerleftdiv7img3.png) no-repeat 30px center"
	})

	$(".bannerul1 li").on("mouseover", function() {
		$(this).css("background", "#BFBFBF")
		$(this).children("div").css("display", "block").stop().animate({
			"width": "222px"
		}, 300)
	})
	$(".bannerul1 li").on("mouseout", function() {
		$(this).css("background", "#adeaff")
		$(this).children("div").css("display", "none").stop().animate({
			"width": "0"
		}, 300)
	})
	$(".banner2 img").on("mouseover", function() {
		$(this).stop().animate({
			"height": "170px"
		}, 200)
	})
	$(".banner2 img").on("mouseout", function() {
		$(this).stop().animate({
			"height": "163px"
		}, 200)
	})

	//<div class="liebiaocontent">
	//				<dl>
	//					<dt><img src="../images/goodscontentimg1.png"/></dt>
	//					<dd>[现货抢购]ZET中兴 天机7 MAX(全网通)</dd>
	//					<dd class="ddred">￥2999</dd>
	//				</dl>
	//			</div>

	//data
	var newStr = "";
	$.ajax("../data/liebiao.json", {
		success: function(data) {
			for(var j = 0; j < data.length; j++) {
				reloadHtml(data[j].img, data[j].name, data[j].price)
			}
		},
		type: "get",
		async: true
	});

	function reloadHtml(img, name, price) {
		//		newStr += "<div class = 'liebiaocontent'>"
		//		newStr += "<dl>"
		//		newStr += "<dt>"
		//		newStr += "<img src = '../images/goodscontentimg" + img + ".png' />"
		//		newStr += "</dt>"
		//		newStr += "<dd>" + name + "</dd>"
		//		newStr += "<dd class ='ddred'>" + price + "</dd>"
		//		newStr += "</dl>"
		//		newStr += "</div>"
		//		$(".liebiao").html(newStr)
		newStr += "<div class = 'liebiaocontent'>" +
			"<dl>" +
			"<dt>" +
			"<img src = '../images/goodscontentimg" + img + ".png' />" +
			"</dt>" +
			"<dd>" + name + "</dd>" +
			"<dd class ='ddred'>" + price + "</dd>" +
			"</dl>" +
			"</div>"
		$(".liebiao").html(newStr)
//		$(".liebiaocontent").on("mouseover", function() {
//			$(this).stop().animate({
//				"margin-top": "2px"
//			}, 200).css("boxShadow", "0px 4px 8px rgba(0,0,0,.2)")
//		})
//		$(".liebiaocontent").on("mouseout", function() {
//			$(this).stop().animate({
//				"margin-top": "12px"
//			}, 200).css("boxShadow", "none")
//		})
//		$(".liebiaocontent").css({"-webkit-box-shadow": "0 15px 30px rgba(0,0,0,0.1)",
//  "box-shadow": "0px 15px 30px rgba(0,0,0,0.1)",
//  "-webkit-transform":" translate3d(0, -2px, 0)",
// " transform": "translate3d(0px, -2px, 0)",
//  "z-index": "1",
//  "transition": "all 0.2s linear"})
		$(".liebiaocontent").on("mouseover",function(){
			$(this).addClass("dong")
		})
		$(".liebiaocontent").on("mouseout",function(){
			$(this).removeClass("dong")
		})
		$(".liebiaocontent").on("click", function() {
		location.replace("details.html")
	})

	}

	//div上升
	//	$(".liebiaocontent").on("mouseover", function(){
	//		alert(2)
	//	})
	

})