;window.onload = function(){// 预加载
	// 轮播图模块
	(function(){
		// 封装一个通过指定ID获取节点的函数
		function $( idName ){
			return document.getElementById( idName );
		}
		// 1) 获取节点
			var bannerDivs = $("banner").getElementsByTagName("div"),
				prev = $("prev"),
				next = $("next"),
				main = $("main"),
				dotsSpns = $("dots").getElementsByTagName("span");

			var count = 0,// div的下标
				timer = null;

		// 2) 从向左向右按钮切入
			prev.onclick = function(){
				changeCount(true);
			}
			next.onclick = function(){
				changeCount();
			}

		// 3) 刷新页面 自动轮播 ==> 开一个定时器
			timer = setInterval( changeCount , 1000 );

		// 4) 鼠标移入盒子停止轮播
			main.onmouseover = function(){
				clearInterval( timer );
			}

		// 5) 鼠标移出继续轮播
			main.onmouseout = function(){
				timer = setInterval( changeCount , 1000 );
			}

		// 6) 鼠标移出span进行切换
			for(var i=0;i<dotsSpns.length;i++){
				dotsSpns[i].index = i;
				dotsSpns[i].onmouseover = function(){
					count = this.index;
					changeImg();
				}
			}

			// 封装改变count的函数
			function changeCount(flag){
				if(flag){
					count--;
					// 判断
					if( count < 0 ){
						count = bannerDivs.length - 1;
					}
				}else{
					count++;
					// 判断
					if( count >= bannerDivs.length ){
						count = 0;
					}
				}	
				changeImg();
			}

			// 封装改变图片的函数
			function changeImg(){
				// 排他思想
				for(var i=0;i<bannerDivs.length;i++){
					bannerDivs[i].style.display = "none";
					dotsSpns[i].className = "";
				}
				bannerDivs[ count ].style.display = "block";
				dotsSpns[ count ].className = "active";
			}
	})();
	// 二级菜单模块
	(function(){
		// 1) 获取节点
			var menuItems = document.querySelectorAll(".menu-item"),
				innerBoxs = document.querySelectorAll(".inner-box"),
				subMenu = document.querySelector("#sub-menu"),
				menuContent = document.querySelector("#menu-content");
		// 2) 鼠标移入选项
			for(var i=0;i<menuItems.length;i++){
				menuItems[i].index = i;
				menuItems[i].onmouseover = function(){
					// 排他思想
					// 把所有的分类内容都隐藏
					for(var j=0;j<innerBoxs.length;j++){
						innerBoxs[j].style.display = "none";
					}
					// 显示对应的分类内容
					innerBoxs[ this.index ].style.display = "block";
					// 显示内容的大盒子
					subMenu.style.display = "block";
				}
			}
		// 3) 鼠标移出  菜单  隐藏内容的大盒子
			menuContent.onmouseout = function(){
				subMenu.style.display = "none";//
			}
	})();
}