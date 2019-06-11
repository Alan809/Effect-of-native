window.onload = function(){
	var oLi = null
		,	oH3 = null
		,	oP = null
		,	oH5 = null
		,	speed = null
		,	timer = null
		,	img = null
		,	sum = 0
		,	oBtn = document.getElementById("btn")
		,	oBtn1 = document.getElementById("btn1")
		,	oMeText = document.getElementById("message_text")
		,	oForm = document.getElementsByTagName("form")[0]
		,	oText = document.getElementById("text")
		,	oTextarea = document.getElementsByTagName("textarea")[0]
		,	oUl = oMeText.getElementsByTagName("ul")[0]
		,	oA = document.getElementById("aid");
		oBtn.onclick = getValue;

		//禁止表单提交
		oForm.onsubmit = function(){return false}; 


		function getValue(){

			//如果未全部填写,提醒用户
			if(oText.value == "" || oTextarea.value == ""){
				alert("就二个框，你还不写全了啊？");
				return;
			}else{
				if(oTextarea.value.length < 10){
					alert("评论内容至少10字");
					return;
				}else if(oTextarea.value.length > 100){
					alert("评论内容超出100字");
					return;
				}
			}

			var date = new Date();
			var time = date.toLocaleString();
			oMeText.style.display = "block";
			oLi = document.createElement("li");
			oImg = document.createElement("img");
			oH3 = document.createElement("h3");
			oH5 = document.createElement("h5");
			oP = document.createElement("p");
			oH3.innerHTML = oText.value;
			oH5.innerHTML = time;
			oP.innerHTML = oTextarea.value;

			//添加评论
			if(oUl.childNodes[0]){
				oUl.insertBefore(oLi,oUl.childNodes[0]);
			}else{
				oUl.appendChild(oLi);
			}
			oImg.setAttribute("src","img/userBj.png");
			oLi.appendChild(oImg);
			oLi.appendChild(oH3);
			oLi.appendChild(oH5);
			oLi.appendChild(oP);

			//评论数
			sum++;
			oA.innerHTML = sum;

			//清空输入框
			oText.value = "";
			oTextarea.value = "";

			//运动开始
			var	h = oLi.offsetHeight
			oLi.style.height = "0px";
			if(timer){
				clearInterval(timer);
			}
			timer = setInterval(function(){
				goTime(h);
			},35);
			// goTime(h);
		}

		//运动效果
		function goTime(target){
			var top = oLi.offsetHeight;
			speed += 3;
			top += speed;
			if(top > target){
				top = target;
				speed *= -0.7;
			}
			if(top === target && Math.abs(speed) < 3){
				clearInterval(timer);
				timer = null;
				oLi.style.height = target + "px";
			}
			oLi.style.height = top + "px";
		}

		//显示、隐藏评论
		var index = 0;
		oBtn1.onclick = hide;
		function hide(){
			if(index){
				oUl.style.display = "block";
				oBtn1.innerHTML = "隐藏留言";
				index = 0;
			}else{
				oUl.style.display = "none";
				oBtn1.innerHTML = "显示留言";
				index = 1;
			}
			
		}
}