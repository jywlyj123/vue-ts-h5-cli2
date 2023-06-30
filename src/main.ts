/*
 * @Author: Awei
 * @Date: 2023-06-28 21:27:16
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-30 19:25:52
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'

import { initVant } from '@/utils/init'
const app = createApp(App)
initVant(app)
app.use(vant)
app.use(store)
app.use(router)
app.mount('#app')
