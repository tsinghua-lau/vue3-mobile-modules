<template>
  <div id="cc" style="">
    <!-- 基础服务界面 -->
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <!-- 收费站 -->
    <van-popup :overlay="false" class="elles" v-model:show="show" position="bottom" :style="{ height: 'auto' }">
      <tollgate />
    </van-popup>
    <!-- 服务区 -->
    <van-popup :overlay="false" class="elles" v-model:show="showser" position="bottom" :style="{ height: 'auto' }">
      <serves />
    </van-popup>
    <!-- 高速交警 -->
    <van-popup :overlay="false" class="elles" v-model:show="showcops" position="bottom" :style="{ height: 'auto' }">
      <motorway_cops />
    </van-popup>
    <!-- 事故快处点 -->
    <van-popup :overlay="false" class="elles" v-model:show="showhand" position="bottom" :style="{ height: 'auto' }">
      <handledquickly />
    </van-popup>
    <!-- 汽渡 -->
    <van-popup :overlay="false" class="elles" v-model:show="showferry" position="bottom" :style="{ height: 'auto' }">
      <Ferryhtml />
    </van-popup>
    <!-- 管制 -->
    <van-popup :overlay="false" class="elles" v-model:show="showtraff" position="bottom" :style="{ height: 'auto' }">
      <trafficcontrol />
    </van-popup>
    <!-- 防疫点 -->
    <van-popup :overlay="false" class="elles" v-model:show="showepid" position="bottom" :style="{ height: 'auto' }">
      <epidemicprevention />
    </van-popup>
    <!-- 高速视频 -->
    <van-popup :overlay="false" class="elles" v-model:show="showfvid" position="bottom" :style="{ height: 'auto' }">
      <ferryvideo />
    </van-popup>
    <!-- 公路视频 -->
    <van-popup :overlay="false" class="elles" v-model:show="showfvid2" position="bottom" :style="{ height: 'auto' }">
      <ferryvideogl />
    </van-popup>
    <!-- 搜索页 -->
    <van-popup :overlay="false" class="listh" v-model:show="showsear" position="bottom" :style="{ height: '100%' }">
      <serchhtml />
    </van-popup>
    <!-- 路况主页面 -->
    <principalsheet />
    <!-- <searchhtml /> -->
    <!-- <div id="container"></div> -->
  </div>
  <div class="caiyun" @click="showChoisebox"><img src="../images/weather/caiyun.png" /></div>
  <div class="btns_caiyun" v-show="choiseWeather">
    <button :class="typestate == 1 ? 'btn_hum active' : 'btn_hum'" @click="changeType(1)"><i></i></button>
    <p class="btn_line"></p>
    <button :class="typestate == 2 ? 'btn_temp active' : 'btn_temp'" @click="changeType(2)"><i></i></button>
    <p class="btn_line"></p>
    <button :class="typestate == 3 ? 'btn_wind active' : 'btn_wind'" @click="changeType(3)"><i></i></button>
    <p class="btn_line"></p>
    <button :class="typestate == 4 ? 'btn_PM active' : 'btn_PM'" @click="changeType(4)"><i></i></button>
    <p class="btn_line"></p>
    <button :class="typestate == 5 ? 'btn_AQI active' : 'btn_AQI'" @click="changeType(5)"><i></i></button>
  </div>
  <div :class="typestate == 1 && tulishow == 1 ? 'box_legend' : 'statehidden'"></div>
  <div :class="typestate == 2 && tulishow == 1 ? 'box_temp' : 'statehidden'"></div>
  <div :class="typestate == 3 && tulishow == 1 ? 'box_AQI' : 'statehidden'"></div>
  <div :class="typestate == 4 && tulishow == 1 ? 'box-rain' : 'statehidden'"></div>
  <div :class="typestate == 5 && tulishow == 1 ? 'box_wind' : 'statehidden'"></div>
  <weatherinfo></weatherinfo>
  <tomorrowinfo></tomorrowinfo>
</template>

<script setup>
import { MapKey, MapSecretKey } from '../mapConfig';

