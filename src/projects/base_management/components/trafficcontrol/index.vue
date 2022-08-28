<template>
  <div class="isod">
    <div class="title_top_t">
      <img class="tollimg" src="./../../icon/trafficcontrol_base.png" />
      <span class="toll_gate_txt">交通管制</span>
      <img src="./../../icon/close.png" @click="trfflocse" class="closeButton" />
    </div>
    <div>
      <highwaySign :msg="stontt" />
      <span class="toll_centen_right_t">
        <div>{{ stontt.direction }}方向</div>
        <div class="toll_centen_right_bottom">
          <span class="toll_centen_right_icon" v-if="stontt.state == 0">部分车型</span>
          <span class="toll_centen_right_icon3" v-else-if="stontt.state == 1">全部车型</span>
          <span class="toll_centen_right_icon1" v-if="stontt.controlType == 0">道口</span>
          <span class="toll_centen_right_icon1" v-else-if="stontt.controlType == 1">收费站</span>
          <span class="toll_centen_right_icon1" v-else-if="stontt.controlType == 2">服务区</span>
          <span class="toll_centen_right_icon1" v-else-if="stontt.controlType == 3">枢纽</span>
          <span class="toll_centen_right_icon1" v-else-if="stontt.controlType == 4">主线</span>
        </div>
      </span>
    </div>
    <div class="traffTxt">
      <p>{{ stontt.describe }}</p>
    </div>
    <div class="str_endTime">
      <div>
        <span><img class="iconbig" src="../../icon/strtime.png" /></span>
        <span class="str_endTime_box">
          <div class="timetext">开始时间</div>
          <div class="timenum">{{ timeedit(stontt.openTime) }}</div>
        </span>
      </div>
      <div>
        <span><img class="iconbig" src="../../icon/endtime.png" /></span>
        <span class="str_endTime_box">
          <div class="timetext">预计结束时间</div>
          <div class="timenum">{{ timeedit(stontt.closeTime) }}</div>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
/**交通管制页面 */
import highwaySign from '../highway_sign.vue';
import { onMounted, ref, getCurrentInstance, reactive } from 'vue';
const { proxy } = getCurrentInstance();
var stontt = reactive({
  roadNum: 'G42',
  roadName: '京沪高速',
  roadType: '0',
  closeTime: '',
  controlType: '',
  describe: '',
  direction: '',
  openTime: '',
  state: '',
});
const trfflocse = () => {
  proxy.$mybus.emit('closePubopsertraff', false);
};
const timeedit = time => {
  return time.substring(5, time.length - 1);
};
onMounted(() => {
  proxy.$mybus.on('trffStionclickevent', data => {
    console.log(data);
    stontt.roadNum = data.roadNum;
    stontt.roadName = data.roadName;
    stontt.roadType = data.roadType;
    stontt.closeTime = data.closeTime;
    stontt.controlType = data.controlType;
    stontt.describe = data.describe;
    stontt.direction = data.direction;
    stontt.openTime = data.openTime;
    stontt.state = data.state;
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
  margin-bottom: 100px;
}

.title_top_t {
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
.toll_centen_right_t {
  display: inline-block;
  //   width: calc(100% - 400px);
  vertical-align: bottom;
  div {
    margin-left: 22px;
    font-size: 20px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 28px;
  }
  .toll_centen_right_bottom {
    margin-top: 5px;
    .toll_centen_right_icon {
      display: inline-block;
      width: 70px;
      height: 25px;
      background: #35c5a3;
      border-radius: 3px;
      color: #fff;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 25px;
      text-align: center;
    }
    .toll_centen_right_icon3 {
      display: inline-block;
      width: 70px;
      height: 25px;
      background: #2d7ce7;
      border-radius: 3px;
      color: #fff;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 25px;
      text-align: center;
    }
    .toll_centen_right_icon1 {
      margin-left: 8px;
      display: inline-block;
      width: 60px;
      height: 25px;
      background: #2d7ce7;
      border-radius: 3px;
      color: #fff;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 25px;
      text-align: center;
    }
  }
}
.traffTxt {
  font-size: 16px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: justifyLeft;
  color: #333333;
  padding: 0 10px 0 20px;
}
.str_endTime {
  //   height: 180px;
  padding: 0 10px 0 20px;
  display: flex;
  div {
    flex: 1;
    display: flex;
    .iconbig {
      width: 50px;
      height: 50px;
    }
    .str_endTime_box {
      margin-left: 12px;
      .timetext {
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #555555;
        line-height: 21px;
      }
      .timenum {
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 21px;
      }
    }
  }
}
</style>