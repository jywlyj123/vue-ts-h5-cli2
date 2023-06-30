/*
 * @Author: Awei
 * @Date: 2023-06-30 19:23:29
 * @Last Modified by: Awei
 * @Last Modified time: 2023-06-30 19:36:14
 */
import 'vant/lib/index.css'
import { Form, Field, CellGroup, NavBar } from 'vant'

export const initVant = function (app: any) {
  app.use(Form)
  app.use(Field)
  app.use(CellGroup)
  app.use(NavBar)
}
