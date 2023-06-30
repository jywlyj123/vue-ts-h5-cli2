/*
 * @Author: Awei
 * @Date: 2023-06-30 19:39:40
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-30 21:02:20
 */
import { request } from '@/utils/request'
import { API_USER_COMLIONG } from '@/config/api/user'
import { UserManageType } from '@/interface/model/user'
import { AxiosError } from 'axios'

interface UserSeriviceInterface {
  login: (params: UserManageType.UserLoginFromState) => Promise<any>
  registry: (params: { username: string; password: string }) => Promise<any>
}

export const useUserSerivice = (): UserSeriviceInterface => {
  class UserService {
    login(params: UserManageType.UserLoginFromState) {
      const url = API_USER_COMLIONG.logion()
      return request
        .post(url, params)
        .then(({ data }: any) => {
          return Promise.resolve(data)
        })
        .catch((error: AxiosError) => {
          return Promise.reject(error)
        })
    }
    registry(params: { username: string; password: string }) {
      return Promise.resolve(1)
    }
  }
  return new UserService()
}
