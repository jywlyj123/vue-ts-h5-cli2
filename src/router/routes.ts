/*
 * @Author: Awei
 * @Date: 2023-06-29 08:48:22
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-02 21:14:30
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
    path: '/homeview',
    name: 'homeview',
    component: () => import(/* webpackChunkName: "homeview" */ '@/views/HomeView.vue'),
    children: [
      {
        path: '/home/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/home/index.vue')
      },
      {
        path: '/home/classfiy',
        name: 'classfiy',
        component: () => import(/* webpackChunkName: "classfiy" */ '@/views/home/Classfiy.vue')
      },
      {
        path: '/home/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/home/Cart.vue')
      },
      {
        path: '/home/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "my" */ '@/views/home/My.vue')
      }
    ]
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