window._AMapSecurityConfig = {
  //这里的安全密钥不写会导致 行政区查询等API无法使用
  securityJsCode: `${MapSecretKey}`,
};
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref, onMounted, onBeforeMount, getCurrentInstance } from 'vue';
import searchhtml from './../components/searchHtml/index.vue';
import tollgate from './../components/tollGate/toll_gate.vue';
import serves from '../components/serve/index.vue';
import motorway_cops from '../components/motorway_cops/index.vue';
import handledquickly from '../components/handledquickly/index.vue';
import Ferryhtml from '../components/Ferry/index.vue';
import trafficcontrol from '../components/trafficcontrol/index.vue';
import epidemicprevention from '../components/epidemicprevention/index.vue';
import principalsheet from '../components/principalsheet/index.vue';
import ferryvideo from '../components/ferryvideo/index.vue';
import ferryvideogl from '../components/ferryvideogl/index.vue';
import serchhtml from '../components/searchHtml/index.vue';
import { gettollevent, getfangyevent, getserveevent, getcopevent, gethandevent, getrryevent, getguanzevent, gethvidplayauto } from '../../../applications/app_mlgj/api/baseapi/index';
import { gettollmarkerlist } from '../api/index';
import tomorrowinfo from '../components/tomorrowinfo/index.vue';
import weatherinfo from '../components/weatherinfo/index.vue';

const choiseWeather = ref(false); //控制气象面板的弹出
const typestate = ref(0); //记录选择的气象类型，默认为0不展示   1~5是也对应5种状态
const tulishow = ref(0); //图例是否显示
const show = ref(false);
const showser = ref(false);
const showcops = ref(false);
const showhand = ref(false);
const showferry = ref(false);
const showtraff = ref(false);
const showepid = ref(false);
const showfvid = ref(false);
const showfvid2 = ref(false);
const showsear = ref(false);
var map = ref(null);
// var params = ref(null);
const { proxy } = getCurrentInstance();
//行政区查询容器
var district;
//行政区边界数据暂存
var polygons = [];

//打开彩云选择面板
const showChoisebox = () => {
  if (choiseWeather.value == false) {
    choiseWeather.value = true;
    typestate.value = 1; //默认选中第一个
    tulishow.value = 1;
    proxy.$mybus.emit('makeWeatherline', 1); //默认渲染第一条线路
    // proxy.$mybus.emit('showWeatherInfo', true);
  } else {
    choiseWeather.value = false;
    typestate.value = 0;
    tulishow.value = 0;
    proxy.$mybus.emit('showWeatherInfo', false); //关闭气象信息面板
    proxy.$mybus.emit('showtomorrowInfo', false); //关闭明日面板
    proxy.$mybus.emit('changeTomorrowBtn', 0); //明日按钮置灰
    proxy.$mybus.emit('delMapWeatherline', ''); //清除地图线路
    proxy.$mybus.emit('delMapWeatherMark', ''); //清除地图标记点
  }
};

//显示和关闭显示图例
proxy.$mybus.on('changetuli', data => {
  tulishow.value = data;
});

//切换气象类型按钮
const changeType = state => {
  if (typestate.value == state) {
    //点自己不触发
  } else {
    typestate.value = state;
    proxy.$mybus.emit('changeTomorrowBtn', 0); //明日按钮置灰
    proxy.$mybus.emit('showtomorrowInfo', false); //关闭明日面板
    // proxy.$mybus.emit('showWeatherInfo', true);
    tulishow.value = 1;
    console.log(123123123123);
    proxy.$mybus.emit('makeWeatherline', state);
  }
};

//根据经纬度获取气象信息
proxy.$mybus.on('getWeatherShowBox', data => {
  //当开启天气面板时，才调取气象详情接口
  if (choiseWeather.value == true) {
    gettollmarkerlist(data)
      .then(res => {
        if (res.code == 200) {
          //清除原有点
          proxy.$mybus.emit('delMapWeatherMark', ''); //清除地图气象点
          //绘制地图点
          proxy.$mybus.emit('makeWeatherMark', { lon: res.data.lon, lat: res.data.lat });
          proxy.$mybus.emit('showWeatherInfo', true); //开启气象信息面板
          proxy.$mybus.emit('changeWeatherinfo', res.data); //气象详情修改
          proxy.$mybus.emit('changeTomorrowinfo', res.data); //明日气象修改
          proxy.$mybus.emit('makechart', { xAxis: res.data.precipitation_2h_xAxis, yAxis: res.data.precipitation_2h_yAxis }); //绘制折线图
        }
      })
      .catch(error => {
        console.log(error);
      });
  } else {
  }
});

