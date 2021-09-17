<template>
  <div class="temp-table">
    <el-table
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="tempList"
        class="temp-table-element"
    >
      <el-table-column prop="templateName" label="模板名称"></el-table-column>
      <el-table-column prop="templateName" label="用户ID"></el-table-column>
      <el-table-column prop="imageUrl" label="模板图片">
        <template slot-scope="scope">
          <span class="link">预览</span>
        </template>
      </el-table-column>
      <el-table-column prop="templateSign" label="模板ID" min-width="190"></el-table-column>
      <el-table-column prop="templateSign" label="模板类型">
        <template slot-scope="scope">
          xxx
        </template>
      </el-table-column>
      <el-table-column prop="lastLaunchTime" label="发布时间" min-width="160"></el-table-column>
      <el-table-column prop="lastUpdateTime" label="修改时间" min-width="160"></el-table-column>

      <!-- environmentState 0：生产; 1：测试 -->
      <!-- isForbidden 0：不禁用测试; 1：禁用测试 -->
      <el-table-column prop="environmentState" label="环境" min-width="110">
        <template slot-scope="scope">
          xxx
        </template>
      </el-table-column>

      <el-table-column prop="environmentState" label="状态" min-width="110">
        <template slot-scope="scope">
          xxx
        </template>
      </el-table-column>

      <el-table-column prop="action" label="操作" min-width="300">
        <template slot-scope="scope">
          <div class="operate-row">
            <div>复制</div>
            <div>试一试</div>
            <div>编辑</div>
            <div>字段配置</div>
            <div>邮箱关联</div>
            <div>
              <el-dropdown>
                <div class="dropdown">
                  历史版本
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>前后端</el-dropdown-item>
                  <el-dropdown-item>py文件</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div>
              <el-popconfirm
                  @confirm="tempDelete(scope.row)"
                  title="确定删除吗？"
              >
                <span slot="reference">删除</span>
              </el-popconfirm>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="page">
      <div class="pageContent">
        <!--        <Page
                    :page-size="limit"
                    :current="offset"
                    :total="total"
                    show-total
                    show-sizer
                    @on-change="changePage"
                    @on-page-size-change="changeLimit"
                ></Page>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TempTable',
  components: {},
  data() {
    return {
      tempList: [],
      limit: 10,
      offset: 1,
      total: 0,
    }
  },
  computed: {},
  created() {
    this.tempList = [{
      "id": 9,
      "loginId": "shtang",
      "templateId": "swjiang_CarrierBooking_keas_v1",
      "fileType": "pdf",
      "templateName": "嘉里大通托书",
      "templateSign": "swjiang_CarrierBooking_keas_v1",
      "environmentState": 1,
      "isForbidden": 0,
      "accept": ".pdf",
      "lastLaunchTime": "2021-09-10 17:19:54",
      "lastUpdateTime": "2021-09-15 15:18:11",
      "ROW_ID": 1
    }, {
      "id": 8,
      "loginId": "shtang",
      "templateId": "1",
      "fileType": "1",
      "templateName": "1",
      "templateSign": "1",
      "environmentState": 0,
      "isForbidden": 0,
      "imageUrl": "1",
      "lastLaunchTime": "2021-09-10 17:00:14",
      "lastUpdateTime": "2021-09-10 17:00:14",
      "ROW_ID": 2
    }, {
      "id": 7,
      "loginId": "shtang",
      "templateId": "1",
      "fileType": "1",
      "templateName": "1",
      "templateSign": "1",
      "environmentState": 1,
      "isForbidden": 0,
      "imageUrl": "1",
      "lastLaunchTime": "2021-09-10 12:50:04",
      "lastUpdateTime": "2021-09-10 16:17:16",
      "ROW_ID": 3
    }, {
      "id": 2,
      "loginId": "shtang",
      "templateId": "1",
      "fileType": "excel",
      "templateName": "智高物流托书",
      "templateSign": "offline_BookingOrder_v1",
      "environmentState": 1,
      "isForbidden": 0,
      "accept": ".xls,.xlsx",
      "lastLaunchTime": "2021-06-23 15:35:02",
      "lastUpdateTime": "2021-09-09 13:52:15",
      "ROW_ID": 4
    }, {
      "id": 1,
      "loginId": "shtang",
      "templateId": "0",
      "fileType": "pdf",
      "templateName": "嘉里大通托书",
      "templateSign": "offline_CarrierBooking_v1",
      "environmentState": 0,
      "isForbidden": 0,
      "imageUrl": "049aa4a8-a682-488b-9966-f24b80bfe350",
      "accept": ".pdf",
      "lastLaunchTime": "2021-06-23 15:31:40",
      "lastUpdateTime": "2021-09-09 13:40:15",
      "ROW_ID": 5
    }]
    console.log(17, this.tempList)
  },
  mounted() {
  },
  methods: {
    tempDelete(val) {
      console.log(162, val)
    }
    /*// 分页
    changePage(value) {
      this.offset = value;
    },
    // 分页
    changeLimit(value) {
      this.limit = value;

    },*/
  }
}
</script>
<style lang="scss" scoped>
.temp-table {
  .temp-table-element {
    width: 100%;
    font-size: 14px;
    margin-top: 20px;
    .operate-row {
      @include vertical-center;
      justify-content: space-between;

      > div,.dropdown {
        font-size: 14px;
        cursor: pointer;
        white-space: nowrap;
        color: $theme;
      }

      > div:last-child {
        color: $danger;
      }
    }
  }
}
</style>
