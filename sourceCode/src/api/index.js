import HttpHandler from '@/handler/HttpHandler'
import HttpConstant from '@/const/HttpConstant'

export default class Api {
  constructor() {
    this.http = new HttpHandler()
  }

  // 登录
  setLogin(data) {
    const url = HttpConstant.HTTP + '/appLogin'
    return this.http.post(url, data)
  }

  // 查询发料单信息-分页
  getPage(data) {
    const url = HttpConstant.HTTP +  '/sendOrder/pageWithQuantity'
    return this.http.get(url, data)
  }

  // 发料单信息-详情
  getDetail(data) {
    const url = HttpConstant.HTTP +  '/sendOrder/detail'
    return this.http.get(url, data)
  }

  // 发料单信息-详情
  getListBySendOrderId(data) {
    const url = HttpConstant.HTTP + '/send/listBySendOrderId'
    return this.http.get(url, data)
  }

  // 物料打码-列表
  getStockPage(data) {
    const url =  HttpConstant.HTTP + '/stock/page'
    return this.http.get(url, data)
  }
  
  // 物料打码-详情
  getStockDetail(data) {
    const url =  HttpConstant.HTTP + '/stock/detail'
    return this.http.get(url, data)
  }
  
  // 物料打码-模糊搜索
  getListLikeCode(data) {
    const url =  HttpConstant.HTTP + '/stock/listLikeCode'
    return this.http.get(url, data)
  }
    
  // 生产线
  getProductionLine(data) {
    const url =  HttpConstant.HTTP + '/productionLine/list'
    return this.http.get(url, data)
  }
}