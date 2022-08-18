<template>
  <div style="display: inline-block">
    <div class="toll_centen_top">
      <span class="toll_centen_top_left">
        <span class="toll_centen_top_left_left" v-show="props.msg == '苏高速'">{{ props.msg }}</span>
        <span class="toll_centen_top_left_left2" v-show="props.msg == '国家高速'">{{ props.msg }}</span>
        <span class="toll_centen_top_left_centent">{{ this.ld }}</span>
        <span class="toll_centen_top_left_right">{{ this.ldt }}</span>
      </span>
      <span></span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { stringifyQuery } from 'vue-router';
// let gs =ref('苏高速');
let ld = ref('G42');
let ldt = ref('沪蓉高速');
let props = defineProps({
  msg: { type: String },
});
onMounted(() => {});
</script>
<style lang="less" scoped>
.toll_centen_top {
  height: 150px;
  padding-left: 50px;
  .toll_centen_top_left {
    font-size: 28px;
    width: 144px;
    height: 138px;
    display: flex;
    flex-direction: column;
    span {
      text-align: center;
      display: block;
    }
    .toll_centen_top_left_left {
      background-color: #f0dc01;
      color: #000000;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      height: 42px;
      line-height: 45px;
    }
    .toll_centen_top_left_left2 {
      background-color: #ec543b;
      color: #fff;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      height: 42px;
      line-height: 45px;
    }
    .toll_centen_top_left_centent {
      font-size: 48px;
    }
    .toll_centen_top_left_right {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      line-height: 27px;
      height: 42px;
    }
    .toll_centen_top_left_centent,
    .toll_centen_top_left_right {
      background-color: #0a8c6f;
      color: #ffffff;
    }
  }
}
</style>