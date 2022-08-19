<template>
  <div>
    <div class="title_top_f">
      <img class="tollimg" src="./../../icon/Ferryicon.png" />
      <span class="toll_gate_txt">汽渡</span>
      <img src="./../../icon/close.png" @click="closepuph" class="closeButton" />
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
<script setup>
const emit = defineEmits(['closeAdd']);
const closepuph = () => {
  emit('closePubopserferry', false);
};
</script>

<style lang="less" scoped>
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
  height: 42px;
  padding-left: 20px;
  font-size: 24px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
  .toll_centen_right_icon1 {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #2d7ce7;
    font-size: 14px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    margin-left: 15px;
  }
}
.grid_value {
  height: 120px;
  margin-left: 22px;
  margin-right: 11px;
  .serviocn_h {
    width: 52px;
    height: 52px;
  }
  .serviocn_t {
    font-size: 16px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: center;
    color: #333333;
    line-height: 52px;
  }
}
.f_bottom {
  .postion_l_f {
    padding-left: 21px;
    vertical-align: -webkit-baseline-middle;
    width: 115px;
    height: 50px;
    font-size: 22px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 50px;
    .postion_l_f_icon {
      display: inline-block;
      width: 18px;
      height: 20px;
      margin-right: 5px;
    }
  }
  .postion_c_f {
    font-size: 18px;
    margin-left: 10px;
    width: 120px;
    height: 50px;
    background: #4287fe;
    border-radius: 25px;
  }
  .postion_r_f {
    float: right;
    margin-top: 7px;
    margin-right: 12px;
    font-size: 18px;
    width: 85px;
    height: 50px;
    background: #4287fe;
    border-radius: 50px;
  }
}
</style>