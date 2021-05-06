<template>
  <div class="charts-page">
    <el-menu class="page-menu-box" :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="menuSelected">
      <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.code">
        <template slot="title">
          <i class="iconfont" v-html="menu.icon" />
          <span>{{ menu.name }}</span>
        </template>
      </el-menu-item>
    </el-menu>
    <div class="page-right-content">
      <h3>图表示例-{{ comName }}</h3>
      <component :is="curComponents" class="content-container" />
    </div>
  </div>
</template>

<script>
import dynamicHighlight from './dynamicHighlight'

export default {
  components: { dynamicHighlight },
  data() {
    return {
      menuList: [
        { id: 1, code: '1', name: '动态高亮', icon: '&#xe615;', component: 'dynamicHighlight' }
      ],
      activeIndex: '1',
      comName: '动态高亮',
      curComponents: 'dynamicHighlight'
    }
  },
  methods: {
    menuSelected(index) {
      this.comName = this.menuList.find(item => item.code === index).name
      this.curComponents = this.menuList.find(item => item.code === index).component
    }
  }
}
</script>

<style lang="scss" scoped>
.charts-page {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
}
</style>
