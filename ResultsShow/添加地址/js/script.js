;window.onload = function(){
	function $(idName){
		return document.getElementById(idName);
	}

	// 1) 获取节点 ==> 找人
		var jBtnAddData = $("j_btnAddData"),// 添加按钮
			jMask = $("j_mask"),// 遮罩
			jFormAdd = $("j_formAdd"),// 表单
			jBtnAdd = $("j_btnAdd"), // 表单添加按钮
			jTxtLesson = $("j_txtLesson"), // 课程
			jTxtBelSch = $("j_txtBelSch"), // 学院
			jHideFormAdd = $("j_hideFormAdd"),// 关闭按钮
			jTb = $("j_tb"),// body
			jTbAs = jTb.getElementsByTagName('a'),
			jTbSpns = jTb.getElementsByTagName('span');
	// 2) 点击按钮 显示 jMask jFormAdd
		jBtnAddData.onclick = function(){
			jMask.style.display = "block";
			jFormAdd.style.display = "block";
		}

	// 3) 点击表单内的添加按钮 进行创建tr
		jBtnAdd.onclick = function(){
			if( jTxtLesson.value == ""){
				alert( "内容不能为空" );
			}else{
				// 动态创建tr元素
				var oTr = document.createElement("tr");
				oTr.innerHTML = `<td>${jTxtLesson.value}</td><td><span>默认</span></td>
				<td><a href="javascrip:;" class="get">DEL</a></td>`;
				jTb.appendChild( oTr );
				jMask.style.display = "none";
				jFormAdd.style.display = "none";

				delGet();// 给添加后的tr get绑定删除事件
				setAdd();
			}
			
		}

	// 4) 点击关闭按钮进行隐藏
		jHideFormAdd.onclick = function(){
			jMask.style.display = "none";
			jFormAdd.style.display = "none";
		}
	// 5)  封装 点击get删除函数
		delGet();// 加载页面给默认的tr绑定get删除事件
		function delGet(){
			for(var i=0;i<jTbAs.length;i++){
				jTbAs[i].onclick = function(){
					var flag = confirm("您确定要删除么?");
					if(flag)jTb.removeChild( this.parentNode.parentNode );
				}
			}
		}

	// 6) 设置默认 地址
		jTbSpns[0].style.color = "red";
		function setAdd(){
			for(var i=0;i<jTbSpns.length;i++){
				jTbSpns[i].onclick = function(){
					for(var j=0;j<jTbSpns.length;j++){
						jTbSpns[j].style.color = "#000";
					}
					this.style.color = "red";
				}
			}
		}
}