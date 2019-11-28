<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html {
  height: 100%;
  font-size: 16px;
}

body {
  height: 100%;
  margin: 0;
}

header {
  height: 90px !important;
  background-color: #fff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  height: 100%;
  min-height: 768px;
}

/* 设置全局的 a 标签样式 */
a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit; /* 颜色继承 */
  text-decoration: none; /* 去掉下划线 */
}
</style>
