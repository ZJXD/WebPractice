<template>
  <div ref="canvasPar" class="panorama-page">
    <canvas ref="canvasEle" class="canvas-box" />
  </div>
</template>

<script>
const CanvasWidth = 800
const CanvasHeight = 200
const Speed = 30
const Scale = 1.05
const Y = -4.5
const DX = 0.75

export default {
  data() {
    return {
      canvasTxt: null,
      img: null,
      imgWidth: 0,
      imgHeight: 0,
      xOffset: 0,
      clearX: 0,
      clearY: 0,
      interval: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvasEle
    canvas.width = this.$refs.canvasPar.offsetWidth
    canvas.height = this.$refs.canvasPar.offsetHeight

    this.canvasTxt = canvas.getContext('2d')

    this.img = new Image()
    this.img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg'
    this.img.onload = () => {
      this.imgWidth = this.img.width * Scale
      this.imgHeight = this.img.height * Scale

      if (this.imgWidth > CanvasWidth) {
        this.xOffset = CanvasWidth - this.imgWidth
        this.clearX = this.imgWidth
      } else {
        this.clearX = CanvasWidth
      }

      this.clearY = Math.max(this.imgHeight, CanvasHeight)

      this.interval = setInterval(this.drawPic, Speed)
    }
  },
  methods: {
    drawPic() {
      this.canvasTxt.clearRect(0, 0, this.clearX, this.clearY)

      if (this.imgWidth <= CanvasWidth) {
        if (this.xOffset > CanvasWidth) {
          this.xOffset -= this.imgWidth
        }

        if (this.xOffset > 0) {
          this.canvasTxt.drawImage(this.img, this.xOffset - this.imgWidth, Y, this.imgWidth, this.imgHeight)
        }

        if (this.xOffset - this.imgWidth > 0) {
          this.canvasTxt.drawImage(this.img, this.xOffset - this.imgWidth * 2, Y, this.imgWidth, this.imgHeight)
        }
      } else {
        if (this.xOffset > CanvasWidth) {
          this.xOffset = CanvasWidth - this.imgWidth
        }

        if (this.xOffset > (CanvasWidth - this.imgWidth)) {
          this.canvasTxt.drawImage(this.img, this.xOffset - this.imgWidth + 1, Y, this.imgWidth, this.imgHeight)
        }
      }

      this.canvasTxt.drawImage(this.img, this.xOffset, Y, this.imgWidth, this.imgHeight)

      this.xOffset += DX
    }
  }
}
</script>

<style lang="scss" scoped>
.panorama-page {
  // width: 100%;
  width: 800px;

  .canvas-box {
    width: 100%;
    height: 100%;
    // background-color: #888;
  }
}
</style>
