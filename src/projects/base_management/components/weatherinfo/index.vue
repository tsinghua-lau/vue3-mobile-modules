<template>
  <div class="main_weather"
       v-show="weatherInfoBox">
    <div class="m_top">
      <p><i class="icon_pos"></i><span class="m_txt"><span class="pos_txt">{{data.weatherInfo.roadnum}}{{data.weatherInfo.roadname}} k{{data.weatherInfo.roadkm}}+{{data.weatherInfo.roadm}}</span><span
                class="pos_city">(江苏省扬州市)</span></span></p>
      <div class="t_con">
        <div class="wea_typePic"><img :src="require(`../../images/weather/${data.weatherInfo.imagePath}`)"></div>
        <div class="wea_info">
          <p class="wea_temp">{{data.weatherInfo.temperature}}℃</p>
          <p class="air_quality"><span>空气质量/PM2.5</span><span><span class="a_level"
                    :class="levelcolor==1?'a_level_one':(levelcolor==2?'a_level_two':(levelcolor==3?'a_level_three':(levelcolor==4?'a_level_four':(levelcolor==5?'a_level_five':'a_level_five'))))">{{level}}</span>/<span
                    class="a_pm25">{{data.weatherInfo.pm25}}</span></span></p>
          <p class="wind_scale">{{data.weatherInfo.windContent}}</p>
        </div>
      </div>
    </div>
    <div class="m_bottom"
         id="myChart"
         :style="{ width: '350px', height: '102px' }">

    </div><span class="wea_tips">{{data.weatherInfo.precipitation_2h_des}}</span>
    <div class="warning_btn"><i class=""></i><span class="btn_txt"></span></div>
    <div :class="tomorrowbtnstate==0?'btn_date':'btn_date active'"
         @click="showTomorrowInfoBox"><span>明日</span><i class="d_select"></i></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, getCurrentInstance, reactive } from 'vue';

import * as echarts from 'echarts';
const { proxy } = getCurrentInstance();
const weatherInfoBox = ref(false); //控制气象信息面板显示
const tomorrowbtnstate = ref(0); //控制明日按钮选中状态

//彩云气象详情信息

const data = reactive({
  weatherInfo: {
    lat: 34.027418873441654,
    lon: 119.26427219774233,
    aqi: 44,
    date: '08月27日',
    imagePath: 'partly_cloudy_day.png',
    pm25: 26,
    precipitation_2h_des: '最近的降雨带在东南53公里外呢',
    roadkm: '1763',
    roadm: '900',
    roadname: '长深高速',
    roadnum: 'G25',
    skycon: 'PARTLY_CLOUDY_DAY',
    temperature: 26,
    warningContent: '',
    windContent: '西北偏西方向 风力2级',
    precipitation_2h_xAxis: [],
    precipitation_2h_yAxis: [],
  },
});

const level = ref('良');
const levelcolor = ref(1);

//显示和关闭显示
proxy.$mybus.on('showWeatherInfo', data => {
  weatherInfoBox.value = data;
});

//开关明日按钮高亮
proxy.$mybus.on('changeTomorrowBtn', data => {
  tomorrowbtnstate.value = data;
});

//修改气象详情信息
proxy.$mybus.on('changeWeatherinfo', info => {
  data.weatherInfo.roadnum = info.roadnum;
  data.weatherInfo.roadname = info.roadname;
  data.weatherInfo.roadkm = info.roadkm;
  data.weatherInfo.roadm = info.roadm;
  data.weatherInfo.temperature = info.temperature;
  data.weatherInfo.pm25 = info.pm25;
  data.weatherInfo.windContent = info.windContent;
  data.weatherInfo.imagePath = info.imagePath;
  data.weatherInfo.precipitation_2h_des = info.precipitation_2h_des;
  // makeChart(info.precipitation_2h_xAxis, info, precipitation_2h_yAxis);

  if (info.aqi >= 0 && info.aqi <= 50) {
    level.value = '优';
    levelcolor.value = 1;
  } else if (info.aqi > 50 && info.aqi <= 100) {
    level.value = '良';
    levelcolor.value = 2;
  } else if (info.aqi > 100 && info.aqi <= 150) {
    level.value = '轻度污染';
    levelcolor.value = 3;
  } else if (info.aqi > 150 && info.aqi <= 200) {
    level.value = '中度污染';
    levelcolor.value = 4;
  } else {
    level.value = '重度污染';
    levelcolor.value = 5;
  }
});

//点击明日显示明日天气
const showTomorrowInfoBox = () => {
  console.log(tomorrowbtnstate);
  if (tomorrowbtnstate.value == 0) {
    proxy.$mybus.emit('showtomorrowInfo', true); //开启明日面板
    tomorrowbtnstate.value = 1; //明日按钮高亮
    proxy.$mybus.emit('changetuli', false); //隐藏图例
  } else {
    proxy.$mybus.emit('showtomorrowInfo', false);
    proxy.$mybus.emit('changetuli', true); //开启图例
    tomorrowbtnstate.value = 0;
  }
};

