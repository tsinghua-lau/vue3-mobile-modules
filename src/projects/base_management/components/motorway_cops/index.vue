<template>
  <div>
    <div class="title_top">
      <img class="tollimg" src="./../../icon/motorway_cops.png" />
      <span class="toll_gate_txt">高速交警</span>
      <img src="./../../icon/close.png" class="closeButton" />
    </div>
    <div class="motorway_name">交警队名称</div>
    <van-cell-group class="toll_centen_phone">
      <div class="toll_centen_phone_l">地址</div>
      <div class="toll_centen_phone_r">G2高速公路无锡东收费站旁边</div>
    </van-cell-group>
    <van-cell-group class="toll_centen_phone">
      <div class="toll_centen_phone_l">联系电话</div>
      <div class="toll_centen_phone_r">13939393939</div>
    </van-cell-group>
    <div style="margin-top:10px">
      <span class="postion_l"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
      <van-button class="postion_r" color="#2d7ce7" round size="small">路线</van-button>
    </div>
  </div>
</template>


<style lang="less">
.title_top {
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
.motorway_name {
  // width: 200%;
  height: 72px;
  padding-left: 52px;
  font-size: 60px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
}
.toll_centen_phone {
  height: 130px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 26px;
  margin: 21px 21px 0 21px;
  .toll_centen_phone_l {
    height: 100%;
    font-size: 42px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 130px;
    float: left;
    padding-left: 40px;
  }
  .toll_centen_phone_r {
    height: 100%;
    font-size: 42px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: right;
    color: #2d7ce7;
    line-height: 130px;
    float: right;
    padding-right: 40px;
  }
}
.postion_l {
  padding-left: 41px;
  vertical-align: -webkit-baseline-middle;
  height: 100px;
  font-size: 44px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
  line-height: 100px;
  .postion_l_icon {
    display: inline-block;
    width: 36px;
    height: 40px;
    margin-right: 5px;
  }
}
.postion_c {
  margin-left: 30px;
  width: 310px;
  height: 100px;
  font-size: 36px;
}
.postion_r {
  float: right;
  margin-right: 50px;
  width: 250px;
  height: 100px;
  background: #4287fe;
  border-radius: 50px;
  font-size: 36px;
}
</style>