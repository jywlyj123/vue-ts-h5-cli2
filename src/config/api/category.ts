/*
 * @Author: Awei
 * @Date: 2023-07-03 19:16:24
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-03 19:50:30
 */
import { resolveurl } from '@/utils'
export const API_CATEGARY_CONFIG = {
  // 一级列表
  firstCategaryList: () => resolveurl('/getTypeList'),
  // 二级列表
  secondCategaryList: () => resolveurl('/getSortList'),
  getProductList: () => resolveurl('/product/typeList')
}
