/*
 * @Author: Awei
 * @Date: 2023-06-30 20:36:49
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-01 07:41:14
 */
import { resolveurl } from '@/utils'
export const API_USER_COMLIONG = {
  logion: () => resolveurl('/user/login'),
  registry: () => resolveurl('/user/registry')
}
