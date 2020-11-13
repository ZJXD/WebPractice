<template>
  <div ref="canvasBox" class="graphic-page">
    <canvas ref="canvasEle" class="canvas-box" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasTxt: null,
      antLineInterval: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvasEle
    canvas.width = this.$refs.canvasBox.offsetWidth
    canvas.height = this.$refs.canvasBox.offsetHeight
    this.canvasTxt = canvas.getContext('2d')
    this.canvasTxt.font = '18px Georgia'
    this.drawArc()
    this.movePen()
    this.drawBezier(40, [400, 30], 80)
    this.drawHeart()
    this.drawColorPalette()
    this.drawByAlpha()
    this.drawAntLine()
    this.drawGradient()
  },
  beforeDestroy() {
    this.antLineInterval && clearInterval(this.antLineInterval)
  },
  methods: {
    drawArc() {
      const radius = 20
      const startAngle = 0
      this.canvasTxt.fillText('圆弧', 100, 20)
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          this.canvasTxt.beginPath()
          const x = 50 + j * 50
          const y = 50 + i * 50
          const endAngle = Math.PI + (Math.PI * j) / 2
          // 顺时针或逆时针
          const anticlockwise = i % 2 !== 0
          this.canvasTxt.arc(x, y, radius, startAngle, endAngle, anticlockwise)
          // this.canvasTxt.stroke()
          if (i > 1) {
            this.canvasTxt.fill()
          } else {
            this.canvasTxt.stroke()
          }
        }
      }
    },

    movePen() {
      this.canvasTxt.fillText('画笔移动', 220, 20)
      // this.canvasTxt.moveTo(300, 150)
      this.canvasTxt.beginPath()
      this.canvasTxt.arc(250, 150, 50, 0, Math.PI * 2, true)
      this.canvasTxt.moveTo(285, 150)
      this.canvasTxt.arc(250, 150, 35, 0, Math.PI, false)
      this.canvasTxt.moveTo(240, 120)
      this.canvasTxt.arc(235, 120, 5, 0, Math.PI * 2, true)
      this.canvasTxt.moveTo(270, 120)
      this.canvasTxt.arc(265, 120, 5, 0, Math.PI * 2, true)
      this.canvasTxt.stroke()
    },

    /**
     * arcR 角贝塞尔曲线弧度半径
     * startPoint 起始点（左上角弧度开始位置）
     * width 对话框边宽（除去弧度部分）
     */
    drawBezier(arcR = 40, startPoint = [350, 30], width = 80) {
      this.canvasTxt.fillText('二次贝塞尔', 380, 20)
      this.canvasTxt.beginPath()
      // startPoint 终点是下一个的起点，所以用一个存储
      this.canvasTxt.moveTo(startPoint[0], startPoint[1])
      // 左上角
      let cpPoint = [startPoint[0] - arcR, startPoint[1]]
      startPoint = [startPoint[0] - arcR, startPoint[1] + arcR]
      this.canvasTxt.quadraticCurveTo(cpPoint[0], cpPoint[1], startPoint[0], startPoint[1])
      startPoint = [startPoint[0], startPoint[1] + width]
      this.canvasTxt.lineTo(startPoint[0], startPoint[1])

      // 左下角
      cpPoint = [startPoint[0], startPoint[1] + arcR]
      startPoint = [startPoint[0] + arcR, startPoint[1] + arcR]
      this.canvasTxt.quadraticCurveTo(cpPoint[0], cpPoint[1], startPoint[0], startPoint[1])

      // 对话箭头
      cpPoint = [startPoint[0], startPoint[1] + arcR]
      startPoint = [startPoint[0] - arcR, startPoint[1] + arcR]
      this.canvasTxt.quadraticCurveTo(cpPoint[0], cpPoint[1], startPoint[0], startPoint[1])
      cpPoint = [startPoint[0] + 2 * arcR, startPoint[1]]
      startPoint = [startPoint[0] + 2 * arcR, startPoint[1] - arcR]
      this.canvasTxt.quadraticCurveTo(cpPoint[0], cpPoint[1], startPoint[0], startPoint[1])
      startPoint = [startPoint[0] + width - arcR, startPoint[1]]
      this.canvasTxt.lineTo(startPoint[0], startPoint[1])

      // 右下角
      cpPoint = [startPoint[0] + arcR, startPoint[1]]
      startPoint = [startPoint[0] + arcR, startPoint[1] - arcR]
      this.canvasTxt.quadraticCurveTo(cpPoint[0], cpPoint[1], startPoint[0], startPoint[1])
      startPoint = [startPoint[0], startPoint[1] - width]
      this.canvasTxt.lineTo(startPoint[0], startPoint[1])

      // 右上角
      cpPoint = [startPoint[0], startPoint[1] - arcR]
      startPoint = [startPoint[0] - arcR, startPoint[1] - arcR]
      this.canvasTxt.quadraticCurveTo(cpPoint[0], cpPoint[1], startPoint[0], startPoint[1])
      this.canvasTxt.closePath()
      this.canvasTxt.stroke()
    },

    drawHeart() {
      this.canvasTxt.fillText('三次贝塞尔', 600, 20)

      this.canvasTxt.beginPath()
      this.canvasTxt.moveTo(620, 75)
      this.canvasTxt.bezierCurveTo(620, 74, 615, 60, 585, 60)
      this.canvasTxt.bezierCurveTo(560, 60, 560, 110, 560, 110)
      this.canvasTxt.bezierCurveTo(560, 130, 580, 160, 620, 180)
      this.canvasTxt.bezierCurveTo(660, 160, 680, 130, 680, 110)
      this.canvasTxt.bezierCurveTo(680, 110, 680, 60, 655, 60)
      this.canvasTxt.bezierCurveTo(625, 60, 620, 74, 620, 75)
      this.canvasTxt.stroke()
    },

    // 调色板
    drawColorPalette() {
      this.canvasTxt.fillText('调色板', 800, 20)
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          this.canvasTxt.fillStyle = `rgb(${Math.floor(255 - 25.5 * i)},${Math.floor(255 - 25.5 * j)},0)`
          this.canvasTxt.fillRect(j * 25 + 710, i * 25 + 40, 25, 25)
        }
      }
    },

    drawByAlpha(x = 1000, y = 40, width = 120) {
      this.canvasTxt.fillText('透明色', x + width / 2, 20)
      this.canvasTxt.fillStyle = '#FD0'
      this.canvasTxt.fillRect(x, y, width, width)
      this.canvasTxt.fillStyle = '#6C0'
      this.canvasTxt.fillRect(x + width, y, width, width)
      this.canvasTxt.fillStyle = '#09F'
      this.canvasTxt.fillRect(x, y + width, width, width)
      this.canvasTxt.fillStyle = '#F30'
      this.canvasTxt.fillRect(x + width, y + width, width, width)

      this.canvasTxt.fillStyle = '#fff'
      this.canvasTxt.globalAlpha = 0.2
      for (let j = 1; j <= width / 10; j++) {
        this.canvasTxt.beginPath()
        this.canvasTxt.arc(x + width, y + width, j * 10, 0, 2 * Math.PI, true)
        this.canvasTxt.fill()
      }
      this.canvasTxt.globalAlpha = 1
    },

    // 蚂蚁线
    drawAntLine(x = 1280, y = 40, width = 100) {
      this.canvasTxt.fillText('蚂蚁线', x + width / 2, 20)
      let offset = 0
      this.antLineInterval = setInterval(() => {
        offset++
        (offset > 16) && (offset = 0)
        this.drawDashRect(x, y, width, offset)
      }, 50)
    },
    drawDashRect(x, y, width, offset) {
      this.canvasTxt.clearRect(x - 1, y - 1, width + 10, width + 10)
      this.canvasTxt.setLineDash([4, 4])
      this.canvasTxt.lineDashOffset = offset
      this.canvasTxt.strokeRect(x, y, width, width)
    },

    // 渐变
    drawGradient(x = 30, y = 370, width = 200) {
      this.canvasTxt.fillText('渐变', 50, 350)
      const lingrad = this.canvasTxt.createLinearGradient(x, y, x, y + width)
      lingrad.addColorStop(0, '#00ABEB')
      lingrad.addColorStop(0.5, '#fff')
      lingrad.addColorStop(0.5, '#26C000')
      lingrad.addColorStop(1, '#fff')

      const lingrad2 = this.canvasTxt.createLinearGradient(x + width / 4, y + width / 4, x + width / 4, y + width / 4 * 3)
      lingrad2.addColorStop(0, '#000')
      // lingrad2.addColorStop(1, '#fff')
      lingrad2.addColorStop(1, 'rgba(0,0,0,0)')

      this.canvasTxt.fillStyle = lingrad
      this.canvasTxt.strokeStyle = lingrad2
      this.canvasTxt.fillRect(x, y, width, width)
      this.canvasTxt.strokeRect(x + width / 4, y + width / 4, width / 2, width / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.graphic-page {
  width: 100%;
  height: calc(100% - 61px);

  .canvas-box {
    width: 100%;
    height: 100%;
    background-color: #888;
  }
}
</style>
