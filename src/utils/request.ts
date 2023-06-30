/*
 * @Author: Awei
 * @Date: 2023-06-30 19:18:03
 * @Last Modified by:   Awei
 * @Last Modified time: 2023-06-30 19:18:03
 */

import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
import { showToast } from 'vant'

const request: AxiosInstance = axios.create({
  timeout: 3000
})

request.interceptors.request.use(
  (config: any) => {
    const Authorization = localStorage.getItem('token')
    config.headers['Content-Type'] = 'application/json'
    config.headers['Authorization'] = `${Authorization}`
    config.headers['Platform'] = 'mobile'
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    const status = error.response?.status
    switch (status) {
      case 401:
        showToast({
          type: 'fail',
          message: '暂无数据！',
          onClose() {
            const pathUrl = location.href.split('/')
            window.location.href = `/user/login?redirect=${encodeURIComponent('/' + pathUrl[3])}`
          }
        })
        break
      case 500:
        showToast({
          type: 'fail',
          message: '服务端报错,请重启再试！'
        })
        break
      default:
        showToast({
          type: 'fail',
          message: '未知错误，请刷新页面'
        })
        break
    }
    return Promise.reject(error)
  }
)
export { request, axios }
