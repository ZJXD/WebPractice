<template>
  <div class="fang-page">
    <AppEchart :options="avgOption" class="avg-echart echart" />
    <AppEchart :options="esfOption" class="esf-echart echart" />
    <AppEchart :options="zuOption" class="zu-echart echart" />
    <div class="detail">
      *说明：每月1号、11号、21号更新数据
    </div>
    <el-select v-model="selectedCode" size="small" @change="dataFromChange">
      <el-option v-for="item in dataFromList" :key="item.id" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<script>
import AppEchart from '@/components/AppEcharts'
import fangData from '@/data/fang.js'

const AVG_OPTION = {
  title: {
    text: '均价折线图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['七贤郡', '劝学里', '大溪谷', '未来城', '和光尘樾', '融信澜天', '和昌府']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: []
  },
  yAxis: {
    type: 'value',
    min: 23000
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
}

export default {
  components: { AppEchart },
  data() {
    return {
      avgOption: null,
      esfOption: null,
      zuOption: null,
      dataFromList: [
        { id: 1, name: '安居客', code: 'anjukeData' },
        { id: 2, name: '链家', code: 'lianjiaData' }
      ],
      selectedCode: 'anjukeData'
    }
  },
  mounted() {
    this.getChartData()
  },
  methods: {
    getChartData() {
      const communityList = fangData.community
      const tempData = fangData[this.selectedCode]
      const avgSeriesDatas = []
      const esfSeriesDatas = []
      const zuSeriesDatas = []
      let min = 100000
      communityList.map(community => {
        const communityData = {
          name: community.name,
          type: 'line',
          data: []
        }
        const communityCountData = {
          name: community.name,
          type: 'line',
          data: []
        }
        const communityZuData = {
          name: community.name,
          type: 'line',
          data: []
        }
        tempData.map(item => {
          const timeData = item.data.find(d => d.communityId === community.id)
          if (timeData) {
            communityData.data.push(timeData.avg_price)
            communityCountData.data.push(timeData.fang_count)
            communityZuData.data.push(timeData.zu_cunt)
            timeData.avg_price < min && (min = timeData.avg_price)
          } else {
            communityData.data.push(null)
            communityCountData.data.push(null)
            communityZuData.data.push(null)
          }
        })

        avgSeriesDatas.push(communityData)
        esfSeriesDatas.push(communityCountData)
        zuSeriesDatas.push(communityZuData)
      })

      const timeList = tempData.map(time => time.time)

      const tempAvgOption = JSON.parse(JSON.stringify(AVG_OPTION))
      tempAvgOption.xAxis.data = timeList
      tempAvgOption.series = avgSeriesDatas
      tempAvgOption.yAxis.min = min - 1000
      this.avgOption = tempAvgOption

      const tempEsdOption = JSON.parse(JSON.stringify(AVG_OPTION))
      tempEsdOption.title.text = '二手房数量折线图'
      tempEsdOption.xAxis.data = timeList
      tempEsdOption.series = esfSeriesDatas
      tempEsdOption.yAxis.min = 0
      this.esfOption = tempEsdOption

      const tempZuOption = JSON.parse(JSON.stringify(AVG_OPTION))
      tempZuOption.title.text = '出租房数量折线图'
      tempZuOption.xAxis.data = timeList
      tempZuOption.series = zuSeriesDatas
      tempZuOption.yAxis.min = 0
      this.zuOption = tempZuOption
    },
    dataFromChange() {
      this.getChartData()
    }
  }
}
</script>

<style lang="scss" scoped>
.fang-page {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .echart {
    width: 45%;
    height: 40%;
  }

  .detail {
    color: #aaa;
  }
}
</style>
