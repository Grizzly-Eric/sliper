
## wipper.js
*****
##### A lightweight touchscreen sliding js plugin depend on Zepto.js
##### 一个轻量的zepto插件，帮助你的webapp实现可以媲美原生的左滑操作体验，
*****

#### 使用方法：

* 先引入必要js文件，

      <script src="js/zepto.js"></script>
      <script src="js/wipper.js"></script>

* 在给需要的元素绑定方法，

      $('.item').wipper(length) // length是元素左滑的极限位置，默认64px;

*****

#### 补充说明：

* ios 测试无误，Android 设备部分无法正常运行，实际项目慎用。
* 滑动元素和背后出来的按钮需要设置css z-index来控制层级遮罩关系。
* 使用中遇到什么坑，记得告诉我，或者`pull request`，觉得好用记得 `star`鼓励 ：）。

*****

Author : Eric <br>
Wechat : thr19910704
