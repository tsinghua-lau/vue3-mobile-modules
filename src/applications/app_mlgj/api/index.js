import request from '@/utils/request.js'
/**
 *
 * test
 * @author lqh
 * @time 2022/8/11
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