import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

// 只要是插件就都要用use
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // 根路径去找Home组件
      name: 'Home', // 带名字的路由
      component: Home
    },
    {
      path: '/city',
      name: 'City', // 路由的名字
      component: City
    }
  ]
})
