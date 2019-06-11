;window.onload=function(){
      var scrollImg = document.getElementById("dd_scroll"),
          oCategory_1_Img = document.getElementById("category_1_img"),
          oCategory_37_Img = document.getElementById("category_37_img"),
          oCategory_97_Img = document.getElementById("category_97_img"),
          oCategory_1 = document.getElementById("category_1"),
          oCategory_37 = document.getElementById("category_37"),
          oCategory_97 = document.getElementById("category_97"),
          oLis = document.getElementById("scroll_number").getElementsByTagName("li"),
          ad_close = document.getElementById("ad_close"),
          wechat_float_qrcode = document.getElementById("wechat_float_qrcode"),
          oImg = 1,
          timer = null;

      //关闭右侧浮动div
      ad_close.onclick = function(){
        wechat_float_qrcode.parentNode.removeChild(wechat_float_qrcode);
      }

      //图片轮播
      var count = 1,
          timer = null;
      timer = setInterval(fn,1000);

      function fn(){
        count++;
        if(count>8){
          count = 1;
        }
        lbtFn();
      }
      scroll_number.onmouseover = function(){
        clearInterval(timer);
      }
      scroll_number.onmouseout = function(){
        timer = setInterval(fn,1000);
      }
      for(let i=0;i<oLis.length;i++){
        oLis[i].onmouseover = function(){
          count = i+1;
          lbtFn();
        }
        
      }

      function lbtFn(){
        for(var i=0;i<oLis.length;i++){
          oLis[i].className = "";
        }
        oLis[count-1].className = "scroll_number_bgColor";
        scrollImg.src = `images/dd_scroll_${count}.jpg`;
      }

      //展开'隐藏
      var arr = [oCategory_1_Img,oCategory_37_Img,oCategory_97_Img];
      var newArr = [oCategory_1,oCategory_37,oCategory_97];
      var oNy = [true,true,true];
      //使用自定义index
      for(var i=0;i<arr.length;i++){
        arr[i].index = i;
        arr[i].onclick = function(event){
          // var obj = event.target;
          if(oNy[this.index]){
          newArr[this.index].style.display = "none";
          arr[this.index].src = "images/collapsed_yes.gif";
          oNy[this.index] = false;
          }else{
            newArr[this.index].style.display = "block";
            arr[this.index].src = "images/collapsed_no.gif";
            oNy[this.index] = true;
          }
        }
      }
      //使用let
      // for(let i=0;i<arr.length;i++){
      //   arr[i].onclick = function(event){
      //     if(oNy[i]){
      //     newArr[i].style.display = "none";
      //     arr[i].src = "images/collapsed_yes.gif";
      //     oNy[i] = false;
      //   }else{
      //     newArr[i].style.display = "block";
      //     arr[i].src = "images/collapsed_no.gif";
      //     oNy[i] = true;
      //   }
      //   }
      // }
  };
  