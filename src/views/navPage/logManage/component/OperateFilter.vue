<template>
  <div class="operate-filter">

    <el-form :inline="true" :model="form" ref="operateFilterForm">
      <el-form-item label="时间范围"  prop="dateRange">
        <el-date-picker
            value-format="yyyy:MM:dd:HH:mm:ss"
            v-model="form.dateRange"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="操作模块"  prop="operateModule">
        <el-select v-model="form.operateModule" placeholder="请选择">
          <el-option label="1" value="1"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="操作人"  prop="operator">
        <el-input v-model="form.operator"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'operateFilter',
  components: {},
  data() {
    return {
      form: {
        dateRange: '',
        operateModule: '',
        operator: '',
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    resetForm() {
      this.$refs.operateFilterForm.resetFields()
    },
    onSubmit() {
      //console.log(43, this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
.operate-filter {
}
</style>
