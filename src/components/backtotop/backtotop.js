// 获取DOM
const backtotop = document.getElementById('backtotop');
// 当网页向下滑动 20px 出现"返回顶部" 按钮
document.body.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backtotop.style.display = "block";
      } else {
          backtotop.style.display = "none";
      }
  }
// 纵坐标的位置至0
backtotop.onclick = function(){
    // 当前页面滚动条纵坐标的位置至0
    document.body.scrollTop = 0;
    // 兼容写法
    document.documentElement.scrollTop = 0;
}
 