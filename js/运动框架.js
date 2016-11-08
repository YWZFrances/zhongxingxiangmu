

//运动框架
function move(element,target,fn){
	clearInterval(element.timer);
	// timer = setIntaval（）
	element.timer = setInterval(function(){
		//alert(1)
		//布尔值控制什么时候关定时器 下面有
		//var flag = true
		// for in 循环 能遍历这个对象中所有属性
		for(var attr in target){// 返回属性名
			var dangqianzhi = Math.round(parseFloat(getStyle(element,attr)))
			if(!dangqianzhi){
                    dangqianzhi=0;
               };
               var s = (target[attr] - dangqianzhi)/10; 
               //alert(s)
               //三目运算符 如果s>0 则向上取整 反之向下取整
               s=s>0?Math.ceil(s):Math.floor(s);
//             element.style[attr] = dangqianzhi+s+"px";
               if(dangqianzhi == target[attr]){
               	clearInterval(element.timer);
               	if (fn) {//如果fn有的话，为真。 //当完成运动的时候，如果有回调函数，则执行回调函数
                fn();
            }
               }else{
               	element.style[attr] = dangqianzhi+s+"px";
               	// 就是说 本来flag是true 经过变化之后变成了false
               	// 之后定时器又循环  如果还在变化 flag还是false 
               	// 当不执行变化时，就说明已经达到了目标值了，这时候flag不会变化
               	// 不会变化就是true 就可以执行下面关定时器的代码了
               	//flag = false;
               }
               
		}
//		if(flag){
//             	clearInterval(element.timer);
//             	// 结束后执行这个方法 告诉一下
//             	fn();
//             }
 
	},30)
}

// 获取样式  有兼容性
// 想要知道上面遍历出的所有属性的值各是多少
//  (元素  属性名)
function getStyle(dongxi,at){
	if (dongxi.currentStyle) {   //IE浏览器用这个
            return dongxi.currentStyle[at];//找到这个东西的[]的属性名的属性值
        } else {
            return window.getComputedStyle(dongxi, false)[at];  //非IE浏览器用这个
        }
}




















