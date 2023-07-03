/*
 * @Author: Awei
 * @Date: 2023-07-03 19:16:19
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-03 19:45:05
 */

// 分类
import { BasicMangeType } from '@/interface/common'
export namespace CategaryMangeType {
  export interface FirsetCategaryInterface {
    t_text: string
    t_type: number
    tid: string
  }
  export interface SecondCategaryInterface {
    s_text: string
    t_type: number
    s_type: number
  }

  export interface CategaryProductInterface extends BasicMangeType.PaginationInterface {
    t_type: number
    s_type: number
  }
}
