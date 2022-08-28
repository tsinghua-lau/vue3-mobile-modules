<template>
  <div class="linevideo">
    <div class="title_top_fv">
      <img class="tollimg" src="./../../icon/princi_10.png" />
      <span class="toll_gate_txt">南京S204绕越高速出入口</span>
      <img src="./../../icon/close.png" @click="closefervideo2" class="closeButton" />
    </div>
    <div class="fv_video_box">
      <video id="flvideot" controls autoplay muted width="100%" height="100%"></video>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted,getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
import flv from 'flv.js';
const closefervideo2 = () => {
  proxy.$mybus.emit('closePubopserfvidg2', false);
};
var player2 = ref(null);
const play = urls => {
  let video = document.getElementById('flvideot');
  if (flv.isSupported()) {
    player2 = flv.createPlayer(
      {
        type: 'flv',
        isLine: false,
        url: urls,
      },
      {
        enableStashBuffer: false,
        enableWorker: false,
        isLive: false,
        lazyLoad: false,
      }
    );
  } else {
    return;
  }
  player2.attachMediaElement(video);
  player2.load();
  player2.play();
};
onMounted(() => {
  play('https://jsgs1-play.jchc.cn/live/c23a3341-2eb7-46fc-b87e-aaa07de239a4.flv?auth_key=1661336392-0-0-9b3d5dc9ea567fa5c1d3ae0d6b0f8e79');
});
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.linevideo {
  margin-bottom: 110px;
}
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
  margin: 0px 20px 0 20px;
  height: 200px;
  background: #333333;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>