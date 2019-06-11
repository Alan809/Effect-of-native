;window.onload = function(){
	function $(id){
		return document.getElementById(id);
	}
	var box =$("main");
	var prev =$("prev");  //获取左边的
	var next =$("next");  //获取右边的
	var imgs = document.querySelectorAll(".banner-slide");
		var count =0;
	var spans=$("dots").getElementsByTagName("span");
	var timer =null;
	timer = setInterval(right,2000);
	var menu =$("sub-menu");
	var menuitem =document.querySelectorAll(".menu-item");
	var innerbox = document.querySelectorAll(".inner-box");//获取所有类
	box.onmouseover = function(){  
		clearInterval(timer);    //清除定时器
		
	}
	box.onmouseout = function(){
		timer = setInterval(right,2000);  //开定时器
		
	}
	//按左
 prev.onclick = function(){
  	right(true);
  }
     //按右
  next.onclick = function(){
  	right();
  }
		function  right(flag){   //封装函数
			if(flag){
				count--;
				if(count<0){
					count = imgs.length-1;
				}
			}else{
				count++;
				if(count>=imgs.length){
					count = 0;
				}
			}
			ringt1();
		 }
		 function ringt1(){
		 	for(var i=0;i<imgs.length;i++){
		 		imgs[i].style.display = "none";
		 		spans[i].className = "";
		 	}
		 	imgs[count].style.display ="block";
		 	spans[count].className ="active";
		 }
		 for(var i=0;i<spans.length;i++){       
		 	spans[i].onclick = function(){    //点击圆点多的时候调用函数
		 		right();
		 	}
		 }
		 for( var i=0;i<menuitem.length;i++){
		 	  menuitem[i].index = i;
		 	menuitem[i].onmouseover = function(){
		 		menu.style.display = "block";
		 		innerbox[this.index].style.display ="block";

		 	}
		 	menuitem[i].onmouseout = function(){
		 		menu.style.display = "none";
		 		innerbox[this.index].style.display ="none";
		 	}

		 }
}
