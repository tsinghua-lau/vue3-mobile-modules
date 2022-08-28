<template>
  <div style="height: 100%">
    <div class="title_top">
      <img class="tollimg" src="./../../icon/serveicon.png" />
      <span class="toll_gate_txt">服务区</span>
      <img src="./../../icon/close.png" @click="closePubopser" class="closeButton" />
    </div>
    <van-tabs class="tabclse" v-model:active="active">
      <van-tab :title="servestontt.datalist[0].direction" :id="servestontt.datalist[0].directionId">
        <div class="toll_centen">
          <div>
            <highwaySign :msg="servestontt.stontt" />
            <span class="toll_centen_right">
              <div>{{ servestontt.name }}</div>
              <div class="toll_centen_right_bottom">
                <span class="toll_centen_right_icon1" v-if="servestontt.datalist[0].state == 0">开</span>
                <span class="toll_centen_right_icon3" v-else-if="servestontt.datalist[0].state == 1">关</span>
                <span class="toll_centen_right_cl9_1" v-if="servestontt.datalist[0].examineType == 0">疫情查验</span>
                <span class="toll_centen_right_cl9_2" v-else-if="servestontt.datalist[0].examineType == 1">疫情免检</span>
              </div>
            </span>
            <span class="toll_centen_r">
              <div @click="serveVideoshwo(servestontt.datalist[1].videoId)"><img class="video_base" :videoId="servestontt.datalist[0].videoId" src="../../icon/video.base.png" /></div>
              <div class="video_base_text">{{ servestontt.datalist[0].videoName }}</div>
            </span>
          </div>

          <van-cell-group class="toll_centen_phone">
            <div class="toll_centen_phone_l">联系电话</div>
            <div class="toll_centen_phone_r">{{ servestontt.datalist[0].contact }}</div>
          </van-cell-group>

          <p class="serve_count">服务内容</p>
          <van-grid :column-num="5" class="grid_value" :border="false">
            <van-grid-item v-for="item in servestontt.datalist[0].serviceContent" :key="item">
              <img class="serviocn_h" :src="iconreturn(item)" alt="" />
              <div class="serviocn_t">{{ item }}</div>
            </van-grid-item>
          </van-grid>
          <div>
            <span class="postion_l"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
            <van-button class="postion_r" color="#2d7ce7" round size="small">路线</van-button>
          </div>
        </div>
      </van-tab>
      <van-tab :title="servestontt.datalist[1].direction" :id="servestontt.datalist[1].directionId">
        <div class="toll_centen">
          <div>
            <highwaySign :msg="servestontt.stontt" />
            <span class="toll_centen_right">
              <div>{{ servestontt.name }}</div>
              <div class="toll_centen_right_bottom">
                <span class="toll_centen_right_icon1" v-if="servestontt.datalist[1].state == 0">开</span>
                <span class="toll_centen_right_icon3" v-else-if="servestontt.datalist[1].state == 1">关</span>
                <span class="toll_centen_right_cl9_1" v-if="servestontt.datalist[1].examineType == 0">疫情查验</span>
                <span class="toll_centen_right_cl9_2" v-else-if="servestontt.datalist[1].examineType == 1">疫情免检</span>
              </div>
            </span>
            <span class="toll_centen_r">
              <div @click="serveVideoshwo(servestontt.datalist[1].videoId)"><img class="video_base" :videoId="servestontt.datalist[1].videoId" src="../../icon/video.base.png" /></div>
              <div class="video_base_text">{{ servestontt.datalist[1].videoName }}</div>
            </span>
          </div>

          <van-cell-group class="toll_centen_phone">
            <div class="toll_centen_phone_l">联系电话</div>
            <div class="toll_centen_phone_r">{{ servestontt.datalist[1].contact }}</div>
          </van-cell-group>

          <p class="serve_count">服务内容</p>
          <van-grid :column-num="5" class="grid_value" :border="false">
            <van-grid-item v-for="item in servestontt.datalist[1].serviceContent" :key="item">
              <img class="serviocn_h" :src="iconreturn(item)" alt="" />
              <div class="serviocn_t">{{ item }}</div>
            </van-grid-item>
          </van-grid>
          <div>
            <span class="postion_l"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
            <van-button class="postion_r" color="#2d7ce7" round size="small">路线</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import highwaySign from './../highway_sign.vue';
