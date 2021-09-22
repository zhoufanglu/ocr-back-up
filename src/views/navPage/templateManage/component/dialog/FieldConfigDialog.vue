<template>
  <el-dialog
      class="field-config-dialog"
      :visible.sync="dialogVisible"
      width="40%"
  >
    <div slot="title">
      <global-title slot="title" label="字段配置"></global-title>
    </div>
    <el-table
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="fieldList"
        border
        style="width: 100%">
      <el-table-column
          align="center"
          prop="name"
          label="字段名称"
      >
      </el-table-column>
      <el-table-column
          prop="date"
          label="映射"
          min-width="120"
          align="center"
      >
        <template slot-scope="scope">
          <el-select style="width: 80%" v-model="scope.row.mapping" placeholder="请选择">
            <el-option label="不映射" value="不映射"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="是否为业务关键字段" min-width="120" align="center">
        <template slot-scope="scope">
          <el-radio :true-label="1" :false-label="0"  v-model="scope.row.isKeyField" :label="scope.row.id"><i></i></el-radio>
        </template>
      </el-table-column>
      <el-table-column label="是否必填"  align="center">
        <template slot-scope="scope">
          <el-checkbox :true-label="1" :false-label="0" v-model="scope.row.isRequired"></el-checkbox>
        </template>
      </el-table-column>

    </el-table>

    <!--operate-repeat-->
    <div class="operate-repeat">
      <el-switch
          v-model="isRepeat"
          :active-value="1"
          :inactive-value	="0"
          inactive-text="允许关键字重复">
      </el-switch>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'HistoryDialog',
  components: {},
  data() {
    return {
      dialogVisible: false,
      fieldList: [],
      activeId: 1,
      isRepeat: 0
    }
  },
  created() {
    this.fieldList = [
      {
        id: 1,
        name: 'shipper',
        mapping: '不映射',
        isKeyField: 1,
        isRequired: 0
      },
      {
        id: 2,
        name: '委托编号',
        mapping: '不映射',
        isKeyField: 0,
        isRequired: 1
      },
    ]
  },
  mounted() {
  },
  methods: {
    showDialog() {
      this.dialogVisible = true
    },
    confirm() {
      this.dialogVisible = false
      console.log(93, this.fieldList)
    }
  }
}
</script>
<style lang="scss" scoped>
.field-config-dialog {
}
</style>
<style lang="scss">
.field-config-dialog{
  .operate-repeat{
    margin-top: 10px;
    .el-switch{
      .el-switch__label{
        span{
          color: #303133!important;
        }
      }
    }
  }
}
</style>
