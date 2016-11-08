
$(document).ready(function(){



$(".loginp2").on("click",function(){
	var yanzheng = "";
	for(var i = 0;i<4;i++){
		yanzheng += Math.floor(Math.random()*10)
	}
	$(".chuyanzhengma").html(yanzheng)
})

























})
