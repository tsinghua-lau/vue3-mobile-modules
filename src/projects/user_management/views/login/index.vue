<template>
  <div id="box">
    <div class="bg"></div>
    <div class="content">
      <div class="phone">
        <van-cell-group inset>
          <van-field size="large" v-model="phone" placeholder="请输入手机号" />
        </van-cell-group>
      </div>
      <div class="validation">
        <div class="l">
          <van-cell-group inset>
            <van-field size="large" v-model="graphics" placeholder="输入图形验证码" />
          </van-cell-group>
        </div>
        <div class="r">
          <span @click="refreshCode" style="cursor: pointer">
            <s-identify :identifyCode="identifyCode"></s-identify>
          </span>
        </div>
      </div>
      <div class="sms">
        <div class="l">
          <van-cell-group inset>
            <van-field size="large" v-model="sms" placeholder="输入短信验证码" />
          </van-cell-group>
        </div>
        <div class="r" @click="getNum">{{ countdown }}</div>
      </div>
      <div class="agreement">
        <div class="l"><van-checkbox v-model="checked" icon-size="15px" shape="square"></van-checkbox></div>
        <div class="r">注册代表同意《用户协议》</div>
        <!-- 注册代表同意《<span style="color:#005fff">用户协议</span>》</div> -->
      </div>
      <div class="login" @click="login">登 录</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import SIdentify from '../../components/verification/index.vue';
import { load } from '../../components/loading/loading.js';
const { proxy } = getCurrentInstance();
import { useRoute, useRouter } from 'vue-router';

import { getVerificationCode, loginApi, getUserInfoByCode } from '../../api/login/index';

import { Notify, Toast } from 'vant';
import { getCode, getUrlParam } from '@/utils/publicFunctions.js';



onMounted(() => {
  //直接到url上获取不调用微信方法了
  // getOpenId()

  //刷新图片验证码
  refreshCode();
  // Notify({ type: 'danger', message: '通知内容' , position: 'center',background:'pink',});
});

const phone = ref(''); //手机号15850501445
const graphics = ref(''); //图形验证
const sms = ref(''); //短信验证
let identifyCode = ref(''); //图片字母
const checked = ref(true); //用户协议
const countdown = ref('发送验证码');
const route = useRoute();
const router = useRouter();

//获取openId唯一表示
const getOpenId = ()=>{
  let str = '';
  if(process.env.NODE_ENV === "development"){
    
  }else{
    str =  getUrlParam('code');
    if(str){
      window.g.code = str;
    }
  }

  getUserInfoByCode( window.g.code).then(res=>{
    debugger
    console.log(res);
    if(res.code == 200){
      window.g.openId = res.data.openUser.openid;
      window.g.nickname = res.data.openUser.nickname;//昵称
      window.g.headimgurl = res.data.openUser.headimgurl;//头像
    }
    
  })
}

//登录
const login = () => {
  if (!isPhoneNum(phone.value)) {
    Toast('手机号格式错误');
    return;
  }

  if (graphics.value == '' || graphics.value.toLowerCase() !== identifyCode.value.toLowerCase()) {
    Toast('图形验证码错误');
    return;
  }

  if (!checked.value) {
    Toast('请勾选用户协议');
    return;
  }

  //短信验证码验证
  loginApi({ mobile: phone.value, verifyCode: sms.value, openId: 'oppQrxDDzgEXwoJ0YrCzwwLwu7DM' }).then(res => {
    debugger;
    console.log(res);
    if (!res) {
      Toast('接口错误！');
      return;
    }
    if (res.code == 1107) {
      Toast('验证码失效,请重新发送！');
      return;
    } else if (res.code == 1103) {
      Toast('验证码错误！');
      return;
    } else {
      //存手机号
      window.g.mobile = phone.value;
      //成功登录
      router.push({
        path: '/user',
        query: {
          phone: phone.value,
        },
      });
    }
  });

  // proxy.$mybus.emit('test', '组件传值~~~');
};

//获取验证码
const getNum = () => {
  let fn = () => {
    let count = 60;
    let time = setInterval(() => {
      count--;
      if (count === 0) {
        countdown.value = '发送验证码';
        clearInterval(time);
      } else {
        countdown.value = `已发送(${count})`;
      }
    }, 1000);
  };

  if (countdown.value == '发送验证码') {
    //验证图形码是否正确
    if (graphics.value == '' || graphics.value.toLowerCase() !== identifyCode.value.toLowerCase()) {
      Toast('图形验证码错误');
      return;
    }
    //发送验证码请求
    getVerificationCode({ mobile: phone.value }).then(res => {
      console.log(res);
      if (res && res.code == 200) {
        Toast('发送成功');
        fn();//启用定时器
      }else if(res && res.code == 500){
        Toast('请勿重复发送');
      }else{
        Toast('发送失败');
      }
    });
    
  }
};
// 验证码规则
let identifyCodes = ref('3456789ABCDEFGHGKMNPQRSTUVWXY');

//刷新验证码
const refreshCode = () => {
  identifyCode.value = '';
  makeCode(identifyCodes.value, 4);
};

//生成字母
const makeCode = (o, l) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += identifyCodes.value[Math.floor(Math.random() * (identifyCodes.value.length - 0) + 0)];
  }
};

//验证手机号
const isPhoneNum = phones => {
  var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!myreg.test(phones)) {
    console.log('手机号格式不正确');
    return false;
  } else {
    console.log('手机号格式正确');
    return true;
  }
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
html,
body {
  width: 100%;
  height: 100vh;
}
#box {
  width: 100%;
  height: 100vh;
  position: relative;
}
.bg {
  width: 100%;
  height: 222px;
  background-image: url('../../images/login-bg.png');
  background-size: cover;
}
.content {
  background: #fff;
  width: 100%;
  margin-top: -20px;
  border-radius: 10px;
  z-index: 99;
}
.phone {
  margin-top: 60px;
  width: 90%;
  margin-left: 5%;
}
.validation {
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
  display: flex;
  .l {
    width: 60%;
  }
  .r {
    width: 30%;
    margin-left: 0;
    padding-top: 2px;
    margin-right: 38px;
  }
}

.sms {
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
  display: flex;
  .l {
    width: 60%;
  }
  .r {
    width: 35%;
    text-align: center;
    height: 45px;
    line-height: 45px;
    margin-left: 0;
    padding-top: 2px;
    background: #f3f5f8;
    font-size: 15px;
    border-radius: 5px;
  }
}
.agreement {
  margin-top: 30px;
  width: 90%;
  margin-left: 5%;
  display: flex;
  .l {
    width: fit-content;
    margin-left: 5%;
    margin-right: 5px;
  }
  .r {
    font-size: 12px;
    margin-top: -2px;
    font-family: 'SourceHanSansCN';
  }
}
.login {
  width: 80%;
  height: 48px;
  margin-left: 10%;
  line-height: 48px;
  text-align: center;
  color: #fff;
  margin-top: 30px;
  font-size: 15px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background: #83b1ff;
}
.van-cell.van-field {
  background: #f3f5f8;
  height: 48px;
  line-height: 27px;
  font-size: 16px;
}
</style>
