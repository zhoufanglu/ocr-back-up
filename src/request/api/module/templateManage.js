/**
 *模板管理
 */
import base from '@/request/api/base'
import axios from '@/request/http'

const user = {
  getTempList(params) {
    return axios.get(`${base.dynamicUrl}/getTempList`)
  }
}
export default user
