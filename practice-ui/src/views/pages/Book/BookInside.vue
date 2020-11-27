<template>
  <div class="book-inside">
    <i class="iconfont left">&#xe613;</i>
    <i class="iconfont right">&#xe614;</i>
    <i class="iconfont close" @click="onClose">&#xe611;</i>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClose() {
      this.$parent.showInside = false
      this.$parent.insideState = 2
      this.$parent.openBookId = null
    }
  }
}
</script>

<style lang="scss" scoped>
.book-inside {
  position: fixed;
  left: 0;
  top: 90px;
  width: 100vw;
  height: calc(100vh - 130px);
  background-color: #fff;
  opacity: 0;
  z-index: 11;

  border: solid #009bdb;
  border-width: 3px 10px 3px 10px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(
      to right,
      #dddddd 33.33%,
      #f0f0f0 33.33%,
      #f0f0f0 66.66%,
      white 66.66%
    );
    background-size: 3px 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  .iconfont {
    position: absolute;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
    color: rgba(51, 51, 51, 0.4);
    background-color: rgba(221, 221, 221, 0.7);
    font-size: 28px;
    cursor: pointer;

    &:hover {
      color: rgba(51, 51, 51, 0.7);
      background-color: rgba(221, 221, 221, 1);
    }
  }
  .left {
    left: 20px;
    top: 50%;
  }
  .right {
    right: 20px;
    top: 50%;
  }
  .close {
    top: 10px;
    right: 20px;
  }
}
</style>
