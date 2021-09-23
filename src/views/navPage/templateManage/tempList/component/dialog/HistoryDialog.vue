<template>
  <el-dialog
      class="history-dialog"
      :visible.sync="dialogVisible"
      width="30%"
      >
    <div slot="title">
      <global-title slot="title" :label="`${cate==='frontend'?'数据库':'python'}历史记录`"></global-title>
    </div>
    <el-table
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="versionList"
        border
        style="width: 100%">
      <el-table-column
          align="center"
          prop="name"
          label="版本"
      >
      </el-table-column>
      <el-table-column label="当前生效" align="center">
        <template slot-scope="scope">
          <el-radio  v-model="activeId" :label="scope.row.id"><i></i></el-radio>
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="更改时间"
          min-width="120"
          align="center"
          >
      </el-table-column>
      <el-table-column
          prop="author"
          label="更改人"
          align="center"
      >
      </el-table-column>
      <el-table-column label="操作" min-width="120">
        <template slot-scope="scope">
          <div class="operate-row">
            <div>试一试</div>
            <div>下载</div>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
      <el-button v-if="cate==='python'" type="primary" @click="uploadPython">上传新版本</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'HistoryDialog',
  components: {},
  data() {
    return {
      cate: 'frontend', //历史记录分前端和Python
      dialogVisible: false,
      versionList: [],
      activeId: 1
    }
  },
  created() {
    this.versionList = [
      {
        id: 1,
        name: 'V1',
        active: 0,
        date: '2021-9-18 14:27:10',
        author: 'lfz'
      },
      {
        id: 2,
        name: 'V2',
        active: 1,
        date: '2021-9-18 14:27:10',
        author: 'lfz'
      },
    ]
  },
  mounted() {
  },
  methods: {
    showDialog(cate) {
      this.dialogVisible = true
      this.cate = cate
    },
    confirm() {
      this.dialogVisible = false
      console.log(93, this.activeId)
    },
    uploadPython() {

    }
  }
}
</script>
<style lang="scss" scoped>
.history-dialog {
  .operate-row{
    @include vertical-center;
    justify-content: space-around;
    >div{
      cursor: pointer;
      color: $theme;
    }
  }
}
</style>
