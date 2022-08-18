<template>
  <div id="cc" style="">
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" size="small" />
    {{ date }}
    <div id="customerChart"></div>
  </div>
</template>
<script setup>
import * as echarts from 'echarts';
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const date = ref('');
const show = ref(false);
const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = value => {
  show.value = false;
  date.value = formatDate(value);
};

onMounted(() => {
  proxy.$mybus.on('updata', data => {
    alert(data);
  });
  let myChart = echarts.init(document.getElementById('customerChart'));
  // 绘制图表
  myChart.setOption({
    title: { text: '总用户量' },
    tooltip: {},
    xAxis: {
      data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8']
    },
    yAxis: {},
    series: [
      {
        name: '用户量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
});
</script>

<style scoped lang="less">
#container {
  width: 100%;
  height: 500px;
}
#customerChart {
  width: 99%;
  height: 200px;
  border: 1px solid red;
}

</style>
