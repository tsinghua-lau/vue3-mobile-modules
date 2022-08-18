<template>

  <div class="bottom-double-btn-box">
    <div class="coset-btn">
      <img class="coset-btnimg"
           src="../images/rescuecosts.png"
           alt="" />
      <span @click="goToChargingstandard">救援费用</span>
    </div>
    <div class="line"></div>

    <div :class="state==2?'request-btn statehidden':'request-btn'">
      <img :class="state>0?'left-more coset-btnimg':'coset-btnimg'"
           src="../images/phone.png"
           alt="" />
      <span @click="showDialogEdit">{{text}}</span>
    </div>

    <div :class="state==2?'requesting-btn':'requesting-btn statehidden'">
      <div>
        <img class="coset-btnimg2"
             src="../images/requestrescue.png"
             alt="" />
        <span>正在救援中...</span>
      </div>
      <sapn class="notice">可在公众号中发送位置浏息进行互动</sapn>
    </div>

  </div>
  <div class="adress-now">
    <van-icon name="aim"
              color="#1989fa" />
  </div>

  <!-- 您未在高速上顶部提示 -->
  <div :class="state==0?'top-tips':'top-tips statehidden'">
    未匹配到您在高速上的位置
  </div>
  <!-- 耐心等待提示 -->
  <div :class="state==2?'wait-tips':'wait-tips statehidden'">
    请耐心等待救援车辆
  </div>

  <van-overlay class="deep"
               :show="show"
               @click="show = false">
    <div class="wrapper"
         @click.stop>
      <div class="cost-dialog">
        <img class="dialog-img"
             src="../images/dialogtop.png" />
        <span class="dialog-message">发起救援</span>
        <div>
          <van-button class="cancel-btn"
                      round
                      type="default"
                      @click="closeDialogEdit">取消</van-button>
          <van-button round
                      type="primary"
                      @click="handleRescue">确定</van-button>
        </div>
      </div>
    </div>
  </van-overlay>

</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toast } from 'vant';

const { proxy, ctx } = getCurrentInstance();
const route = useRoute();
const router = useRouter();

const text = ref('如需帮助,请拨96777');
const state = ref(0);
const show = ref(false);

//发起救援服务弹窗
const showDialogEdit = () => {
  if (state.value == 1) {
    show.value = true;
  } else {
    state.value = 1;
    text.value = '请求救援';
  }
};
//取消救援
const closeDialogEdit = () => {
  show.value = false;
};

//确认救援
const handleRescue = () => {
  text.value = '救援中...';
  state.value = 2;
  show.value = false;
  Toast('正在救援中...');

  proxy.$mybus.emit('makeCarMark', '地图数据操作~~~');
};

//跳转至救援明细页面
const goToChargingstandard = () => {
  router.push({ name: 'Chargingstandard' });
};

//显示当前状态
const showState = () => {
  if (state.value == 0) {
    text.value = '如需帮助,请拨96777';
  } else if (state.value == 1) {
    text.value = '请求救援';
  }
};

// let state = reactive({
//   map: null,
//   date: '',
// });

//确认救援服务按钮请求
// const beforeClose = action =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       if (action === 'confirm') {
//         resolve(true);
//       } else {
//         // 拦截取消操作
//         resolve(false);
//       }
//     }, 1000);
//   });

//初始化地图
// const initMap = () => {
//   state.map = new AMap.Map('container', {
//     zoom: 7.5,
//     zooms: [7, 15],
//     viewMode: '3D',
//     // pitch: 10,
//     // zIndex: 100,
//     center: [119.20058, 32.98972],
//     mapStyle: 'amap://styles/80285d8f601c5dc8a2943c3720108b0e',
//   });
// };

onMounted(() => {
  // initMap();
  // proxy.$mybus.emit('selectDoubleLine', '地图数据操作~~~');
  showState();
});
</script>

<style scoped lang="less">
.rescue-map {
  position: fixed;
  width: 100%;
  /* height: 100%; */
  line-height: 20;
  text-align: center;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  // background: green;
}
.bottom-double-btn-box {
  width: calc(100% - 30px);
  margin-left: 15px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  bottom: 100px;
  height: 60px;
  box-shadow: 0px 8px 20px 0px rgba(59, 118, 239, 0.3);
  z-index: 999;
  position: fixed;
  font-size: 16px;
}
.adress-now {
  // z-index: 999;
  position: fixed;
  bottom: 220px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  right: 15px;
  background: #fff;
  box-shadow: 0px 5px 14px 0px rgba(126, 126, 126, 0.1);
}
.coset-btnimg {
  height: 16px;
  margin-right: 1px;
  // vertical-align: middle;
  margin-top: 22px;
  float: left;
  margin-left: 20px;
}
.coset-btnimg2 {
  height: 16px;
  margin-right: 6px;
  // vertical-align: middle;
  // margin-top: 22px;
  // float: left;
  margin-left: 20px;
}

.coset-btn {
  float: left;
  width: 38%;
  height: 60px;
  line-height: 60px;
  // border-right: 2px solid #999;
  text-align: center;
}
.coset-btn span {
  float: left;
  margin-top: 1px;
  margin-left: 6px;
}

.request-btn {
  float: left;
  width: 60%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  // display: none;
}
.request-btn span {
  float: left;
  margin-top: 1px;
  margin-left: 6px;
}

.requesting-btn {
  margin-top: 10px;
  float: left;
  width: 60%;
  height: 60px;
  line-height: 20px;
  text-align: center;
  // display: none;
}

.cost-dialog {
  width: 320px;
  height: 180px;
  background: #fff;
  position: fixed;
  top: calc(50% - 90px);
  left: calc(50% - 160px);
  background: linear-gradient(0deg, #ffffff 71%, #e9f1ff 100%);
  border-radius: 10px;
  text-align: center;
}
.dialog-message {
  margin-top: 52px;
  display: inline-block;
  font-size: 24px;
}
.cost-dialog > div {
  margin-top: 26px;
}
.cost-dialog > div > button {
  width: 120px;
  margin-left: 15px;
  margin-right: 15px;
}

.cost-dialog > div > button {
  width: 120px;
  margin-left: 15px;
  margin-right: 15px;
}

.dialog-img {
  width: 80px;
  position: absolute;
  margin: 0 auto;
  left: calc(50% - 40px);
  top: -40px;
}
.cancel-btn {
  background: #f6f6f6;
  color: #666;
}
.top-tips {
  position: fixed;
  top: 0px;
  width: calc(100% - 4px);
  height: 32px;
  text-align: center;
  line-height: 32px;
  background: rgba(249, 238, 217, 0.86);
  border: 2px solid #f7a247;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  color: #fa6c0e;
  z-index: 999;
  // display: none;
}
.wait-tips {
  position: fixed;
  top: 40px;
  width: calc(100% - 60px);
  margin-left: 30px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  background: url(../images/tips-bg.png);
  font-size: 18px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  color: #333;
  background-size: contain;
  z-index: 999;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.deep {
  z-index: 9999;
}
.line {
  width: calc(2% - 2px);
  height: 26px;
  float: left;
  margin-top: 17px;
  border-right: 2px solid #999;
}
.notice {
  display: inline-block;
  color: #666666;
  font-size: 12px;
}
.left-more {
  margin-left: 60px;
}
.statehidden {
  display: none;
}
</style>
