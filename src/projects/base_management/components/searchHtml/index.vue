<template>
  <div>
    <div class="title_top_s">
      <van-search class="princi_search" v-model="value" shape="round" background="#ffffff" placeholder="南京" />
      <img src="./../../icon/close.png" @click="gobackll" class="closeButton" />
    </div>
    <van-cell-group class="toll_centen_s_top">
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/serveimg.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">南京南主线</div>
          <div class="plzh_content_bottom">G42沪蓉高速</div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/serveimg.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">南京南主线</div>
          <div class="plzh_content_bottom">G42沪蓉高速</div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/jiaoj.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">南京某某交警大队名称</div>
          <div class="plzh_content_bottom">G42沪蓉高速</div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/sgkcd.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">南京某某事故快处点名称</div>
          <div class="plzh_content_bottom">G42沪蓉高速</div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/qidu.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">南京某某汽渡名称</div>
          <div class="plzh_content_bottom">G42沪蓉高速</div>
        </div>
      </div>
    </van-cell-group>
    <van-cell-group class="toll_centen_s_bottom">
      <div class="postionlin">附近</div>
      <van-row class="tabclse_s">
        <van-col span="4" @click="tabClseracs(1)">
          <div :class="act">服务区</div>
          <div :class="actv"></div>
        </van-col>
        <van-col span="4" @click="tabClseracs(2)">
          <div :class="act">收费站</div>
          <div :class="actv"></div>
        </van-col>
        <van-col span="5" @click="tabClseracs(3)">
          <div :class="act">高速交警</div>
          <div :class="actv"></div>
        </van-col>
        <van-col span="7" @click="tabClseracs(4)">
          <div :class="act">事故快处点</div>
          <div :class="actv"></div>
        </van-col>
        <van-col span="3" @click="tabClseracs(5)">
          <div :class="act">汽渡</div>
          <div :class="actv"></div>
        </van-col>
      </van-row>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/serveimg.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">南京仪征北服务区 <span class="content_top_right">12.49km</span></div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/serveimg.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">梅村服务区 <span class="content_top_right">12.49km</span></div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/serveimg.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">阳澄湖服务区 <span class="content_top_right">12.49km</span></div>
        </div>
      </div>
      <div class="search_on">
        <div class="plzh plzh_icon">
          <img src="../../icon/serveimg.png" class="plzh_icon_lon" alt="" />
        </div>
        <div class="plzh plzh_content">
          <div class="plzh_content_top">方茂山服务区 <span class="content_top_right">12.49km</span></div>
        </div>
      </div>
    </van-cell-group>
  </div>
</template>
<script setup>
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import router from '../../router.js';
let act = ref('active');
let actv = ref('tabclse_bottom');
const emit = defineEmits(['closeAdd']);
const tabClseracs = type => {
  console.log(type);
};
const gobackll = () => {
  emit('closePubopserSear', false);
};
// const emit = defineEmits(['closeAdd']);
// const showMapmarker = () => {
//   emit('showmarkerclick', '1');
// };
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.title_top_s {
  box-sizing: border-box;
  height: 75px;
  //   background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  // padding-left: 5px;
  padding-top: 15px;
  .princi_search {
    height: 50px;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #e8e8e8;
    border-radius: 42px;
    box-shadow: 0px 5px 20px 0px rgba(59, 118, 239, 0.1);
    margin: 0px 10px 0 10px;
    padding-left: 0;
    .van-field__left-icon i .van-icon-search:before {
      vertical-align: sub;
      width: 25px;
      height: 25px;
    }
    /deep/ .van-cell{
      padding: 0;
    }
    /deep/ .van-icon-search:before {
      font-size: 25px;
      margin-top: 5px;
      color: #333333;
    }
    /deep/ .van-search__content--round {
      border: none;
      background: #fff;
    }
    /deep/.van-field__control {
      padding-left: 10px;
      font-size: 18px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #575757;
      line-height: 30px;
    }
    /deep/.van-field__control::-webkit-input-placeholder {
      color: #575757;
    }
    /deep/.van-field__control::-moz-placeholder {
      color: #575757;
    }
    /deep/.van-field__control:-moz-placeholder {
      color: #575757;
    }
    /deep/.van-field__control:-ms-input-placeholder {
      color: #575757;
    }
  }
  .closeButton {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 35px;
    right: 35px;
  }
}
.toll_centen_s_top {
  height: 290px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 26px;
  box-shadow: 0px 5px 20px 0px rgba(59, 118, 239, 0.1);
  margin: 0px 21px 0 21px;
  padding-top: 10px;
  overflow: hidden;
  .search_on {
    width: 315px;
    height: 45px;
    margin: 10px 10px 10px 10px;
    .plzh {
      float: left;
      // height: 100%;
      div {
        width: 100%;
      }
    }
    .plzh_icon {
      width: 20px;
      .plzh_icon_lon {
        width: 20px;
        height: 15px;
        vertical-align: super;
        margin-top: 6px;
      }
    }
    .plzh_content {
      width: calc(100% - 70px);
      margin-left: 10px;
      .plzh_content_top {
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 600;
        text-align: left;
        color: #333333;
      }
      .plzh_content_bottom {
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #666666;
        line-height: 25px;
      }
    }
  }
}
.toll_centen_s_bottom {
  height: 300px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 26px;
  box-shadow: 0px 5px 20px 0px rgba(59, 118, 239, 0.1);
  margin: 11px 21px 0 21px;
  overflow: hidden;
  .postionlin {
    margin-left: 15px;
    padding-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  .tabclse_s {
    margin-top: 10px;
    text-align: center;
    margin-left: 9px;
    div {
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      color: #333333;
    }
    div.active {
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 600;
      color: #333333;
    }
    .tabclse_bottom {
      margin: 0 auto;
      width: 22px;
      height: 5px;
      background: linear-gradient(#1a72f8 0%, #1ca7ff 100%);
      border-radius: 6px;
      margin-top: 4px;
    }
  }
  .search_on {
    width: 315px;
    height: 38px;
    margin: 15px 10px 10px 15px;
    .plzh {
      float: left;
      // height: 100%;
      div {
        width: 100%;
      }
    }
    .plzh_icon {
      width: 20px;
      .plzh_icon_lon {
        width: 20px;
        height: 15px;
        vertical-align: super;
        margin-top: 6px;
      }
    }
    .plzh_content {
      width: calc(100% - 40px);
      margin-left: 10px;
      .plzh_content_top {
        font-size: 18px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 600;
        text-align: left;
        color: #333333;
        .content_top_right {
          float: right;
          font-weight: 400;
          font-size: 16px;
        }
      }
    }
  }
}
</style>