<template>
  <div class="canvas-page">
    <el-menu class="page-menu-box" :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="menuSelected">
      <el-menu-item v-for="menu in menuList" :key="menu.id" :index="menu.code">
        <template slot="title">
          <i class="iconfont" v-html="menu.icon" />
          <span>{{ menu.name }}</span>
        </template>
      </el-menu-item>
    </el-menu>
    <div class="page-right-content">
      <h3>Canvas 示例-{{ comName }}</h3>
      <component :is="curComponents" class="content-container" />
    </div>
  </div>
</template>

<script>
import Signature from './signature'
import ShootingStar from './ShootingStar'
import BasicGraphic from './BasicGraphic'
import SunAnimation from './SunAnimation'
import Panorama from './Panorama'
import BillAnimation from './BillAnimation'

// WebGL
import StardWebGL from './WebGL/StardWebGL'
import WebGL3D from './WebGL/WebGL3D'
import WebGL3DTexture from './WebGL/WebGL3DTexture'
import WebGLMouseMove from './WebGL/WebGLMouseMove'

export default {
  components: { Signature, ShootingStar, BasicGraphic, SunAnimation, Panorama, BillAnimation, StardWebGL, WebGL3D, WebGL3DTexture, WebGLMouseMove },
  data() {
    return {
      menuList: [
        { id: 1, code: '1', name: '电子签名', icon: '&#xe6ca;', component: 'Signature' },
        { id: 2, code: '2', name: '流星雨', icon: '&#xe62c;', component: 'ShootingStar' },
        { id: 3, code: '3', name: '基础图形', icon: '&#xe67b;', component: 'BasicGraphic' },
        { id: 4, code: '4', name: '太阳系', icon: '&#xe66f;', component: 'SunAnimation' },
        { id: 5, code: '5', name: '全景图', icon: '&#xe60c;', component: 'Panorama' },
        { id: 6, code: '6', name: '弹球', icon: '&#xe668;', component: 'BillAnimation' },
        { id: 7, code: '7', name: 'WebGL 开始', icon: '&#xe60a;', component: 'StardWebGL' },
        { id: 8, code: '8', name: 'WebGL3D', icon: '&#xe624;', component: 'WebGL3D' },
        { id: 9, code: '9', name: '纹理', icon: '&#xe82c;', component: 'WebGL3DTexture' },
        { id: 10, code: '10', name: '鼠标移动', icon: '&#xe67f;', component: 'WebGLMouseMove' }
      ],
      activeIndex: '1',
      comName: '电子签名',
      curComponents: 'Signature'
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
.canvas-page {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
}
</style>
