import request from '@/utils/request.js'
/**
 *
 * test
 * @author lqh
 * @time 2022/8/25
 *
 * */
const api = '/api';

//获取列表
export async function getBillList(data) {
  return request({
    url: api+'/jsgs/bill/get/list',
    method: 'post',
    data
  })
}



//获取开票记录
export async function getJlList(data) {
  return request({
    url: api+'/jsgs/bill/get/applyForEndList',
    method: 'post',
    data
  })
}

//打印开票
export async function prints(data) {
  return request({
    url: api+'/jsgs/bill/print',
    method: 'post',
    data
  })
}

//打印开票
export async function getPdfUrl(data) {
  return request({
    url: api+'/jsgs/bill/get/invoiceInfo',
    method: 'post',
    data
  })
}