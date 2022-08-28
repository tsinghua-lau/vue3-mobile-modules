<template>
  <div style="display: inline-block">
    <div class="toll_centen_top">
      <span class="toll_centen_top_left">
        <span class="toll_centen_top_left_left"
              v-show="props.msg.roadType == 1">苏高速</span>
        <span class="toll_centen_top_left_left2"
              v-show="props.msg.roadType == 0">国家高速</span>
        <span class="toll_centen_top_left_centent">{{ props.msg.roadNum }}</span>
        <span class="toll_centen_top_left_right">{{ props.msg.roadName }}</span>
      </span>
      <span></span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { stringifyQuery } from 'vue-router';
// let gs =ref('苏高速');
// let ld = ref('G42');
// let ldt = ref('沪蓉高速');
let props = defineProps({
  msg: { type: Object },
});
onMounted(() => {});
</script>
<style lang="less" scoped>
.toll_centen_top {
  height: 60px;
  padding-left: 20px;
  .toll_centen_top_left {
    font-size: 12px;
    width: 58px;
    height: 60px;
    display: flex;
    flex-direction: column;
    span {
      text-align: center;
      display: block;
    }
    .toll_centen_top_left_left {
      background-color: #f0dc01;
      color: #000000;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 18px;
      line-height: 18px;
    }
    .toll_centen_top_left_left2 {
      background-color: #ec543b;
      color: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      height: 18px;
      line-height: 18px;
    }
    .toll_centen_top_left_centent {
      font-size: 18px;
    }
    .toll_centen_top_left_right {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      line-height: 13px;
      height: 16px;
    }
    .toll_centen_top_left_centent,
    .toll_centen_top_left_right {
      background-color: #0a8c6f;
      color: #ffffff;
    }
  }
}
</style>