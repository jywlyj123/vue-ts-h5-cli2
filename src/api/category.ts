/*
 * @Author: Awei
 * @Date: 2023-07-03 19:16:34
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-03 20:20:06
 */
import { request } from '@/utils/request'
import { API_CATEGARY_CONFIG } from '@/config/api/category'
import { AxiosError } from 'axios'
import { CategaryMangeType } from '@/interface/model/category'
interface UseCategarySeriviceInterface {
  firstCategaryList(): Promise<any>
  secondCategaryList: (params: { t_type: number }) => Promise<any>
  getProductList(params: CategaryMangeType.CategaryProductInterface): Promise<any>
}

export const UseHomeSerivice = (): UseCategarySeriviceInterface => {
  class CategarySerivice {
    // 一级列表
    public firstCategaryList() {
      const url = API_CATEGARY_CONFIG.firstCategaryList()
      return request
        .get(url)
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    // 二级列表
    public secondCategaryList(params: { t_type: number }) {
      const url = API_CATEGARY_CONFIG.secondCategaryList()
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    public getProductList(params: CategaryMangeType.CategaryProductInterface) {
      const url = API_CATEGARY_CONFIG.getProductList()
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
  }
  return new CategarySerivice()
}
