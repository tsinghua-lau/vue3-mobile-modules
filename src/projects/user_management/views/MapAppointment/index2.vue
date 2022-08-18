<template>
  <div class="user-detail">
      <div class="user-item"  @click="isShow = true">
        <span>生日</span>
        <span>{{user_birthday}}</span>
      </div>
    <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate" />
    <!-- 出生日期 -->
    <van-datetime-picker
        v-model="currentDate"
        type="date"
        v-show="isShow"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="isShow = false"
        @confirm="confirmPicker"
      />
  </div>
</template>

<script>
import { Toast } from "vant";
import { DatetimePicker } from "vant";
export default {
  name: "MeDetail",
  data() {
    return {
      user_birthday: "", //生日
      minDate: new Date(1949, 10, 1),//出生日期起始范围
      maxDate: new Date(2025, 10, 1),//出生日期起始范围
      currentDate: new Date(),//计时器
      isShow : false//出生日期组件显示或隐藏
    };
  },
  components: {
    vanDatetimePicker : DatetimePicker
  },

  methods: {
    //确定选择时间
    confirmPicker (val) {
      // console.log(val)
      let year = val.getFullYear()//年
      let month = val.getMonth() + 1//月
      let day = val.getDate()//日
      let hour = val.getHours()//时
      let minute = val.getMinutes()//分
      if (month >= 1 && month <= 9) { month = `0${month}` }
      if (day >= 1 && day <= 9) { day = `0${day}` }
      if (hour >= 0 && hour <= 9) { hour = `0${hour}` }
      if (minute >= 0 && minute <= 9) { minute = `0${minute}` }
      // this.user_birthday = `${year}-${month}-${day} ${hour}:${minute}`
      this.user_birthday = `${year}-${month}-${day}`
      this.isShow = false
    },
  }
};
</script>

<style scoped lang="less" >
    .user-item {
      height: 40px;
      padding: 0 20px;
      background-color: #fff;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        border: none;
        outline: none;
        text-align: right;
      }
    }
</style>

