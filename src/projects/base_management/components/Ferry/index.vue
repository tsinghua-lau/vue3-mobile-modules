<template>
  <div class="isod">
    <div class="title_top_f">
      <img class="tollimg" src="./../../icon/Ferryicon.png" />
      <span class="toll_gate_txt">汽渡</span>
      <img src="./../../icon/close.png" @click="closepuph" class="closeButton" />
    </div>
    <div class="motorway_name_f">
      {{ ferryDetails.name }}
      <span class="toll_centen_right_icon1" v-if="ferryDetails.state == 0">开</span>
      <span class="toll_centen_right_icon3" v-else-if="ferryDetails.state == 2">关</span>
    </div>
    <van-grid :column-num="4" class="grid_value" :border="false">
      <van-grid-item v-for="item in ferryDetails.datalist" :key="item.id">
        <img class="serviocn_h" src="../../icon/ferr_icon.png" alt="" />
        <div class="serviocn_t" id="{{item.cameraId}}">{{item.cameraName}}</div>
      </van-grid-item>
    </van-grid>
    <div class="f_bottom">
      <span class="postion_l_f"><img class="postion_l_f_icon" src="../../icon/position.png" />20.55KM</span>
      <van-button class="postion_c_f" color="#2d7ce7" v-show="ferryDetails.focusState == 0" round>关注</van-button>
      <van-button class="postion_c_ft" color="#2d7ce7" v-show="ferryDetails.focusState == 1" round>已关注</van-button>
      <van-button class="postion_c_ft" color="#2d7ce7" v-show="ferryDetails.focusState == 2" round>关注达到上线</van-button>
      <van-button class="postion_r_f" color="#2d7ce7" round size="small">路线</van-button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
const closepuph = () => {
  proxy.$mybus.emit('closePubopserferry', false);
};
let ferryDetails = reactive({
  datalist: [
    {
      cameraId: 'e0a6dec1-f961-41c5-96c5-f38d7c3301b8',
      cameraName: '南码头',
    },
  ],
  focusState: 1,
  name: '无锡北汽渡点',
  state: 1,
});
onMounted(() => {
  proxy.$mybus.on('ferryStionclickevent', data => {
    ferryDetails.datalist = data.cameraList
    ferryDetails.focusState = data.focusState
    ferryDetails.name = data.name
    ferryDetails.state = data.state
  });
});
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.isod {
  margin-bottom: 130px;
}

.title_top_f {
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  height: 60px;
  background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  padding-left: 20px;
  padding-top: 20px;
  .tollimg {
    float: left;
    width: 24px;
    height: 24px;
  }
  .toll_gate_txt {
    float: left;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  }
  .closeButton {
    float: right;
    width: 11px;
    height: 11px;
    margin-right: 20px;
    margin-top: 5px;
  }
}
.motorway_name_f {
  height: 28px;
  padding-left: 20px;
  font-size: 18px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 500;
  text-align: left;
  color: #333333;
  .toll_centen_right_icon1 {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #2d7ce7;
    font-size: 12px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    margin-left: 15px;
    vertical-align: bottom;
  }
  .toll_centen_right_icon3 {
    display: inline-block;
    width: 20px;
    height: 18px;
    background: #ffffff;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #2d7ce7;
    line-height: 18px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #2d7ce7;
  }
}
.grid_value {
  height: 110px;
  margin-left: 22px;
  margin-right: 11px;
  .serviocn_h {
    width: 30px;
    height: 30px;
  }
  .serviocn_t {
    font-size: 14px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: center;
    color: #333333;
    line-height: 52px;
  }
}
.f_bottom {
  .postion_l_f {
    float: left;
    padding-left: 21px;
    vertical-align: -webkit-baseline-middle;
    width: 115px;
    height: 50px;
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 51px;
    .postion_l_f_icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
  .postion_c_f {
    float: left;
    font-size: 14px;
    margin-left: 10px;
    width: 100px;
    height: 32px;
    background: #4287fe;
    border-radius: 15px;
    margin-top: 5px;
  }
  .postion_c_ft {
    float: left;
    font-size: 14px;
    margin-left: 12px;
    margin-top: 5px;
    width: 120px;
    height: 32px;
    background: #83b1ff;
    color: #fff;
    border-radius: 20px;
  }
  .postion_r_f {
    float: left;
    margin-left: 10px;
    font-size: 14px;
    width: 85px;
    height: 32px;
    background: #4287fe;
    border-radius: 15px;
    margin-top: 5px;
  }
}
</style>