/*
 * @Author: Awei
 * @Date: 2023-06-29 08:48:08
 * @Last Modified by:   Awei
 * @Last Modified time: 2023-06-29 08:48:08
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
