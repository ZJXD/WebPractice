<template>
  <div class="swipe-button-com main-contariner-content">
    <button class="btn">
      Swipe Next
      <span><i class="iconfont">&#xe601;</i></span>
    </button>
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
.swipe-button-com {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28272a;

  .btn {
    position: relative;
    width: 200px;
    height: 60px;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #fff, $alpha: 0.1);
    border-radius: 60px;
    color: rgba($color: #fff, $alpha: 0.5);
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-decoration: none;
    letter-spacing: 2px;
    border: none;
    border-top: 1px solid rgba($color: #fff, $alpha: 0.35);
    border-left: 1px solid rgba($color: #fff, $alpha: 0.35);
    transition: 0.5s;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 100%;
      background-color: rgba($color: #fff, $alpha: 0.5);
      z-index: 1;
      transform: translateX(-180px) skewX(30deg);
      transition: 0.75s ease-in-out;
    }

    &:hover {
      padding-left: 0px;
      padding-right: 40px;
      color: #fff;

      &::after {
        transform: translateX(180px) skewX(30deg);
      }

      span {
        left: calc(100% - 55px);
      }
    }

    span {
      position: absolute;
      left: 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1a191d;
      font-size: 18px;
      background-color: #04fe4d;
      transition: 0.5s ease-in-out;
    }
  }
}
</style>
