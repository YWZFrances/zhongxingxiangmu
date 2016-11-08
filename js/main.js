
$(document).ready(function(){
	
	
	
	
	
	
	
	
	
	
	
	$(".gongzhonghao").on("mouseover",function(){
		$(".gongzhonghao").stop().animate({"backgroundPosition":30},1000)
		$(".gongzhonghaodiv").stop().animate({"width":160,"height":180,"opacity":1,"top":308},1000)
	})
	$(".gongzhonghaodiv").on("mouseout",function(){
		$(".gongzhonghao").stop().animate({"backgroundPosition":0},1000)
		$(".gongzhonghaodiv").stop().animate({"width":0,"height":0,"opacity":0,"top":490},1000)
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
