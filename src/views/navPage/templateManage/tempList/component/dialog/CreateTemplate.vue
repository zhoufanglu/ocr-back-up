<template>
  <!-- 创建模板弹框 -->
  <el-dialog
      class="create-template"
      :visible.sync="dialogVisible"
      width="800px"
      top="25vh"
      :before-close="beforeCloseDialog"
  >
    <!-- :show-close="false" -->
    <div slot="title">
      <global-title slot="title" label="上传模板"></global-title>
    </div>
    <div class="dialog-content">
      <div class="upload-before" v-show="!fileObject.displayPath">
        <el-upload
            class="upload"
            ref="elUpload"
            :multiple="false"
            :show-file-list="false"
            action
            :accept="accept"
            :auto-upload="false"
            :on-change="fileChange"
        >
          <img src="@/assets/images/upload.png"/>
        </el-upload>
        <p>
          图片大小不超过4M，最长边不超过4096像素
          请确保上传的模板图片字迹清晰，摆放端正
        </p>
      </div>
      <div class="upload-after"
           v-show="fileObject.displayPath">
        <!--预览提交Bug-->
        <el-form
            :inline="true"
            :model="fileObject"
            :rules="rules"
            ref="repeatForm">
          <el-form-item label="模板名称" prop="fileName" required>
            <el-input v-model="fileObject.fileName" :maxlength="20" show-word-limit></el-input>
          </el-form-item>
          <el-form-item prop="userId" label="用户ID" required>
            <el-select v-model="fileObject.userId">
              <el-option label="111" value="111"></el-option>
              <el-option label="222" value="222"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!--图片预览-->
        <el-image
            v-if="fileObject.fileType === 'image/jpeg'"
            :src="fileObject.displayPath"
            :preview-src-list="[fileObject.displayPath]"
        ></el-image>
        <!--pdf预览-->
        <iframe
            v-if="fileObject.fileType === 'application/pdf'"
            :src="fileObject.displayPath"
            frameborder="0"
        ></iframe>
        <!--重新上传-->
        <div class="upload-again" @click="uploadAgain">
          <i class="el-icon-refresh-right"></i>
          请重新上传
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
        <el-button @click="nextStep" :disabled="fileObject.displayPath===''">下一步</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'createTemplate',
  components: {},
  data() {
    return {
      loading: false,
      dialogVisible: false,
      cate: 'OCR',
      accept: ".pdf,.jpg,.jpeg,.png,.bmp,.tif,.tiff", //允许的上传文件类型
      fileObject: {
        /*displayPath: 'blob:http://localhost:8080/0e19be37-daa4-4137-86aa-0a0ecf91d955', //文件预览路径
        fileType: 'image/jpeg' //文件类型*/
        displayPath: '', //文件预览路径
        fileType: '', //文件类型
        fileName: ''
      },
      rules: {
        fileName: [
          {required: true, message: '请填写模板名', trigger: 'blur'},
          {min: 1, max: 40, message: "长度不大于40字符", trigger: "blur"},
        ]
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    showDialog(cate) {
      this.cate = cate
      this.dialogVisible = true
    },
    beforeCloseDialog() {
      this.dialogVisible = false
      this.fileObject.displayPath = ''
      this.fileObject.fileType = ''
    },
    // 点击上传图片
    fileChange(file) {
      const fileObj = file.raw
      this.fileObject.fileName = fileObj.name.split('.')[0]
      this.imgSaveToUrl(file)
      this.fileObject.fileType = fileObj.type
      if (fileObj.type === 'image/jpeg') {

      } else if (fileObj.type === 'application/pdf') {

      }
    },
    imgSaveToUrl(event) {
      // 获取上传图片的本地URL，用于上传前的本地预览
      let URL = null;
      if (window.createObjectURL !== undefined) {
        // basic
        URL = window.createObjectURL(event.raw);
      } else if (window.URL !== undefined) {
        // mozilla(firefox)
        URL = window.URL.createObjectURL(event.raw);
      } else if (window.webkitURL !== undefined) {
        // webkit or chrome
        URL = window.webkitURL.createObjectURL(event.raw);
      }
      this.fileObject.displayPath = URL
      console.log(153, this.fileObject)
      // 转换后的地址为 blob:http://xxx/7bf54338-74bb-47b9-9a7f-7a7093c716b5
    },
    uploadAgain() {
      this.$refs.elUpload.$children[0].$refs.input.click()
    },
    nextStep() {
      this.$refs.repeatForm.validate((valid) => {
        if (valid) {
          console.log(150, this.fileObject)
          this.$message.success('上传成功！')
          this.$router.push('/templateManage/editTemp')
        } else {
          console.log('error submit!!');
          return false
        }
      })/*;
      if(!this.fileObject.fileName){
        this.$message.error('请输入模板名称！')
      }else{
        this.$message.success('上传文件成功！')
        this.dialogVisible = false
      }*/
    }
  }
}
</script>
<style lang="scss">
.create-template {
  .dialog-content {
    margin: auto;
    @include vertical-center;
    min-height: 300px;

    img {
      width: 280px;
      height: 186px;
    }

    p {
      margin: 16px 0;
      width: 280px;
      font-size: 14px;
      color: #666666;
    }

    display: flex;
    flex-direction: column;

    .upload-after {
      width: 100%;
      text-align: center;

      .upload-again {
        height: 36px;
        line-height: 36px;
        opacity: 0.5;
        background: #000000;
        width: 100%;
        cursor: pointer;
        color: #ffffff;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}
</style>
