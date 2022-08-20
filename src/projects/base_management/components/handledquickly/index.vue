<template>
  <div>
    <div class="title_top_had">
      <img class="tollimg" src="./../../icon/serveicon.png" />
      <span class="toll_gate_txt">事故快处点</span>
      <img src="./../../icon/close.png" @click="closepuop" class="closeButton" />
    </div>
    <div>
      <highwaySign msg="国家高速" />
      <span class="toll_centen_right_had">
        <div>事故快处点名称</div>
        <div class="toll_centen_right_bottom">
          <span class="toll_centen_right_icon1">常驻</span>
        </div>
      </span>
    </div>
    <van-cell-group class="toll_centen_phone_had">
      <div class="toll_centen_phone_l">地址</div>
      <div class="toll_centen_phone_r">G2高速公路无锡东收费站旁边</div>
    </van-cell-group>
    <van-cell-group class="toll_centen_phone_had">
      <div class="toll_centen_phone_l">联系电话</div>
      <div class="toll_centen_phone_r">13939393939</div>
    </van-cell-group>

    <div>
      <span class="postion_l_had"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
      <van-button class="postion_r_had" color="#2d7ce7" round size="small">路线</van-button>
    </div>
  </div>
</template>
<script setup>
import highwaySign from '../highway_sign.vue';
const emit = defineEmits(['closeAdd']);
const closepuop = () => {
  emit('closePubopserhand', false);
};
</script>
<style lang="less">
.title_top_had {
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
.toll_centen_right_had {
  display: inline-block;
  //   width: calc(100% - 400px);
  vertical-align: bottom;
  div {
    margin-left: 22px;
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 30px;
  }
  .toll_centen_right_bottom {
    margin-top: 5px;
    .toll_centen_right_icon1 {
      display: inline-block;
      width: 50px;
      height: 25px;
      background: #2d7ce7;
      border-radius: 3px;
      color: #fff;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      line-height: 25px;
      text-align: center;
    }
  }
}
.toll_centen_phone_had {
  height: 45px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 26px;
  margin: 0 11px 0 11px;
  .toll_centen_phone_l {
    height: 100%;
    font-size: 14px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 55px;
    float: left;
    padding-left: 11px;
  }
  .toll_centen_phone_r {
    height: 100%;
    font-size: 14px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: right;
    color: #2d7ce7;
    line-height: 55px;
    float: right;
    padding-right: 11px;
  }
}
.postion_l_had {
  padding-left: 11px;
  vertical-align: -webkit-baseline-middle;
  height: 40px;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 40px;
  .postion_l_icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
}
.postion_r_had {
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  width: 100px;
  height: 40px;
  background: #4287fe;
  border-radius: 18px;
  font-size: 14px;
}
</style>