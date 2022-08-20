var tollmarker = [];//收费站点标记
var servemarker = []; //服务区点标记
var copsmarker = [];// 高速交警点标记
var handmarker = [];//事故快处点标记
var ferrmarker = [];//汽渡点标记
var traffmarker = [];//管制点标记
var epidmarker = [];//防疫点点标记
var fvmarker = [];//高速视频点标记
var glmarker = [];//公路视频点标记
export const makebaseMark = (params,map,proxy) => {
     if (params.type == 1) {
       // require('../icon/markerIcon1.png') // 关闭
       //require('../icon/markerIcon2.png') // 半开
       if(params.flag){
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/markerIcon.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [119.988275, 32.568285],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        tollmarker.push(marker);
        marker.setMap(map);
       }else{
        map.remove(tollmarker);
        tollmarker = [];
       }
     } else if (params.type== 2) {
      if(params.flag){
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/serveonline.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [120.396451, 32.276125],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        servemarker.push(marker);
        marker.setMap(map);
      }else{
        map.remove(servemarker);
        servemarker = [];
      }
       
     } else if (params.type == 3) {
      if (params.flag) {
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/markerCops.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [118.954496, 33.896089],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        copsmarker.push(marker);
        marker.setMap(map);
        
      }else{
        map.remove(copsmarker);
        copsmarker = [];
      }
     } else if (params.type == 4) {
      if(params.flag){
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/markerhaned.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [120.239896, 33.512224],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        handmarker.push(marker)
        marker.setMap(map);
      }else{
        map.remove(handmarker);
        handmarker = [];
      }
       
     } else if (params.type == 5) {
      if (params.flag) {
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/ferrymarkeropen.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [119.679594, 32.215728],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        ferrmarker.push(marker);
        marker.setMap(map);
      }else{
        map.remove(ferrmarker);
        ferrmarker = [];
      }
     } else if (params.type == 7) {
      if (params.flag) {
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/trffMarkeer.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [119.229154, 34.486772],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        traffmarker.push(marker);
        marker.setMap(map);
      }else{
        map.remove(traffmarker);
        traffmarker = [];
      }
       
     } else if (params.type == 8) {
      if (params.flag) {
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/epidMarker.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [118.229398, 33.827668],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        epidmarker.push(marker)
        marker.setMap(map);
      }else{
        map.remove(epidmarker);
        epidmarker = [];
      }
       
     } else if (params.type == 9) {
      if (params.flag) {
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/vierMarker.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [120.596952, 32.457075],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        fvmarker.push(marker)
        marker.setMap(map);
      }else{
        map.remove(fvmarker);
        fvmarker = [];
      }
       
     } else if (params.type == 10) {
      if (params.flag) {
        var icon = new AMap.Icon({
          size: new AMap.Size(40, 50), // 图标尺寸
          image: require('@/projects/base_management/icon/vierMarker.png'), // Icon的图像
          imageOffset: new AMap.Pixel(0, 0), // 图像相对展示区域的偏移量，适于雪碧图等
          imageSize: new AMap.Size(40, 50), // 根据所设置的大小拉伸或压缩图片
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: [119.827909, 33.982678],
        });
        marker.on('click', function () {
          proxy.$mybus.emit('markerIconshowPuop', params.type);
        });
        glmarker.push(marker);
        marker.setMap(map);
      }else{
        map.remove(glmarker);
        glmarker = [];
      }
     }
   };

export const makeroadConditions = (type,map,trafficLayerjs)=>{
    if(type){
      trafficLayerjs.setMap(map);
    }else{
      map.remove(trafficLayerjs);
    }
  
   };