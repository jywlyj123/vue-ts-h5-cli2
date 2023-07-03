/*
 * @Author: Awei
 * @Date: 2023-06-30 19:23:29
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-02 21:29:17
 */
import 'vant/lib/index.css'
import { Form, Field, CellGroup, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Image as VanImage, Search } from 'vant'

export const initVant = function (app: any) {
  app.use(Form)
  app.use(Field)
  app.use(CellGroup)
  app.use(NavBar)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(VanImage)
  app.use(Search)
}
