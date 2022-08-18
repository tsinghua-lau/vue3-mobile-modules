import { ref, onMounted, onUnmounted } from 'vue'

export const makeMark = (map) => {
    console.log(123213123);
  var marker = new AMap.Marker({
    icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
    position: [119.20058, 32.98972],
    offset: new AMap.Pixel(-13, -30),
  });
  marker.setMap(map);
};
export const tz = (map) =>{
  var route;
  var path = [];
  path.push([118.894534,32.059421]);
  path.push([118.895038,32.049182]);
  path.push([118.848346,32.037468]);
  map.plugin("AMap.DragRoute", function() {
    route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
    route.search(); //查询导航路径并开启拖拽导航
});
}

