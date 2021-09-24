<template>
  <div class="p-layout">
    <!--顶部 navbar-->
    <navBar></navBar>
    <!--下面主体-->
    <div class="bottom-main"
      :class="$route.path==='/templateManage/editTemp'?'no-padding':null"
    >
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
<!--        <keep-alive :max="10">
          <router-view v-if="$route.meta.keepAlive"></router-view>
          <router-view v-if="!$route.meta.keepAlive" :key="new Date().getTime()"></router-view>
        </keep-alive>-->
      </transition>
    </div>
  </div>
</template>
<script>
import navBar from '@/layout/components/navBar.vue'
export default {
  name: 'layout',
  components: {
    navBar,
  },
  data() {
    return {
    }
  },
  created() {
    //console.log(30, this.$route.path)
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.p-layout {
  display: flex;
  flex-direction: column;
  /*height: 100vh;
  overflow-x: hidden;*/
  min-width: 800PX!important;
  overflow-y: auto;
  box-sizing: border-box;
  align-items: stretch;
  width: 100%;
  .bottom-main{
    border: solid 1px red;
    box-sizing: border-box;
    //height: calc(100% - 60px);
    width: 100%;
    height: 100%;
    margin-top: 60px;
    padding: 30px 50px;
  }
  .no-padding{
    padding: 0;
  }
}
</style>