// 初始化地图函数
// const initMap = new Promise((resolve, reject) => {
//   AMapLoader.load({
//     key: `${MapKey}`,
//     version: '1.4.15',
//     plugins: [
//       'AMap.DistrictSearch',
//       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
//     ],
//   })
//     .then(AMap => {
//       var options = {
//         subdistrict: 0,
//         extensions: 'all',
//         level: 'province',
//       };
//       var district = new AMap.DistrictSearch(options);
//       //查询江苏省区域
//       district.search('江苏省', function (status, result) {
//         var bounds = result.districtList[0]['boundaries'];
//         var mask = [];
//         for (var i = 0; i < bounds.length; i++) {
//           mask.push([bounds[i]]);
//         }
//         //实例化地图
//         map = new AMap.Map('container', {
//           // mask: mask,
//           zooms: [7, 20], //最小显示级别为7，最大显示级别为20
//           viewMode: '3D', //是否为3D地图模式
//           zoom: 9, //初始化地图级别
//           center: [119.20058, 32.98972],
//           fillColor: 'red', //填充色
//           mapStyle: 'amap://styles/80285d8f601c5dc8a2943c3720108b0e',
//         });
//         //添加描边
//         for (var i = 0; i < bounds.length; i++) {
//           new AMap.Polyline({
//             path: bounds[i],
//             strokeColor: '#00b998',
//             strokeWeight: 4,
//             map: map,
//           });
//         }
//         resolve(map);
//       });
//       //实时路况图层
//       setTimeout(() => {
//         let times = setInterval(() => {
//           if (map) {
//             //实时路况信息
//             var trafficLayer = new AMap.TileLayer.Traffic({
//               zIndex: 10,
//             });
//             trafficLayer.setMap(map);
//             //禁止旋转
//             map.setStatus({
//               rotateEnable: false,
//             });
//             searchAndBounds('江苏省');
//             clearInterval(times);
//             console.log('添加路况');
//           } else {
//           }
//         }, 800);
//       }, 1000);

//       // map.setFeatures(['road', 'bg']);
//       //操作成功
//     })
//     .catch(e => {
//       //操作失败
//       reject(e);
//     });
// });

// //边界查询并绘制
// function searchAndBounds(dis) {
//   var options = {
//     subdistrict: 0,
//     extensions: 'all',
//     level: 'province',
//   };
//   var district = new AMap.DistrictSearch(options);
//   district.search(dis, function (status, result) {
//     // 获取边界信息
//     let bounds = result.districtList[0].boundaries;
//     map.remove(polygons); //清除上次结果
//     polygons = [];
//     if (bounds) {
//       for (let i = 0, l = bounds.length; i < l; i++) {
//         //生成行政区划polygon
//         let polygon = new AMap.Polygon({
//           map: map,
//           strokeWeight: 1,
//           path: bounds[i],
//           fillOpacity: 0.1,
//           fillColor: '#0fb8a0',
//           strokeColor: '#000',
//         });
//         polygons.push(polygon);
//       }
//       // 地图自适应
//       map.setFitView();
//     }
//   });
// }
const closeAllopup = () => {
  show.value = false;
  showser.value = false;
  showcops.value = false;
  showhand.value = false;
  showferry.value = false;
  showtraff.value = false;
  showepid.value = false;
  showfvid.value = false;
  showfvid2.value = false;
  showsear.value = false;
};
proxy.$mybus.on('closePubop', type => {
  show.value = type;
});
proxy.$mybus.on('closePubopser', type => {
  showser.value = type;
});
proxy.$mybus.on('closePubopsercops', type => {
  showcops.value = type;
});
proxy.$mybus.on('closePubopserhand', type => {
  showhand.value = type;
});
proxy.$mybus.on('closePubopserferry', type => {
  showferry.value = type;
});
proxy.$mybus.on('closePubopsertraff', type => {
  showtraff.value = type;
});
proxy.$mybus.on('closePubopserepid', type => {
  showepid.value = type;
});
proxy.$mybus.on('closePubopserfvid', type => {
  showfvid.value = type;
});
proxy.$mybus.on('closePubopserfvidg2', type => {
  showfvid2.value = type;
});
proxy.$mybus.on('closePubopserSear', type => {
  showsear.value = type;
});
proxy.$mybus.on('openSear', type => {
  showsear.value = type;
});

