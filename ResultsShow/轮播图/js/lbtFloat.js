;window.onload = function(){
	// 封装获取指定ID节点的函数
		function $(idName){
			return document.getElementById( idName );
		}

	// 1) 获取节点
		var container = $("container"),
			leftBtn = $("left"),
			rightBtn = $("right"),
			imgBox = $("imgBox"),
			lis = $("liBox").getElementsByTagName('li');

		var count = 0,// 计数器 ==> 定义全局变量count ==> 图片的下标
			timer = null;// 用于保存定时器返回的ID

	// 2) 从向左向右按钮切入 ( 函数封装  changeImg  changeCount )
		// 向左
		leftBtn.onclick = function(){
			changeCount(true);
		}
		// 向右
		rightBtn.onclick = function(){
			changeCount();
		}
	// 3) 刷新页面 自动轮播 ==> 开一个定时器 
		timer = setInterval( changeCount , 1000 );

	// 4) 鼠标移入盒子 停止轮播 ==> 清除定时器
		container.onmouseover = function(){
			clearInterval( timer );
		}

	// 5) 鼠标移出盒子再自动轮播 ==> 再开一个定时器
		container.onmouseout = function(){
			timer = setInterval( changeCount , 1000 );
		}

	// 6) 鼠标移入li进行图片切换
		for(var i=0;i<lis.length;i++){
			lis[i].index = i;
			lis[i].onmouseover = function(){
				count = this.index;// 将鼠标移入li的下标赋值为全局的count
				changeImg();// 调用改变图片函数
			}
		}

		// 封装 改变count 的 函数
		function changeCount(flag){
			if(flag){
				count--;// 计数器自减
				// 判断 count自减  如果点击第一张 回到最后一张
				if( count < 0 ){
					count = lis.length-1;
				}
				
			}else{
				count++;// 计时器自增
				// 判断 count 重置 如果点击左后一张 回到第一张
				if( count >= lis.length ){
					count = 0;
				}
			}
			changeImg();
		}

		// 封装 改变图片的 函数
		function changeImg(){
			// 排他思想
			for(var i=0;i<lis.length;i++){
				lis[i].className = "";// 将所有的li的class赋值为空
			}
			// 显示我自己
			imgBox.style.left = -1000 * count + "px";
			lis[count].className = "active";
		}
}

