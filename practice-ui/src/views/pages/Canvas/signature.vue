<template>
  <div class="signature-page">
    <div ref="canvasHW" class="canvas-box">
      <el-button size="mini" @click="overwrite">
        重绘
      </el-button>
      <a class="full-screen" @click="fullscreen"><i class="iconfont">&#xe62b;</i></a>
      <canvas ref="canvasF" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp" />
    </div>
  </div>
</template>

<script>
import FullScreen from '@/utils/FullScreen'

export default {
  data() {
    return {
      points: [],
      canvasTxt: null,
      startX: 0,
      startY: 0,
      moveY: 0,
      moveX: 0,
      endY: 0,
      endX: 0,
      w: null,
      h: null,
      isDown: false,
      color: '#000',
      linewidth: 3,
      isDraw: false // 签名标记
    }
  },
  mounted() {
    const canvas = this.$refs.canvasF
    canvas.height = this.$refs.canvasHW.offsetHeight
    canvas.width = this.$refs.canvasHW.offsetWidth - 100
    this.canvasTxt = canvas.getContext('2d')
    this.canvasTxt.strokeStyle = this.color
    this.canvasTxt.lineWidth = this.linewidth

    // 全屏数据初始化
    this.fullElement = new FullScreen(() => {
      // console.log('不支持全屏功能')
      this.$message.warning('不支持全屏功能')
    })
    this.fullElement.screenError(e => {
      // console.log('进去全屏失败:', e)
      this.$message.error('全屏出现异常：', e)
    })
    // 全屏请求必须在事件处理函数中调用，否则将会被拒绝。
    const obj = {
      enter: e => {
        // 如果退出全屏 退出的还是全屏状态，将会触发进入全屏的回调，这种情况比较少 注意一下
        this.$message.error('进入全屏', e)
      },
      quit: e => {
        this.fullState = false
        // 通常不会出现嵌套的情况
        this.$message.error('退出全屏：', e)
      }
    }
    this.fullElement.screenChange(obj.enter, obj.quit)
  },
  methods: {
    // PC设备事件
    mouseDown(ev) {
      ev = ev || event
      ev.preventDefault()

      const obj = {
        x: ev.offsetX,
        y: ev.offsetY
      }
      this.startX = obj.x
      this.startY = obj.y
      this.canvasTxt.beginPath()// 开始作画
      this.points.push(obj)// 记录点
      this.isDown = true
    },

    // PC设备事件
    mouseMove(ev) {
      ev = ev || event
      ev.preventDefault()
      if (this.isDown) {
        const obj = {
          x: ev.offsetX,
          y: ev.offsetY
        }
        this.moveY = obj.y
        this.moveX = obj.x
        this.canvasTxt.moveTo(this.startX, this.startY)// 移动画笔
        this.canvasTxt.lineTo(obj.x, obj.y)// 创建线条
        this.canvasTxt.stroke()// 画线
        this.startY = obj.y
        this.startX = obj.x
        this.points.push(obj)// 记录点
      }
    },

    // PC设备事件
    mouseUp(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev) {
        const obj = {
          x: ev.offsetX,
          y: ev.offsetY
        }
        this.canvasTxt.closePath()// 收笔
        this.points.push(obj)// 记录点
        this.points.push({ x: -1, y: -1 })
        this.isDown = false
      }
    },

    // 移动设备事件
    touchStart(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length === 1) {
        this.isDraw = true // 签名标记
        const obj = {
          x: ev.targetTouches[0].clientX,
          y:
            ev.targetTouches[0].clientY -
            (document.body.offsetHeight * 0.5 +
              this.$refs.canvasHW.offsetHeight * 0.1)
        }
        // y的计算值中：document.body.offsetHeight*0.5代表的是除了整个画板signatureBox剩余的高，this.$refs.canvasHW.offsetHeight*0.1是画板中标题的高
        this.startX = obj.x
        this.startY = obj.y
        this.canvasTxt.beginPath()// 开始作画
        this.points.push(obj)// 记录点
      }
    },

    // 移动设备事件
    touchMove(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length === 1) {
        const obj = {
          x: ev.targetTouches[0].clientX,
          y:
            ev.targetTouches[0].clientY -
            (document.body.offsetHeight * 0.5 +
              this.$refs.canvasHW.offsetHeight * 0.1)
        }
        this.moveY = obj.y
        this.moveX = obj.x
        this.canvasTxt.moveTo(this.startX, this.startY)// 移动画笔
        this.canvasTxt.lineTo(obj.x, obj.y)// 创建线条
        this.canvasTxt.stroke()// 画线
        this.startY = obj.y
        this.startX = obj.x
        this.points.push(obj)// 记录点
      }
    },

    // 移动设备事件
    touchEnd(ev) {
      ev = ev || event
      ev.preventDefault()
      if (ev.touches.length === 1) {
        const obj = {
          x: ev.targetTouches[0].clientX,
          y:
            ev.targetTouches[0].clientY -
            (document.body.offsetHeight * 0.5 +
              this.$refs.canvasHW.offsetHeight * 0.1)
        }
        this.canvasTxt.closePath()// 收笔
        this.points.push(obj)// 记录点
        this.points.push({ x: -1, y: -1 })// 记录点
      }
    },

    // 重写
    overwrite() {
      this.canvasTxt.clearRect(
        0,
        0,
        this.$refs.canvasF.width,
        this.$refs.canvasF.height
      )
      this.points = []
      this.isDraw = false // 签名标记
    },

    // 全屏
    fullscreen() {
      if (!this.fullElement) {
        // console.log('fullscreen对象不存在')
        return false
      }
      this.fullState = !this.fullState
      if (this.fullState) {
        this.fullElement.Fullscreen(
          '.signature-page .canvas-box'
        )
      } else {
        this.fullElement.exitFullscreen()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signature-page {
  h3 {
    text-align: center;
  }

  .canvas-box {
    width: 100%;
    height: 500px;
    background-color: #999;
    // display: flex;
    // justify-content: space-around;
    position: relative;

    canvas {
      // width: 100%;
      // height: 100%;
      background-color: #aaa;
    }

    .full-screen {
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  }
}
</style>

<style lang="scss">
.signature-page {
  .canvas-box {
    .el-button {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
