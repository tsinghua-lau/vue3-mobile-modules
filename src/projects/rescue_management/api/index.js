import request from '@/utils/request.js'
/**
 *
 * @author 
 * @time 2022/8/17
 *
 * */
//  获得用户权限
export async function getUserInformation(params) {
  return request({
    url: '/3d/device/list',
    method: 'get',
    params: params,
  })
}

// /**
//  *
//  * @author chenz
//  * @time 2022/8/17
//  *
//  * */
// //  获得用户经纬度
// export const getUserLocation = (map, onComplete = function () {}, onError = function () {}) => {
//   //定位完成的回调
//   var onComplete = res => {
//     console.log('定位完成');
//     let flg = false;
//     let positions = [res.position.lng, res.position.lat];
//     return positions;
//   };
// };


/**
 *
 * @author chenz
 * @time 2022/8/17
 *
 * */
//  根据经纬度查询用户所在道路以及桩号
export async function getUserStation(params) {
  return await request({
    url: 'http://15400590jh.51mypc.cn/jsgs-rescue/rescue/get/userLocation/info',
    method: 'get',
    params: params,
  })
}

/**
 *
 * @author  chenz
 * @time 2022/8/23
 *
 * */
//  提交救援
export async function SubmitRescue(params) {
  return request({
    url: 'http://15400590jh.51mypc.cn/jsgs-rescue/rescue/initiate/info',
    method: 'post',
    params: params,
  })
}

/**
 *
 * @author chenz
 * @time 2022/8/17
 *
 * */
//  获取用户救援状态  (0、待应答，1、救援中，2已结束)
export async function getUserRescueState(params) {
  return request({
    url: 'http://15400590jh.51mypc.cn/jsgs-rescue/rescue/get/inprogress/info',
    method: 'get',
    params: params,
  })
}

