/*
 * @Author: Awei
 * @Date: 2023-07-01 07:39:36
 * @Last Modified by:   Awei
 * @Last Modified time: 2023-07-01 07:39:36
 */
import { createStore } from 'vuex'
import { CommitInterface } from '@/interface/store'
import { BasicMangeType } from '@/interface/common'
const moduleWarehouse = function () {
  const modules: BasicMangeType.Data<CommitInterface<string>> = {}
  const context = require.context('./modules', true, /\.ts|js$/)
  const files = context.keys().map(key => context(key))
  files.forEach(file => {
    modules[file.default.name] = file.default
  })
  return modules
}

moduleWarehouse()

export default createStore({
  modules: moduleWarehouse()
})
