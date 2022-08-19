import { ref, onMounted, onUnmounted } from 'vue';

import { Toast } from 'vant';

import { publicMarks} from '../common/index.js';

let rescueCarMark = [];

//添加救援车辆图标
export const makeCarMark = (map) => {
  console.log('carcarcar');
var marker = new AMap.Marker({
  icon: require('../../images/cars.png'),
  position: [118.723979,31.98926],
  offset: new AMap.Pixel(-13, -30),
});
marker.setMap(map);
rescueCarMark.push(marker);


};



export const selectDoubleLine = (map) =>{
  var route;
  var path = [];
  path.push([118.723979,31.98926]);
  path.push([118.895038,32.049182]);
  path.push([118.6972,32.023904]);
  map.plugin("AMap.DragRoute", function() {
    route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
    route.search(); //查询导航路径并开启拖拽导航
});

}



// //重置地图对象
// export const resetMap = (map)=>{
//   //清除覆盖物
//   map.clearMap();
//   //中心点
//   map.setCenter([119.20058, 32.98972]);

//   //图层
//   map.setZoom(7)

//   // map.setZoomAndCenter(14, [119.20058, 32.98972]);
// }


export const delMapCar = map => {
  // console.log('car的数量:'+rescueCarMark.length+rescueCarMark)

  map.remove(rescueCarMark);
  rescueCarMark = [];
};