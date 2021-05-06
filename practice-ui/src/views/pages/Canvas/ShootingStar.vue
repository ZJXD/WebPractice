<template>
  <div ref="canvasPar" class="star-page">
    <canvas ref="canvasEle" class="canvas-box" />
  </div>
</template>

<script>
import { MeteorShower } from '@/components/ShootingStar/index.js'

export default {
  data() {
    return {
      canvasTxt: null,
      star: null,
      frame: null,
      lastTime: null,
      stars: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvasEle
    // 这里设置的是 canvas 元素属性的 width 和 height
    // 如果不设置，默认 300*150 ，这里可能会和 CSS 设置的 width、height 不一致，这样就会变形
    canvas.height = this.$refs.canvasPar.offsetHeight
    canvas.width = this.$refs.canvasPar.offsetWidth

    this.canvasTxt = canvas.getContext('2d')
    this.stars = new MeteorShower(canvas, this.canvasTxt)
    this.stars.start()

    // this.star = new ShootingStar(new Crood(10, 10), new Crood(400, 400), 0.5, 200, () => {
    //   cancelAnimationFrame(this.frame)
    // })
    // this.tick()
  },
  beforeDestroy() {
    this.stars && this.stars.stopStarts()
  },
  methods: {
    tick() {
      const now = (new Date()).getTime()
      this.lastTime = now
      let delay = now - this.lastTime
      delay = delay > 500 ? 30 : (delay < 16 ? 16 : delay)
      this.lastTime = now
      this.frame = requestAnimationFrame(this.tick)

      this.canvasTxt.save()
      this.canvasTxt.fillStyle = 'rgba(0,0,0,0.2)'
      this.canvasTxt.fillRect(0, 0, this.$refs.canvasEle.width, this.$refs.canvasEle.height)
      this.canvasTxt.restore()
      if (this.star.passTime >= this.star.dur) {
        cancelAnimationFrame(this.frame)
      }
      this.star.draw(this.canvasTxt, delay)
    }
  }
}
</script>

<style lang="scss" scoped>
.star-page {
  width: 100%;
  background: url('../../../assets/images/nightSky1.jpg');
  background-attachment: fixed;
  background-position: bottom;
  background-size: 100% 100%;

  .canvas-box {
    width: 100%;
    height: 100%;
  }
}
</style>
