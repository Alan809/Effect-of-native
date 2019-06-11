;window.onload = function(){
		var main = document.getElementById("main"),
			mainLis = main.getElementsByTagName('li'),
			scrolls = document.querySelectorAll(".scroll");
		main.style.display = "none";
		window.onscroll = function(){
			if( document.body.scrollTop >= getElementTop(scrolls[0])){
				main.style.display = "block";
			}else{
				main.style.display = "none";
			}
			for(var i=0;i<scrolls.length;i++){
				if( document.body.scrollTop + 100 > getElementTop( scrolls[i] ) ){
					for(var j=1;j<mainLis.length-1;j++){
						mainLis[j].style.width = "45px";
						mainLis[j].style.height = "45px";
						mainLis[j].style.background = "";
					}
					mainLis[i+1].style.width = "48px";
					mainLis[i+1].style.height = "48px";
					mainLis[i+1].style.background = "Orange";
				}
			}
		}

		mainLis[8].onmouseover = function(){
			this.innerHTML="返回顶部";
		}
		mainLis[8].onmouseout = function(){
			this.innerHTML="<img src=\"img/top.png\">";
		}
		mainLis[8].onclick = function(){
			returnScorll( 0 );
		}
		for(var i=1;i<mainLis.length-1;i++){
			mainLis[i].index = i;
			mainLis[i].onclick = function(){
				returnScorll( getElementTop( scrolls[this.index-1] ) )
			}
		}

		// 获取元素距离顶部的位置大小
		function getElementTop(element){
			var actualTop = element.offsetTop;
			var current = element.offsetParent;
			while (current !== null){
				actualTop += current. offsetTop;
				current = current.offsetParent;
			}
			return actualTop;
		}

		function returnScorll(targetTop){
			var top = document.body.scrollTop||document.documentElement.scrollTop;
			var timer = null;
				if( targetTop > top ){
					timer = setInterval(function(){
						document.body.scrollTop += 30;
						if( document.body.scrollTop >= targetTop  ){
							clearInterval( timer );
							document.body.scrollTop = targetTop;
						}
					},5 );
				}else{
					timer = setInterval(function(){
						document.body.scrollTop -= 30;
						if( document.body.scrollTop <= targetTop  ){
							clearInterval( timer );
							document.body.scrollTop = targetTop;
						}
					},5 );
				}
		}
}