<template>
  <div ref="canvasPar" class="sun-animation">
    <canvas ref="canvasEle" class="canvas-box" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasTxt: null,
      frame: null,
      sun: null,
      earth: null,
      moon: null
    }
  },
  mounted() {
    this.sun = new Image()
    this.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
    this.earth = new Image()
    this.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
    this.moon = new Image()
    this.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'

    const canvas = this.$refs.canvasEle
    canvas.width = this.$refs.canvasPar.offsetWidth
    canvas.height = this.$refs.canvasPar.offsetHeight
    this.canvasTxt = canvas.getContext('2d')
    this.canvasTxt.translate(canvas.width / 2 - 150, canvas.height / 2 - 150)

    this.frame = requestAnimationFrame(this.drawSun)
  },
  beforeDestroy() {
    this.frame && cancelAnimationFrame(this.frame)
  },
  methods: {
    drawSun() {
      this.canvasTxt.globalCompositeOperation = 'destination-over'
      this.canvasTxt.clearRect(0, 0, 300, 300)
      this.canvasTxt.fillStyle = 'rgba(0,0,0,0.4)'
      this.canvasTxt.strokeStyle = 'rgba(0,153,255,0.4)'

      this.canvasTxt.save()
      this.canvasTxt.translate(150, 150)

      const time = new Date()
      this.canvasTxt.rotate((2 * Math.PI / 60) * time.getSeconds() + (2 * Math.PI / 60000) * time.getMilliseconds())
      this.canvasTxt.translate(105, 0)
      // 地球阴影
      this.canvasTxt.fillRect(0, -12, 30, 24)
      this.canvasTxt.drawImage(this.earth, -12, -12, 24, 24)
      this.canvasTxt.save()

      this.canvasTxt.rotate((2 * Math.PI / 6) * time.getSeconds() + (2 * Math.PI / 6000) * time.getMilliseconds())
      this.canvasTxt.translate(0, 25)
      this.canvasTxt.drawImage(this.moon, -3.5, -3.5, 7, 7)

      // 这里为下面画太阳恢复位置
      this.canvasTxt.restore()
      this.canvasTxt.restore()

      // 地球轨迹
      this.canvasTxt.beginPath()
      this.canvasTxt.arc(150, 150, 105, 0, Math.PI * 2, true)
      this.canvasTxt.stroke()

      this.canvasTxt.drawImage(this.sun, 0, 0, 300, 300)

      this.frame = requestAnimationFrame(this.drawSun)
    }
  }
}
</script>

<style lang="scss" scoped>
.sun-animation {
  width: 100%;

  .canvas-box {
    width: 100%;
    height: 100%;
    // background-color: #888;
  }
}
</style>
