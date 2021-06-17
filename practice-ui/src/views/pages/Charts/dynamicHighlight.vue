<template>
  <div class="dynamic-com">
    <div class="pie-box">
      <ZEcharts ref="pieChart" :options="pieOptions" />
    </div>
    <div class="pie-box" style="width:700px;">
      <ZEcharts ref="heatMapChart" :options="heatMapOptions" />
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

const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p']
const days = ['Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday']

let data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]

data = data.map(function(item) {
  return [item[1], item[0], item[2] || '-']
})

const HEATMAP_OPTIONS = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    left: 100,
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 10,
    range: [0, 10],
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%'
  },
  series: [{
    name: 'Punch Card',
    type: 'heatmap',
    data: data,
    label: {
      show: true
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}

export default {
  components: { ZEcharts },
  data() {
    return {
      pieOptions: PIE_OPTIONS,
      highlightInterval: null,
      pieChart: null,
      pieDataLength: 5,
      higIndex: 0,

      heatMapChart: null,
      heatMapOptions: HEATMAP_OPTIONS
    }
  },
  mounted() {
    // 饼图
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

    // 热力图
    this.heatMapChart = this.$refs.heatMapChart.chart

    this.heatMapChart.on('mouseover', (params) => {
      this.heatMapOptions.visualMap.range = [params.data[2], params.data[2]]
    })

    this.heatMapChart.on('mouseout', (params) => {
      this.heatMapOptions.visualMap.range = [0, 10]
    })

    // 鼠标全局移出事件（移出当前图标）
    // 之所以用这个的原因
    //  1、heatmap 对 mouseout 监听不到，没有效果
    //  2、在移出图表后重置 visualMap range 是合理的
    this.heatMapChart.on('globalout', (params) => {
      this.heatMapOptions.visualMap.range = [0, 10]
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
  display: flex;

  .pie-box {
    width: 400px;
    height: 400px;
  }
}
</style>
