<template>
  <div>
    <div class="title_top_t">
      <img class="tollimg" src="./../../icon/trafficcontrol_base.png" />
      <span class="toll_gate_txt">交通管制</span>
      <img src="./../../icon/close.png" class="closeButton" />
    </div>
    <div>
      <highwaySign msg="国家高速" />
      <span class="toll_centen_right_t">
        <div>连云港方向</div>
        <div class="toll_centen_right_bottom">
          <span class="toll_centen_right_icon" v-show="type == 1">部分车型</span>
          <span class="toll_centen_right_icon3" v-show="type == 2">全部车型</span>
          <span class="toll_centen_right_icon1">收费站</span>
        </div>
      </span>
    </div>
    <div class="traffTxt">
      <p>2022年7月12日18时﹐G25长深高速淮安段由于临时交通管制﹐洪泽至铁山寺双向入口禁止危险化学品运输车辆通行。</p>
    </div>
    <div class="str_endTime">
      <div>
        <span><img class="iconbig" src="../../icon/strtime.png" /></span>
        <span class="str_endTime_box">
          <div class="timetext">开始时间</div>
          <div class="timenum">07-12 18:00</div>
        </span>
      </div>
      <div>
        <span><img class="iconbig" src="../../icon/endtime.png" /></span>
        <span class="str_endTime_box">
          <div class="timetext">预计结束时间</div>
          <div class="timenum">07-14 18:00</div>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
/**交通管制页面 */
import highwaySign from '../highway_sign.vue';
import { ref } from 'vue';
let type = ref('2');
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.title_top_t {
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  height: 158px;
  background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  padding-left: 51px;
  padding-top: 38px;
  .tollimg {
    float: left;
    width: 52px;
    height: 52px;
  }
  .toll_gate_txt {
    float: left;
    margin-left: 10px;
    vertical-align: super;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  }
  .closeButton {
    float: right;
    width: 31.88px;
    height: 31.88px;
    margin-right: 50.56px;
  }
}
.toll_centen_right_t {
  display: inline-block;
  //   width: calc(100% - 400px);
  vertical-align: text-top;
  div {
    margin-left: 43px;
    font-size: 60px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 56px;
  }
  .toll_centen_right_bottom {
    margin-top: 22px;
    .toll_centen_right_icon {
      display: inline-block;
      width: 150px;
      height: 50px;
      background: #35c5a3;
      border-radius: 6px;
      color: #fff;
      font-size: 30px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 56px;
      text-align: center;
      border-radius: 6px;
    }
    .toll_centen_right_icon3 {
      display: inline-block;
      width: 150px;
      height: 50px;
      background: #2d7ce7;
      border-radius: 6px;
      color: #fff;
      font-size: 30px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 56px;
      text-align: center;
      border-radius: 6px;
    }
    .toll_centen_right_icon1 {
      margin-left: 16px;
      display: inline-block;
      width: 120px;
      height: 50px;
      background: #2d7ce7;
      border-radius: 6px;
      color: #fff;
      font-size: 30px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      line-height: 56px;
      text-align: center;
      border-radius: 6px;
    }
  }
}
.traffTxt {
  font-size: 42px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: justifyLeft;
  color: #333333;
  padding: 0 20px 0 51px;
}
.str_endTime {
  //   height: 180px;
  padding: 0 20px 0 51px;
  display: flex;
  div {
    flex: 1;
    display: flex;
    .iconbig {
      width: 100px;
      height: 100px;
    }
    .str_endTime_box {
      margin-left: 26px;
      .timetext {
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #555555;
        line-height: 42px;
      }
      .timenum {
        font-size: 44px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 56px;
      }
    }
  }
}
</style>