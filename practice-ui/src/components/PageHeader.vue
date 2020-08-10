<template>
  <div class="app-navbar">
    <!-- logo -->
    <h2 class="logo">管理系统</h2>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: localStorage.username ? localStorage.username : '',
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/FedLogOut')
    },
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-navbar {
  position: relative;
  height: 60px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: block;
    // max-width: 180px;
    margin: 0 20px 0 10px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(48, 128, 254);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .users-func {
    padding: 10px;
    display: flex;
    flex-direction: row;

    a {
      font-size: 12px;
      color: #333;
      &:hover {
        color: #5584ff;
      }
    }

    &__link {
      padding: 0 10px;
      line-height: 40px;
    }

    .avatar-container {
      margin-left: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .user-icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 3px;
      }
      .avatar-wrapper {
        position: relative;
        margin: 0 15px 0 10px;
        cursor: pointer;
        font-size: 12px;
        .el-icon-caret-bottom {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
