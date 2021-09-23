<!--侧边操作按钮-->
<template>
  <div class="side-operate-panel">
    <el-tooltip
        v-for="i in clickBtnList"
        :key="i.icon"
        class="item" effect="dark" :content="i.tip" placement="right">
      <i class="iconfont"
         @click="itemClick(i.id)"
         :class="active===i.id?'link':null"
         v-html="i.icon"
      ></i>
    </el-tooltip>
<!--    <el-tooltip class="item" effect="dark" content="拖拽" placement="right">
      <i class="iconfont">&#xe609;</i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="框选参照字段" placement="right">
      <i class="iconfont">&#xe61f;</i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="框选表格参照字段" placement="right">
      <i class="iconfont">&#xe60b;</i>
    </el-tooltip>-->
    <el-divider></el-divider>
    <el-tooltip class="item" effect="dark" content="放大" placement="right">
      <i class="iconfont">&#xe61e;</i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="缩小" placement="right">
      <i class="iconfont">&#xe60d;</i>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="适配画布" placement="right">
      <i class="iconfont">&#xe6ed;</i>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'sideOperatePanel',
  components: {},
  data() {
    return {
      clickBtnList: [
        {
          id: 0,
          tip: '拖拽',
          icon: '&#xe609;'
        },
        {
          id: 1,
          tip: '框选参照字段',
          icon: '&#xe61f;'
        },
        {
          id: 2,
          tip: '框选表格参照字段',
          icon: '&#xe60b;'
        },
      ],
      active: 1
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    itemClick(id) {
      this.active = id
    }
  }
}
</script>
<style lang="scss" scoped>
.side-operate-panel {
  display: flex;
  flex-direction: column;
  width: 50px;
  box-sizing: border-box;
  padding: 30px 6px;
  position: fixed;
  left: 10px;
  border: solid 1px #eeeeee;
  top: calc(50% - 150px);
  .iconfont{
    font-size: 20px;
    text-align: center;
    margin: 6px 0;
    cursor: pointer;
    &:hover{
      color: $theme;
    }
    //color: red;
  }
}
</style>
