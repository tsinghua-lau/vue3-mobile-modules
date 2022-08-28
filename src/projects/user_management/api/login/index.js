import request from '@/utils/request.js'
/**
 *
 * test
 * @author lqh
 * @time 2022/8/25
 *
 * */
const api = '/api';
//  获得验证码
export async function getVerificationCode(params) {
  return request({
    url: api+'/jsgs/user/sendMsg',
    method: 'get',
    params: params,
 
  })
}

//点击登录
export async function loginApi(data) {
  return request({
    url: api+'/jsgs/user/login',
    method: 'post',
    data
 
  })
}

//退出登录
export async function loginOut(params) {
  return request({
    url: api+'/jsgs/user/loginOut',
    method: 'get',
    params:params
 
  })
}

//通过code获取用户信息
export async function getUserInfoByCode(data) {
  return request({
    url: api+'/jsgs/wcp/getUserInfoByCode',
    method: 'post',
    data
  })
}

//修改昵称、头像、性别 保存
export async function saveUserInfo(data) {
  return request({
    url: api+'/jsgs/user/save/info',
    method: 'post',
    data
  })
}

//获取用户基本信息，非微信接口
export async function getLocalUserInfo(params) {
  return request({
    url: api+'/jsgs/user/get/info',
    method: 'get',
    params:params
  })
}

//获取用户关注预约列表数据
export async function subscribeList(params) {
  return request({
    url: api+'/jsgs/user/get/subscribe/list',
    method: 'get',
    params:params
  })
}


//暂停推送
export async function pauseInfo(data) {
  return request({
    url: api+'/jsgs/user/modify/subscribe/pause/info',
    method: 'post',
    data
  })
}

//暂停推送
export async function cancelBtn(data) {
  return request({
    url: api+'/jsgs/user/subscribe/cancel',
    method: 'post',
    data
  })
}


/**
 * 获取微信公众号信息
 * @param params
 * @return {Promise<void>}
 */
 export async function getWxConfig(params) {
  return request({
      url: api+ '/jsgs/wcp/createJsAPISignature',
      method: 'post',
      data: params
  })
}

/**
 * 获取服务器图片地址
 * @param params
 * @return {Promise<void>}
 */
 export async function getImgUrl(params) {
  return request({
      url:  api+ '/jsgs/user/getImg',
      method: 'get',
      params: params
  })
}

/**
 * 上传图片
 * @param params
 * @return {Promise<void>}
 */
 export async function uploadImg(params) {
  return request({
      url:  api+ '/jsgs/user/img/upload',
      method: 'get',
      params: params
  })
}