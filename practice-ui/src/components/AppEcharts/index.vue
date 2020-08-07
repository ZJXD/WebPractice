<template>
  <div class="app-echarts" ref="echart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name:'appEcharts',
  props:{
    options:{
      type:Object,
      defaule:()=>{}
    }
  },
  data(){
    return{
      chart: null
    }
  },
  watch:{
    options:{
      handle(newVal){
        this.setOptions(newVal)
      },
      immediate:true,
      deep:true
    }
  },
  mounted(){
    this.chart = echarts.init(this.$refs.echart)
    this.setOptions(this.options)
    window.onresize = ()=>{
      this.chart && this.chart.resize()
    }
  },
  methods:{
    setOptions(options){
      if(options&& this.chart){
        this.chart.setOptions(options)
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
