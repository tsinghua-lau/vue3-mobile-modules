<template>
  <div class="box_indesx">
    <div class="title_top_p">
      <van-search class="princi_search" v-model="value" shape="round" background="#ffffff" placeholder="查找" />
    </div>
    <van-grid :column-num="5" class="grid_value_p" :border="false">
      <van-grid-item @click="showMapmarker">
        <img class="serviocn_h" src="../../icon/princi_01.png" alt="" />
        <div class="serviocn_t">收费站</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_02.png" alt="" />
        <div class="serviocn_t">服务区</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_03.png" alt="" />
        <div class="serviocn_t">高速交警</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_04.png" alt="" />
        <div class="serviocn_t">事故快处点</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_05.png" alt="" />
        <div class="serviocn_t">汽渡</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_06.png" alt="" />
        <div class="serviocn_t">路况</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_07.png" alt="" />
        <div class="serviocn_t">管制</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_08.png" alt="" />
        <div class="serviocn_t">防疫点</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_09.png" alt="" />
        <div class="serviocn_t">高速视频</div>
      </van-grid-item>
      <van-grid-item>
        <img class="serviocn_h" src="../../icon/princi_10.png" alt="" />
        <div class="serviocn_t">公路视频</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
const emit = defineEmits(['closeAdd']);
const showMapmarker = () => {
  emit('showmarkerclick', '1');
};
</script>

<style lang="less" scoped>
.box_indesx {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 28%;
  z-index: 9999;
  background: #fff;
  .title_top_p {
    box-sizing: border-box;
    height: 100px;
    //   background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
    padding-left: 21px;
    padding-top: 38px;
    .princi_search {
      height: 94px;
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid #e8e8e8;
      border-radius: 42px;
      box-shadow: 0px 5px 20px 0px rgba(59, 118, 239, 0.1);
      margin: -80px 22px 0 22px;
      padding-left: 25px;
      .van-field__left-icon i .van-icon-search:before {
        vertical-align: sub;
        width: 52px;
        height: 52px;
      }
      /deep/ .van-icon-search:before {
        font-size: 52px;
        margin-top: 10px;
        color: #333333;
      }
      /deep/ .van-search__content--round {
        border: none;
        background: #fff;
      }
      /deep/.van-field__control {
        padding-left: 10px;
        font-size: 36px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #575757;
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
  }
  .grid_value_p {
    min-width: 335px;
    height: 300px;
    margin-left: 21px;
    margin-right: 21px;
    box-sizing: border-box;
    .serviocn_h {
      width: 112px;
      height: 112px;
    }
    .serviocn_t {
      white-space: nowrap;
      font-size: 28px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 56px;
    }
  }
}
</style>