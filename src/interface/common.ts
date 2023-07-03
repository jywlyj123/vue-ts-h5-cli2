/*
 * @Author: Awei
 * @Date: 2023-06-29 20:36:45
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-03 19:42:46
 */

// 存放项目的公用类型
export namespace BasicMangeType {
  export interface Data<T> {
    [key: string]: T
  }
  export interface IAxiosResponse {
    code: number
    msg?: string
    result?: any
    data?: any
  }
  export interface PaginationInterface {
    pagesize: number
    pagecount: number
  }
}
