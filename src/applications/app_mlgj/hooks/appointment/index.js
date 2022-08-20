import { ref, onMounted, onUnmounted } from 'vue';

import { Toast } from 'vant';

import { publicMarks, appiontment } from '../common/index.js';

//测试打点
export const makeMark = map => {
  console.log(123213123);
  var marker = new AMap.Marker({
    icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
    position: [119.20058, 32.98972],
    // offset: new AMap.Pixel(-13, -30),
  });
  marker.setMap(map);
};

//选择线段
export const selectLine = map => {
  var route;
  var path = [];
  path.push([119.985363, 32.416212]);
  path.push([120.226073, 32.059494]);
  map.plugin('AMap.DragRoute', function () {
    route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
    AMap.event.addListener(route, 'complete', function () {
      var def = route.getRoute();
      // console.log(def, '@@');
    });

    route.search(); //查询导航路径并开启拖拽导航
  });

  appiontment.allLines.push(route);
  return route;
};

//重置地图对象
export const resetMap = map => {
  //清除覆盖物
  // map.clearMap();
  //中心点

  map.setCenter([119.20058, 32.98972]);

  //图层
  map.setZoom(7);

  // map.setZoomAndCenter(14, [119.20058, 32.98972]);
};

//反镂空
export const hollowOut = map => {
  console.log('反镂空');
  return new Promise((resolve, reject) => {
    AMapUI.loadUI(['geo/DistrictExplorer'], function (DistrictExplorer) {
      initPage(DistrictExplorer);
    });

    function getAllRings(feature) {
      var coords = feature.geometry.coordinates,
        rings = [];

      for (var i = 0, len = coords.length; i < len; i++) {
        rings.push(coords[i][0]);
      }

      return rings;
    }

    function getLongestRing(feature) {
      var rings = getAllRings(feature);

      rings.sort(function (a, b) {
        return b.length - a.length;
      });

      return rings[0];
    }

    function initPage(DistrictExplorer) {
      //创建一个实例
      var districtExplorer = new DistrictExplorer({
        map: map,
      });

      var countryCode = 100000, //全国
        provCodes = [
          320000, //北京
        ],
        cityCodes = [320000];

      districtExplorer.loadMultiAreaNodes(
        //只需加载全国和市，全国的节点包含省级
        [countryCode].concat(cityCodes),
        function (error, areaNodes) {
          var countryNode = areaNodes[0],
            cityNodes = areaNodes.slice(1);

          var path = [];

          //首先放置背景区域，这里是大陆的边界
          path.push(getLongestRing(countryNode.getParentFeature()));

          for (var i = 0, len = provCodes.length; i < len; i++) {
            //逐个放置需要镂空的省级区域
            path.push.apply(path, getAllRings(countryNode.getSubFeatureByAdcode(provCodes[i])));
          }

          // for (var i = 0, len = cityNodes.length; i < len; i++) {
          //     //逐个放置需要镂空的市级区域
          //     path.push.apply(path, getAllRings(cityNodes[i].getParentFeature()));
          // }

          //绘制带环多边形
          //https://lbs.amap.com/api/javascript-api/reference/overlay#Polygon
          var polygon = new AMap.Polygon({
            bubble: true,
            lineJoin: 'round',
            strokeColor: '#6dd0f7', //线颜色
            strokeOpacity: 2, //线透明度
            strokeWeight: 1, //线宽
            fillColor: '#a99b9b', //填充色
            fillOpacity: 0.65, //填充透明度
            map: map,
            path: path,
          });
        }
      );
      resolve();
    }
  });
};

//获取用户经纬度
export const getUserLocation = (map, onComplete = function () {}, onError = function () {}) => {
  //定位完成的回调
  var onComplete = res => {
    console.log('定位完成');
    let flg = false;
    let positions = [res.position.lng, res.position.lat];
    let obj = publicMarks.find(t => t.w.extData.id == '1');

    if (obj) {
      obj.setPosition(positions);
    } else {
      var marker1 = new AMap.Marker({
        icon: startIcon,
        position: positions,
        extData: { id: '1' },
      });
      map.add(marker1);
      publicMarks.push(marker1);
    }
  };

  let geolocation = null,
    geocoder = null;

  // 加载地理位置编码插件
  AMap.service('AMap.Geocoder', function () {
    //回调函数
    //实例化Geocoder
    geocoder = new AMap.Geocoder({
      city: '010', //城市，默认：“全国”
    });
    //TODO: 使用geocoder 对象完成相关功能
  });
  var btnUrl = require('../../images/mapBtn.png');
  var icon = {
    type: 'image',
    image: require('../../images/location.png'),
    size: [30, 32],
  };
  var startIcon = new AMap.Icon({
    // 图标尺寸
    size: new AMap.Size(41, 56),
    // 图标的取图地址
    image: require('../../images/location.png'),
    // 图标所用图片大小
    imageSize: new AMap.Size(41, 46),
    // 图标取图偏移量
    // imageOffset: new AMap.Pixel(-9, -3)
  });
  // var marker1 = new AMap.Marker({
  //   map:map,
  //   icon:startIcon,
  //   position:positions
  // });
  // 加载定位插件
  map.plugin('AMap.Geolocation', function () {
    // 初始化定位插件
    geolocation = new AMap.Geolocation({
      noIpLocate: 0,
      noGeoLocation: 0,
      GeoLocationFirst: true,
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 5000, //超过5秒后停止定位，默认：无穷大
      maximumAge: 0, //定位结果缓存0毫秒，默认：0
      convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      showButton: true, //显示定位按钮，默认：true
      buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
      // buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      showMarker: false, //定位成功时是否在定位位置显示一个Marker默认值：true
      showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
      panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
      zoomToAccuracy: false, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      // markerOptions: marker1,
      buttonDom: `<div style="width:40px;height:40px;background:#ffffff;border-radius:5px;display: flex;
      align-items: center;
      justify-content: center;box-sizing: border-box;"><img style='width:30px;height:30px' src=${btnUrl}></div>`,
    });
    // 把定位插件加入地图实例
    map.addControl(geolocation);

    // 添加地图全局定位事件
    AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
    AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
    // 调用定位
    geolocation.getCurrentPosition(function (status, result) {
      if (status == 'complete') {
        Toast('定位成功');
      } else {
        Toast('定位失败');
      }
    });

    // setInterval(()=>{
    //   geolocation.watchPosition()
    // },10000)
  });
};

export const delMapObj = map => {
  // console.log(appiontment.allMarks);
  // map.remove(appiontment.allMarks)
  // appiontment.allMarks = [];
  console.log('有',appiontment.allLines.length,'条线');
  for (let i = 0; i < appiontment.allLines.length; i++) {
    try {
     console.log(appiontment.allLines[i]);
     debugger
      appiontment.allLines[i].close();
      appiontment.allLines[i].destroy();
    } catch (error) {
      
    }

  }
  appiontment.allLines = [];

};
