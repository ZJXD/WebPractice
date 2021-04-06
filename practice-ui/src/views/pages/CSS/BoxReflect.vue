<template>
  <div class="box-reflect-com main-contariner-content">
    <div class="btn-ex">
      <a v-for="item in btnList" :key="item.id" href="#" :style="{'--customColor':item.color}">{{ item.name }}</a>
    </div>
    <div class="g-wrap1">
      <div class="g-wrap2">
        <div class="g-wrap3">
          <div class="g-wrap4" />
        </div>
      </div>
    </div>
    <div class="cir-box">
      <div class="c-wrap1">
        <div class="c-wrap2">
          <div class="c-wrap3" />
        </div>
      </div>
    </div>
    <div class="pic-ex">
      <!-- 舞台层 -->
      <div class="stage">
        <!-- 控制层 -->
        <div class="control">
          <div class="imgWrap">
            <div v-for="img in picList" :key="img.id" class="img" :class="'img'+img.id">
              <img :src="img.src" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>参考自Coco博客：<a href="https://www.cnblogs.com/coco1s/p/14472987.html" target="_blank">巧用 -webkit-box-reflect 倒影实现各类动效</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnList: [
        { id: 1, name: 'ZHT', color: '#0ebefe' },
        { id: 2, name: 'ZHT', color: '#fe7c3b' },
        { id: 3, name: 'ZHT', color: '#3bc90e' },
        { id: 5, name: 'ZHT', color: '#ff72ff' }
      ],
      picList: [
        { id: 1, src: './image/css/g1.jpg' },
        { id: 2, src: './image/css/g2.jpg' },
        { id: 3, src: './image/css/g3.jpg' },
        { id: 4, src: './image/css/g4.jpg' },
        { id: 5, src: './image/css/g5.jpg' },
        { id: 6, src: './image/css/g6.jpg' },
        { id: 7, src: './image/css/g7.jpg' },
        { id: 8, src: './image/css/g8.jpg' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box-reflect-com {
  display: flex;
  flex-wrap: wrap;
  background-color: #000;

  .btn-ex {
    width: 700px;
    height: 200px;
    padding: 35px 0;
    display: flex;
    justify-content: space-around;

    a {
      position: relative;
      width: 125px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      color: var(--customColor);
      font-size: 18px;
      border-radius: 10px;
      transition: 0.3s;
      -webkit-box-reflect: below 10px
        linear-gradient(transparent, rgba(0, 0, 0, 0.5));
      z-index: 0;

      &:hover {
        font-size: 20px;
        background-color: var(--customColor);
        color: #fff;
        box-shadow: 0 0 15px 0 var(--customColor);

        &::after,
        &::before {
          background-color: var(--customColor);
          transition: 0.3s;
        }
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 150%;
        transform: translate(-50%, -50%);
        background-color: var(--customColor);
        transform-origin: right bottom;
        animation: rotats 2s linear infinite;
        z-index: -2;
      }

      &::after {
        content: '';
        position: absolute;
        left: 2px;
        top: 2px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background-color: #000;
        border-radius: 10px;
        z-index: -1;
      }
    }

    @keyframes rotats {
      100% {
        transform: translate(-50%, -50%) rotate(1turn);
      }
    }
  }

  .pic-ex {
    width: 100%;

    .stage {
      position: relative;
      width: 800px;
      height: 240px;
      margin: 20px auto;
      perspective: 2000px;
      transform-style: preserve-3d;
      -webkit-box-reflect: below 10px
        linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    }

    .control {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transform: translateZ(-2000px) rotateY(50deg) rotateZ(0deg);
      animation: rotatePic 30s linear infinite;
    }

    @keyframes rotatePic {
      from {
        transform: translateZ(-2000px) rotateY(0deg);
      }

      50% {
        transform: translateZ(-2000px) rotateY(-360deg);
      }

      to {
        transform: translateZ(-2000px) rotateY(-720deg);
      }
    }

    .imgWrap {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 400px;
      height: 400px;
      transform: translate(-50%, -50%);
      transform-style: preserve-3d;

      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 500px;
        height: 400px;
        line-height: 400px;
        text-align: center;
        font-size: 120px;
        transform-style: preserve-3d;
        transform-origin: 50% 50% 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      @for $i from 1 through 8 {
        .img#{$i} {
          // rotateY 和 translateZ 先后顺序有影响
          transform: rotateY(35 + $i * 45deg) translateZ(650px);
        }
      }
    }
  }

  .g-wrap1 {
    margin: 200px 100px 0 200px;
    -webkit-box-reflect: above 0;
    .g-wrap2 {
      -webkit-box-reflect: left 0;
      .g-wrap3 {
        -webkit-box-reflect: below 0;
        .g-wrap4 {
          width: 100px;
          height: 100px;
          background-image: radial-gradient(
              circle at 0 0,
              #02a0ba 30%,
              transparent 30%,
              transparent 40%,
              #6b73ff 40%,
              #6b73ff 50%,
              transparent 50%
            ),
            radial-gradient(
              circle at 100% 100%,
              #02a0ba 10%,
              transparent 10%,
              transparent 30%,
              #6b73ff 30%,
              #6b73ff 40%,
              transparent 40%
            );
          -webkit-box-reflect: right 0;
        }
      }
    }
  }

  .cir-box {
    .c-wrap1 {
      -webkit-box-reflect: below;
    }
    .c-wrap2 {
      -webkit-box-reflect: below;
    }
    .c-wrap3 {
      width: 100px;
      height: 100px;
      background-image: radial-gradient(
          circle at 100% 0,
          transparent 69%,
          #fff 69%,
          #fff 70%,
          transparent 70%
        ),
        radial-gradient(
          circle at 0 100%,
          transparent 69%,
          #fff 69%,
          #fff 70%,
          transparent 70%
        );
      // transform: rotateZ(10deg);
      // transform-origin: right bottom;
      -webkit-box-reflect: right 0;
    }
  }
}
</style>
