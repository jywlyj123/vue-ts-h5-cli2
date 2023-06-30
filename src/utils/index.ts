/*
 * @Author: Awei
 * @Date: 2023-06-30 20:22:11
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-30 20:30:32
 */

import { BASE_URL } from '@/config/index'
export const resolveurl = (url: string): string => {
  return BASE_URL + url
}
