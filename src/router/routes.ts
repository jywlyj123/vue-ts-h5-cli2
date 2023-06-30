/*
 * @Author: Awei
 * @Date: 2023-06-29 08:48:22
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-29 21:56:09
 */
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes
