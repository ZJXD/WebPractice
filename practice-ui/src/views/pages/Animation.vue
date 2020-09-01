<template>
  <div class="animation-page">
    <div class="transform-box" />
    <div class="transition-box">
      CSS3 过渡
    </div>
    <div class="animation-box">
      CSS3 动画
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 参考：阮一峰：http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html
//      w3school：https://www.w3school.com.cn/css3/css3_animation.asp
.animation-page {
  display: flex;
  flex-wrap: wrap;
  div {
    margin-right: 50px;
  }

  // transform 效果
  .transform-box {
    width: 200px;
    height: 200px;
    background-color: pink;

    &::after {
      content: '';
      display: block;
      width: 200px;
      height: 200px;
      // 平移
      // transform: translate(100px, 100px);
      // 旋转
      transform: rotate(30deg);
      // 缩放，可以指定单独一个，下面两个效果一样
      transform: scaleX(0.75);
      // transform: scale(0.75, 1);
      // 翻转操作
      // transform: skew(45deg, 60deg);
      // 设置基点，默认的是中心，用这个可以改变为其他点，就是参照这个点做相对变换
      transform-origin: right;
      background-color: saddlebrown;
    }
  }

  // 过渡效果
  .transition-box {
    width: 100px;
    height: 65px;
    background-color: #92b901;
    border-radius: 10px;
    // 设置应用过渡的 CSS 属性名称
    // transition-property: width, height, transform, background;
    // 上面几个的简写形式（要写在前面，否则会覆盖其他属性）
    transition: 1s 1s width, 1s 1s height, 1s transform, 1s background;
    // 定义过渡花费的时间（对应上面的属性）
    // transition-duration: 1s, 1s, 1s, 1s;
    // 过渡效果延迟多久
    // transition-delay: 0, 1s, 1s, 1s;

    &:hover {
      width: 200px;
      height: 150px;
      transform: rotate(360deg);
      background-color: #1ec7e6;
    }
  }

  // 动画效果
  .animation-box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 10px;
    position: relative;
    background-color: #92b901;
    animation: myAni 5s;
  }
  // keyframes 规则
  @keyframes myAni {
    from {
      left: 0;
    }
    25% {
      left: 0;
      transform: rotate(30deg);
    }
    50% {
      left: 500px;
      transform: rotate(0deg);
    }
    70% {
      left: 500px;
      background-color: #1ec7e6;
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
      left: 0;
    }
  }
}
</style>