const showPulocm = () => {
  //汽渡标记点点击
  proxy.$mybus.on('ferryStionclick', id => {
    getrryevent(id).then(({ data }) => {
      proxy.$mybus.emit('ferryStionclickevent', data);
    });
  });

  //交通管制标记点点击
  proxy.$mybus.on('guanzStionclick', id => {
    getguanzevent(id).then(({ data }) => {
      proxy.$mybus.emit('trffStionclickevent', data);
    });
  });
  //防疫点标记点点击
  proxy.$mybus.on('epidStionclick', id => {
    getfangyevent(id).then(data => {
      proxy.$mybus.emit('epidStionclickevent', data);
    });
  });
  //收费站标记点点击
  proxy.$mybus.on('tollStionclick', id => {
    gettollevent(id).then(({ data }) => {
      proxy.$mybus.emit('tollStionclickevent', data);
    });
  });

  //服务区标记点点击
  proxy.$mybus.on('serveStionclick', id => {
    getserveevent(id).then(({ data }) => {
      showser.value = show;
      localStorage.setItem('serveId', id);
      proxy.$mybus.emit('serveStionclickevent', data);
    });
  });
  // 服务区视频点击展示视频弹框
  proxy.$mybus.on('serveVideoshwo', data => {
    console.log(data); // 获取视频地址 展示并打开视频
    showfvid.value = data.type;
    showser.value = false;
  });
  //高速交警标记点点击
  proxy.$mybus.on('copStionclick', id => {
    getcopevent(id).then(({ data }) => {
      proxy.$mybus.emit('copStionclickevent', data);
    });
  });

  //事故快处标记点点击
  proxy.$mybus.on('handStionclick', id => {
    gethandevent(id).then(({ data }) => {
      proxy.$mybus.emit('handStionclickevent', data);
    });
  });
  // 高速地图事件
  proxy.$mybus.on('mapzoomend', datas => {
    AMap.event.addListener(datas.map, 'zoomend', function () {
      if (datas.fvmstmarker != null) {
        datas.fvmstmarker.clear();
      }
      var ew_zoom = datas.map.getZoom(); //获取地图当前层级
      var massvide_data = [];
      if (datas.data != null) {
        datas.data.forEach(item => {
          if (ew_zoom >= item.start && ew_zoom <= item.end) {
            var ele = {};
            ele.id = item.id;
            ele.lnglat = item.lnglat;
            ele.end = item.end;
            ele.start = item.start;
            massvide_data.push(ele);
          }
        });
        datas.fvmstmarker.setData(massvide_data);
      }
    });
  });
  //公路地图事件
  proxy.$mybus.on('mapzoomendgl', ({ map, data, glmsmarker, glmstmarker }) => {
    AMap.event.addListener(map, 'zoomend', function () {
      if (glmstmarker != null) {
        glmstmarker.clear();
      }
      var ew_zoom = map.getZoom(); //获取地图当前层级
      var massvide_data = [];
      if (data != null) {
        data.forEach(item => {
          if (ew_zoom >= item.start) {
            var ele = {};
            ele.id = item.id;
            ele.lnglat = item.lnglat;
            ele.end = item.end;
            ele.start = item.start;
            massvide_data.push(ele);
          }
        });
        glmstmarker.setData(massvide_data);
      }
    });
  });
 // 视频点击事件
 proxy.$mybus.on('videoMarkerclick', e => {
    gethvidplayauto(e.data.id).then(({ data }) => {
      proxy.$mybus.emit('videoMarkeshow', data);
    });
  });

  proxy.$mybus.on('markerIconshowPuop', type => {
    closeAllopup();
    if (type == 1) {
      show.value = true;
    } else if (type == 2) {
      showser.value = true;
    } else if (type == 3) {
      showcops.value = true;
    } else if (type == 4) {
      showhand.value = true;
    } else if (type == 5) {
      showferry.value = true;
    } else if (type == 7) {
      showtraff.value = true;
    } else if (type == 8) {
      showepid.value = true;
    } else if (type == 9) {
      showfvid.value = true;
    } else if (type == 10) {
      showfvid2.value = true;
    }
  });
};
onMounted(() => {
  showPulocm();
});
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 800px;
}
#cc {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 38%;
  z-index: 2005;
}
:deep(.van-popup.listh) {
  z-index: 99999 !important;
}
:deep(.van-popup.elles) {
  z-index: 99999 !important;
  border-radius: 15px;
}
.popup-lio {
  background: #f9f9fa;
  border-radius: 50px 50px 0px 0px;
  box-shadow: 0px -10px 49px 0px rgba(200, 200, 200, 0.5);
}
#bb {
  width: 100%;
  height: 500px;
  background: black;
  color: #fff;
}
.btns_caiyun {
  width: 37px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 17px;
  border: 1px solid #b5b5b5;
  background: #fff;
  position: absolute;
  top: 65px;
  right: 15px;
  z-index: 100;
  // display: none;
}

