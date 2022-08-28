import { Toast } from 'vant';

import { getUrlParam } from '@/utils/publicFunctions.js';

//获取openId唯一表示
const getOpenId = () => {
  alert(3);
  let str = '';
  if (process.env.NODE_ENV === 'development') {
  } else {
    str = getUrlParam('code');
    if (str) {
      window.g.code = str;
    }
  }

  getUserInfoByCode(window.g.code).then(res => {
    if (res && res.code == 200) {
      window.g.openId = res.data.openUser.openid;
      window.g.nickname = res.data.openUser.nickname; //昵称
      window.g.headimgurl = res.data.openUser.headimgurl; //头像
      window.g.gender = res.data.user.sex == 0 ? '男性' : '女性';
    } else {
      Toast('获取用户信息失败');
    }
  });
};

//   let ps = process.env.NODE_ENV === 'development' ? window.g.code : getUrlParam('code');
  getOpenId();
