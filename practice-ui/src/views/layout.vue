<template>
  <el-container>
    <el-header>
      <div class="app-header">
        <h2 class="title">前端问题集锦</h2>

        <!--中间导航列表-->
        <dl class="nav_list">
          <dt v-for="(item, index) in navList" :key="index" class="nav-item" :class="isActiveIndex===index?'active':''" @click="changePage(index)">
            <router-link :to="item.routerLink">
              {{ item.name }}
            </router-link>
          </dt>
        </dl>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer class="app-footer">
      Copyright © {{currentYear}} ZHT<br />
      Powered by Vue Element On {{systemOS}}
    </el-footer>
  </el-container>
</template>

<script>
import { getOS } from '@/utils/system'
export default {
  name: 'FirstPage',
  data() {
    return {
      navList: [{
        name: '首页',
        routerLink: '/welcome'
      }, {
        name: '示例一',
        routerLink: '/firstPage'
      }, {
        name: '示例二',
        routerLink: '/signature'
      }
      ],
      isActiveIndex: 0,
      currentYear: '',
      systemOS: ''
    }
  },
  created() {
    this.currentYear = new Date().getFullYear()
    this.systemOS = getOS()
  },
  methods: {
    changePage(index) {
      this.isActiveIndex = index
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
      overflow: hidden;
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

.app-footer {
  position: absolute;
  width: 100%;
  line-height: 25px;
  bottom: 0;
}
</style>
