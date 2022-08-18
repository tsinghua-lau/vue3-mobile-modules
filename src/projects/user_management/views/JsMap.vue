<template>
  <div class="box">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { MapKey, MapSecretKey } from './mapConfig';
import alllines from './alllines.json';

window._AMapSecurityConfig = {
  //这里的安全密钥不写会导致 行政区查询等API无法使用
  securityJsCode: `${MapSecretKey}`,
};

import AMapLoader from '@amap/amap-jsapi-loader';
//热力图模拟数据
import { onBeforeMount, onMounted, ref } from 'vue';

//Vue什么周期 挂载前
onBeforeMount(() => {
  initMap
    .then(ok => {
      //绘制默认地区边界
      searchAndBounds('江苏省');
    })
    .catch(err => {
      console.log(err);
    });
});
onMounted(() => {});

// 地图容器
var map;

const road = () => {
  var roads = alllines;
  roads = alllines;
  var geo = '';
  geo = new AMap.GeoJSON({
    geoJSON: roads,
    fillColor: 'white',
  });
  console.log(map);
  map.add(geo);
};

// 初始化地图函数
const initMap = new Promise((resolve, reject) => {
  AMapLoader.load({
    key: `${MapKey}`,
    version: '1.4.15',
    plugins: ['AMap.DistrictSearch'],
  })
    .then(AMap => {
      var options = {
        subdistrict: 0,
        extensions: 'all',
        level: 'province',
      };
      var district = new AMap.DistrictSearch(options);
      //查询江苏省区域
      district.search('江苏省', function (status, result) {
        var bounds = result.districtList[0]['boundaries'];
        var mask = [];
        for (var i = 0; i < bounds.length; i++) {
          mask.push([bounds[i]]);
        }
        //实例化地图
        map = new AMap.Map('container', {
          mask: mask,
          //设置地图容器id
          zooms: [5, 15],
          viewMode: '3D', 
          zoom: 6.5,
          center: [119.20058, 32.98972],
          mapStyle: 'amap://styles/368c5674bcd88bac4a215b97d78e7b7e',
        });
        //添加描边
        for (var i = 0; i < bounds.length; i++) {
          new AMap.Polyline({
            path: bounds[i],
            strokeColor: 'red',
            strokeWeight: 2,
            map: map,
          });
        }
      });
      setTimeout(() => {
        map.setFeatures(['road', 'bg']);
        // road();
      }, 500);

      //操作成功
      resolve();
    })
    .catch(e => {
      //操作失败
      reject(e);
    });
});

</script>

<style lang="less" scoped>
.box {
  width: 99%;
  height: 500px;
  border: 1px solid red;
}
/deep/ .amap-logo {
  display: none;
  opacity: 0 !important;
}
.amap-copyright {
  opacity: 0;
}
#container {
  width: 100%;
  height: 100%;
}
:deep(.custom-content-marker) {
  word-break: keep-all;
  color: #2ddcce;
  font-size: 16px;
  position: relative;
  padding-left: 25px;
  font-weight: 900;
}
:deep(.custom-content-marker::before) {
  content: '.';
  width: 6px;
  height: 6px;
  position: absolute;
  text-indent: -9999px;
  background: #fff;
  display: block;
  top: 3px;
  left: 0;
  border-radius: 10px;
  border: 6px solid #00deff;
  -webkit-box-shadow: 0px 0px 12px #fff;
  box-shadow: 0px 0px 12px #fff;
}

</style>
