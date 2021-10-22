<template>
  <div class="css-page">
    <el-menu class="page-menu-box" :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="menuSelected">
      <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.code">
        <template slot="title">
          <i class="iconfont" v-html="menu.icon" />
          <span>{{ menu.name }}</span>
        </template>
      </el-menu-item>
    </el-menu>
    <div class="page-right-content">
      <h3>CSS 示例-{{ comName }}</h3>
      <component :is="curComponents" class="content-container" />
    </div>
  </div>
</template>

<script>
import BoxReflect from './BoxReflect'
import TextCSS from './TextCSS.vue'
import SingleDIV from './SingleDIV'
import DropShadow from './DropShadow.vue'

export default {
  components: { BoxReflect, TextCSS, SingleDIV, DropShadow },
  data() {
    return {
      menuList: [
        { id: 1, code: '1', name: '倒影', icon: '&#xe618;', component: 'BoxReflect' },
        { id: 2, code: '2', name: '文字装饰', icon: '&#xe7a3;', component: 'TextCSS' },
        { id: 3, code: '3', name: 'Single DIV', icon: '&#xe666;', component: 'SingleDIV' },
        { id: 4, code: '4', name: 'DropShadow', icon: '&#xe666;', component: 'DropShadow' }
      ],
      activeIndex: '1',
      comName: '倒影',
      curComponents: 'BoxReflect'
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
.css-page {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
}
</style>
