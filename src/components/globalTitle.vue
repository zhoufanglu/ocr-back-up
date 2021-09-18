<template>
  <div class="p-global-title">
    <span>{{label}}</span>
  </div>
</template>
<script>
export default {
  name: 'global-title',
  props: ['label'],
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
.p-global-title {
  text-align: left;
  >span{
    font-size: 16px;
    height: 18px;
    color: $theme;
    &:before{
      content: '';
      margin-right: 8px;
      height: 100%;
      border-left: 4px solid $theme;
    }
  }
}
</style>
