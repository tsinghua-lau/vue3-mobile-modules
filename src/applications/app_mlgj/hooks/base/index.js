/**
 *
 * test
 * @author panq
 * @time 2022/8/18
 *
 * */
 var tollmarker = [];//收费站点标记
var servemarker = []; //服务区点标记
var copsmarker = [];// 高速交警点标记
var handmarker = [];//事故快处点标记
var ferrmarker = [];//汽渡点标记
var traffmarker = [];//管制点标记
var epidmarker = [];//防疫点点标记
var fvmarker = [];//高速视频点标记
var glmarker = [];//公路视频点标记


var rainfallline = [];//降雨量线路
var templine = [];//温度线路
var windline = [];//风向线路
var pmline = [];//pm2.5线路
var aqiline = [];//aqi线路

var weatherloadmark = [];

import {gettollmarkerlist,
  getfangymarkerlist,
  getservemarkerlist,
  getmotorwaymarkerlist
  ,gethandledmarkerlist
  ,gethvidevent
  ,getGvidevent
  ,getferrymarkerlist
  ,getguanzmarkerlist
} from '../../api/baseapi/index'
import {getrainfallline,gettempline,getwindline,getpmline,getaqiline} from '../../api/weatherapi/index'
import { Toast } from 'vant';
export const makebaseMark = (params,map,proxy) => {
     if (params.type == 1) {
       if(params.flag){
        gettollmarkerlist().then(({data})=>{
          var tollmsmarker = [];//收费站点标记
            data.forEach(item=>{
              var ele = {};
              ele.id = item.id;
              ele.lnglat = item.lngLat;
              ele.totllName = item.name; // 视频路段名称
              ele.style = item.style;
              tollmsmarker.push(ele);
            })
            var styleobj = [{
              url: require('@/projects/base_management/icon/markerIcon.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            },{
              url: require('@/projects/base_management/icon/markerIcon2.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            },{
              url: require('@/projects/base_management/icon/markerIcon1.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            }
          ]
            var tollmstmarker = new AMap.MassMarks(tollmsmarker,{
              zIndex: 200, // 海量点图层叠加的顺序
              zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
              cursor: 'pointer',
              style:styleobj
            })
            tollmstmarker.setMap(map)
            tollmstmarker.on('click', function (e) {
              proxy.$mybus.emit('markerIconshowPuop', params.type);
              proxy.$mybus.emit('tollStionclick',e.data.id);
              });
            tollmarker.push(tollmstmarker);
        }).catch((error)=>{
          Toast('获取数据列表出错，请联系管理员');
          console.log(error);
        })
       }else{
        map.remove(tollmarker);
        tollmarker = [];
    }
     } else if (params.type == 2) {
      //服务区  serveonline
     if(params.flag){
      getservemarkerlist().then(({data})=>{
        var servemsmarker = [];//服务区点标记
          data.forEach(item=>{
            var ele = {};
            ele.id = item.id;
            ele.lnglat = item.lngLat;
            ele.name = item.name; // 服务区名称
            ele.style = 0;
            servemsmarker.push(ele);
          })
        //   var styleobj = [{
        //     url: require('@/projects/base_management/icon/serveonline.png'), // 图标地址
        //       size: new AMap.Size(40, 50), // 图标大小
        //       anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
        //   }
        // ]
          var servemstmarker = new AMap.MassMarks(servemsmarker,{
            zIndex: 200, // 海量点图层叠加的顺序
            zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
            cursor: 'pointer',
            style:{
              url: require('@/projects/base_management/icon/serveonline.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            }
          })
          servemstmarker.setMap(map)
          servemstmarker.on('click', function (e) {
            proxy.$mybus.emit('markerIconshowPuop', params.type);
            proxy.$mybus.emit('serveStionclick',e.data.id);
            });
            servemarker.push(servemstmarker);
      }).catch((error)=>{
        Toast('获取数据列表出错，请联系管理员');
        console.log(error);
      })
     }else{
      map.remove(servemarker);
      servemarker = [];
     }
       
     } else if (params.type == 3) {
      //高速交警
      if(params.flag){
        getmotorwaymarkerlist().then(({data})=>{
          var copmsmarker = [];//高速交警点标记
            data.forEach(item=>{
              var ele = {};
              ele.id = item.id;
              ele.lnglat = item.lngLat;
              ele.name = item.name; // 高速交警名称
              ele.style = 0;
              copmsmarker.push(ele);
            })
            var styleobj = [{
              url: require('@/projects/base_management/icon/markerCops.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            }
          ]
            var copsmstmarker = new AMap.MassMarks(copmsmarker,{
              zIndex: 200, // 海量点图层叠加的顺序
              zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
              cursor: 'pointer',
              style:styleobj
            })
            copsmstmarker.setMap(map)
            copsmstmarker.on('click', function (e) {
              proxy.$mybus.emit('markerIconshowPuop', params.type);
              proxy.$mybus.emit('copStionclick',e.data.id);
              });
              copsmarker.push(copsmstmarker);
        }).catch((error)=>{
          Toast('获取数据列表出错，请联系管理员');
          console.log(error);
        })
       }else{
        map.remove(copsmarker);
        copsmarker = [];
       }


     
     } else if (params.type == 4) {
      //事故快处  markerhaned
      if(params.flag){
        gethandledmarkerlist().then(({data})=>{
          var handmsmarker = [];//事故快处点标记
            data.forEach(item=>{
              var ele = {};
              ele.id = item.id;
              ele.lnglat = item.lngLat;
              ele.name = item.name; // 事故快处名称
              ele.style = 0;
              handmsmarker.push(ele);
            })
            var styleobj = [{
              url: require('@/projects/base_management/icon/markerhaned.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            }
          ]
            var handmstmarker = new AMap.MassMarks(handmsmarker,{
              zIndex: 200, // 海量点图层叠加的顺序
              zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
              cursor: 'pointer',
              style:styleobj
            })
            handmstmarker.setMap(map)
            handmstmarker.on('click', function (e) {
              proxy.$mybus.emit('markerIconshowPuop', params.type);
              proxy.$mybus.emit('handStionclick',e.data.id);
              });
              handmarker.push(handmstmarker);
        }).catch((error)=>{
          Toast('获取数据列表出错，请联系管理员');
          console.log(error);
        })
       }else{
        map.remove(handmarker);
        handmarker = [];
       }
       
     } else if (params.type == 5) {
      if (params.flag) {
        getferrymarkerlist().then(({data})=>{
          var ferrymsmarker = [];
          data.forEach(item=>{
            var ele = {};
            ele.id = item.id
            ele.lnglat = item.lngLat
            ele.name = item.name
            ele.style = item.style
            ferrymsmarker.push(ele);
          })
          var styleobj=[{
            url: require('@/projects/base_management/icon/ferrymarkeropen.png'), // 图标地址
              size: new AMap.Size(40, 50), // 图标大小
              anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
          },
          {
            url: require('@/projects/base_management/icon/ferrmarkerclose.png'), // 图标地址
              size: new AMap.Size(40, 50), // 图标大小
              anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
          }
        ]
          var ferrymstmarker = new AMap.MassMarks(ferrymsmarker,{
            zIndex: 200, // 海量点图层叠加的顺序
            zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
            cursor: 'pointer',
            style:styleobj
          })
          ferrymstmarker.setMap(map)
          ferrymstmarker.on('click', function (e) {
            proxy.$mybus.emit('markerIconshowPuop', params.type);
            proxy.$mybus.emit('ferryStionclick',e.data.id);
            });
            ferrmarker.push(ferrymstmarker);

        })
      }else{
        map.remove(ferrmarker);
        ferrmarker = [];
      }
     } else if (params.type == 7) {
      if (params.flag) {
        getguanzmarkerlist().then(({data})=>{
          console.log(data);
          var guanzmsmarker = [];//收费站点标记
          data.forEach(item=>{
            var ele = {};
              ele.id = item.id;
              ele.lnglat = [item.lon,item.lat];
              ele.totllName = item.name; // 视频路段名称
              guanzmsmarker.push(ele);
          })
          var guanzmstmarker = new AMap.MassMarks(guanzmsmarker,{
            zIndex: 200, // 海量点图层叠加的顺序
            zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
            cursor: 'pointer',
            style:{
              url: require('@/projects/base_management/icon/trffMarkeer.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
            }
          })
          guanzmstmarker.setMap(map)
          guanzmstmarker.on('click', function (e) {
            proxy.$mybus.emit('markerIconshowPuop', params.type);
            proxy.$mybus.emit('guanzStionclick',e.data.id);
            });
            traffmarker.push(guanzmstmarker);
        })
      }else{
        map.remove(traffmarker);
        traffmarker = [];
      }
       
     } else if (params.type == 8) {
      if (params.flag) {
        getfangymarkerlist().then(({data})=>{
          var epidmsmarker = [];
          data.forEach(item=>{
            var ele = {};
            ele.id = item.id;
            ele.lnglat = item.lngLat;
            ele.totllName = item.name; // 视频路段名称
            epidmsmarker.push(ele);
          })
          var styleobj = {
            url: require('@/projects/base_management/icon/epidMarker.png'), // 图标地址
                size: new AMap.Size(40, 50), // 图标大小
                anchor: new AMap.Pixel(0,0) // 图标显示位置偏移量，基准点为图标左上角
          }
          var epidmstmarker = new AMap.MassMarks(epidmsmarker,{
            zIndex: 200, // 海量点图层叠加的顺序
            zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
            cursor: 'pointer',
            style:styleobj
          })
          epidmstmarker.setMap(map);
          epidmstmarker.on('click',function(e){
            proxy.$mybus.emit('markerIconshowPuop', params.type);
            proxy.$mybus.emit('epidStionclick',e.data.id);
          })
          epidmarker.push(epidmstmarker)
        })
      }else{
        map.remove(epidmarker);
        epidmarker = [];
      }
     } else if (params.type == 9) {
      if (params.flag) {
        gethvidevent().then(({data})=>{
          try {

            // 为走catch写死报错
            // const tt = 1;
            // tt = 2
          var fvmsmarker = [];
          var ew_zoom = map.getZoom();
          data.forEach(item=>{
            if (ew_zoom >= item.start && ew_zoom <= item.end) {
              var ele = {};
              ele.id = item.id
              ele.lnglat = item.lnglat
              ele.end = item.end
              ele.start = item.start
              fvmsmarker.push(ele);
            }
          })
          var fvmstmarker = new AMap.MassMarks(fvmsmarker,{
            zIndex: 200, // 海量点图层叠加的顺序
            zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
            cursor: 'pointer',
            style:{
              url: require('@/projects/base_management/icon/vierMarker.png'), // 图标地址
                size: new AMap.Size(30, 40), // 图标大小
                anchor: new AMap.Pixel(15, 40) // 图标显示位置偏移量，基准点为图标左上角
            }
          })
          fvmstmarker.setMap(map);
          fvmstmarker.on('click',function(e){
            proxy.$mybus.emit('markerIconshowPuop', params.type);
            proxy.$mybus.emit('videoMarkerclick', e);
          })
          fvmarker.push(fvmstmarker)
          } catch (error) {
            Toast('因故障暂停服务');
            proxy.$mybus.emit('closeVideobutton', params);
          }
          proxy.$mybus.emit('mapzoomend',{map,data,fvmsmarker,fvmstmarker});
        })
      }else{
        map.remove(fvmarker);
        fvmarker = [];
      }
       
     } else if (params.type == 10) {
      if (params.flag) {
        getGvidevent().then(({data})=>{
          try {

          // 为走catch写死报错
          // const tt = 1;
          // tt = 2
          var glmsmarker = [];
          var ew_zoom = map.getZoom();
          data.forEach(item=>{
            if (ew_zoom >= item.start) {
              var ele = {};
              ele.id = item.id
              ele.lnglat = item.lnglat
              ele.end = item.end
              ele.start = item.start
              glmsmarker.push(ele);
            }
          })
          var glmstmarker = new AMap.MassMarks(glmsmarker,{
            zIndex: 200, // 海量点图层叠加的顺序
            zooms: [0, 21], // 在指定地图缩放级别范围内展示海量点图层
            cursor: 'pointer',
            style:{
              url: require('@/projects/base_management/icon/vierMarker.png'), // 图标地址
                size: new AMap.Size(30, 40), // 图标大小
                anchor: new AMap.Pixel(15,40) // 图标显示位置偏移量，基准点为图标左上角
            }
          })
          glmstmarker.setMap(map);
          glmstmarker.on('click',function(e){
            proxy.$mybus.emit('markerIconshowPuop', params.type);
            // proxy.$mybus.emit('videoonclick',e);
          })
          glmarker.push(glmstmarker)
          proxy.$mybus.emit('mapzoomendgl',{map,data,glmsmarker,glmstmarker});
          } catch (error) {
            Toast('因故障暂停服务');
            proxy.$mybus.emit('closeVideobutton', params);
          }
        })
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


   //绘制天气5种路线图
   export const makeWeatherline = (params,map,proxy) => {
    // debugger
    console.log(77777);
    if (params == 1) {
      //先清除线路
      delMapWeatherline(map);
      getrainfallline().then(({data})=>{
          var geoJSON=data;
          var geojson = new AMap.GeoJSON({
            geoJSON: geoJSON,
            // 还可以自定义getMarker和getPolyline
            getPolyline: function(geojson, lnglats) {
              var polyline1 =new AMap.Polyline({
                    path: lnglats,
                    borderWeight:10, // 线条宽度，默认为 1
                    strokeColor:geojson.properties.color,
                  lineJoin: 'round' // 折线拐点连接处样式
                });
              map.add(polyline1)
              rainfallline.push(polyline1);
            }
        });

        geojson.setMap(map);
        
      }).catch((error)=>{
        Toast('获取数据列表出错，请联系管理员');
        console.log(error);
      })
    }else if(params == 2){
      delMapWeatherline(map);
      gettempline().then(({data})=>{
        console.log('天气数据',data);
        var geoJSON=data;
        console.log(geoJSON);
        var geojson = new AMap.GeoJSON({
          geoJSON: geoJSON,
          // 还可以自定义getMarker和getPolyline
          getPolyline: function(geojson, lnglats) {
            var polyline1 =new AMap.Polyline({
                  path: lnglats,
                  borderWeight:10, // 线条宽度，默认为 1
                  strokeColor:geojson.properties.color,
                lineJoin: 'round' // 折线拐点连接处样式
              });
            map.add(polyline1)
            templine.push(polyline1);
          }
      });

      geojson.setMap(map);


    }).catch((error)=>{
      Toast('获取数据列表出错，请联系管理员');
      console.log(error);
    })
    }else if(params == 3){
      delMapWeatherline(map);
      getwindline().then(({data})=>{
        console.log('天气数据',data);
        var geoJSON=data;
        console.log(geoJSON);
        var geojson = new AMap.GeoJSON({
          geoJSON: geoJSON,
          // 还可以自定义getMarker和getPolyline
          getPolyline: function(geojson, lnglats) {
            var polyline1 =new AMap.Polyline({
                  path: lnglats,
                  borderWeight:10, // 线条宽度，默认为 1
                  strokeColor:geojson.properties.color,
                lineJoin: 'round' // 折线拐点连接处样式
              });
            map.add(polyline1)
            windline.push(polyline1);
          }
      });

      geojson.setMap(map);

    }).catch((error)=>{
      Toast('获取数据列表出错，请联系管理员');
      console.log(error);
    })
    }else if(params == 4){
      delMapWeatherline(map);
      getpmline().then(({data})=>{
        console.log('天气数据',data);
        var geoJSON=data;
        console.log(geoJSON);
        var geojson = new AMap.GeoJSON({
          geoJSON: geoJSON,
          // 还可以自定义getMarker和getPolyline
          getPolyline: function(geojson, lnglats) {
            var polyline1 =new AMap.Polyline({
                  path: lnglats,
                  borderWeight:10, // 线条宽度，默认为 1
                  strokeColor:geojson.properties.color,
                lineJoin: 'round' // 折线拐点连接处样式
              });
            map.add(polyline1)
            pmline.push(polyline1);
          }
      });

      geojson.setMap(map);

    }).catch((error)=>{
      Toast('获取数据列表出错，请联系管理员');
      console.log(error);
    })
    }else if(params == 5){
      delMapWeatherline(map);
      getaqiline().then(({data})=>{
        console.log('天气数据',data);
        var geoJSON=data;
        console.log(geoJSON);
        var geojson = new AMap.GeoJSON({
          geoJSON: geoJSON,
          // 还可以自定义getMarker和getPolyline
          getPolyline: function(geojson, lnglats) {
            var polyline1 =new AMap.Polyline({
                  path: lnglats,
                  borderWeight:10, // 线条宽度，默认为 1
                  strokeColor:geojson.properties.color,
                lineJoin: 'round' // 折线拐点连接处样式
              });
            map.add(polyline1)
            aqiline.push(polyline1);
          }
      });

      geojson.setMap(map);

    }).catch((error)=>{
      Toast('获取数据列表出错，请联系管理员');
      console.log(error);
    })
    }
    
};

// 标记道路气象点
export const makeWeatherMark = (params,map) => {
  var icon = new AMap.Icon({
    size: new AMap.Size(20, 24), // 图标尺寸
    image: require('@/projects/base_management/images/weather/icon_pos.png'), // Icon的图像
    imageSize: new AMap.Size(20, 24), // 根据所设置的大小拉伸或压缩图片
  });
var marker = new AMap.Marker({
  icon: icon,
  position: [params.lon,params.lat],
  offset: new AMap.Pixel(-10, -24)
});
marker.setMap(map);
weatherloadmark.push(marker);


}

  // 删除地图气象线路
export const delMapWeatherline = map => {
  // console.log('car的数量:'+rescueCarMark.length+rescueCarMark)

  map.remove(rainfallline);
  map.remove(templine);
  map.remove(windline);
  map.remove(pmline);
  map.remove(aqiline);
  
  rainfallline = [];//降雨量线路
  templine = [];//温度线路
  windline = [];//风向线路
  pmline = [];//pm2.5线路
  aqiline = [];//aqi线路
};


  // 删除地图气象线路
  export const delMapWeatherMark = map => {
    // console.log('car的数量:'+rescueCarMark.length+rescueCarMark)
    map.remove(weatherloadmark);

    weatherloadmark = [];//降雨量线路
   
  };