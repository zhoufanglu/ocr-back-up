<!--日志管理-->
<template>
  <div class="log-manage">
    <div class="tab-row">
      <el-tabs v-model="activeName" >
        <el-tab-pane label="操作日志" name="操作日志">
          <OperateFilter></OperateFilter>
          <OperateTable></OperateTable>
        </el-tab-pane>
        <el-tab-pane label="识别日志" name="识别日志">
          2
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import OperateFilter from './component/OperateFilter'
import OperateTable from './component/OperateTable'

export default {
  name: 'logManage',
  components: { OperateFilter, OperateTable },
  data() {
    return {
      activeName: '操作日志'
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
.log-manage {
}
</style>
