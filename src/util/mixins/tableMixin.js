/**
 * 涉及到表格的统一暴露方法
 * 例如：列排序， 表格分页, 加载状态。。
 */
const tableMixin = {
  data (){
    return {
      pagination: {
        currentPage: 1, //当前页面
        pageSize: 10, //一页显示多少
        total: 200, //一共多少个
        pageSizes: [10, 20, 50, 100], //limit个数
      },
      orderByKey: "", //当前排序字段属性
      orderByVal: "", //排序方式（升序：asc，降序：desc）
      tableLoading: false
    }
  },
  methods: {
    /**
     * 排序方法
     * @param params column,prop,order
     */
    handleSortChange(params) {
      this.orderByKey = params.prop
      this.orderByVal = params.order==='ascending'?'asc':'desc'
      this.loadTableData()
    },
    /**********************分页***********************/
    handleSizeChange(val) {
      this.loadTableData()
    },
    handleCurrentChange(val) {
      this.loadTableData()
    },
  }
}
export default tableMixin
