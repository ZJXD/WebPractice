<template>
  <div class="single-div-com main-contariner-content">
    <div class="heart" />
    <div class="taiji" />
    <div class="yun-box">
      <div class="yun" />
      <div class="rain" />
    </div>
    <div class="shield" />
    <div class="tape" />

    <p class="quote">
      参考自Coco博客：<a href="https://www.cnblogs.com/coco1s/p/14836075.html" target="_blank">Single DIV 绘图技巧</a>（使用单个 div 配合 CSS 实现上面效果）
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.single-div-com {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .heart {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 70px;
    background-color: rgba(255, 20, 147, 1);
    transform: rotate(45deg);

    &::before,
    &::after {
      position: absolute;
      content: '';
      left: -50%;
      top: 50%;
      width: 100%;
      height: 100%;
      transform: translateY(-50%);
      border-radius: 50%;
      background-color: rgba(255, 20, 147, 1);
    }

    &::after {
      left: 0;
      top: 0;
    }
  }

  .taiji {
    position: relative;
    width: 200px;
    height: 200px;
    background: linear-gradient(90deg, #000 50%, #fff 50%);
    box-shadow: 0 0 15px 5px #bbb;
    border-radius: 50%;

    &::before,
    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 50px;
      width: 100px;
      height: 100px;
      background: radial-gradient(#fff 0px, #fff 12px, #000 12px, #000 100%);
      border-radius: 50%;
    }

    &::after {
      top: 100px;
      background: radial-gradient(#000 0px, #000 12px, #fff 12px, #fff 100%);
    }
  }

  .yun-box {
    position: relative;
    width: 300px;
    height: 300px;
    margin-left: 30px;
    background-color: #bbb;

    .yun {
      position: absolute;
      left: 50px;
      top: 60px;
      width: 100px;
      height: 100px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 120px 0px 0 -10px #fff, 95px 20px 0 0px #fff,
        30px 30px 0 -10px #fff, 90px -20px 0 0px #fff, 40px -40px 0 0px #fff;
    }

    .rain {
      position: absolute;
      left: 150px;
      top: 120px;
      width: 3px;
      height: 6px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0) -10px 30px, rgba(0, 0, 0, 0) 40px 40px,
        rgba(0, 0, 0, 0.3) -50px 75px, rgba(0, 0, 0, 0.3) 55px 50px,
        rgba(0, 0, 0, 0.3) -18px 100px, rgba(0, 0, 0, 0.3) 12px 95px,
        rgba(0, 0, 0, 0.3) -31px 45px, rgba(0, 0, 0, 0.3) 30px 35px;
      animation: rainAni 1s infinite linear;
    }

    @keyframes rainAni {
      0% {
        box-shadow: rgba(0, 0, 0, 0) -10px 30px, rgba(0, 0, 0, 0) 40px 40px,
          rgba(0, 0, 0, 0.3) -50px 75px, rgba(0, 0, 0, 0.3) 55px 50px,
          rgba(0, 0, 0, 0.3) -18px 100px, rgba(0, 0, 0, 0.3) 12px 95px,
          rgba(0, 0, 0, 0.3) -31px 45px, rgba(0, 0, 0, 0.3) 30px 35px;
      }
      25% {
        box-shadow: rgba(0, 0, 0, 0.3) -10px 45px, rgba(0, 0, 0, 0.3) 40px 60px,
          rgba(0, 0, 0, 0.3) -50px 90px, rgba(0, 0, 0, 0.3) 55px 65px,
          rgba(0, 0, 0, 0) -18px 120px, rgba(0, 0, 0, 0) 12px 120px,
          rgba(0, 0, 0, 0.3) -31px 70px, rgba(0, 0, 0, 0.3) 30px 60px;
      }
      26% {
        box-shadow: rgba(0, 0, 0, 0.3) -10px 45px, rgba(0, 0, 0, 0.3) 40px 60px,
          rgba(0, 0, 0, 0.3) -50px 90px, rgba(0, 0, 0, 0.3) 55px 65px,
          rgba(0, 0, 0, 0) -18px 40px, rgba(0, 0, 0, 0) 12px 20px,
          rgba(0, 0, 0, 0.3) -31px 70px, rgba(0, 0, 0, 0.3) 30px 60px;
      }
      50% {
        box-shadow: rgba(0, 0, 0, 0.3) -10px 70px, rgba(0, 0, 0, 0.3) 40px 80px,
          rgba(0, 0, 0, 0) -50px 100px, rgba(0, 0, 0, 0.3) 55px 80px,
          rgba(0, 0, 0, 0.3) -18px 60px, rgba(0, 0, 0, 0.3) 12px 45px,
          rgba(0, 0, 0, 0.3) -31px 95px, rgba(0, 0, 0, 0.3) 30px 85px;
      }
      51% {
        box-shadow: rgba(0, 0, 0, 0.3) -10px 70px, rgba(0, 0, 0, 0.3) 40px 80px,
          rgba(0, 0, 0, 0) -50px 45px, rgba(0, 0, 0, 0.3) 55px 80px,
          rgba(0, 0, 0, 0.3) -18px 60px, rgba(0, 0, 0, 0.3) 12px 45px,
          rgba(0, 0, 0, 0.3) -31px 95px, rgba(0, 0, 0, 0.3) 30px 85px;
      }
      75% {
        box-shadow: rgba(0, 0, 0, 0.3) -10px 95px, rgba(0, 0, 0, 0.3) 40px 100px,
          rgba(0, 0, 0, 0.3) -50px 60px, rgba(0, 0, 0, 0) 55px 95px,
          rgba(0, 0, 0, 0.3) -18px 80px, rgba(0, 0, 0, 0.3) 12px 70px,
          rgba(0, 0, 0, 0) -31px 120px, rgba(0, 0, 0, 0) 30px 110px;
      }
      76% {
        box-shadow: rgba(0, 0, 0, 0.3) -10px 95px, rgba(0, 0, 0, 0.3) 40px 100px,
          rgba(0, 0, 0, 0.3) -50px 60px, rgba(0, 0, 0, 0) 55px 35px,
          rgba(0, 0, 0, 0.3) -18px 80px, rgba(0, 0, 0, 0.3) 12px 70px,
          rgba(0, 0, 0, 0) -31px 25px, rgba(0, 0, 0, 0) 30px 15px;
      }
      100% {
        box-shadow: rgba(0, 0, 0, 0) -10px 120px, rgba(0, 0, 0, 0) 40px 120px,
          rgba(0, 0, 0, 0.3) -50px 75px, rgba(0, 0, 0, 0.3) 55px 50px,
          rgba(0, 0, 0, 0.3) -18px 100px, rgba(0, 0, 0, 0.3) 12px 95px,
          rgba(0, 0, 0, 0.3) -31px 45px, rgba(0, 0, 0, 0.3) 30px 35px;
      }
    }
  }

  .shield {
    position: relative;
    width: 200px;
    height: 200px;
    margin-left: 30px;
    background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 35%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 65%
      ),
      linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0) 35%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 65%
      ),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 35%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0) 65%
      ),
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 35%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0) 65%
      ),
      radial-gradient(
        #0033b0 20%,
        #ce0021 20%,
        #ce0021 35%,
        #eee 35%,
        #eee 55%,
        #ce0021 55%
      );
    border-radius: 50%;

    &::before {
      content: '★';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      line-height: 47px;
      color: #fff;
      font-size: 55px;
    }
  }

  .tape {
    position: relative;
    width: 180px;
    height: 120px;
    margin-left: 30px;
    border-radius: 5px;
    box-shadow: -4px -4px 2px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
        to right,
        #444 10px,
        transparent 10px,
        transparent 170px,
        #444 170px
      ),
      linear-gradient(135deg, #444 20px, transparent 20px),
      linear-gradient(-135deg, #444 20px, transparent 20px),
      linear-gradient(
        to bottom,
        transparent 35px,
        #be0974 35px,
        #be0974 43px,
        #da6a57 43px,
        #da6a57 51px,
        #eebc31 51px,
        #eebc31 59px,
        #92a25b 59px,
        #92a25b 67px,
        #46a7c0 67px,
        #46a7c0 75px,
        transparent 75px
      ),
      linear-gradient(
        to bottom,
        transparent 10px,
        #f7f7f7 10px,
        #f7f7f7 85px,
        transparent 85px
      ),
      linear-gradient(to top, transparent 26px, #444 26px),
      linear-gradient(105deg, #444 70px, #333 70px, #333 73px, transparent 73px),
      linear-gradient(
        -105deg,
        #444 70px,
        #333 30px,
        #333 73px,
        transparent 73px
      ),
      linear-gradient(to top, #444 22px, #777 24px, #444 26px);

    &::after {
      position: absolute;
      left: 5px;
      top: 5px;
      content: '';
      width: 5px;
      height: 5px;
      background-color: #999;
      border-radius: 50%;
      box-shadow: 165px 0 0 #999, 0 105px 0 #999, 165px 105px 0 #999,
        55px 101px 0 1px #222, 68px 98px 0 1px #222, 98px 98px 0 1px #222,
        110px 101px 0 1px #222, 51px 38px 0 #444, 58px 46px 0 #444,
        51px 54px 0 #444, 43px 46px 0 #444, 51px 46px 0 6px #ccc,
        114px 38px 0 #444, 122px 46px 0 #444, 114px 54px 0 #444,
        106px 46px 0 #444, 114px 46px 0 6px #ccc;
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 41px;
      transform: translateX(-50%);
      width: 90px;
      height: 26px;
      background-color: #ccc;
      background-image: linear-gradient(
          to bottom,
          #444 5px,
          transparent 5px,
          transparent 21px,
          #444 21px
        ),
        linear-gradient(
          to right,
          #444 30px,
          transparent 30px,
          transparent 60px,
          #444 60px
        ),
        radial-gradient(circle at 10px 12px, #a0522d 32px, transparent 32px);
      border-radius: 30px;
    }
  }

  .quote {
    position: fixed;
    left: 210px;
    bottom: 40px;
    color: #999;
    text-align: left;
  }
}
</style>
