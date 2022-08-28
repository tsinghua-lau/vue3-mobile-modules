import request from '@/utils/request.js'
/**
 *
 * 气象详情api
 * @author chenz
 * @time 2022/8/23
 *
 * */
 const api = 'http://15400590jh.51mypc.cn' // 暂时测试使用
 //  获得气象详情接口
 export async function gettollmarkerlist( params) {
   return request({
     url: api+'/jsgs-basics/basics/get/weather/info',
     method: 'get',
     params: params,
   })
 }
//  获取搜索关键词数据
export async function queryserchend() {
  return request({
    url: api+'/jsgs-basics/basics/get/bdata/list',
    method: 'get',
  })
}
