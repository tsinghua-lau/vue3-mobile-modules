<template>
  <div class="box">
    <div class="header">
      <div class="item" :class="activeName == 'a' ? 'active' : ''" @click="changeTab('a')">未开始</div>
      <div class="item" :class="activeName == 'b' ? 'active' : ''" @click="changeTab('b')">生效中</div>
      <div class="item" :class="activeName == 'c' ? 'active' : ''" @click="changeTab('c')">已过期</div>
    </div>

    <div class="content-not-start" v-show="activeName == 'a'">
       <empty v-if="!state.cardNotStart.length" />
    </div>
    <div class="content-effect-ing" v-show="activeName == 'b'">
       <empty v-if="!state.cardEffectIng.length" />
      <div class="item" v-for="item in state.cardEffectIng">
        <div class="title">{{ item.name }}</div>
        <div class="start-time">
          <div class="key">开始时间</div>
          <div class="value">{{ $getTime(new Date()) }}</div>
        </div>
        <div class="end-time">
          <div class="key">结束时间</div>
          <div class="value">{{ $getTime(new Date()) }}</div>
        </div>
        <div class="handle">
          <div class="cancle btn">取消关注</div>
          <div class="pause btn">暂停推送</div>
        </div>
      </div>
    </div>
    <div class="content-past-due" v-show="activeName == 'c'"></div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { Toast } from 'vant';
import empty from '@/components/Empty.vue'
const activeName = ref('a');
Toast(activeName.value);
const changeTab = name => {
  activeName.value = name;
};
let state = reactive({
  cardNotStart: [
    
  ],
  cardEffectIng: [
    {
      name: '收费站名称',
    },
    {
      name: '收费站名称',
    },
    {
      name: '收费站名称',
    },
  ],
});
// const getTime = (originVal) => {
//   const dt = new Date(originVal);

//   const y = dt.getFullYear();
//   const m = (dt.getMonth() + 1 + '').padStart(2, '0');
//   const d = (dt.getDate() + '').padStart(2, '0');

//   const hh = (dt.getHours() + '').padStart(2, '0');
//   const mm = (dt.getMinutes() + '').padStart(2, '0');
//   const ss = (dt.getSeconds() + '').padStart(2, '0');

//   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
// };
</script>
<style lang="less" scopde>
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
.active {
  font-weight: 600;
  &::after {
    content: ' ';
    width: 36px;
    height: 4px;
    background: #1a81fa;
    position: absolute;
    bottom: -0;
    left: 45px;
  }
}

.box {
  width: 100%;
  height: 100%;
  background: #f6f7f8;
  .header {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    .item {
      font-family: 'SourceHanSansCN';
      position: relative;
      width: 33%;
      text-align: center;
      font-size: 15px;
    }
  }
  .content-not-start,
  .content-effect-ing,
  .content-past-due {
    margin-top: 10px;
    width: 100%;
    overflow: auto;
    height: calc(100% - 52px);
    .item {
      margin-top: 10px;
      width: 96%;
      margin-left: 2%;
      background: #fff;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 20px;

      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .start-time {
        font-size: 13px;
        margin-top: 10px;

        color: #666666;
        display: block;
        overflow: hidden;
        .key {
          float: left;
        }
        .value {
          float: right;
        }
      }
      .end-time {
        margin-top: 10px;
        font-size: 13px;
        color: #666666;
        overflow: hidden;

        .key {
          float: left;
        }
        .value {
          float: right;
        }
      }

      .handle {
        display: flex;
        justify-content: right;
        .btn {
          margin: 15px;
          margin-top: 20px;
          margin-left: 5px;
          margin-right: 0;
          background: #f1f3f8;
          width: 99px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 15px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          color: #4287fe;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
