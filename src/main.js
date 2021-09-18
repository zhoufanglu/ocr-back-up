import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'

import '@/permission'

Vue.config.productionTip = false

//element
import '@/config/element.js'
//api
import api from '@/request/api/index'
Vue.prototype.$api = api
//mock
import {mockFn} from '@/mock/mock.js'
mockFn(true)

import '@/util/rem'

//全局组件
//全局组件
import globalTitle from '@c/globalTitle'
import globalNoData from '@c/globalNoData'
Vue.component("global-title", globalTitle)
Vue.component("global-no-data", globalNoData)

console.log('-----------环境变量-当前环境-----------', process.env.VUE_APP_ENV)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
