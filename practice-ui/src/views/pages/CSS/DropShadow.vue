<template>
  <div class="drop-shadow-com main-contariner-content">
    <div class="love">
      <svg>
        <path class="line" d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" />
      </svg>
      <svg>
        <path class="line line2" d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" />
      </svg>
    </div>

    <div class="loading" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.drop-shadow-com {
  background: #000;
  display: flex;

  .love {
    position: relative;
    width: 600px;
    height: 400px;

    svg {
      position: absolute;
      left: 0;
      top: 0;
      width: 600px;
      height: 400px;
    }

    .line {
      --colorA: #f24983;
      fill: none;
      stroke-width: 10;
      stroke-linejoin: round;
      stroke-linecap: round;
      stroke: #fff;
      stroke-dasharray: 328 600;
      animation: rotate 2s infinite linear;
      filter: drop-shadow(0 0 2px var(--colorA))
        drop-shadow(0 0 5px var(--colorA)) drop-shadow(0 0 10px var(--colorA))
        drop-shadow(0 0 15px var(--colorA)) drop-shadow(0 0 25px var(--colorA));
    }

    .line2 {
      animation: rotate 2s infinite -1s linear;
      --colorA: #37c11f;
    }

    @keyframes rotate {
      0% {
        stroke-dashoffset: 0;
      }

      100% {
        stroke-dashoffset: 928;
      }
    }
  }

  .loading {
    position: relative;
    width: 300px;
    height: 300px;
    margin-top: 60px;

    --colorB: #b78eff;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      border-top: 10px solid #fff;
      filter: drop-shadow(0 0 2px var(--colorB))
        drop-shadow(0 0 5px var(--colorB)) drop-shadow(0 0 10px var(--colorB))
        drop-shadow(0 0 10px var(--colorB));
      animation: loadingAni 3s infinite linear;
    }

    &::after {
      --colorB: #ffec41;
      animation-delay: -1.5s;
    }

    @keyframes loadingAni {
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
