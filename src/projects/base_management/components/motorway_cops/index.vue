<template>
  <div>
    <div class="title_top_m">
      <img class="tollimg" src="./../../icon/motorway_cops.png" />
      <span class="toll_gate_txt">高速交警</span>
      <img src="./../../icon/close.png" @click="showmarkerclick" class="closeButton" />
    </div>
    <div class="motorway_name">交警队名称</div>
    <van-cell-group class="toll_centen_phone_m">
      <div class="toll_centen_phone_l">地址</div>
      <div class="toll_centen_phone_r">G2高速公路无锡东收费站旁边</div>
    </van-cell-group>
    <van-cell-group class="toll_centen_phone_m">
      <div class="toll_centen_phone_l">联系电话</div>
      <div class="toll_centen_phone_r">13939393939</div>
    </van-cell-group>
    <div style="margin-top: 10px">
      <span class="postion_l_m"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
      <van-button class="postion_r_m" color="#2d7ce7" round size="small">路线</van-button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeAdd']);

const showmarkerclick = () => {
  emit('closePubopsercops', false);
};
</script>

<style lang="less">
.title_top_m {
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
.motorway_name {
  // width: 200%;
  height: 35px;
  padding-left: 20px;
  font-size: 28px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
}
.toll_centen_phone_m {
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 26px;
  margin: 21px 21px 0 21px;
  .toll_centen_phone_l {
    height: 100%;
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 35px;
    float: left;
    // padding-left: 20px;
  }
  .toll_centen_phone_r {
    height: 100%;
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: right;
    color: #2d7ce7;
    line-height: 35px;
    float: right;
    padding-right: 0px;
  }
}
.postion_l_m {
  padding-left: 20px;
  vertical-align: -webkit-baseline-middle;
  height: 100px;
  font-size: 22px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 40px;
  .postion_l_icon {
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-right: 5px;
  }
}
.postion_r_m {
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  width: 90px;
  height: 35px;
  line-height: 35px;
  background: #4287fe;
  border-radius: 50px;
  font-size: 18px;
}
</style>