import request from '@/utils/request.js'

if (process.env.NODE_ENV === 'development') {
    request.defaults.headers.common.openid = `15150038735`
}


/**
 * 获取微信公众号信息
 * @param params
 * @return {Promise<void>}
 */
export async function getWxConfig(params) {
    return request({
        url: '/gateway/api/jsgs/wcp/createJsAPISignature',
        method: 'post',
        data: params
    })
}


/**
 * 上传图片
 * @param params
 * @return {Promise<void>}
 */
export async function uploadImg(params) {
    return request({
        url: '/gateway/api/jsgs/user/img/upload',
        method: 'get',
        params: params
    })
}

/**
 * 获取服务器图片地址
 * @param params
 * @return {Promise<void>}
 */
export async function getImgUrl(params) {
    return request({
        url: '/gateway/api/jsgs/user/getImg',
        method: 'get',
        params: params
    })
}

/**
 * 新增车辆
 * @param params
 * @return {Promise<void>}
 */
export async function addUserVehicle(params) {
    return request({
        url: '/gateway/api/jsgs/user/add/vehicle/info',
        method: 'post',
        data: params
    })
}
