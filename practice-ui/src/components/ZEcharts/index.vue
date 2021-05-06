<template>
  <div ref="echart" class="app-echarts" />
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'AppEcharts',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler(newVal) {
        if (newVal) {
          this.setOptions(newVal)
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.echart)
    this.setOptions(this.options)
    window.resizeCallbackList.push(() => {
      this.chart && this.chart.resize()
    })
  },
  beforeDestroy() {
    this.chart && this.chart.dispose()
  },
  methods: {
    setOptions(options) {
      if (options && this.chart) {
        this.chart.setOption(options)
        this.chart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-echarts {
  width: 100%;
  height: 100%;
}
</style>
