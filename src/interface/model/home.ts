/*
 * @Author: Awei
 * @Date: 2023-07-02 20:00:09
 * @Last Modified by: Awei
 * @Last Modified time: 2023-07-02 21:35:02
 */
export namespace HomeManageType {
  // 轮播图类型
  export interface CarouselInterface {
    cid: string
    tit: string
    start_time: string
    end_time: string
    img: string
    type: number
  }
  // 商品列表类型
  export interface ProductInterface {
    pid: string
    pname: string
    imgUrl: string
    sales: string
    original_price: string
    sale_price: string
    mode: string
    carousel: string
    desc: string
    s_text: string
    s_type: number
    t_type: number
    cid: string | null
  }
}
