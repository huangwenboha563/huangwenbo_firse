/*vue3路由*/

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Person from '../views/queryPerson.vue'
import Base from '../views/queryBase.vue'
// node读取本地环境
// console.log(process.env)
const routes = [
  // {
  //   path: '/',
  //   // name: 'Home',
  //   // component: Home
  // },
  {
    path: '/person/:id', // 查询人员信息
    name: 'Person',
    component: Person
  },
  {
    path: '/base', // 查询节本信息
    name: 'Base',
    component: Base
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
