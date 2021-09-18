<template>
  <div class="global-no-data">
    <i class="iconfont">&#xe618;</i>
    <span :style="{fontSize: size+'px'}">{{label}}</span>
  </div>
</template>
<script>
export default {
  props: {
    label: {type: String, default: '暂无数据'},
    size: {type: String, default: '26'}
  },
  name: '',
  components: {},
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.global-no-data {
  width: 100%;
  height: 100%;
  @include vertical-center;
  flex-direction: column;
  color: $theme;
  i{
    font-size: 60px;
  }
  span{
    margin-top: 6px;
    font-size: 26px;
    color: #999999;
  }
}
</style>
