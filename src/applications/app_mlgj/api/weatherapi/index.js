import request from '@/utils/request.js'

/**
 *
 * 气象api
 * @author chenz
 * @time 2022/8/24
 *
 * */
 const api = 'http://192.169.250.236:8085' // 暂时测试使用
 //  获得降雨量路线数据
 export async function getrainfallline() {
   return request({
     url: api+'/jsgs-basics/basics/get/weather/rainfall',
     method: 'get',
   })
 }

 //  获得温度数据
 export async function gettempline() {
  return request({
    url: api+'/jsgs-basics/basics/get/weather/temp',
    method: 'get',
  })
}

 //  获得风向数据
 export async function getwindline() {
  return request({
    url: api+'/jsgs-basics/basics/get/weather/wind',
    method: 'get',
  })
}
//  获得pm2.5数据
export async function getpmline() {
  return request({
    url: api+'/jsgs-basics/basics/get/weather/pm',
    method: 'get',
  })
}
//  获得aqi数据
export async function getaqiline() {
  return request({
    url: api+'/jsgs-basics/basics/get/weather/aqi',
    method: 'get',
  })
}



//  http://15400590jh.51mypc.cn/jsgs-basics/basics/get/weather/rainfall       降雨量数据
// http://15400590jh.51mypc.cn/jsgs-basics/basics/get/weather/temp      温度数据
// http://15400590jh.51mypc.cn/jsgs-basics/basics/get/weather/wind      风向数据
// http://15400590jh.51mypc.cn/jsgs-basics/basics/get/weather/pm    pm2.5数据
// http://15400590jh.51mypc.cn/jsgs-basics/basics/get/weather/aqi    aqi数据