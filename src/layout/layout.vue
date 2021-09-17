<template>
  <div class="p-layout">
    <!--顶部 navbar-->
    <navBar></navBar>
    <!--下面主体-->
    <div class="bottom-main">
      <transition name="fade-transform" mode="out-in">
<!--        <keep-alive :max="10">-->
          <router-view></router-view>
<!--          <router-view v-if="$route.meta.keepAlive"></router-view>
          <router-view v-if="!$route.meta.keepAlive" :key="new Date().getTime()"></router-view>-->
<!--        </keep-alive>-->
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
    height: calc(100% - 70px);
    padding: 30px 50px;
  }
}
</style>
