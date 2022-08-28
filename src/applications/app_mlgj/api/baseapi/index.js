import request from '@/utils/request.js'
/**
 *
 * 基础管理api
 * @author panq
 * @time 2022/8/23
 *
 * */
const api = 'http://15400590jh.51mypc.cn' // 暂时测试使用
//  获得收费站列表
export async function gettollmarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/station/list',
    method: 'get',
  })
}
//  获得收费站详情
export async function gettollevent(id) {
     return request({
       url: api+'/jsgs-basics/basics/get/station/info?tollId='+id,
       method: 'get',
     })

   }


//  获得服务区列表
export async function getservemarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/svca/list',
    method: 'get',
  })
}

//  获得服务区详情
export async function getserveevent(id) {
  return request({
    url: api+'/jsgs-basics/basics/get/svca/info?serviceId='+id,
    method: 'get',
  })

}

//  获得高速交警列表
export async function getmotorwaymarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/gsjj/list',
    method: 'get',
  })
}
//  获得高速交警详情
export async function getcopevent(id) {
  return request({
    url: api+'/jsgs-basics/basics/get/gsjj/info?policeId='+id,
    method: 'get',
  })

}

//  获得事故快处列表
export async function gethandledmarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/kckp/list',
    method: 'get',
   
  })
}
//  获得事故快处详情
export async function gethandevent(id) {
  return request({
    url: api+'/jsgs-basics/basics/get/kckp/info?kckpId='+id,
    method: 'get',
  })

}
//  获得汽渡列表
export async function getferrymarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/qid/list',
    method: 'get',
   
  })
}
//  获得汽渡详情
export async function getrryevent(id) {
  return request({
    url: api+'/jsgs-basics/basics/get/qid/info?qdId='+id,
    method: 'get',
  })

}
      //  获得管制列表
export async function getguanzmarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/guanz/list',
    method: 'get',
  })
}
   //  获得管制点详情
   export async function getguanzevent(id) {
    return request({
      url: api+'/jsgs-basics/basics/get/guanz/info?id='+id,
      method: 'get',
    })
  }

   //  获得防疫点列表
export async function getfangymarkerlist() {
  return request({
    url: api+'/jsgs-basics/basics/get/fangy/list',
    method: 'get',
  })
}
   //  获得防疫点详情
   export async function getfangyevent(id) {
    return request({
      url: api+'/jsgs-basics/basics/get/fangy/info?fyId='+id,
      method: 'get',
    })
  }
  
 //  获得高速视频点详情
 export async function gethvidevent() {
  return request({
    url: 'http://192.169.252.178:8083/jsgs-basics/basics/get/hs/videolist',
    method: 'get',
  })
}   
 //  获得高速视频数据详情
 export async function gethvidplayauto(id) {
  return request({
    url: 'http://192.169.252.178:8083/jsgs-basics/basics/get/hs/videoplay?videoId='+id,
    method: 'get',
  })
}   

 //  获得公路视频点详情
 export async function getGvidevent() {
  return request({
    url: 'http://192.169.252.178:8083/jsgs-basics/basics/get/highway/videolist',
    method: 'get',
  })
}