<template>
  <div class="nav-menu"
  >
    <el-menu
        :default-active="'/'+$route.path.split('/')[1]"
        :router="true"
        mode="horizontal"
        @open="handleOpen"
        @close="handleClose">

      <el-menu-item :index="menu.path"
                    v-for="menu in menuList"
                    :key="menu.name"
      >
        <i class="iconfont" v-html="menu.meta.icon"></i>
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'sideBar',
  props: [],
  components: {},
  data() {
    return {
      menuList: []
    }
  },
  created() {
    this.initMenu()
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },

    initMenu() {
      let routerList = this.$router.getRoutes()
      console.log(46, routerList)
      //查找home路由的子路由，然后渲染出来
      this.menuList = routerList.filter(
          (i) => i.parent && i.parent.name === 'layout' && i.meta.isNavBar
      )
    }
  },
}
</script>
<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  width: 100%;
  background-color: $theme;
  box-sizing: border-box;
}
</style>

<style lang="scss">
.nav-menu{
  .el-menu{
    margin-left: 30px;
    border-right: none;
    background-color: $theme;
    z-index: 99;
    .el-menu-item{
      span{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        color: white;
        border-bottom: 0.125rem solid $theme;
      }
      &:hover{
        background-color: $theme;
        span{
          color: white;
          border-bottom: 0.125rem solid white;
        }
      }
      text-align: left;
      background-color: $theme!important;
      font-size: 16px;
      color: white;
      >i{
        margin-right: 6px;
      }
    }
    .is-active{
      background-color: $theme!important;
      span{
        border-bottom: 0.125rem solid white;
      }
      &:before{
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
      }
    }
  }
}
</style>
