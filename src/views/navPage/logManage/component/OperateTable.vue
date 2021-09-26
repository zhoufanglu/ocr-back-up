<template>
  <div class="operate-table">
    <el-table
        row-key="id"
        :expand-row-keys="[1]"
        :data="list"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        style="width: 100%"
        @expand-change="expandChange"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <code-diff
              :old-string="oldString"
              :new-string="newString"
              output-format="side-by-side"
              :context="10"
          >
          </code-diff>
        </template>
      </el-table-column>
      <el-table-column
          label="商品 ID"
          prop="id">
      </el-table-column>
      <el-table-column
          label="商品名称"
          prop="name">
      </el-table-column>
      <el-table-column
          label="描述"
          prop="desc">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {CodeDiff}  from 'v-code-diff'
export default {
  name: 'operateTable',
  components: { CodeDiff },
  data() {
    return {
      list: [],
      oldString: 'import router from \'./router\'\n' +
          'import store from \'./store\'\n' +
          'import { Message } from \'element-ui\'',
      newString: 'import router from \'./router\'\n' +
          'import store from \'./store\'\n' +
          'import { Message } from \'element-ui\'222'
    }
  },
  created() {
    this.list = [{
      id: 1,
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987123',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987125',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987126',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }]
  },
  mounted() {
  },
  methods: {
    expandChange(val, val2) {
      console.log(val, val2)
    }
  }
}
</script>
<style lang="scss" scoped>
.operate-table {
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>
<style lang="scss">
.operate-table {
  .d2h-code-side-linenumber{
    width: 100%;
    min-width: 50px;
    box-sizing: border-box;
    padding-left: 6px;
    height: 100%;
  }
}
</style>
