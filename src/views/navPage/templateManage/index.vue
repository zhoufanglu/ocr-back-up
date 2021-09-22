<!--模板管理-->
<template>
  <div class="template-manage">
    <div class="tab-row">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="预制模板" name="preTemp">
          <TempTable></TempTable>
        </el-tab-pane>
        <el-tab-pane label="自定义模板" name="cusTemp">
<!--          <TempTable></TempTable>-->
        </el-tab-pane>
      </el-tabs>
      <div class="operate-row">
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="openCreateTemp('OCR')">创建OCR模板</el-button>
        <el-button class="pdf-btn" type="primary" icon="el-icon-circle-plus-outline" @click="openCreateTemp('PDF')">创建PDF模板</el-button>
        <el-input
            class="search-input"
            placeholder="请输入模板名称或id"
            @keyup.enter.native="searchEvent"
            v-model="searchVal">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <!--创建模板弹窗-->
    <CreateTemplate ref="createTemplate"></CreateTemplate>
  </div>
</template>
<script>
import TempTable from './component/TempTable'
import CreateTemplate from './component/dialog/CreateTemplate'
export default {
  name: 'templateManage',
  components: { TempTable, CreateTemplate },
  data() {
    return {
      activeName: 'preTemp',
      searchVal: ''
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    searchEvent() {
      console.log(this.searchVal)
    },
    openCreateTemp(cate) {
      this.$refs.createTemplate.showDialog(cate)
    }
  }
}
</script>
<style lang="scss" scoped>
.template-manage {
  display: flex;
  flex-direction: column;
  .tab-row{
    @include vertical-center;
    justify-content: flex-start;
    position: relative;
    .el-tabs{
      width: 100%;
    }
    .operate-row{
      @include vertical-center;
      position: absolute;
      right: 0;
      top: -10px;
    }
  }
}
</style>
<style lang="scss">
.template-manage{
  .operate-row{
    .el-tabs__item{
      font-size: 16px;
    }
    .el-button{
      @include vertical-center;
      i{
        font-size: 20px;
        margin-right: 6px;
      }
    }
    .pdf-btn{
      margin: 0 20px;
    }
    .search-input{
      width: 220PX;
      i{
        font-size: 20px;
        margin-left: 6px;
      }
      input{
        border-radius: 50px;
        padding-left: 50px;
        padding-right: 50px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
