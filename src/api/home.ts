/*
 * @Author: Awei
 * @Date: 2023-06-30 19:39:40
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-02 20:13:12
 */
import { request } from '@/utils/request'
import { API_HOME_CONFIG } from '@/config/api/home'
import { AxiosError } from 'axios'

interface HomeSeriviceInterface {
  getCarouselList: (params: { type?: number; pagesize?: number; pagecount?: number }) => Promise<any>
  getGoodsList: (params: { pagesize?: number; pagecount?: number }) => Promise<any>
}

export const UseHomeSerivice = (): HomeSeriviceInterface => {
  class HomeSerivice {
    // 轮播图
    getCarouselList(params: { type?: number; pagesize?: number; pagecount?: number }) {
      const url = API_HOME_CONFIG.getCarouselList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    // 商品列表
    getGoodsList(params: { pagesize?: number; pagecount?: number }) {
      const url = API_HOME_CONFIG.getGoodsList()
      return request
        .get(url, { params })
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
  }
  return new HomeSerivice()
}
