<template>
  <div class="box_showInfo"
       v-show='tomorrowInfoBox'>
    <div class="wea_typePic"><img :src="require(`../../images/weather/${data.tomorrowInfo.tomorrow_imagePath}`)"></div>
    <div class="wea_info">
      <p class="wea_temp">{{data.tomorrowInfo.tomorrowMinTemp}}℃/{{data.tomorrowInfo.tomorrowMaxTemp}}℃</p>
      <p class="air_quality"><span>空气质量/PM2.5</span><span><span class="a_level"
                :class="levelcolor==1?'a_level_one':(levelcolor==2?'a_level_two':(levelcolor==3?'a_level_three':(levelcolor==4?'a_level_four':(levelcolor==5?'a_level_five':'a_level_five'))))"
                style="text-shadow: 0px 2px 3px #333;">{{level}}</span>/<span class="a_pm25">{{data.tomorrowInfo.avgPm25}}</span></span></p>
      <p class="wind_scale">{{data.tomorrowInfo.tomorrowWindContent}}</p>
    </div>
    <div class="info_date"><span>{{data.tomorrowInfo.week}}</span><span>{{data.tomorrowInfo.date}}</span></div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeMount, getCurrentInstance, reactive } from 'vue';
const { proxy } = getCurrentInstance();
const tomorrowInfoBox = ref(false); //控制气象信息面板显示
const level = ref('良');
const levelcolor = ref(1);
const data = reactive({
  tomorrowInfo: {
    tomorrowMaxTemp: 26,
    tomorrowMinTemp: 21,
    tomorrowWindContent: '西北偏西方向 风力2级',
    tomorrow_imagePath: 'partly_cloudy_day.png',
    week: '周六',
    date: '08月27日',
    avgAqi: 36,
    avgPm25: 25,
  },
});

//显示和关闭显示
proxy.$mybus.on('showtomorrowInfo', data => {
  tomorrowInfoBox.value = data;
});

//修改气象详情信息
proxy.$mybus.on('changeTomorrowinfo', info => {
  data.tomorrowInfo.tomorrowMaxTemp = info.tomorrowMaxTemp;
  data.tomorrowInfo.tomorrowMinTemp = info.tomorrowMinTemp;
  data.tomorrowInfo.tomorrowWindContent = info.tomorrowWindContent;
  data.tomorrowInfo.tomorrow_imagePath = info.tomorrow_imagePath;
  data.tomorrowInfo.week = info.week;
  data.tomorrowInfo.date = info.date;
  data.tomorrowInfo.avgPm25 = info.avgPm25;

  if (info.avgAqi >= 0 && info.avgAqi <= 50) {
    level.value = '优';
    levelcolor.value = 1;
  } else if (info.avgAqi > 50 && info.avgAqi <= 100) {
    level.value = '良';
    levelcolor.value = 2;
  } else if (info.avgAqi > 100 && info.avgAqi <= 150) {
    level.value = '轻度污染';
    levelcolor.value = 3;
  } else if (info.avgAqi > 150 && info.avgAqi <= 200) {
    level.value = '中度污染';
    levelcolor.value = 4;
  } else {
    level.value = '重度污染';
    levelcolor.value = 5;
  }
});
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

button {
  outline: none;
}

html,
body {
  width: 100%;
  height: 100%;
}

button,
input,
select {
  outline: none;
}
.box_showInfo {
  width: 100%;
  height: 85px;
  position: absolute;
  top: 270px;
  left: 0;
  // display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 999;
  // display: none;
}

.box_showInfo .wea_typePic {
  width: 45px;
  height: 45px;
  float: left;
  margin: 20px 0 0 0px !important;
}

.box_showInfo .wea_info {
  display: block;
  float: left;
  width: calc(100% - 140px);

  /* margin-right: 10px; */
  position: absolute;
  left: 50%;

  margin-left: calc(-0.5 * (100% - 140px));
}

.box_showInfo .wea_info .wea_temp {
  font-size: 16px;
  line-height: 44px;
}

.box_showInfo .wea_info .air_quality {
  float: right;
  color: #fff;
  width: calc(100% - 80px) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.box_showInfo .wea_temp,
.box_showInfo .air_quality span {
  color: #3261b3;
  line-height: 20px;
}

.info_date {
  height: 100%;
  font-family: '微软雅黑';
  color: #3261b3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  width: 55px;
  float: right;
}
.info_date span {
  display: block;
  line-height: 25px;
}
.wea_temp {
  float: left;
  font-size: 30px;
  color: #fff;
  height: 40px;
  line-height: 32px;
}
.wea_typePic {
  width: 66px;
  height: 66px;
  margin: 0 15px;
}

.wea_typePic img {
  width: 100%;
  height: 100%;
}
.air_quality {
  float: right;
  color: #fff;
  width: calc(100% - 75px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.air_quality span {
  text-align: center;
  font-size: 12px;
  color: #fff;
}

.a_level {
  font-size: 14px !important;
  color: #30ff1b !important;
}
.wind_scale {
  width: 100%;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  float: left;
  background: rgba(35, 73, 128, 0.6);
  color: #fff;
  border-radius: 15px;
  margin-top: 5px;
}
</style>