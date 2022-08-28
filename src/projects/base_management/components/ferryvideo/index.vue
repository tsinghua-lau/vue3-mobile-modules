<template>
  <div class="linevideo">
    <div class="title_top_fv">
      <img class="tollimg" src="./../../icon/princi_10.png" />
      <span class="toll_gate_txt">{{ videoname }}</span>
      <img src="./../../icon/close.png" @click="closefervideo" class="closeButton" />
    </div>
    <div class="fv_video_box">
      <video id="flvideo" controls autoplay muted width="100%" height="100%"></video>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
const { proxy } = getCurrentInstance();
const closefervideo = () => {
  proxy.$mybus.emit('closePubopserfvid', false);
  if (localStorage.getItem('serveId') != '') {
    proxy.$mybus.emit('serveStionclick', localStorage.getItem('serveId'));
    localStorage.setItem('serveId', '');
  }
};
var videoname = ref('');
var player = ref(null);
const play = urls => {
  var mp = new MuiPlayer({
    container:'#flvideo',
    src:urls,
    autoplay:true,
    muted:false,
    live:true
})
};	

onMounted(() => {
  proxy.$mybus.on('videoMarkeshow', data => {
    videoname.value = data.message;
    // play(data.playurl);
    play('https://jsgs-hd-ct-pull.jchc.cn:9999/live/591417f5-b6e6-127f-4981c90423a76765_10.live.flv?auth_key=1661594222399-0-0-f978a7465441ed644e3bd2242ca8e592')
  });
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
    margin-top: 3px;
    font-size: 14px;
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
    width: 100% !important;
    height: 100%;
  }
}
</style>