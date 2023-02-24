<template>
  <div class="fang-page p20">
    <ZEcharts :options="avgOption" class="avg-echart echart" />
    <ZEcharts :options="esfOption" class="esf-echart echart" />
    <ZEcharts :options="zuOption" class="zu-echart echart" />
    <div class="detail-box echart">
      <div class="remark">
        *说明：每月1号、11号、21号更新数据(202012月25号起一月一更)
        <el-select v-model="selectedCode" size="small" @change="dataFromChange">
          <el-option
            v-for="item in dataFromList"
            :key="item.id"
            :label="item.name"
            :value="item.code"
          />
        </el-select>
      </div>
      <div class="log-box">
        <div v-for="item in logDetail" :key="item.id" class="log-item">
          <div class="row">
            <label>时间：</label>
            <span>
              {{ item.time }}
            </span>
          </div>
          <div class="row">
            <label>内容：</label>
            <span>
              {{ item.detail }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZEcharts from '@/components/ZEcharts'
import fangData from '@/data/fang.js'
import Log from '@/data/fangLog.js'

const AVG_OPTION = {
  title: {
    text: '均价折线图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [
      '七贤郡',
      '劝学里',
      '大溪谷',
      '未来城',
      '和光尘樾',
      '融信澜天',
      '和昌府',
      '缦云坊'
    ]
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
  dataZoom: [
    {
      id: 'dataZoomX',
      // type: 'slider',
      type: 'inside',
      xAxisIndex: [0]
    }
  ],
  series: [
    {
      name: '',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
}

export default {
  components: { ZEcharts },
  data() {
    return {
      avgOption: null,
      esfOption: null,
      zuOption: null,
      dataFromList: [
        { id: 1, name: '安居客', code: 'anjukeData' },
        { id: 2, name: '链家', code: 'lianjiaData' }
      ],
      selectedCode: 'anjukeData',
      logDetail: Log
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
      communityList.map((community) => {
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
        tempData.map((item) => {
          const timeData = item.data.find((d) => d.communityId === community.id)
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

      const timeList = tempData.map((time) => time.time)

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
    width: 46%;
    height: 45%;
  }

  .detail-box {
    .remark {
      display: flex;
      justify-content: space-around;
      color: #aaa;
    }

    .log-box {
      height: 100%;
      overflow-y: auto;
      font-size: 14px;

      .row {
        display: flex;
        text-align: left;
        &:first-child span {
          color: #f00;
        }
      }
      label {
        flex: 0 1 60px;
        display: inline-block;
        text-align: right;
      }
      span {
        flex: 1;
        display: inline-block;
      }
    }
  }
}
</style>
