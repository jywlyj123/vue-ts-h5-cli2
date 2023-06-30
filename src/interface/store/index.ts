/*
 * @Author: Awei
 * @Date: 2023-06-29 20:42:02
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-29 20:46:55
 */

// 仓库的类型
export interface CommitInterface<T> {
  commit: (type: string, value: any) => void
  state: T
}

export interface IPayload {
  type: string
  payload?: any
}
