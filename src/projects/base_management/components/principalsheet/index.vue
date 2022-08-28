<template>
  <div class="box_indesx">
    <div class="title_top_p">
      <van-search class="princi_search" @click="showSearch" v-model="value" shape="round" background="#ffffff" placeholder="查找" />
    </div>
    <van-grid :column-num="5" class="grid_value_p" :border="false">
      <van-grid-item @click="showMapmarker(1)">
        <img class="serviocn_h" :src="icon1" alt="" />
        <div class="serviocn_t">收费站</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(2)">
        <img class="serviocn_h" :src="icon2" alt="" />
        <div class="serviocn_t">服务区</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(3)">
        <img class="serviocn_h" :src="icon3" alt="" />
        <div class="serviocn_t">高速交警</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(4)">
        <img class="serviocn_h" :src="icon4" alt="" />
        <div class="serviocn_t" style="font-size: 12px">事故快处点</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(5)">
        <img class="serviocn_h" :src="icon5" alt="" />
        <div class="serviocn_t">汽渡</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(6)">
        <img class="serviocn_h" :src="icon6" alt="" />
        <div class="serviocn_t">路况</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(7)">
        <img class="serviocn_h" :src="icon7" alt="" />
        <div class="serviocn_t">管制</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(8)">
        <img class="serviocn_h" :src="icon8" alt="" />
        <div class="serviocn_t">防疫点</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(9)">
        <img class="serviocn_h" :src="icon9" alt="" />
        <div class="serviocn_t">高速视频</div>
      </van-grid-item>
      <van-grid-item @click="showMapmarker(10)">
        <img class="serviocn_h" :src="icon10" alt="" />
        <div class="serviocn_t">公路视频</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue';
import router from '../../router.js';
const { proxy } = getCurrentInstance();
const icon1 = ref(require('../../icon/princi_01.png'));
const icon2 = ref(require('../../icon/princi_02.png'));
const icon3 = ref(require('../../icon/princi_03.png'));
const icon4 = ref(require('../../icon/princi_04.png'));
const icon5 = ref(require('../../icon/princi_05.png'));
const icon6 = ref(require('../../icon/princi_06act.png'));
const icon7 = ref(require('../../icon/princi_07.png'));
const icon8 = ref(require('../../icon/princi_08.png'));
const icon9 = ref(require('../../icon/princi_09.png'));
const icon10 = ref(require('../../icon/princi_10.png'));
const showMapmarker = type => {
  const params = { type: type };
  if (type == 1) {
    if (icon1.value == require('../../icon/princi_01act.png')) {
      icon1.value = require('../../icon/princi_01.png');
      params.flag = false;
    } else {
      icon1.value = require('../../icon/princi_01act.png');
      params.flag = true;
    }
  } else if (type == 2) {
    if (icon2.value == require('../../icon/princi_02act.png')) {
      params.flag = false;
      icon2.value = require('../../icon/princi_02.png');
    } else {
      params.flag = true;
      icon2.value = require('../../icon/princi_02act.png');
    }
  } else if (type == 3) {
    if (icon3.value == require('../../icon/princi_03act.png')) {
      params.flag = false;
      icon3.value = require('../../icon/princi_03.png');
    } else {
      params.flag = true;
      icon3.value = require('../../icon/princi_03act.png');
    }
  } else if (type == 4) {
    if (icon4.value == require('../../icon/princi_04act.png')) {
      params.flag = false;
      icon4.value = require('../../icon/princi_04.png');
    } else {
      params.flag = true;
      icon4.value = require('../../icon/princi_04act.png');
    }
  } else if (type == 5) {
    if (icon5.value == require('../../icon/princi_05act.png')) {
      params.flag = false;
      icon5.value = require('../../icon/princi_05.png');
    } else {
      params.flag = true;
      icon5.value = require('../../icon/princi_05act.png');
    }
  } else if (type == 6) {
    if (icon6.value == require('../../icon/princi_06act.png')) {
      icon6.value = require('../../icon/princi_06.png');
      // params.flag = false;
      proxy.$mybus.emit('roadConditions', false);
    } else {
      // params.flag = true;
      icon6.value = require('../../icon/princi_06act.png');
      proxy.$mybus.emit('roadConditions', true);
    }
  } else if (type == 7) {
    if (icon7.value == require('../../icon/princi_07act.png')) {
      params.flag = false;
      icon7.value = require('../../icon/princi_07.png');
    } else {
      params.flag = true;
      icon7.value = require('../../icon/princi_07act.png');
    }
  } else if (type == 8) {
    if (icon8.value == require('../../icon/princi_08act.png')) {
      params.flag = false;
      icon8.value = require('../../icon/princi_08.png');
    } else {
      params.flag = true;
      icon8.value = require('../../icon/princi_08act.png');
    }
  } else if (type == 9) {
    if (icon9.value == require('../../icon/princi_09act.png')) {
      params.flag = false;
      icon9.value = require('../../icon/princi_09.png');
    } else {
      params.flag = true;
      icon9.value = require('../../icon/princi_09act.png');
    }
  } else if (type == 10) {
    if (icon10.value == require('../../icon/princi_10act.png')) {
      params.flag = false;
      icon10.value = require('../../icon/princi_10.png');
    } else {
      params.flag = true;
      icon10.value = require('../../icon/princi_10act.png');
    }
  }
  proxy.$mybus.emit('makebaseMark', params);
};
const showSearch = () => {
  proxy.$mybus.emit('openSear', true);
};
onMounted(()=>{
  proxy.$mybus.on('closeVideobutton',data=>{
    showMapmarker(data.type)
  })
})
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.box_indesx {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: 9999;
  background: #fff;
  .title_top_p {
    box-sizing: border-box;
    height: 35px;
    //   background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
    // padding-left: 5px;
    padding-top: 38px;
    .princi_search {
      height: 44px;
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid #e8e8e8;
      border-radius: 42px;
      box-shadow: 0px 5px 20px 0px rgba(59, 118, 239, 0.1);
      margin: -58px 10px 0 10px;
      padding-left: 15px;
      .van-field__left-icon i .van-icon-search:before {
        vertical-align: top;
        width: 25px;
        height: 25px;
      }
      :deep(.van-icon-search:before) {
        font-size: 24px;
        color: #333333;
      }
      :deep(.van-search__content--round) {
        border: none;
        background: #fff;
        height: 40px;
        overflow: hidden;
      }
      :deep(.van-field__control) {
        // padding-left: 10px;
        font-size: 18px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #575757;
        line-height: 22px;
      }
      :deep(.van-field__control::-webkit-input-placeholder) {
        color: #575757;
      }
      :deep(.van-field__control::-moz-placeholder) {
        color: #575757;
      }
      :deep(.van-field__control:-moz-placeholder) {
        color: #575757;
      }
      :deep(.van-field__control:-ms-input-placeholder) {
        color: #575757;
      }
    }
  }
  .grid_value_p {
    min-width: 335px;
    height: 180px;

    box-sizing: border-box;
    .serviocn_h {
      width: 28px;
      height: 28px;
    }
    .serviocn_t {
      white-space: nowrap;
      font-size: 12px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 22px;
    }
  }
}
</style>