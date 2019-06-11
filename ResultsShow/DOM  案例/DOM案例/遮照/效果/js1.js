var box=document.querySelector("#box");
var lis=document.getElementsByTagName("li");

for(var i= 0,len=lis.length;i<len;i++){
    lis[i].onclick=function(){
        //在图片之上显示
        var tu_1=document.createElement("div")
            tu_1.className="tu_1"
        box.appendChild(tu_1)
        //显示大图
        var big_1=document.createElement("img")
        //big_1.src="img/3.jpg"
        big_1.src=this.firstChild.getAttribute("src")
        big_1.className="big"
        box.appendChild(big_1)

        var small_1=document.createElement("span")
        small_1.innerHTML="X"
        small_1.className="small_1"
        box.appendChild(small_1)
        small_1.onclick=function(){
            box.removeChild(big_1)
            box.removeChild(small_1)
            box.removeChild(tu_1)
        }
    }
}
