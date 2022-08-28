import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';

const baseURL = '/api';

/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL,
  timeout: 2000,
  headers: {
    // 'Referer': 'wxgzhcs.jchc.cn',
    openid: window.g.openId,
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
  config => {
    // if(config.requsetBase ===1 ){
    //   config.baseURL='http://110.198.170.20:1918'
    // }

    if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  response => {
    if (response.data.code != 200 && response.data.code) {
      if (response.data.code == '-401') {
        //未关注公共号,弹出二维码
        Toast('您未关注公众号')
      }
    } else {
    }

    const { data } = response;
    const { code } = data;
    if (code == 406) {
      return Promise.reject('权限认证未通过');
    } else {
      return data;
    }
  },
  error => {
    console.warn(error);
  }
);

export default instance;
