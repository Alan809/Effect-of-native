$(function(){
	var count = 0,
		timer = null;

	timer = setInterval(addCount,2000);

	$("#box").hover(()=>{
		clearInterval(timer);
		$(".btn").fadeIn(300);
	},()=>{
		timer = setInterval(addCount,2000);
		$(".btn").fadeOut(300);
	})

	$("#text li").mouseover(function(){
		count = $(this).index();
		lbt();
	})

	$("#left").click(()=>{
		addCount(true);
	});
	$("#right").click(()=>{
		addCount();
	})

	function addCount(flag){
		if(flag){
			count--;
			if(count < 0){
				count = $("#images>img").length-1;
			}
		}else{
			count++;
			if(count >= $("#images>img").length){
				count = 0;
			}
		}
		lbt();
	}

	function lbt(){
		$("#images>img").eq(count).fadeIn(500).siblings().fadeOut(500);
		$("#text li").eq(count).addClass("active").siblings().removeClass("active");
	}
});