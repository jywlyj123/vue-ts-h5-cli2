/*
 * @Author: Awei
 * @Date: 2023-06-29 08:48:22
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-01 08:01:05
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
    path: '/user/registry',
    name: 'registry',
    component: () => import(/* webpackChunkName: "registry" */ '@/views/user/registry.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes
