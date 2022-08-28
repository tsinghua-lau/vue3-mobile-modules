import request from '@/utils/request.js'

if (process.env.NODE_ENV === 'development') {
    request.defaults.headers.common.openid = `加密`
}


/**
 * 获取通知公告列表数据
 * @author zwq
 * @time 2022/8/25
 */
export async function getNoticeList(params) {
    return request({
        url: '/jsgs/notice/get/list',
        method: 'post',
        data: params,
    })
}

/**
 * 获取公告 详情
 * @author zwq
 * @time 2022/8/25
 */
export async function getNoticeInfo(params) {
    return request({
        url: '/jsgs/notice/get/info',
        method: 'post',
        data: params,
    })
}
