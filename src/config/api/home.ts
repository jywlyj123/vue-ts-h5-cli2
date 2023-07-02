/*
 * @Author: Awei
 * @Date: 2023-07-02 19:44:13
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-02 19:53:47
 */

import { resolveurl } from '@/utils'
export const API_HOME_CONFIG = {
  // 轮播图
  getCarouselList: () => resolveurl('/carousel/list'),
  // 商品列表
  getGoodsList: () => resolveurl('/product/list')
}
