<template>
  <div class="map-appointment-title">选择预约路段</div>
  <div class="select-time">
    <div class="time">
      <div class="start" @click="showSelectTime(1)">
        <div class="label">
          <span v-if="startDate">推送开始日期</span>
          <span v-else style="color:#000">
            {{ $getTime(startTime,1) }}
          </span>
        </div>
        <div class="right-img">
          <img src="../../images/right.png" alt="" srcset="" />
        </div>
      </div>
      <div class="end" @click="showSelectTime(0)">
        <div class="label">
          <span v-if="endDate">推送结束日期</span>
          <span v-else style="color:#000">
            {{ $getTime(endTime,1) }}
          </span>
        </div>
        <div class="right-img">
          <img src="../../images/right.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="line">
      <div class="point1"></div>
      <div class="line-w"></div>
      <div class="point2"></div>
    </div>
  </div>
  <div class="btn" @click="appointment">
    {{btnValue}}
  </div>
  <van-popup v-model:show="showSelect" position="bottom">
    <van-datetime-picker @cancel="showSelect = false" @confirm="confirmPicker" v-model="currentDate" type="date" title="选择年月日" />
  </van-popup>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue';
import { Toast } from 'vant';

const showSelect = ref(false);

const currentDate = ref(new Date(2021, 0, 17));
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);

const startTime = ref(new Date(2021, 0, 17));
const endTime = ref(new Date(2021, 0, 17));

const isStart = ref(true);

const startDate = ref(true);
const endDate = ref(true);

const btnValue = ref('预 约');

const appointment = ()=>{
  if(startDate.value){
    Toast('请选择开始时间')
    return
  }
   if(endDate.value){
    Toast('请选择结束时间')
    return

  }
btnValue.value = '已达预约上限'
Toast('预约失败')
}

const showSelectTime = value => {
  if (value === 1) {
    isStart.value = true;
  } else {
    isStart.value = false;
  }
  showSelect.value = true;
};

const confirmPicker = () => {
  if (isStart.value) {
    startTime.value = currentDate.value;
    startDate.value = false;
  } else {
    endTime.value = currentDate.value;
    endDate.value = false;
  }
  showSelect.value = false;
};
</script>
<style lang="less" scoped>
.map-appointment-title {
  width: 100%;
  text-align: center;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(251, 252, 252), rgba(255, 0, 0, 0));
  position: absolute;
  top: 10px;
  z-index: 1;
}
.select-time {
  width: 100%;
  height: 180px;
  background: #f9f9fa;
  position: absolute;
  bottom: 67px;
  z-index: 10;
  .time {
    width: 96%;
    height: 100%;
    margin-left: 2%;
    background: #fff;
    height: 100px;
    border-radius: 10px;
    position: relative;
    top: -10px;
    .start,.end {
      display: flex;
      height: 50%;
      width: 78%;
      margin-left: 12%;
      justify-content: space-between;
      font-size: 17px;
      box-sizing: border-box;
      padding-top: 5%;
      .label {
        color: #a0a0a0;
      }
      .right-img {
        width: 11px;
        height: 15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .end{
      border-top: 1px solid #ececec;
    }

  }

  .line{
    width: 10px;
    // height: 80px;
    // background: pink;
    position: absolute;
    top: 13px;
    left: 30px;
    .point1,.point2{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #0EC471;
    }
    .point2{
      background: #EE3834;
    }
    .line-w{
      width: 1px;
      height: 30px;
      margin-top: 5px;
      margin-bottom: 5px;
      background: #D6D6D6;
      margin-left: 4px;
    }
  }
}
.btn{
    width: 90%;
    margin-left: 5%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #83b1ff;
    color: #fff;
    font-size: 0.4rem;
    position: absolute;
    bottom: 90px;
    z-index: 100;
    border-radius: 25px;
}
</style>
