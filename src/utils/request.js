import axios from 'axios'
import qs from 'qs'


const baseURL = '/api'


/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL,
  timeout: 2000,
  // headers: {

  //   token: 'AT-69-JSYppTF-6QGD-dASscStLcE5E8drfVqG',
  //   // class: queryList.queryCookie('workinfo')
  //   //   ? JSON.parse(queryList.queryCookie('workinfo')).classes
  //   //   : '1',
  //   // workcode: queryList.queryCookie('workinfo')
  //   //   ? JSON.parse(queryList.queryCookie('workinfo')).workcode
  //   //   : 'TZDQ001',
  //   // userid: queryList.queryCookie('workinfo')
  //   //   ? JSON.parse(queryList.queryCookie('workinfo')).userid
  //   //   : '2090006006',

  //   // microid: 'TVRVeU5USXlNRGd5T0RrPQ=='

  //   // microid: 'TVRVeU5USXlNRGd5T0RrPQ==',
  //   // microname: 'NWFTUDVMeWc1WVdM'

  // }
})

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
  config => {
    // if(config.requsetBase ===1 ){
    //   config.baseURL='http://110.198.170.20:1918'
    // }


     
  
    if (
      config.data &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'
    ) {
      config.data = qs.stringify(config.data)
    }
 
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  response => {
    if (response.data.code != 200 && response.data.code) {

      if (response.data.code == 401) {
        setTimeout(() => {
          // window.location.href = 'http://139.198.170.20:1918/portlet/'
        }, 1000)
      }
    } else {
      // if (response.data.message == '新增成功' || response.data.message == '添加成功') {
      //   message.success(response.data.message)
      // } else if (
      //   response.data.message == '修改成功' ||
      //   response.data.message == '更新成功'
      // ) {
      //   message.success(response.data.message)
      // }
    }

   
    const { data } = response
    const { code } = data
    if (code == 406) {
      return Promise.reject('权限认证未通过')
    } else {
      return data
    }
  },
  error => {
    console.warn(error)

  }
)

export default instance
