<template>
  <div id="box" style="">
    <van-cell-group inset>
      <van-field v-model="value1" placeholder="我的位置" />
      <van-field v-model="value2" placeholder="输入终点" />
    </van-cell-group>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
onMounted(() => {});
</script>

<style scoped lang="less">
#box {
  width: 100%;
  height: 255px;
  position: absolute;
  bottom: 0;
  background: red;
  z-index: 2005;
}
</style>
