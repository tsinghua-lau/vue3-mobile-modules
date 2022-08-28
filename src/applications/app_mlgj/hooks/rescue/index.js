import { ref, onMounted, onUnmounted } from 'vue';
import { Toast } from 'vant';
import { publicMarks} from '../common/index.js';
// import { getUserStation } from '@/projects/rescue_management/api/index.js';

let rescueCarMark = [];   

//添加救援车辆图标
export const makeCarMark = (map) => {
  console.log('carcarcar');
  var icon = new AMap.Icon({
    size: new AMap.Size(30, 22), // 图标尺寸
    image: require('../../images/cars.png'), // Icon的图像
    imageOffset: new AMap.Pixel(0, 0),
    imageSize: new AMap.Size(30, 22), // 根据所设置的大小拉伸或压缩图片
  });
var marker = new AMap.Marker({
  icon: icon,
  position: [118.723979,31.98926],
  offset: new AMap.Pixel(-13, -30),
});
marker.setMap(map);
rescueCarMark.push(marker);
//     //鼠标点击marker弹出自定义的信息窗体
// marker.on('click', function () {
//       infoWindow.open(map, marker.getPosition());
//   });


};

//添加桩号点图标图标
export const makeStationMarks = (map,data) => {
  console.log('carcarcar');
  var icon = new AMap.Icon({
    size: new AMap.Size(20, 20), // 图标尺寸
    image: require('@/projects/rescue_management/images/pile.png'), // Icon的图像
    imageOffset: new AMap.Pixel(0, 0),
    imageSize: new AMap.Size(20, 20), // 根据所设置的大小拉伸或压缩图片
  });

  if(data.length>0){
    var pilemarks = data;
    for (let i = 0; i < pilemarks.length; i++) {
      let a =[parseFloat(pilemarks[i].lon),parseFloat(pilemarks[i].lat)]//WGS84坐标转GCJ02
        var marker = new AMap.Marker({
        icon: icon,
        position: a,
        offset: new AMap.Pixel(-13, -30),
        });
      // marker.setMap(map);
      map.add(marker);
      rescueCarMark.push(marker);
      map.setFitView(rescueCarMark);
    }
  }


};


//




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


export const delMapCar = map => {
  // console.log('car的数量:'+rescueCarMark.length+rescueCarMark)

  map.remove(rescueCarMark);
  rescueCarMark = [];
};


// //实例化信息窗体
// const title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
//     content = [];
// content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
// content.push("电话：010-64733333");
// content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
// const infoWindow = new AMap.InfoWindow({
//     isCustom: true,  //使用自定义窗体
//     content: createInfoWindow(title, content.join("<br/>")),
//     offset: new AMap.Pixel(16, -45)
// });

// //构建自定义信息窗体
// function createInfoWindow(title, content) {
//   const info = document.createElement("div");
//     info.className = "custom-info input-card content-window-card";

//     //可以通过下面的方式修改自定义窗体的宽高
//     info.style.width = "400px";
//     // 定义顶部标题
//     const top = document.createElement("div");
//     const titleD = document.createElement("div");
//     const closeX = document.createElement("img");
//     top.className = "info-top";
//     titleD.innerHTML = title;
//     closeX.src = "https://webapi.amap.com/images/close2.gif";
//     closeX.onclick = closeInfoWindow;

//     top.appendChild(titleD);
//     top.appendChild(closeX);
//     info.appendChild(top);

//     // 定义中部内容
//     const middle = document.createElement("div");
//     middle.className = "info-middle";
//     middle.style.backgroundColor = 'white';
//     middle.innerHTML = content;
//     info.appendChild(middle);

//     // 定义底部内容
//     const bottom = document.createElement("div");
//     bottom.className = "info-bottom";
//     bottom.style.position = 'relative';
//     bottom.style.top = '0px';
//     bottom.style.margin = '0 auto';
//     const sharp = document.createElement("img");
//     sharp.src = "https://webapi.amap.com/images/sharp.png";
//     bottom.appendChild(sharp);
//     info.appendChild(bottom);
//     return info;
// }

// //关闭信息窗体
// function closeInfoWindow() {
//     map.clearInfoWindow();
// }