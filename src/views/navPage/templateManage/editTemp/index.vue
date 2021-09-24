<template>
  <div class="edit-temp">
    <div class="nav-bar">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/templateManage' }">模板管理</el-breadcrumb-item>
        <el-breadcrumb-item>编辑模板</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="operate-item">
        <el-button>保存</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="content">
      <SideOperatePanel></SideOperatePanel>
      <div class="draw-panel">
        12
      </div>
      <div class="operate-list">
        12
      </div>
    </div>
  </div>
</template>
<script>
import SideOperatePanel from './component/SideOperatePanel'
export default {
  name: 'editTemp',
  components: { SideOperatePanel },
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
.edit-temp {
  display: flex;
  flex-direction: column;
  height: 100%;
  .nav-bar{
    width: 100%;
    height: 60px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.15);
    box-sizing: border-box;
    padding: 0 50px;
    position: fixed;
    top: 60px;
    @include vertical-center;
    justify-content: space-between;
    .operate-item{
      @include vertical-center;
      .el-button:first-child{
        margin-right: 10px;
      }
    }
  }
  .content{
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f0;
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px green;
    margin-top: 60px;
    height: calc(100% - 60px);
    .draw-panel{
      background-color: white;
      margin-left: 60px;
    }
    .operate-list{
      background-color: white;
    }
  }
}
</style>
