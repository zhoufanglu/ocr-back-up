import { filterAsyncRouter, deepCopy } from '@/util/tool'
import { router, resetRouter } from '../../router'
import api from '@/request/api/index'

const user = {
  state: {
    userInfo : {
      token: '',
      username: 'test',
      routerList: [],//当前登陆用户的路由列表-由后端传过来
    },
  },

  mutations: {
    SET_USER_INFO(state, val) {
      state.userInfo = val
    },
    ADD_ROUTE(state) {
      let routerList = deepCopy(state.userInfo.routerList)
      //console.log(26, router.getRoutes().length)
      //判断条件方法1 --路由未添加之前是5个,添加完之后是13个，我们用是否小于5个，来判断是否要添加
      //判断条件方法2 也可以判断路由内包不包含home,包含了就不需要添加了  本项目用此方法
      //console.log('路由添加前', router.getRoutes())
      //router.getRoutes().findIndex(i=>i.name==='企业档案详情') === -1
      if (router.getRoutes().length < 8) {
        routerList = filterAsyncRouter(routerList)
        //console.log('路由添加前', router.getRoutes())
        routerList.forEach((i) => {
          //在home父路由内添加子路由
          router.addRoute('home', i)
        })
        //console.log('路由添加后', router.getRoutes())
      }
    },
  },

  actions: {
    setUserInfo({ commit }, val) {
      commit('SET_USER_INFO', val)
    },
    //登陆
    login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise(async (resolve, reject) => {
        //模拟登陆，获取用户信息， 权限路由列表
        try {
          const res = await api.user.login({username, password})
          const { userInfo } = res.data
          let routerList = userInfo.moduleList
          //把用户信息存入vuex
          commit('SET_USER_INFO', {
            token: res.data.token,
            username: userInfo.username ,
            realName: userInfo.realName,
            routerList: routerList
          })
          //添加路由
          commit('ADD_ROUTE')
          resolve()
        }catch (e){
          reject(e)
        }
      })
    },
    //添加路由
    addRoute({ commit }) {
      commit('ADD_ROUTE')
    },
    //注销
    logout({ commit, state }) {
      return new Promise((resolve) => {
        //console.log(state.userInfo.token, '注销了')
        //重置用户信息
        commit('SET_USER_INFO', {
          userName: '',
          password: '',
          token: '',
          routerList: []
        })
        commit('SET_CURRENT_MENU', {
          name: 'BASEINFO',
          comName: 'BI1'
        })
        //重置路由
        resetRouter() //这是路由里面的重置方法，引入的
        router.push({path:'/login'})
        resolve()
      })
    },
  },
}

export default user
