export const makebaseMark = (type,map,proxy) => {
     if (type == 1) {
       // require('../icon/markerIcon1.png') // 关闭
       //require('../icon/markerIcon2.png') // 半开
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 2) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 3) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 4) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 5) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 7) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 8) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 9) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     } else if (type == 10) {
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
         proxy.$mybus.emit('markerIconshowPuop', type);
       });
       marker.setMap(map);
     }
   };