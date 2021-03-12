<template>
  <el-container>
    <el-header class="app-header">
      <h2 class="title">
        前端集锦
      </h2>

      <!--中间导航列表-->
      <dl class="nav_list">
        <dt v-for="item in navList" :key="item.id" class="nav-item" :class="activeMenu===item.routerLink?'active':''" @click="changePage(item.routerLink)">
          {{ item.name }}
        </dt>
      </dl>
    </el-header>
    <el-main class="app-main">
      <router-view />
    </el-main>
    <el-footer class="app-footer">
      <span>Copyright © {{ currentYear }} ZHT</span>
      <span>Powered by Vue Element On {{ systemOS }}</span>
    </el-footer>
  </el-container>
</template>

<script>
import { getOS } from '@/utils/system'
export default {
  name: 'FirstPage',
  data() {
    const activeMenu = this.$route.matched[1].path
    return {
      navList: [{
        id: 1,
        name: '首页',
        routerLink: '/welcome'
      }, {
        id: 2,
        name: '示例一',
        routerLink: '/firstPage'
      }, {
        id: 3,
        name: 'CSS',
        routerLink: '/css'
      }, {
        id: 4,
        name: '动画',
        routerLink: '/animation'
      }, {
        id: 5,
        name: 'Canvas',
        routerLink: '/canvas'
      }, {
        id: 6,
        name: 'Book',
        routerLink: '/bookpre'
      }, {
        id: 7,
        name: 'Fang',
        routerLink: '/fang'
      }
      ],
      activeMenu: activeMenu,
      currentYear: '',
      systemOS: ''
    }
  },
  watch: {
    $route() {
      this.activeMenu = this.$route.matched[1].path
    }
  },
  created() {
    this.currentYear = new Date().getFullYear()
    this.systemOS = getOS()
  },
  methods: {
    changePage(path) {
      this.activeMenu = path
      this.$router.push(path)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-header {
  position: relative;
  height: 90px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2e3444;

  .title {
    font-size: 2rem;
    color: rgb(48, 128, 254);
  }

  .nav_list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.25rem;
    font-weight: 400;
    color: rgb(48, 128, 254);
    .nav-item {
      width: 135px;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      cursor: pointer;
      &.active {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }

  .logo {
    display: block;
    margin: 0 20px 0 10px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(48, 128, 254);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.app-main {
  padding: 0;
  background-color: #fff;
}

.app-footer {
  height: 40px !important;
  line-height: 40px;
  font-size: 12px;
  color: #888;

  span {
    margin-right: 20px;
  }
}
</style>
