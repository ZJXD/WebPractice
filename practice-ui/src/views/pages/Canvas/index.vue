<template>
  <div class="canvas-page">
    <el-menu class="menu-box" :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="menuSelected">
      <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.code">
        <template slot="title">
          <i class="iconfont" v-html="menu.icon" />
          <span>{{ menu.name }}</span>
        </template>
      </el-menu-item>
    </el-menu>
    <div class="right-content">
      <h3>Canvas 示例</h3>
      <component :is="curComponents" />
    </div>
  </div>
</template>

<script>
import Signature from './signature'
import ShootingStar from './ShootingStar'

export default {
  components: { Signature, ShootingStar },
  data() {
    return {
      menuList: [
        { id: 1, code: '1', name: '电子签名', icon: '&#xe6ca;', component: 'Signature' },
        { id: 2, code: '2', name: '流星雨', icon: '&#xe62c;', component: 'ShootingStar' }
      ],
      activeIndex: '1',
      curComponents: 'Signature'
    }
  },
  methods: {
    menuSelected(index) {
      this.curComponents = this.menuList.find(item => item.code === index).component
    }
  }
}
</script>

<style lang="scss">
.canvas-page {
  .el-menu-item {
    text-align: left;
  }
}
</style>

<style lang="scss" scoped>
.canvas-page {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;

  .menu-box {
    width: 200px;
    height: 100%;

    .iconfont {
      font-size: 16px;
    }
  }

  .right-content {
    height: 100%;
    flex: 1;
    overflow-y: auto;

    h3 {
      margin: 18px 0;
    }
  }
}
</style>
