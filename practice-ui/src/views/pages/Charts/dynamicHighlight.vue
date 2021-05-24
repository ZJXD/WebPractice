<template>
  <div class="dynamic-com">
    <div class="pie-box">
      <ZEcharts ref="pieChart" :options="pieOptions" />
    </div>
  </div>
</template>

<script>
import ZEcharts from '@/components/ZEcharts'

const PIE_OPTIONS = {
  grid: {
    left: 10,
    top: 10,
    right: 10,
    bottom: 10,
    containLabel: true
  },
  series: [
    {
      type: 'pie',
      name: '动态高亮',
      radius: ['50%', '85%'],
      label: { show: false, position: 'center' },
      labelLine: { show: false },
      emphasis: {
        scaleSize: 20,
        label: { show: true, fontSize: 20 }
      },
      data: [
        { value: '20', name: '设备1' },
        { value: '30', name: '设备2' },
        { value: '40', name: '设备3' },
        { value: '50', name: '设备4' },
        { value: '35', name: '设备5' }
      ]
    }
  ]
}

export default {
  components: { ZEcharts },
  data() {
    return {
      pieOptions: PIE_OPTIONS,
      highlightInterval: null,
      pieChart: null,
      pieDataLength: 5,
      higIndex: 0
    }
  },
  mounted() {
    this.pieChart = this.$refs.pieChart.chart
    this.intervalHandler()
    // 绑定 mouseover 事件
    this.pieChart.on('mouseover', (params) => {
      clearInterval(this.highlightInterval)

      // 清除高亮（每次高亮前必须重复该操作，否则会叠加）
      this.pieChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      })

      this.pieChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      })

      // 鼠标移出后从该处继续高亮
      this.higIndex = params.dataIndex
    })

    // 绑定 mouseout 事件
    this.pieChart.on('mouseout', (params) => {
      this.intervalHandler()
    })
  },
  beforeDestroy() {
    this.highlightInterval && clearInterval(this.highlightInterval)
  },
  methods: {
    intervalHandler() {
      this.pieChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      })

      this.pieChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: this.higIndex
      })

      this.highlightInterval = setInterval(() => {
        this.pieChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0
        })

        this.pieDataLength === this.higIndex + 1 ? (this.higIndex = 0) : (this.higIndex++)

        this.pieChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: this.higIndex
        })
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.dynamic-com {
  width: 100%;

  .pie-box {
    width: 400px;
    height: 400px;
  }
}
</style>