.btns_caiyun button {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background-color: #b3b3b3;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}

.btns_caiyun button.active {
  background-color: #406dad !important;
}

.btn_temp i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_temp.png) no-repeat center;
  background-size: 100% !important;
}

.btn_temp.active i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_tempA.png) no-repeat center;
  background-size: 100% !important;
}

.btn_hum i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_hum.png) no-repeat center;
  background-size: 100% !important;
}

.btn_hum.active i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_humA.png) no-repeat center;
  background-size: 100% !important;
}

.btn_PM i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_PM.png) no-repeat center;
  background-size: 100% !important;
}

.btn_PM.active i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_PMA.png) no-repeat center;
  background-size: 100% !important;
}

.btn_AQI i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_AQI.png) no-repeat center;
  background-size: 100% !important;
}

.btn_AQI.active i {
  width: 25px;
  height: 25px;
  display: inline-block;
  background: url(../images/weather/icon_AQIA.png) no-repeat center;
  background-size: 100% !important;
}

.btn_wind {
  width: 25px;
  height: 25px;
  background: url(../images/weather/icon_wind.png) no-repeat center;
  background-size: 100% !important;
}

.btn_wind.active {
  width: 25px;
  height: 25px;
  background: url(../images/weather/icon_windA.png) no-repeat center !important;
  background-size: 100% !important;
}

.btn_line {
  border-top: 1px solid #b3b3b3;
  margin: 3px 0px;
}

.box_legend {
  width: 35px;
  height: 138px;
  background: url(../images/weather/box_legend.png) no-repeat;
  background-size: 100% !important;
  position: absolute;
  top: 287px;
  right: 17px;
  // display: none;
  z-index: 999;
}

.box_temp {
  width: 40px;
  height: 140px;
  position: absolute;
  top: 287px;
  right: 17px;
  background: url(../images/weather/btn_temp.png) no-repeat;
  background-size: contain !important;
  // display: none;
  z-index: 999;
}

.box_AQI {
  width: 35px;
  height: 165px;
  position: absolute;
  top: 287px;
  right: 17px;
  background: url(../images/weather/pm1.png) no-repeat;
  background-size: contain !important;
  // display: none;
  z-index: 999;
}

.box-rain {
  width: 35px;
  height: 138px;
  position: absolute;
  top: 287px;
  right: 17px;
  background: url(../images/weather/box_rain.png) no-repeat;
  background-size: contain !important;
  // display: none;
  z-index: 999;
}

.box_wind {
  width: 35px;
  height: 150px;
  position: absolute;
  top: 287px;
  right: 17px;
  background: url(../images/weather/box_wind.png) no-repeat;
  background-size: contain !important;
  // display: none;
  z-index: 999;
}

.caiyun {
  z-index: 999;
  position: fixed;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  right: 14px;
  top: 19px;
}
.caiyun img {
  width: 30px;
  height: 30px;
}
.statehidden {
  display: none;
}
</style>
