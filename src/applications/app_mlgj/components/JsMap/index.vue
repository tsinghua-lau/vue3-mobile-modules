<template>
  <div class="box">
    <!-- 高德地图容器 -->
    <div id="container"></div>
  </div>
</template>

<script setup>
import { MapKey, MapSecretKey } from './mapConfig.js';

window._AMapSecurityConfig = {
  //这里的安全密钥不写会导致 行政区查询等API无法使用
  securityJsCode: `${MapSecretKey}`,
};

//高德API加载器 安装命令： npm i @amap/amap-jsapi-loader
import AMapLoader from '@amap/amap-jsapi-loader';
import { makeMark } from '@mlgj/hooks/czMap/index';
import { selectLine, resetMap, hollowOut, getUserLocation, delMapObj } from '@mlgj/hooks/appointment/index';
import { makenowMark, makeCarMark, selectDoubleLine } from '@mlgj/hooks/rescue/index';
import { onBeforeMount, onMounted, ref, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
// 地图容器
var map = null;
//Vue 挂载前
onBeforeMount(() => {
  //测试
  proxy.$mybus.on('test', data => {
    // makeMark(map);
    // console.log(data);
  });

//------------------公共方法----------------------------
  //重置地图
  proxy.$mybus.on('resetMap', data => {
    resetMap(map);
  });

  //反镂空
  proxy.$mybus.on('hollowOut', data => {
    // hollowOut(map);
  });

  //重绘江苏省
  proxy.$mybus.on('searchAndBounds', data => {
    // searchAndBounds('江苏省');
  });

//------------------路况预约----------------------------
 //路线选择
  proxy.$mybus.on('selectLine', data => {
    selectLine(map);
  });

   //删除mark对象
  proxy.$mybus.on('delMapObj', data => {
    delMapObj(map);
  });

//------------------救援服务----------------------------
  //添加当前人员标记
  proxy.$mybus.on('makenowMark', data => {
    makenowMark(map);
  });

  //添加救援车辆
  proxy.$mybus.on('makeCarMark', data => {
    makeCarMark(map);
  });

  //绘制救援路线
  proxy.$mybus.on('selectDoubleLine', data => {
    selectDoubleLine(map);
  });

  //地图初始化
  initMap
    .then(map => {
      //反镂空
      hollowOut(map);
      //获取用户位置
      getUserLocation(map);
      //绘制默认地区边界
      searchAndBounds('江苏省');
    })
    .catch(err => {
      console.log(err);
    });
});
onMounted(() => {});

//行政区查询容器
var district;
//行政区边界数据暂存
var polygons = [];

// 初始化地图函数
const initMap = new Promise((resolve, reject) => {
  AMapLoader.load({
    key: `${MapKey}`,
    version: '1.4.15',
    plugins: [
      'AMap.DistrictSearch',
      'AMap.loadUI',
      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    ],
    AMapUI: {
      version: '1.1',
    },
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
          // mask: mask,
          zooms: [7, 20], //最小显示级别为7，最大显示级别为20
          viewMode: '3D', //是否为3D地图模式
          zoom: 9, //初始化地图级别
          center: [119.20058, 32.98972],
          fillColor: 'red', //填充色
          mapStyle: 'amap://styles/80285d8f601c5dc8a2943c3720108b0e',
        });
        //添加描边
        for (var i = 0; i < bounds.length; i++) {
          new AMap.Polyline({
            path: bounds[i],
            strokeColor: '#00b998',
            strokeWeight: 4,
            map: map,
          });
        }
        resolve(map);
      });
      //实时路况图层
      setTimeout(() => {
        let times = setInterval(() => {
          if (map) {
            //实时路况信息
            var trafficLayer = new AMap.TileLayer.Traffic({
              zIndex: 10,
            });
            trafficLayer.setMap(map);
            //禁止旋转
            map.setStatus({
              rotateEnable: false,
            });
            clearInterval(times);
            console.log('添加路况');
          } else {
          }
        }, 800);
      }, 1000);

      // map.setFeatures(['road', 'bg']);
      //操作成功
    })
    .catch(e => {
      //操作失败
      reject(e);
    });
});

//边界查询并绘制
function searchAndBounds(dis) {
  console.log('绘制江苏省');
  var options = {
    subdistrict: 0,
    extensions: 'all',
    level: 'province',
  };
  var district = new AMap.DistrictSearch(options);
  district.search(dis, function (status, result) {
    // 获取边界信息
    let bounds = result.districtList[0].boundaries;
    map.remove(polygons); //清除上次结果
    polygons = [];
    if (bounds) {
      for (let i = 0, l = bounds.length; i < l; i++) {
        //生成行政区划polygon
        let polygon = new AMap.Polygon({
          map: map,
          strokeWeight: 2,
          path: bounds[i],
          fillOpacity: 0.1,
          fillColor: '#0fb8a0',
          strokeColor: '#4CC6FF',
        });
        polygons.push(polygon);
      }
      // 地图自适应
      map.setFitView();
    }
    map.setCenter([119.20058, 32.98972]);

    //图层
    map.setZoom(7);
  });
}
</script>

<style lang="less" scoped>
:deep(.amap-logo) {
  display: none;
  opacity: 0 !important;
}
.amap-copyright {
  opacity: 0;
}
.box {
  width: 100%;
  height: 100%;
}

:deep(.amap-geolocation-con){
    top: 54% !important;
    left: 85% !important;
    z-index: 2004 !important;
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
#controller {
  position: absolute;
  z-index: 99;
  top: 20px;
  left: 100px;
  background: white;
  list-style-type: none;
  width: 120px;
}
</style>
