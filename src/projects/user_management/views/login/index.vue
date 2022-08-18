<template>
  <div id="box">
    <div class="bg"></div>
    <div class="content">
      <div class="phone">
        <van-cell-group inset>
          <van-field :size="large" v-model="phone" placeholder="请输入手机号" />
        </van-cell-group>
      </div>
      <div class="validation">
        <div class="l">
          <van-cell-group inset>
            <van-field :size="large" v-model="graphics" placeholder="输入图形验证码" />
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
            <van-field :size="large" v-model="sms" placeholder="输入短信验证码" />
          </van-cell-group>
        </div>
        <div class="r" @click="getNum">获取验证码</div>
      </div>
      <div class="agreement">
        <div class="l"><van-checkbox v-model="checked" icon-size="15px" shape="square"></van-checkbox></div>
        <div class="r">注册代表同意《用户协议》</div>
      </div>
      <div class="login" @click="login">登 录</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted,getCurrentInstance } from 'vue';
import SIdentify from '../../components/verification/index.vue';
import {load} from '../../components/loading/loading.js'
const { proxy } = getCurrentInstance();

import { Notify,Toast } from 'vant';

onMounted(()=>{
    refreshCode();
    Toast('提示内容');

    // Notify({ type: 'danger', message: '通知内容' , position: 'center',background:'pink',});
})

const phone = ref('');//手机号
const graphics = ref('');//图形验证
const sms = ref('');//短信验证
let identifyCode = ref('');//图片字母
const checked = ref(true);//用户协议

//登录
const login = ()=>{
   proxy.$mybus.emit('test', '组件传值~~~');
  console.log('登录');
}

//获取验证码
const getNum = ()=>{

}
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
  line-height: 30px;
  font-size: 16px;
}
</style>
