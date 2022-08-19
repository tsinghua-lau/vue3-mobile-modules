<template>
  <div id="box" style="">
    <svg-icon icon-class="通知" />
    <br />
    <JsMap />
    <div class="title">用户管理界面</div>
    <br />

    <van-button type="primary" @click="send">接口请求</van-button>
    <br />

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <br />

    <van-popup position="bottom" :style="{ height: '30%' }" v-model:show="show">内容</van-popup>
    <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" /> -->
    <calendar />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
import { getUserAuth } from '../api/index.js';
import calendar from './calendar.vue';
import JsMap from './JsMap.vue';
import alllines from './alllines.json';

const { proxy } = getCurrentInstance();
const show = ref(false);

const showPopup = () => {
  show.value = true;
};

let state = reactive({
  map: null,
  date: '',
});

//测试api
const send = () => {
  proxy.$mybus.emit('updata', '组件传值');
  getUserAuth({
    said: '872a53a8dacd42a5850ce477c4dd8b0d',
    roadid: 'ff80818159af9032015a12535dda000f',
  }).then(res => {
    console.log(res);
  });
};

//初始化地图
const initMap = () => {
  state.map = new AMap.Map('container', {
    zoom: 7.5,
    zooms: [7, 15],
    viewMode: '3D',
    // pitch: 10,
    // zIndex: 100,
    center: [119.20058, 32.98972],
    mapStyle: 'amap://styles/368c5674bcd88bac4a215b97d78e7b7e',
  });
};

onMounted(() => {
  // initMap();
});
</script>

<style scoped lang="less">
#container {
  width: 100%;
  height: 1500px;
}
.title {
  color: #000;
}
#box {
  width: 100%;
  height: 500px;
  color: #000;
}
</style>
