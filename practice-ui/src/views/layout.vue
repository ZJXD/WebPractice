<template>
  <el-container>
    <el-header>
      <div class="app-header">
        <h2 class="logo">前端问题集锦</h2>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {}
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
</style>
