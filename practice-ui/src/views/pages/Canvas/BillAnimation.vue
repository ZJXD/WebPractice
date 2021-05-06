<template>
  <div ref="canvasPar" class="bill-page">
    <canvas ref="canvasEle" class="canvas-box" @mouseover="onMouseOver" @mouseout="onMouseOut" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      canvasTxt: null,
      fream: null,
      x: 100,
      y: 100,
      vx: 5,
      vy: 2
    }
  },
  mounted() {
    this.canvas = this.$refs.canvasEle
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight

    this.canvasTxt = this.canvas.getContext('2d')
    this.drawBill()
  },
  methods: {
    drawBill() {
      this.canvasTxt.fillStyle = 'blue'
      this.canvasTxt.beginPath()
      this.canvasTxt.arc(this.x, this.y, 30, 0, Math.PI * 2, true)
      this.canvasTxt.closePath()
      this.canvasTxt.fill()
    },

    moveBill() {
      // 用半透明的来实现长尾效果
      this.canvasTxt.fillStyle = 'rgba(128,128,128,0.3)'
      this.canvasTxt.fillRect(0, 0, this.canvas.width, this.canvas.height)
      // this.canvasTxt.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawBill()
      this.x += this.vx
      this.y += this.vy
      if (this.x > this.canvas.width || this.x < 0) {
        this.vx = -this.vx
      }
      if (this.y > this.canvas.height || this.y < 0) {
        this.vy = -this.vy
      }
      this.fream = requestAnimationFrame(this.moveBill)
    },

    onMouseOver() {
      this.fream = requestAnimationFrame(this.moveBill)
    },

    onMouseOut() {
      cancelAnimationFrame(this.fream)
    }
  }
}
</script>

<style lang="scss" scoped>
.bill-page {
  width: 100%;

  .canvas-box {
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.3);
  }
}
</style>
