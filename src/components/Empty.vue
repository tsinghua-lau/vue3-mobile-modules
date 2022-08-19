<template>
  <div class="bg">
    <img src="@/assets/empty.png" alt="" srcset="" style="width: 162px; margin-left: 30%" />
    <div :style="{ 'font-size': fontSize + 'px', color: '#' + color }" style="width: 100%; text-align: center">
      {{ text }}
      <!-- '#529DFF' -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Empty',
  props: {
    text: {
      type: String,
      default: '空空如也',
    },
    fontSize: {
      type: Number,
      default: 14,
    },
    color: {
      type: String,
      default: '529DFF',
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.bg {
  margin-top: 50%;
}
</style>
