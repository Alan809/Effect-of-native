;window.onload = function(){
	//推荐商品栏显示、隐藏
	(function(){
		var shoppingCommendSort= document.getElementById("shopping_commend_sort"),
			shoppingCommendRight= document.getElementById("shopping_commend_right"),
			shoppingCommendRightImg= shoppingCommendRight.getElementsByTagName("img"),
			flag = true;
		shoppingCommendRightImg[0].onclick = function(){
			if(flag){
				flag = false;
				shoppingCommendSort.style.display = "none";
				shoppingCommendRightImg[0].src = "images/shopping_arrow_down.gif";
			}else{
				flag = true;
				shoppingCommendSort.style.display = "block";
				shoppingCommendRightImg[0].src = "images/shopping_arrow_up.gif";
			}
		}
	})();
	var shopList = document.getElementById("shopList");
	var shopListTrs = shopList.getElementsByTagName("tr");
	var arr = [];
	for(var i=0;i<shopListTrs.length;i++){
		arr.push(shopListTrs[i].lastElementChild);
	}
	for(let j=0;j<arr.length;j++){
		arr[j].onclick = function(){
			
			shopList.removeChild(this.parentNode);
		}
	}
}