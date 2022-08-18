import request from '@/utils/request.js'
/**
 *
 * @author 
 * @time 2022/8/17
 *
 * */
//  获得用户权限
export async function getUserAuth(params) {
  return request({
    url: '/3d/device/list',
    method: 'get',
    params: params,
 
  })
}