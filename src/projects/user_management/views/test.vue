<template>
  <div class="box2">
    <div class="div1">费用救援</div>
    <div class="div2" @click="rescue">{{text}}</div>

    
  </div>
  <div class="dialog" v-show="myDialog">
      <span class="cancle btn">取消</span>
      <span class="cancle btn" @click="handleRescue">确定</span>
    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getCurrentInstance, ref } from 'vue';
import { Toast } from 'vant';
const { proxy, ctx } = getCurrentInstance();
const route = useRoute();
const router = useRouter();

const text = ref('请求救援')
const myDialog = ref(false);

const handleRescue = ()=>{
    text.value='救援中...';
    myDialog.value = false;
    Toast('正在救援中...')

       proxy.$mybus.emit('test', '地图数据操作~~~');
}

//请求救援
const rescue = () => {
  myDialog.value = true;
  console.log('aaaaaaaa');
};
</script>
<style lang="less" scoped>
.dialog {
  position: absolute;
  left: 40%;
  top: 40%;
  width: fit-content;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: pink;
  z-index: 999;
  .btn{
    font-size: 15px;
    margin-right: 10px;
  }
}
.box2 {
    display: flex;
  font-size: 15px;
  width: fit-content;
  height: 20px;
  background: pink;
  overflow: hidden;
  position: absolute;
  left: 30%;
  bottom: 10%;
  z-index: 999;
  .div1{
    margin-right: 10px;
  }
}

</style>
