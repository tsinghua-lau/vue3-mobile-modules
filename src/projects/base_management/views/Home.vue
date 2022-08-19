<template>
  <div id="cc" style="">
    <!-- 基础服务界面 -->
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <!-- 收费站 -->
    <van-popup :overlay="false" class="elles" v-model:show="show" position="bottom" :style="{ height: '47%' }">
      <tollgate @closePubop="closePubop" />
    </van-popup>
    <!-- 服务区 -->
    <van-popup :overlay="false" class="elles" v-model:show="showser" position="bottom" :style="{ height: '70%' }">
      <serves @closePubopser="closePubopser" />
    </van-popup>
    <!-- 高速交警 -->
    <van-popup :overlay="false" class="elles" v-model:show="showcops" position="bottom" :style="{ height: '43%' }">
      <motorway_cops @closePubopsercops="closePubopsercops" />
    </van-popup>
    <!-- 事故快处点 -->
    <van-popup :overlay="false" class="elles" v-model:show="showhand" position="bottom" :style="{ height: '47%' }">
      <handledquickly @closePubopserhand="closePubopserhand" />
    </van-popup>
    <!-- 汽渡 -->
    <van-popup :overlay="false" class="elles" v-model:show="showferry" position="bottom" :style="{ height: '44%' }">
      <Ferryhtml @closePubopserferry="closePubopserferry" />
    </van-popup>
    <!-- 管制 -->
    <van-popup :overlay="false" class="elles" v-model:show="showtraff" position="bottom" :style="{ height: '44%' }">
      <trafficcontrol @closePubopsertraff="closePubopsertraff" />
    </van-popup>
    <!-- 防疫点 -->
    <van-popup :overlay="false" class="elles" v-model:show="showepid" position="bottom" :style="{ height: '38%' }">
      <epidemicprevention @closePubopserepid="closePubopserepid" />
    </van-popup>
    <!-- 高速视频 -->
    <van-popup :overlay="false" class="elles" v-model:show="showfvid" position="bottom" :style="{ height: '38%' }">
      <ferryvideo @closePubopserfvid="closePubopserfvid" />
    </van-popup>
    <!-- 公路视频 -->
    <van-popup :overlay="false" class="elles" v-model:show="showfvid2" position="bottom" :style="{ height: '38%' }">
      <ferryvideogl @closePubopserfvidg2="closePubopserfvidg2" />
    </van-popup>
    <!-- 搜索页 -->
    <van-popup :overlay="false" class="listh" v-model:show="showsear" position="bottom" :style="{ height: '100%' }">
      <serchhtml @closePubopserSear="closePubopserSear" />
    </van-popup>
    <!-- 路况主页面 -->
    <principalsheet @openSear="openSear" />
    <!-- <searchhtml /> -->
    <!-- <div id="container"></div> -->
  </div>
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
const { proxy } = getCurrentInstance();
//行政区查询容器
var district;
//行政区边界数据暂存
var polygons = [];

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
const closePubop = flag => {
  show.value = flag;
};
const closePubopser = flag => {
  showser.value = flag;
};
const closePubopsercops = flag => {
  showcops.value = flag;
};
const closePubopserhand = flag => {
  showhand.value = false;
};
const closePubopserferry = flag => {
  showferry.value = flag;
};
const closePubopsertraff = flag => {
  showtraff.value = flag;
};
const closePubopserepid = flag => {
  showepid.value = flag;
};
const closePubopserfvid = flag => {
  showfvid.value = flag;
};
const closePubopserfvidg2 = flag => {
  showfvid2.value = flag;
};
const closePubopserSear = flag => {
  showsear.value = flag;
};
const openSear = flag => {
  showsear.value = flag;
};
const showPulocm = () => {
  proxy.$mybus.on('markerIconshowPuop', type => {
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
  height: 35%;
  z-index: 1;
}
/deep/ .van-popup.listh {
  z-index: 99999 !important;
}
/deep/ .van-popup.elles {
  z-index: 99999 !important;
  border-radius: 30px;
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
</style>
