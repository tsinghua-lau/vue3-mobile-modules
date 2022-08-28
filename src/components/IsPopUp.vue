<!-- 判断用户是否关注公众号，没有则弹框 -->
<template>
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
      <div class="title">请关注感动高速公众号</div>
      <div class="block">
        <img src="../assets/login.jpg" alt="" srcset="" />
      </div>
    </div>
  </van-overlay>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/utils/request.js';
import { getUserInfoByCode } from '@/projects/user_management/api/login/index.js';
import { getUrlParam } from '@/utils/publicFunctions.js';

import { Toast } from 'vant';

const show = ref(false);

onMounted(() => {
  let ps = process.env.NODE_ENV === 'development' ? window.g.code : getUrlParam('code');
  getOpenId();
});

//获取openId唯一表示
const getOpenId = () => {
  let str = '';
  if (process.env.NODE_ENV === 'development') {

  } else {
    str = getUrlParam('code');
    if (str) {
      window.g.code = str;
    }
  }

  getUserInfoByCode(window.g.code).then(res => {
    debugger
    if (res && res.code == 200) {
      if(res.data.user.subscribe == 0){
        show.value = true;
      }
      window.g.openId = res.data.openUser.openid;
      window.g.nickname = res.data.openUser.nickname; //昵称
      window.g.headimgurl = res.data.openUser.headimgurl; //头像
      window.g.gender = res.data.user.sex == 0 ? '男性' : '女性';
    } else {
      Toast('获取用户信息失败');
    }
  });
};

</script>
<style lang="less" scoped>
.van-overlay {
  background: rgb(0, 0, 0, 0.9) !important;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  .title {
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 17px;
    // background: red;
    text-align: center;
    color: #fff;
  }
}

.block {
  // width: 120px;
  // height: 120px;
  // background-color: #fff;
}
</style>
