<template>
  <div id="cc" style="">
    <svg-icon icon-class="通知" />
    用户管理界面
    <van-button type="primary" @click="send">主要按钮</van-button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup position="bottom" :style="{ height: '30%' }" v-model:show="show"
      >内容</van-popup
    >
    <div id="container"></div>
  </div>
</template>
<script setup>
import {ref,reactive,onMounted } from 'vue';
import  {getUserAuth} from '../api/index.js'
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    let state = reactive({
      map:null
    })
    const send = () => {
         getUserAuth({said:'872a53a8dacd42a5850ce477c4dd8b0d',roadid:'ff80818159af9032015a12535dda000f'}).then(res => {
          console.log(res);
    })
    }
      const initMap =()=> {
      state.map = new AMap.Map('container', {
        zoom: 7.5,
        zooms: [7, 15],
        viewMode: '3D',
        // pitch: 10,
        // zIndex: 100,
        center: [119.20058, 32.98972],
        mapStyle: 'amap://styles/368c5674bcd88bac4a215b97d78e7b7e',
      });
    }

     onMounted(() => {
        initMap();
      })
</script>

<style scoped lang="less">
#container {
  width: 100%;
  height: 500px;
}

#bb {
  width: 100%;
  height: 500px;
  background: black;
  color: #fff;
  .aa {
    font-size: 15px;
  }
}
</style>
