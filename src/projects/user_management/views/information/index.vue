<template>
  <div class="box">
    <div class="item">
      <div class="l">头像</div>
      <div class="r">
        <img src="../../images/user-logo.png" alt="" />
      </div>
    </div>
    <div class="item" @click="showPopup(1)">
      <div class="l">昵称</div>
      <div class="r">
        {{ state.nickname }}
        <span>
          <img src="../../images/right.png" alt="" srcset="" />
        </span>
      </div>
    </div>
    <div class="item" @click="showGender">
      <div class="l">性别</div>
      <div class="r">
        {{ state.gender }}
        <span>
          <img src="../../images/right.png" alt="" srcset="" />
        </span>
      </div>
    </div>

    <van-popup v-model:show="show" position="bottom" :style="{ height: '20%' }" @close="confrimName">
      <div class="popup-box">
        <div class="text">输入昵称</div>
        <div class="input">
          <van-field v-model="state.tempname" input-align="center" placeholder="请输入用户名" />
        </div>
        <div class="border"></div>
        <div class="cancle" @click="showPopup(0)">取消</div>
      </div>
    </van-popup>
    <van-popup v-model:show="showSelect" position="bottom">
      <van-picker title="选择性别" @change="onChange" @confirm="closeSelect(1)" @cancel="closeSelect" :columns="columns" :default-index="0" />
    </van-popup>
  </div>
</template>
<script setup>
const columns = ['男性', '女性'];
import { ref, reactive } from 'vue';
import { Popup, Picker } from 'vant';

let state = reactive({
  nickname: '三毛', //昵称
  gender: '男性', //性别
  tempgenter: '男性',
  tempname: '三毛',
});

const show = ref(false);
const showSelect = ref(false);
const value = ref('');
const showPopup = isShow => {
  if (isShow === 1) {
    show.value = true;
  } else {
    debugger;
    show.value = false;
  }
};
const showGender = () => {
  showSelect.value = true;
};
const closeSelect = type => {
  if (type && type == 1) {
    state.gender = state.gender == state.tempgenter ? state.gender : state.tempgenter;
  }
  showSelect.value = false;
};
const onChange = (value, index) => {
  state.tempgenter = value;
  console.log(value);
};
const confrimName = () => {
  if (state.tempname.replace(/^\s*/, '') == '') {
    Toast('非法用户名');
    return;
  }
  if (state.tempname !== state.nickname) {
    state.nickname = state.tempname;
  }
};
</script>
<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.box {
  width: 100%;
  height: 100%;
  background: #f6f7f8;
  overflow: hidden;
  .item {
    font-family: 'SourceHanSansCN';
    font-size: 15px;
    width: 96%;
    height: 45px;
    line-height: 45px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 2%;
    margin-top: 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    .l {
    }
    .r {
      img {
        width: 40px;
      }
      span {
        display: inline-block;
        width: 11px;
        height: 16px;
        vertical-align: sub;
        margin-left: 10px;
        img {
          width: 100%;
          height: 100%;
          margin-bottom: 2px;
        }
      }
    }
  }
}
.popup-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .text {
    color: #b4b4b4;
    text-align: center;
    font-size: 17px;
    margin-top: 10px;
  }
  .input {
    width: 50%;
    margin-left: 25%;
  }
  .border {
    width: 40%;
    height: 2px;
    background: #e3e4e5;
    margin-left: 29%;
  }
  .cancle {
    width: 100%;
    position: absolute;
    bottom: 10px;
    padding-top: 10px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border-top: 2px solid #f6f7f8;
  }
}
</style>
