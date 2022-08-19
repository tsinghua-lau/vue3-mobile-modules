<template>
  <div>
    <div class="title_top_fv">
      <img class="tollimg" src="./../../icon/princi_10.png" />
      <span class="toll_gate_txt">南京S204绕越高速出入口</span>
      <img src="./../../icon/close.png" @click="closefervideo" class="closeButton" />
    </div>
    <div class="fv_video_box">
      <video src="./">视频正在加载中</video>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(['closeAdd']);
const closefervideo = () => {
  emit('closePubopserfvid', false);
};
</script>
<style lang="less" scoped>
.title_top_fv {
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
.fv_video_box {
  margin: 0px 50px 0 51px;
  height: 170px;
  background: #333333;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>