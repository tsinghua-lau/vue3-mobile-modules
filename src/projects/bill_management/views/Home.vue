<template>
  <div id="cc" style="">
    开票管理
    <van-button type="primary">主要按钮</van-button>

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">内容</van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      map: null,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 500px;
}

#bb {
  width: 100%;
  height: 500px;
  background: black;
  color: #fff;
}
</style>
