<template>
  <div class="p-nav-bar">
    <div class="logo">
      <img src="@a/images/ydLogo.svg" alt="">
    </div>

    <navMenu></navMenu>

    <div class="user-info">
      <el-dropdown
        trigger="click"
        @command="dropClick"
        @visible-change="dropDownChange"
      >
        <span class="el-dropdown-link">
          <i class="iconfont">&#xe608;</i>
          <span>{{userInfo.username}}</span>
          <i v-show="!isDropDown" class="el-icon-arrow-down el-icon--right"></i>
          <i v-show="isDropDown" class="el-icon-arrow-up el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="注销">注销</el-dropdown-item>
          <el-dropdown-item command="修改密码">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <!--密码修改dialog-->
    <el-dialog
        class="edit-dialog edit-personal-psw-dialog"
        :show-close="true"
        :before-close="editPswDialogHandleClose"
        center
        :visible.sync="editPswDialog.visible"
        width="30%"
    >
      <div slot="title" class="title">
        个人密码修改
      </div>

      <el-form class="edit-form" :rules="editPswDialog.rules" ref="editPswForm" :model="editPswDialog.form"
               label-width="120px">
        <el-form-item label="登录名">
          <span>{{ userInfo.realName }}</span>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input class="email" v-model="editPswDialog.form.newPassword" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="再次输入" prop="newPasswordAgain">
          <el-input class="email" v-model="editPswDialog.form.newPasswordAgain" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
      <el-button @click="editPswDialog.visible = false">取 消</el-button>
      <el-button :loading="btnLoading" type="primary" @click="editPswDialogClick">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import navMenu from './navMenu'
export default {
  name: 'navBar',
  components: {navMenu},
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.editPswDialog.form.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isDropDown: false,
      btnLoading: false,
      editPswDialog: {
        visible: false,
        form: {
          realName: '',
          userSign: '',
          newPassword: '',
          newPasswordAgain: '',
          oldPassword: '',
        },
        rules: {
          newPassword: {required: true, message: '请输入密码', trigger: 'blur'},
          newPasswordAgain: {required: true, validator: validatePass, trigger: 'blur'},
        }
      },
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      mailCount: state => state.user.mailCount,
    }),
  },
  created() {
  },
  mounted() {
  },
  methods: {
    ...mapActions(['setUserInfo', 'logout']),
    async dropClick(val) {
      if(val === '注销') {
        await this.logout()
      }else if(val === '修改密码'){
        this.editPswDialog.visible = true
      }
    },
    go() {
      this.$router.push({path:'/message'}).catch(err=>{
        console.log(err)
      })
    },
    dropDownChange(isDropDown) {
      this.isDropDown = isDropDown
    },
    editPswDialogClick() {
      this.$refs.editPswForm.validate(async (valid) => {
        if (valid) {
          this.btnLoading = true
          await this.$api.home.changeMyPwd({
            pwd: this.editPswDialog.form.newPassword
          }).finally(()=>{
            this.btnLoading = false
          })
          this.$message.success('修改成功！请重新登陆！')
          await this.logout()
          this.editPswDialog.visible = false
        } else {
          console.log('error submit!!')
          //return false;
        }
      })
    },
    //密码修改
    editPswDialogHandleClose(done) {
      this.$refs.editPswForm.resetFields()
      done()
    },
  }
}
</script>
<style lang="scss" scoped>
.p-nav-bar {
  height: 60px;
  padding: 0 50px;
  box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, .1);
  display: flex;
  justify-content: space-between;
  background-color: $theme;
  color: white;
  align-items: center;

  .logo {
    @include vertical-center;
    height: 40px;
    background-color: $theme;
    width: 140px;
    color: white;
    img{
      height: 100%;
      width: 100%;
    }
  }

  .user-info {
    height: 100%;
    @include vertical-center;
    margin-right: 30px;
    .el-dropdown-link{
      @include vertical-center;
      cursor: pointer;
      >i:first-child{
        font-size: 20px;
      }
      .operate-icon-box{
        width: 15px;
        //border: solid 1px red;
      }
      >span{
        margin: 0 10px;
      }
    }
  }
}
</style>

<style lang="scss">
.p-nav-bar{
  .el-badge__content{
    background-color: $theme;
  }
}
.el-dropdown-link{
  color: white;
  font-size: 16px;
}
</style>
