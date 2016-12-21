/**
  * zepto_plugin : 向左滑动删除动效
  * version: alpha 1.0
  * Usage  : $('.item').wipper(length)
  * Author : Eric_tao
  * Time   : 2016-12-20
  * wechat : thr19910704
  */
 ;
 (function($) {
   $.fn.wipper = function(length) {

     var deadWidth = length ? length : 65; // 移动的极限距离(默认65px)
     var X = 0; //实时的移动距离
     var objX = 0; //目标对象位置
     var moveX_a; //滑动时的位置
     var moveY_a; //滑动时的位置
     let actionFlag = 0; //0为未移动；1为操作卡片；2为上下滚动页面；

     $(this).on('touchstart', function(event) {

       var obj = this;
       objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;

       moveX_a = event.targetTouches[0].clientX;
       moveY_a = event.targetTouches[0].clientY;

      //  console.log("起始X：" + moveX_a + " || 起始Y：" + moveY_a + "|| flag=" + actionFlag)

      });

      $(this).on('touchmove', function(event) {

         let obj = this;
         let moveX_b = event.targetTouches[0].clientX;
         let moveY_b = event.targetTouches[0].clientY;
         let X = moveX_b - moveX_a;

         //  根据flag进行操作
         if (actionFlag==0) {

           if (Math.abs(moveX_a-moveX_b) > Math.abs(moveY_a-moveY_b)*2) {
            //  console.log("本次move是滑动卡片");
             actionFlag = 1
           }else{
            //  console.log("本次move是滚动页面");
             actionFlag = 2
           }
         }else {
           if (actionFlag == 1) { // 本次进行卡滑动

            //  event.preventDefault();
             if (objX == 0) { // 如果此卡片未打开

               if (X < 0) {
                 let l = Math.abs(X);
                 if (l > deadWidth) {
                   obj.style.WebkitTransform = "translateX(" + -deadWidth + "px)";
                 } else {
                   obj.style.WebkitTransform = "translateX(" + -l + "px)";
                 }
               }

             } else { // 如果此卡片已打开

               if (X > 0) {
                 let l = Math.abs(X);
                 if (l > deadWidth) {
                   obj.style.WebkitTransform = "translateX(0px)";
                 } else {
                   l = deadWidth - l;
                   obj.style.WebkitTransform = "translateX(" + -l + "px)";
                 }
               }

             }

           }

         }

      });

      $(this).on('touchend', function(event) {
        // event.preventDefault();
        actionFlag = 0;

        var obj = this;
        objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
        if (objX > -deadWidth / 2) {
         obj.style.transition = "all 0.2s";
         obj.style.WebkitTransform = "translateX(" + 0 + "px)";
         obj.style.transition = "all 0";
         objX = 0;
        } else {
         obj.style.transition = "all 0.2s";
         obj.style.WebkitTransform = "translateX(" + -deadWidth + "px)";
         obj.style.transition = "all 0";
         objX = -deadWidth;
        }
     })

      //链式返回
      return this;
   };

 })(Zepto);
