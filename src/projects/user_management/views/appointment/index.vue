<template>
  <div class="box">
    <div class="header">
      <van-tabs v-model:active="state.tabActiveIndex">
        <van-tab title="生效中"></van-tab>
        <van-tab title="已过期/失效"></van-tab>
      </van-tabs>
    </div>

    <div class="content-effect-ing">
      <empty v-if="!state.cardList[state.tabActiveIndex].length" />
      <div class="item" v-for="item in state.cardList[state.tabActiveIndex]">
        <div class="title">{{ item.name }}</div>
        <div class="start-time">
          <div class="key">开始时间</div>
          <div class="value">{{ item.startTime }}</div>
        </div>
        <div class="end-time">
          <div class="key">结束时间</div>
          <div class="value">{{ item.endTime }}</div>
        </div>
        <!-- 收费站、汽渡按钮 -->
        <div class="handle" v-if="(item.type == 1 || item.type == 2) && state.tabActiveIndex!==1">
         <div class="btn pause"  @click="btnCancel(item)">取消关注</div>
          <div class="btn" @click="btnSend(item)" :class="item.state == 1 ? 'cancle' : 'pause'">{{ item.state == 1 ? '暂停推送' : '推送' }}</div>
          <!-- <div class="btn" :class="item.state == 2? 'pause':''">{{item.state == 2? '暂停推送':'推送'}}</div> -->
        </div>

         <!-- 收费站按钮 -->
        <div class="handle" v-if="item.type == 3 && state.tabActiveIndex!==1">
          <div class="btn" @click="btnCancel(item)">取消预约</div>
          <div class="btn" @click="btnSend(item)" :class="item.state == 1 ? 'cancle' : 'pause'">{{ item.state == 1 ? '暂停推送' : '推送' }}</div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { Toast, Tab, Tabs } from 'vant';
import empty from '@/components/Empty.vue';
import { subscribeList, pauseInfo,cancelBtn } from '../../api/login/index';
const activeName = ref('a');
const changeTab = name => {
  activeName.value = name;
};
let state = reactive({
  tabActiveIndex: '0',
  cardList: [[], []],
});

onMounted(() => {
  getList(2); //已经生效
  getList(3); //失效
});

//取消关注
const btnCancel = (item)=>{
cancelBtn({id:item.id,type:Number(item.type)}).then(res=>{
  if(res && res.code == 200){
      getList(2); //已经生效
      getList(3); //已经生效
    Toast('取消关注成功')
  }else{
    Toast('取消关注失败')

  }
})
}

//获取列表
const getList = type => {
  if(type == 2){
    state.cardList[0] = [];
  }else{
    state.cardList[1] = [];
  }
  subscribeList({
    account: '15850501445', //15651691805
    type: type,
  }).then(res => {
    if (res && res.data) {
      res.data.forEach(item => {
        state.cardList[type == 2 ? 0 : 1].push({
          name: item.name,
          startTime: item.startTime,
          endTime: item.endTime,
          state: item.state,
          id: item.id,
          type: item.type,
        });
      });
    }

    console.log(state.cardList);
  });
};
//按钮请求--取消推送、推送
const btnSend = item => {
  let ps = {
    id: item.id,
    type: item.type,
    state: item.state == 1 ? 2 : 1,
  };
  pauseInfo(ps).then(res => {
    console.log(res);
    if (res && res.code == 200) {
      let obj = state.cardList[0].find(p => p.id == item.id);
      if (obj) {
        obj.state = obj.state == 1 ? 2 : 1;
      }
      Toast('操作成功');
    } else {
      Toast('操作失败');
    } 
    // setTimeout(() => {
    //   state.cardList[0] = [];
    //   getList(2); //已经生效
    //   getList(3); //失效
    // }, 500);
  });
};
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

  .content-effect-ing {
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
        .btn,
        .btn-blue {
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
          font-family: 'SourceHanSansCN';
        }
        .btn-blue {
          background: #4287fe;
          color: #fff;
        }
      }
    }
  }
}
</style>
