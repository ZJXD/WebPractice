<template>
  <!-- canvas 文字粒子动画 -->
  <div class="canvas-text-page">
    <canvas id="canvas-main" />
  </div>
</template>

<script>
// 生成粒子轨迹类
import Particle from './particle'
const WIDTH = 700
const HEIGHT = 700

export default {
  data() {
    return {
      canvasCon: null,
      textPoints: null,
      animationItem: null
    }
  },
  created() {
  },
  mounted() {
    // eslint-disable-next-line no-debugger
    // debugger
    const canvasObj = document.getElementById('canvas-main')
    canvasObj.width = WIDTH
    canvasObj.height = HEIGHT
    this.canvasCon = canvasObj.getContext('2d')
    this.textPoints = this.createViceCanvas()
    this.init()
  },
  methods: {
    // 启动动画
    init() {
      this.canvasCon.clearRect(0, 0, WIDTH, HEIGHT)
      this.textPoints.forEach((value) => {
        value.draw()
      })
      this.animationItem = window.requestAnimationFrame(this.init)
      if (this.textPoints[0].item >= 1) {
        window.cancelAnimationFrame(this.animationItem)
      }
    },

    // 创建副画布，里面写入想要展示的文字，并获取到文字粒子的位置
    // 这里创建的副画布和主画布大小一样，并且不会加重到 dom 中
    createViceCanvas() {
      const viceCanvas = document.createElement('canvas')
      viceCanvas.width = WIDTH
      viceCanvas.height = HEIGHT
      const viceCtx = viceCanvas.getContext('2d')
      this.initSubCanvas(viceCtx)
      return this.getFontInfo(viceCtx)
    },
    // 初始化副画布
    initSubCanvas(ctx) {
      const font = 'ZHT'
      ctx.font = '100px Arial'
      const measure = ctx.measureText(font)
      ctx.fillText(font, (WIDTH - measure.width) / 2, HEIGHT / 2)
    },
    // 获取文字粒子的位置信息
    getFontInfo(ctx) {
      // 这里获取的 imageData 是一个 Uint8ClampedArray，用于查看初始像素数组
      // 每个像素用4个1 bytes 代表（RGBA），所以下面变量每次加 4
      const imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT).data
      const particles = []
      for (let x = 0; x < WIDTH; x += 4) {
        for (let y = 0; y < HEIGHT; y += 4) {
          const fontIndex = (x + y * WIDTH) * 4 + 3
          if (imageData[fontIndex] > 0) {
            particles.push(new Particle(this.canvasCon, { x, y }, WIDTH, HEIGHT))
          }
        }
      }
      return particles
    }
  }
}
</script>
<style lang="scss" scoped>
.canvas-text-page {
  width: 350px;
  height: 350px;
}
</style>
