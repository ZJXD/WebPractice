<template>
  <div class="box_div p20">
    <div class="col_item">
      <div class="test_item">
        <label>扇形示例</label>
        <div class="sector" />
      </div>
      <div class="test_item">
        <label>事件捕获</label>
        <div class="event_test">
          父元素
          <div>子元素</div>
        </div>
      </div>
      <div class="test_item">
        <label>图片排列</label>
        <div class="pic_test">
          <div class="pic_item">
            图片
          </div>
          <div class="pic_item">
            图片
          </div>
          <div class="pic_item">
            图片
          </div>
        </div>
      </div>
      <div class="test_item">
        <label>线性进度条</label>
        <div class="line_bar" />
        <div class="line_bar overflow" />
      </div>
      <div class="test_item">
        <label>箭头</label>
        <div class="arrow_list">
          <div class="arrow arrow-top" />
          <div class="arrow arrow-right" />
          <div class="arrow arrow-bottom" />
          <div class="arrow arrow-left" />
        </div>
      </div>
    </div>
    <div class="col_item">
      <div class="test_item">
        <label>时钟</label>
        <clock />
      </div>
      <div class="test_item">
        <label>线性渐变</label>
        <div class="line-gradient" />
        <div class="radial-gradient" />
      </div>
      <div class="test_item">
        <label>canvas 文字粒子</label>
        <canvasText />
      </div>
    </div>
  </div>
</template>

<script>
import Clock from './Clock'
import canvasText from '../../../components/canvas-text/index'

export default {
  name: 'FirstPage',
  components: {
    Clock,
    canvasText
  },
  data() {
    return {}
  },
  methods: {
    /**
     * 节流函数
     * fn 要触发的回调
     * delay 固定执行时间
     * 这里用到了闭包：timer
     */
    throttle(fn, delay = 100) {
      let timer = null
      return function() {
        if (timer) return
        timer = setTimeout(() => {
          fn.apply(this, arguments)
          timer = null
        }, delay)
      }
    },

    /**
     * 同上，这个首次执行
     */
    throttle1(fn, delay = 100) {
      let last = 0
      return function() {
        const curr = +new Date()
        if (curr - last > delay) {
          fn.apply(this, arguments)
          last = curr
        }
      }
    },

    /**
     * 防抖函数
     * fn 回调函数
     * delay 防抖间隔时间
     * 也用到闭包：timer
     */
    debounce(fn, delay = 200) {
      let timer = null
      return function() {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, arguments)
          timer = null
        }, delay)
      }
    },

    /**
     * 首次执行的实现，还有点小问题：
     *  整个过程第一次，中间没有连续触发后，再次触发第一次不会执行
     */
    debocess1(fn, delay = 200) {
      let timer = null
      let last = 0
      return function() {
        if (last <= 0) {
          fn.apply(this.arguments)
        }
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this.arguments)
          timer = null
        }, delay)
        last = +new Date()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box_div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.col_item {
  display: flex;
  padding: 10px;
}

/*每个测试单元样式*/
.test_item {
  height: 120px;
  padding: 10px;
  display: flex;
  border-right: 1px solid #999;

  > label {
    line-height: 100px;
    margin-right: 10px;
  }
}

/*扇形样式*/
.test_item .sector {
  margin-top: 25px;
  width: 0;
  height: 0;
  border-width: 50px;
  border-style: solid;
  border-radius: 50px;
  border-color: #f00 transparent transparent;
}

/* 事件冒泡 禁止 */
.test_item .event_test {
  width: 200px;
  background-color: #bbb;
  text-align: center;
  pointer-events: none;

  :active {
    outline: 1px solid #f22;
  }
  > div {
    width: 100px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    line-height: 50px;
    background-color: #678;
    pointer-events: auto;
    :active {
      outline: 1px solid #f22;
    }
  }
}

/* 图片行列排列 */
.test_item .pic_test {
  display: flex;
  width: 200px;
  background-color: #bbb;
  flex-wrap: wrap; /* 自动换行 */
  align-content: flex-start; /* 交叉轴对齐方式 align-item 有区别 */

  .pic_item {
    width: 45%;
    height: 40px;
    line-height: 40px;
    background-color: #678;
    margin: 5px;
    text-align: center;
  }
}

/* 线性渐变进度条 */
.line_bar {
  position: relative;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  background-color: #ffba01;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 200px;
    height: 85px;
    background: repeating-linear-gradient(
      45deg,
      #f06a0e,
      #f06a0e 10px,
      transparent 10px,
      transparent 20px
    );
    background-position: 0 0;
    background-repeat: no-repeat;
    animation: move 1s linear infinite;
  }
}
@keyframes move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -56px;
  }
}

.overflow {
  overflow: hidden;
}

/* 箭头 */
.arrow_list {
  width: 200px;
  background-color: #fff;
  position: relative;

  .arrow:before,
  .arrow:after {
    content: '';
    height: 0;
    width: 0;
    top: 40px;
    position: absolute;
    border: 10px solid transparent;
  }

  .arrow-top:before {
    border-bottom-color: #fff;
    z-index: 2;
    left: 10px;
  }

  .arrow-top:after {
    border-bottom-color: #333;
    z-index: 1;
    left: 10px;
    top: 38px;
  }

  .arrow-right:before {
    border-left-color: #fff;
    z-index: 2;
    left: 40px;
  }

  .arrow-right:after {
    border-left-color: #333;
    z-index: 1;
    left: 42px;
  }

  .arrow-bottom:before {
    border-top-color: #fff;
    z-index: 2;
    left: 70px;
    top: 38px;
  }
  .arrow-bottom:after {
    border-top-color: #333;
    z-index: 1;
    left: 70px;
  }

  .arrow-left:before {
    border-right-color: #fff;
    z-index: 2;
    left: 102px;
  }
  .arrow-left:after {
    border-right-color: #333;
    z-index: 1;
    left: 100px;
  }
}

/* 测试渐变 */
.line-gradient {
  height: 200px;
  width: 200px;
  // 根据给出的颜色进行重复显示
  background: repeating-linear-gradient(
    0deg,
    pink 0,
    pink 20px,
    #bbb 20px,
    #bbb 40px,
    #ffba01 40px,
    #ffba01 60px
  );
  // 给出的每一个点颜色进行渐变，如果两个点颜色一样，不渐变
  // background: linear-gradient(0deg, pink 0, pink 20px, #bbb 20px, #ffba01 40px);
}

/* 径向渐变 */
.radial-gradient {
  height: 200px;
  width: 200px;
  margin-left: 20px;
  background: radial-gradient(
    rgba(234, 95, 74, 0.1) 0%,
    rgba(234, 95, 74, 0.4) 50%,
    rgba(234, 95, 74, 0.8) 100%
  );
}
</style>
