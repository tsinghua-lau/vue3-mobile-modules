<template>
  <div>
    <div class="title_top_e">
      <img class="tollimg" src="./../../icon/epidemicpreventionicon.png" />
      <span class="toll_gate_txt">防疫点</span>
      <img src="./../../icon/close.png" @click="closemarker" class="closeButton" />
    </div>
    <div>
      <highwaySign msg="国家高速" />
      <span class="toll_centen_right_e">
        <p>新冠疫情高邮检查点</p>
      </span>
    </div>
    <div class="traffTxt_e">
      <p>在高邮收费站出口设置疫情检查点﹐驾乘人员需提供健康码，通行大数据行程码·18小时核酸报告。</p>
    </div>
  </div>
</template>
<script setup>
import highwaySign from '../highway_sign.vue';
const emit = defineEmits(['closeAdd']);
const closemarker = type => {
  emit('closePubopserepid', false);
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.title_top_e {
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
.toll_centen_right_e {
  display: inline-block;
  //   width: calc(100% - 400px);
  vertical-align: text-top;
  p {
    margin-left: 22px;
    font-size: 24px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    line-height: 30px;
  }
}
.traffTxt_e {
  font-size: 16px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  text-align: justifyLeft;
  color: #333333;
  padding: 0 10px 0 20px;
}
</style>