proxy.$mybus.on('makechart', data => {
  var xAxis = data.xAxis;
  var yAxis = data.yAxis;
  console.log(34343434);
  //this.$root => app
  let myChart = echarts.init(document.getElementById('myChart'));
  // 绘制图表
  var option = {
    grid: {
      x: 22,
      y: 5,
      x2: 40,
      y2: 15,
      borderWidth: 0,
    },
    xAxis: {
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      type: 'category',
      boundaryGap: false,
      data: xAxis,
      axisLine: {
        lineStyle: {
          color: '#FFF',
        },
      },
      axisTick: {
        lineStyle: {
          color: '#FFF',
        },
      },
      axisLabel: {
        margin: 6,
        textStyle: {
          color: '#FFF',
          fontSize: 8,
        },
      },
    },
    yAxis: {
      show: true,
      max: 33,
      position: 'right',
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      type: 'value',
      splitNumber: 33,
      axisLine: {
        lineStyle: {
          color: '#FFF',
          type: 'dotted',
          width: 0.9,
        },
      },
      axisLabel: {
        formatter: function (value, index) {
          var res = '';
          if (value == 6) {
            res = '小雨';
          } else if (value == 17) {
            res = '中雨';
          } else if (value == 28) {
            res = '大雨';
          }
          return res;
        },
        margin: 4,
        textStyle: {
          color: '#FFF',
          fontSize: 10,
        },
      },
    },
    series: [
      {
        name: '',
        type: 'line',
        data: yAxis,
        itemStyle: {
          normal: {
            areaStyle: {
              color: '#fff',
            },
            lineStyle: {
              color: '#74f6b7',
              width: 3,
            },
          },
        },
        symbol: 'none',
        smooth: true,
        markLine: {
          large: true,
          symbol: 'none',
          animation: 'none',
          itemStyle: {
            normal: {
              lineStyle: {
                type: 'dotted',
                color: '#FFF',
              },
            },
          },
          data: [
            [
              {
                xAxis: 0,
                yAxis: 11,
              },
              {
                xAxis: xAxis[xAxis.length - 1],
                yAxis: 11,
              },
            ],
            [
              {
                xAxis: 0,
                yAxis: 22,
              },
              {
                xAxis: xAxis[xAxis.length - 1],
                yAxis: 22,
              },
            ],
          ],
        },
      },
    ],
  };
  myChart.setOption(option);
});

onMounted(() => {});
</script>

<style lang="less" scoped>
/*左上角彩云天气弹框*/
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
.main_weather {
  width: 100%;
  height: 270px;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 7px;
  background: rgba(64, 109, 173, 0.8);
  box-shadow: 0px 0px 15px rgba(109, 106, 103, 0.8);
  // display: none;
  z-index: 9;
  font-size: 0;
}

.m_top {
  width: 90%;
  height: 125px;
  padding: 15px 20px 0px 10px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #b5c7d1; */
}

.m_bottom {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  /* border-top: 1px solid #133972; */
  position: relative;
}

.m_top > p {
  clear: both;
  display: table;
  width: 100%;
}

.m_txt {
  float: left;
  width: calc(100% - 20px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
  line-height: 14px;
}

.icon_pos {
  width: 12px;
  height: 16px;
  float: left;
  background: url(../../images/weather/icon_pos.png) no-repeat;
  background-size: 100%;
  margin-right: 5px;
}

.pos_txt {
  display: inline-block;
  line-height: 16px;
  font-size: 14px;
  color: #fff;
}

.pos_city {
  display: inline-block;
  font-size: 12px;
  color: #fff;
}

.t_con {
  height: 93px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

.wea_info {
  /* clear: both;
		display: table; */
  width: calc(100% - 105px);
  margin-left: 0px;
}

.wea_temp {
  float: left;
  font-size: 30px;
  color: #fff;
  height: 40px;
  line-height: 32px;
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

.wea_tips {
  position: absolute;
  top: 243px;
  // width: calc(100% - 110px);
  text-align: center;
  font-size: 12px;
  color: #fff;
  padding-left: 15px;
  box-sizing: border-box;
  left: 10px;
  text-shadow: 1px 1px 5px #000;
}
.warning_btn {
  position: absolute;
  bottom: 12px;
  left: 15px;
  width: 33px;
  height: 30px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.warning_btn i {
  display: block;
  width: 33px;
  height: 33px;
}

.w_blue {
  background: url(../../images/weather/warning_blue.png) no-repeat;
  background-size: 100% !important;
}

.w_yellow {
  background: url(../../images/weather/warning_yellow.png) no-repeat !important;
  background-size: 100% !important;
}

.w_orange {
  background: url(../../images/weather/warning_orange.png) no-repeat !important;
  background-size: 100% !important;
}

.w_red {
  background: url(../../images/weather/warning_red.png) no-repeat !important;
  background-size: 100% !important;
}

.btn_txt {
  width: 32px;
  height: 22px;
  text-align: center;
  font-size: 12px;
  font-family: '微软雅黑';
  color: #fff;
  line-height: 10px;
  position: absolute;
  top: 50%;
  margin-top: -10px;
  left: 50%;
  margin-left: -16px;
  display: flex;

  justify-content: center;
  align-items: center;
}
/* 天气预报样式  */
.btn_date {
  width: 37px;
  height: 30px;
  border-radius: 4px;
  background: #b3b3b3;
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: '微软雅黑';
  color: #fff;
  position: absolute;
  right: 16px;
  top: 233px;
  z-index: 100;
}

.btn_date.active {
  background: #fff !important;
  color: #3261b3 !important;
}

.d_select {
  width: 5px;
  height: 5px;
  background: transparent;
  border: 1px solid #fff;
  transform: rotate(225deg);
  border-right: none !important;
  border-bottom: none !important;
  /*margin-top: 5px;*/
}

.btn_date.active .d_select {
  width: 5px;
  height: 5px;
  background: transparent;
  border: 1px solid #3967b6 !important;
  transform: rotate(45deg) !important;
  border-right: none !important;
  border-bottom: none !important;
  margin-top: 5px;
}

.box_showInfo {
  width: 100%;
  height: 85px;
  position: absolute;
  top: 250px;
  left: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
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
.a_level_one {
  color: #30ff1b !important;
}
.a_level_two {
  color: #fffc00 !important;
}
.a_level_three {
  color: #ffcc00 !important;
}
.a_level_four {
  color: #ff9900 !important;
}
.a_level_five {
  color: #e00015 !important;
}
</style>
