<template>
  <div class="stard-gl">
    <canvas ref="canvas" class="canvas-box" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      glContext: null
    }
  },
  mounted() {
    const canvas = this.$refs.canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    this.glContext = canvas.getContext('webgl')
    // 两种方式都可以
    // this.glContext = canvas.getContext('experimental-webgl')

    // 用黑色清除整个区域
    this.glContext.clearColor(0, 0, 0, 1)
    // 用指定颜色清除缓冲区
    this.glContext.clear(this.glContext.COLOR_BUFFER_BIT)
  }
}
</script>

<style lang="scss" scoped>
.stard-gl {
  width: 100%;
  height: calc(100% - 61px);

  .canvas-box {
    width: 100%;
    height: 100%;
    background-color: #888;
  }
}
</style>
