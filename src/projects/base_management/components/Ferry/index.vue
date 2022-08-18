<template>
  <div>
    <div class="title_top_f">
      <img class="tollimg" src="./../../icon/Ferryicon.png" />
      <span class="toll_gate_txt">汽渡</span>
      <img src="./../../icon/close.png" class="closeButton" />
    </div>
    <div class="motorway_name_f">江阴汽渡<span class="toll_centen_right_icon1">开</span></div>
    <van-grid :column-num="4" class="grid_value" :border="false">
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/ferr_icon.png" alt="" />
        <div class="serviocn_t">北收费亭</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/ferr_icon.png" alt="" />
        <div class="serviocn_t">南收费亭</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/ferr_icon.png" alt="" />
        <div class="serviocn_t">北码头</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/ferr_icon.png" alt="" />
        <div class="serviocn_t">南码头</div>
      </van-grid-item>
    </van-grid>
    <div class="f_bottom">
      <span class="postion_l_f"><img class="postion_l_f_icon" src="../../icon/position.png" />20.55KM</span>
      <van-button class="postion_c_f" color="#2d7ce7" round>关注</van-button>
      <van-button class="postion_r_f" color="#2d7ce7" round size="small">路线</van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title_top_f {
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
.motorway_name_f {
  height: 72px;
  padding-left: 52px;
  font-size: 60px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
  .toll_centen_right_icon1 {
    display: inline-block;
    width: 50px;
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
    margin-left: 30px;
  }
}
.grid_value {
  height: 300px;
  margin-left: 52px;
  margin-right: 21px;
  .serviocn_h {
    width: 112px;
    height: 112px;
  }
  .serviocn_t {
    font-size: 34px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: center;
    color: #333333;
    line-height: 56px;
  }
}
.f_bottom {
  .postion_l_f {
    padding-left: 41px;
    vertical-align: -webkit-baseline-middle;
    width: 230px;
    height: 100px;
    font-size: 44px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 100px;
    .postion_l_f_icon {
      display: inline-block;
      width: 36px;
      height: 40px;
      margin-right: 5px;
    }
  }
  .postion_c_f {
    font-size: 36px;
    margin-left: 30px;
    width: 250px;
    height: 100px;
    background: #4287fe;
    border-radius: 50px;
  }
  .postion_r_f {
    float: right;
    margin-right: 25px;
    font-size: 36px;
    width: 210px;
    height: 100px;
    background: #4287fe;
    border-radius: 50px;
  }
}
</style>