import { ref, onMounted, getCurrentInstance, reactive } from 'vue';
const { proxy } = getCurrentInstance();
let act = ref('active');
let actv = ref('tabclse_bottom');
const emit = defineEmits(['closeAdd']);
var servestontt = reactive({
  name: '',
  stontt: {
    roadNum: '',
    roadName: '',
    roadType: '',
  },
  datalist: [
    {
      contact: '',
      direction: '',
      directionId: '',
      examineType: 0,
      serviceContent: [],
      state: 0,
      videoId: '',
      videoName: '',
    },
    {
      contact: '',
      direction: '',
      directionId: '',
      examineType: 0,
      serviceContent: [],
      state: 0,
      videoId: '',
      videoName: '',
    },
  ],
});
const iconreturn = txt => {
  if (txt == '餐饮服务') {
    return require('../../icon/serve01.png');
  } else if (txt == '24小时超市') {
    return require('../../icon/serve02.png');
  } else if (txt == '充电桩') {
    return require('../../icon/serve03.png');
  } else if (txt == '停车位') {
    return require('../../icon/serve04.png');
  } else if (txt == '92汽油') {
    return require('../../icon/serve05.png');
  } else if (txt == '98汽油') {
    return require('../../icon/serve06.png');
  } else if (txt == '0号柴油') {
    return require('../../icon/serve07.png');
  } else if (txt == '母婴室') {
    return require('../../icon/serve03.png');
  }
};
const tabClserac = type => {
  //   if (type == 1) {
  //     act = ref('active');
  //     actv = ref('tabclse_bottom');
  //   } else {
  //   }
};
const closePubopser = () => {
  proxy.$mybus.emit('closePubopser', false);
  localStorage.setItem('serveId', '');
};
const serveVideoshwo = id => {
  // 获取数据 后出视频弹框
  proxy.$mybus.emit('serveVideoshwo', { id: id, type: true });
};
onMounted(() => {
  proxy.$mybus.on('serveStionclickevent', data => {
    servestontt.stontt.roadNum = data.roadNum;
    servestontt.stontt.roadName = data.roadName;
    servestontt.stontt.roadType = data.roadType;
    servestontt.name = data.name;
    servestontt.datalist = data.list;
  });
});
</script>
<style lang="less" scoped>
.title_top {
  box-sizing: border-box;
  position: relative;
  padding: 8px;
  height: 64px;
  background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  padding-left: 20px;
  padding-top: 16px;
  .tollimg {
    float: left;
    width: 21px;
    height: 21px;
  }
  .toll_gate_txt {
    font-size: 16px;
    float: left;
    margin-left: 4px;
    vertical-align: super;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  }
  .closeButton {
    float: right;
    width: 12px;
    height: 12px;
    margin-right: 20px;
  }
}
.tabclse {
  margin-bottom: 100px;
}
// .tabclse {
//   text-align: center;
//   div {
//     font-size: 18px;
//     font-family: Source Han Sans CN, Source Han Sans CN-Regular;
//     font-weight: 400;
//     color: #333333;
//   }
//   div.active {
//     font-size: 18px;
//     font-family: Source Han Sans CN, Source Han Sans CN-Regular;
//     font-weight: 700;
//     color: #333333;
//   }
//   .tabclse_bottom {
//     margin: 0 auto;
//     width: 29px;
//     height: 5px;
//     background: linear-gradient(#1a72f8 0%, #1ca7ff 100%);
//     border-radius: 3px;
//   }
// }
:deep(.van-tab__text--ellipsis) {
  font-size: 18px;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  font-weight: 400;
  color: #333333;
}
:deep(.van-tabs__line) {
  background: linear-gradient(#1a72f8 0%, #1ca7ff 100%);
}
.toll_centen {
  margin-top: 12px;
  // height: calc(100% - 64px);
  background-color: #f9f9fa;

  .toll_centen_right {
    display: inline-block;
    width: calc(100% - 160px);
    vertical-align: text-top;
    margin-top: 18px;
    div {
      margin-left: 16px;
      font-size: 18px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 24px;
    }
    .toll_centen_right_bottom {
      margin-top: 8px;
      .toll_centen_right_icon1 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #2d7ce7;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
      }
      .toll_centen_right_icon2 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #6eacff;
        border-radius: 3px;
        color: #fff;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
      }
      .toll_centen_right_icon3 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #ffffff;
        border-radius: 3px;
        color: #fff;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #2d7ce7;
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
        border: 2px solid #2d7ce7;
      }
      .toll_centen_right_cl9_1 {
        margin-left: 8px;
        display: inline-block;
        width: 60px;
        height: 20px;
        background: #f19f11;
        border-radius: 3px;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 20px;
      }
      .toll_centen_right_cl9_2 {
        margin-left: 8px;
        display: inline-block;
        width: 60px;
        height: 20px;
        background: #ffffff;
        border: 2px solid #f19f11;
        border-radius: 3px;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #f19f11;
        line-height: 20px;
      }
    }
  }
  .toll_centen_r {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-top: 15px;
    float: right;
    text-align: center;
    margin-right: 15px;
    .video_base {
      width: 22px;
      height: 26px;
    }
    .video_base_text {
      //  width: 69px;
      //  height: 34px;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #666666;
      line-height: 22px;
    }
  }
  .toll_centen_t {
    padding: 0 20px 0 20px;
    .toll_centen_center {
      float: left;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 40px;
    }
    .toll_centen_r {
      float: right;
      border-radius: 3px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      width: 60px;
      height: 20px;
    }
    .toll_centen_rclose {
      float: right;
      border-radius: 3px;
      background: #ffffff;
      border: 2px solid #2d7ce7;
      color: #2d7ce7;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      width: 60px;
      height: 60px;
    }
  }
  .postion_l {
    padding-left: 16px;
    vertical-align: -webkit-baseline-middle;
    width: 96px;
    height: 40px;
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
    .postion_l_icon {
      display: inline-block;
      width: 14px;
      height: 16px;
      margin-right: 2px;
    }
  }
  .postion_c {
    margin-left: 12px;
    width: 124px;
    height: 40px;
    font-size: 14px;
  }
  .postion_r {
    float: right;
    margin-right: 20px;
    width: 100px;
    height: 40px;
    background: #4287fe;
    border-radius: 20px;
    font-size: 14px;
  }
  .serve_count {
    width: 86px;
    height: 16px;
    font-size: 16px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    text-align: left;
    color: #333333;
    line-height: 40px;
    padding-left: 24px;
    margin-bottom: 21px;
  }
  .toll_centen_phone {
    height: 52px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 9px;
    box-shadow: 0px 3px 8px 0px rgba(59, 118, 239, 0.1);
    margin: 8px 8px 0 8px;
    .toll_centen_phone_l {
      height: 100%;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 52px;
      float: left;
      padding-left: 16px;
    }
    .toll_centen_phone_r {
      height: 100%;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: right;
      color: #2d7ce7;
      line-height: 52px;
      float: right;
      padding-right: 16px;
    }
  }
  .grid_value {
    height: 160px;
    .serviocn_h {
      width: 24px;
      height: 20px;
    }
    .serviocn_t {
      width: 58px;
      height: 16px;
      font-size: 10px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: center;
      color: #333333;
      line-height: 22px;
    }
  }
}
</style>