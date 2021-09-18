<template>
  <div>
    <!--bindMailDialog-->
    <el-dialog
        class="bind-mail-dialog"
        :visible.sync="dialogVisible"
        width="30%"
    >
      <div slot="title">
        <global-title slot="title" :label="`邮箱关联`"></global-title>
      </div>
      <!--table-->
      <el-table
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          :data="mailList"
          border
          style="width: 100%">
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱地址" align="center">
          <template slot-scope="scope">
            22
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-popconfirm
                @confirm="mailDelete(scope.row)"
                title="确定删除吗？"
            >
              <el-button slot="reference" type="danger" size="mini">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!--add btn-->
      <div class="operate-add" @click="addDialogVisible=true">
        <i class="iconfont">&#xe61c;</i>
        <span>添加邮箱</span>
      </div>
      <!--footer-->
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
    </el-dialog>
    <!--addMailDialog-->
    <el-dialog
        class="add-mail-dialog"
        :visible.sync="addDialogVisible"
        append-to-body
        :show-close="false"
    >
      <div slot="title">
        <global-title slot="title" :label="`添加邮箱`"></global-title>
      </div>
      <div>

        <el-form class="mail-form" :rules="rules" ref="mailForm" :model="form" label-width="80px">
          <el-form-item label="邮箱：" prop="mail" :error="form.error">
            <el-input class="mail-name" v-model="form.mail" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" :loading="btnLoading"  @click="addMailConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'bindMailDialog',
  components: {},
  data() {
    const checkMail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'));
      }
      setTimeout(() => {
        const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
        console.log(77, value)
        if(!reg.test(value)){
          callback(new Error('请输入正确的邮箱！'));
        }else{
          callback()
        }
      }, 500)
    }
    return {
      // bindMail dialog
      dialogVisible: true,
      mailList: [],
      addMailVal: '',
      addDialogVisible: false,
      //add mail dialog
      form: {
        mail: '',
        error: ''
      },
      rules: {
        mail: {validator: checkMail, trigger: 'blur'},
      },
      btnLoading: false
    }
  },
  created() {
    this.mailList = [
      {value: ''}
    ]
  },
  mounted() {
  },
  methods: {
    showDialog(cate) {
      this.dialogVisible = true
    },
    confirm() {

    },
    addMailConfirm() {
      this.$refs.mailForm.validate(async (valid) => {
        if (valid) {
          //添加成功
          this.btnLoading = true
          this.$message.success('新增成功！')
          this.addDialogVisible = false
          this.btnLoading = false
        } else {
          console.log('error submit!!');
        }
      })
    },
    mailDelete() {

    }
  }
}
</script>
<style lang="scss" scoped>
.bind-mail-dialog {
}
</style>
<style lang="scss">
.bind-mail-dialog{
  .operate-add{
    color: $theme;
    cursor: pointer;
    margin-top: 10px;
    i{
      margin: 6px;
    }
  }
}
.add-mail-dialog {
  .el-dialog {
    margin-top: 20vh !important;
    width: 400px;
    .mail-form {
      .mail-name {
        width: 200px;
      }
    }
  }
}
</style>
