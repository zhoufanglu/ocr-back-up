import Vue from 'vue'
import VueRouter from 'vue-router'


//外层页面
const layout = () => import('@/layout/layout')
const Page404 = () => import('@/views/404/404')

//特殊页面
//import home from '@v/navPage/home'

const requireComponent = require.context(
  // 其组件目录的相对路径,这里根据实际目录而定
  '../views/navPage',
  // 是否查询其子目录,我这里有两层，所以true
  true,
  // 匹配基础组件文件名的正则表达式，我这里vue文件都要
  /\.vue$/
)

let modules = {} //组件模块

requireComponent.keys().forEach(ele=>{
  let key = ele.split('/')[1]
  modules[key] = requireComponent(ele).default //模块实例赋值
})

//定义路由模块
const {home, userManage, logManage, templateManage, stopwatchManage, adminConfig} = modules

//最后塞入组件内
export default {
  components: modules,
  data() {}
}



Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: layout,
    meta: {
      requireAuth: 0, // 在需要登录的路由的meta中添加响应的权限标识
      keepAlive: 0, //是否缓存
      isNavBar: 0, //是否是导航
    },
    children: [
      {
        path: '/home',
        name: '看板首页',
        component: home,
        meta: {
          requireAuth: 1,
          keepAlive: 0,
          isNavBar: 1
        },
      },
      {
        path: '/userManage',
        name: '用户管理',
        component: userManage,
        meta: {
          requireAuth: 1,
          keepAlive: 0,
          isNavBar: 1
        },
      },
      {
        path: '/logManage',
        name: '日志管理',
        component: logManage,
        meta: {
          requireAuth: 1,
          keepAlive: 0,
          isNavBar: 1
        },
      },
      {
        path: '/templateManage',
        name: '模板管理',
        component: templateManage,
        meta: {
          requireAuth: 1,
          keepAlive: 1,
          isNavBar: 1
        },
      },
      {
        path: '/stopwatchManage',
        name: '码表管理',
        component: stopwatchManage,
        meta: {
          requireAuth: 1,
          keepAlive: 0,
          isNavBar: 1
        },
      },
      {
        path: '/adminConfig',
        name: '管理员配置',
        component: adminConfig,
        meta: {
          requireAuth: 1,
          keepAlive: 0,
          isNavBar: 1
        },
      },
    ]
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404,
    meta: {
      requireAuth: 0, // 在需要登录的路由的meta中添加响应的权限标识
      keepAlive: 0,
      isSideBar: 0,
      cate: '404'
    },
  },
]

const createRouter = () =>
  new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export const router = createRouter()
