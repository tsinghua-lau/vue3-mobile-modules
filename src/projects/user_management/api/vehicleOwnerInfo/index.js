import request from '@/utils/request.js'

if (process.env.NODE_ENV === 'development') {
    request.defaults.headers.common.openid = `15150038735`
}


/**
 * 获取绑定车辆列表
 * @param params
 * @return {Promise<void>}
 */
export async function getVehicleList(params) {
    return request({
        url: '/gateway/api/jsgs/user/get/vehicle/list?',
        method: 'get',
        params: params
    })
}
