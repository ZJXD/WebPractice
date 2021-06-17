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
      chart: null,
      chartSymbol: null
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

    this.chartSymbol = Symbol('chart')
    window.resizeCallbackList.push({ id: this.chartSymbol, fun: this.chart.resize })
    window.resizeCallbackList.push(() => {
      this.chart && this.chart.resize()
    })
  },
  beforeDestroy() {
    const index = window.resizeCallbackList.indexOf({ id: this.chartSymbol, fun: this.chart.resize })
    window.resizeCallbackList.splice(index, 1)
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
