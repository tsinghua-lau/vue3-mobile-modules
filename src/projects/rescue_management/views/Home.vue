<template>
  <div class="bottom-double-btn-box">
    <div class="coset-btn">
      <img class="coset-btnimg"
           src="../images/rescuecosts.png"
           alt="" />
      <span @click="showfyEdit">救援费用</span>
      <!-- @click="goToChargingstandard" -->
    </div>
    <div class="line"></div>

    <div :class="state==0?'request-btn':'statehidden'">
      <img class="coset-btnimg"
           src="../images/phone.png"
           alt="" />
      <span>如需帮助,请拨96777</span>
    </div>

    <div :class="state==1?'request-btn':'statehidden'">
      <img class="left-more coset-btnimg"
           src="../images/requestrescue.png"
           alt="" />
      <span @click="showDialogEdit">请求救援</span>
    </div>

    <div :class="state==2?'request-btn':'statehidden'">
      <img class="left-little coset-btnimg"
           src="../images/time.png"
           alt="" />
      <span>等待应答</span>
      <span style="color:#02D8A5">04:59</span>
    </div>

    <div :class="state==3||state==4?'requesting-btn':'statehidden'">
      <div>
        <img class="coset-btnimg2"
             src="../images/requestrescue.png"
             alt="" />
        <span>正在救援中...</span>
      </div>
      <sapn class="notice">可在公众号中发送位置浏息进行互动</sapn>
    </div>

  </div>

  <!-- 您未在高速上顶部提示 -->
  <div :class="state==0?'top-tips':'statehidden'">
    未匹配到您在高速上的位置
  </div>
  <!-- 耐心等待提示 -->
  <div :class="state==3?'wait-tips':'statehidden'">
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

  <van-overlay class="deep"
               :show="showfy">
    <div class="close-btn"
         @click="showfy = false"><img src="../images/close.png" /></div>
    <charghtml></charghtml>
  </van-overlay>

</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'; // 引入useStore 方法
import { SubmitRescue, getUserStation, getUserRescueState } from '../api/index.js';
import { Toast } from 'vant';
import charghtml from './../components/notice/Chargingstandard.vue'; //救援费用组件引入
// import SocketService from './../websocket/web_socket_service'; //引入websocket

const { proxy } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
const store = useStore(); // 该方法用于返回store 实例
console.log(store); // 不知道为甚获取不到？？

const state = ref(0);
const show = ref(false); //弹窗展示发起救援
const showfy = ref(false); //弹窗展示救援费用
const nowtime = '';
const endtiime = '';

// export default {
//   name: 'App',
//   components: { charghtml },
// };

//发起救援服务弹窗
const showDialogEdit = () => {
  if (state.value == 1) {
    show.value = true;
  } else {
    state.value = 1;
  }
};

//发起救援费用弹窗
const showfyEdit = () => {
  showfy.value = true;
};

//取消救援
const closeDialogEdit = () => {
  show.value = false;
};

const userInfo = {
  //用于存放救援人员信息
  fromPhoneNum: '13585338332',
  roadNum: 'G15',
  roadName: '沈海高速',
  roadDirection: '0',
  position: '340',
  mileage: '100',
  laneType: '4',
  longitude: '120.224595',
  latitude: '32.089606',
  rescueType: '1',
  rescueState: '0',
};

//确认救援
const handleRescue = () => {
  // SubmitRescue(userInfo).then(res => {
  //   if (res.code == 200) {
  //     state.value = 2;
  //     show.value = false;
  //     if (res.code == 'success') {
  //       Toast('救援发起成功');
  //     } else {
  //       Toast('救援发起失败');
  //     }
  //     // proxy.$mybus.emit('makeCarMark', '地图数据操作~~~');
  //   }
  // });
  state.value = 2;
  show.value = false;
  Toast('救援发起成功');
  //开始倒计时
  // nowtime = parseInt(new Date().getTime() / 1000); //获取当前时间
  // endtime = parseInt((new Date().getTime() + 300000) / 1000); //获取当前时间的后5min
};

//跳转至救援明细页面
const goToChargingstandard = () => {
  router.push({ name: 'Chargingstandard' });
};

//修改救援状态
proxy.$mybus.on('changState', data => {
  // store.commit('setState', data);
  state.value = data;
});

//5min倒计时
const countdown = () => {};

//切换至救援页面所需工作
proxy.$mybus.on('goToRescuePage', data => {
  //调用用户救援状态接口
  getUserRescueState({
    userId: '13585338332',
  }).then(res => {
    //测试数据
    res = {
      code: 200,
      msg: 'success',
      data: {
        eventId: 'ff80818169e0cdb2016a4304eaa20294',
        fromPhoneNum: '18779239070',
        state: '1',
        rescueCar: {
          plate: '苏JF121Y',
          latitude: '32.46965016',
          longitude: '120.59435125',
          speed: '80',
          orientation: 293,
          requestTime: '2022-08-15 19:11:04',
        },
      },
    };
    if (res.code == 200) {
      //对状态的处理
      if (res.data.state == 0) {
        //待应答
        state.value = 2;
      } else if (res.data.state == 1) {
        if (res.data.rescueCar == '') {
          //待救援，未发车
          state.value = 3;
        } else {
          //待救援，已发车
          state.value = 4;
          //绘制车辆点
        }
      } else {
        state.value = 1;
      }
    }
  });
  setTimeout(async () => {
    // 获取当前人员信息  同步
    // let data = await getUserStation({
    //   lon: '120.224595', //测试用经纬度
    //   lat: '32.089606',
    // }); //获取人员是否在高速上，如果在，获取前后各两个桩号并展示
    let data = [
      {
        position: '103',
        mileage: '400',
        lon: '118.923734',
        lat: '32.112041',
      },
      {
        position: '103',
        mileage: '500',
        lon: '118.906568',
        lat: '32.06201',
      },
      {
        position: '103',
        mileage: '700',
        lon: '118.910733',
        lat: '32.073693',
      },
      {
        position: '103',
        mileage: '800',
        lon: '118.904021',
        lat: '32.05683',
      },
    ];
    if (data.length > 0) {
      // state.value = 1;
      proxy.$mybus.emit('makeStationMarks', data); //添加地图桩号
    } else {
      state.value = 0;
    }
  }, 500);
});

onMounted(() => {});
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
  bottom: 94px;
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
  float: left;
  margin-left: 48px;
  margin-top: 2px;
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
.requesting-btn div span {
  float: left;
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
.left-little {
  margin-left: 34px;
}
.statehidden {
  display: none;
}
.close-btn {
  position: fixed;
  z-index: 9999;
  /* width: 100%; */
  /* text-align: right; */
  /* background: #fff; */
  height: 16px;
  width: 10px;
  right: 14px;
  top: -4px;
}
.close-btn img {
  width: 16px;
}
</style>
