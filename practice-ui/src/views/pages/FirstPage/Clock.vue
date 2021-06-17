<template>
  <!-- 时钟组件 -->
  <div class="clock-page">
    <div class="clock">
      <span>12</span>
      <span>3</span>
      <span>6</span>
      <span>9</span>
      <div class="hour">
        <div class="hr" :style="{transform:'rotateZ('+hrTrans+'deg)'}" />
      </div>
      <div class="min">
        <div class="mn" :style="{transform:'rotateZ('+mnTrans+'deg)'}" />
      </div>
      <div class="sec">
        <div class="sc" :style="{transform:'rotateZ('+scTrans+'deg)'}" />
      </div>
    </div>
  </div>
</template>

<script>
const DEG = 6

export default {
  name: 'Clock',
  data() {
    return {
      curTime: new Date(),
      timer: null
    }
  },
  computed: {
    hrTrans() {
      return (this.curTime.getHours() + this.curTime.getMinutes() / 60) * 30
    },
    mnTrans() {
      return this.curTime.getMinutes() * DEG
    },
    scTrans() {
      return this.curTime.getSeconds() * DEG
    }
  },
  created() {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.curTime = new Date()
    }, 1000)
  },
  beforDestroy() {
    this.timer && clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.clock-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 350px;
  background-color: #091912;

  .clock {
    height: 100%;
    width: 100%;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #091912;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
      inset 0 -15px 15px rgba(255, 255, 255, 0.05),
      0 15px 15px rgba(0, 0, 0, 0.3), inset 0 15px 15px rgba(0, 0, 0, 0.3);

    &::before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: #fff;
      border-radius: 50%;
      z-index: 20;
    }

    span {
      font-size: 20px;
      position: absolute;
    }
    :nth-child(1) {
      top: 5px;
    }
    :nth-child(2) {
      right: 5px;
    }
    :nth-child(3) {
      bottom: 5px;
    }
    :nth-child(4) {
      left: 5px;
    }

    .hour,
    .min,
    .sec {
      position: absolute;
    }

    .hour,
    .hr {
      width: 160px;
      height: 160px;
    }

    .min,
    .mn {
      width: 190px;
      height: 190px;
    }

    .sec,
    .sc {
      width: 230px;
      height: 230px;
    }

    .hr,
    .mn,
    .sc {
      display: flex;
      justify-content: center;
    }

    .hr::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 80px;
      background-color: #ff105e;
      z-index: 1;
      border-radius: 6px 6px 0 0;
    }

    .mn::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 90px;
      background-color: #fff;
      z-index: 2;
      border-radius: 6px 6px 0 0;
    }

    .sc::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 150px;
      background-color: #fff;
      z-index: 3;
      border-radius: 6px 6px 0 0;
    }
  }
}
</style>
