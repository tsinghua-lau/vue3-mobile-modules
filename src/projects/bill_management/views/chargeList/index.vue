<template>
  <div class="box">
    <div class="header">
      <div class="month" @click="showSearch(1)">
        <div class="logo"><img src="../../images/month.png" alt="" srcset="" /></div>
        <div class="label">{{ monthLabel }}</div>
      </div>
      <div class="allType" @click="showSearch(2)">
        <div class="logo"><img src="../../images/month.png" alt="" srcset="" /></div>
        <div class="label">{{ allLabel }}</div>
      </div>
    </div>
    <div class="content" v-if="state.chargeList.length">
      <div class="item" v-for="item in state.chargeList">
        <div class="dynamic">
          <div class="label" v-for="k in item.dynamic">
            {{ k.label }}
          </div>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="card-num">{{ item.cardNum }}</div>
        <div class="time">{{ item.time }}</div>
        <div class="cost">
          <div class="num">{{ item.cost }}</div>
          <div class="unit">元</div>
        </div>
      </div>
    </div>
    <div class="content" style="overflow: hidden" v-else>
      <empty text="当前条件无费用记录" />
    </div>
    <div class="footer">
      <div class="btn">开票记录</div>
      <div class="btn2">申请开票</div>
    </div>
  </div>
  <van-overlay class="select" :show="state.showSelectMonth" @click="state.showSelectMonth = false">
    <div class="wrapper" @click.stop="state.showSelectMonth = false">
      <div class="wrapper-item" :class="month == 0 ? 'active' : ''" @click="search(0)">全部时间</div>
      <div class="wrapper-item" :class="month == 1 ? 'active' : ''" @click="search(1)">最近一个月</div>
      <div class="wrapper-item" :class="month == 2 ? 'active' : ''" @click="search(2)">最近三个月</div>
      <div class="wrapper-item" :class="month == 3 ? 'active' : ''" @click="search(3)">最近半年</div>
    </div>
  </van-overlay>
  <van-overlay class="select" :show="state.showSelectAll">
    <div class="wrapper" @click.stop="state.showSelectAll = false">
      <div class="wrapper-item" :class="allType == 0 ? 'active' : ''" @click="search(0, 'ALL')">全部类型</div>
      <div class="wrapper-item" :class="allType == 1 ? 'active' : ''" @click="search(1, 'ETC')">ETC通行</div>
      <div class="wrapper-item" :class="allType == 2 ? 'active' : ''" @click="search(2, 'MTC')">MTC通行</div>
      <div class="wrapper-item" :class="allType == 3 ? 'active' : ''" @click="search(3, 'ETCPRO')">ETC+</div>
      <div class="wrapper-item" :class="allType == 4 ? 'active' : ''" @click="search(4, 'RESCUE')">救援</div>
    </div>
  </van-overlay>
  <div ref="root" />
</template>
<script setup>
import { ref, reactive } from 'vue';
import { Toast, Popup } from 'vant';
import empty from '@/components/Empty.vue';
import { useClickAway } from '@vant/use';

const month = ref(1);
const allType = ref(1);
const value1 = ref(0);
const monthLabel = ref('最近一个月');
const allLabel = ref('全部类型');
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const state = reactive({
  chargeList: [
    {
      dynamic: [
        {
          label: 'ETC通行',
        },
        {
          label: '苏A12345',
        },
      ],
      title: '某某收费站入口 某某收费站出口',
      cardNum: '苏通卡 123456123456',
      time: '2022-08-01 23：00',
      cost: '50.00',
    },
    {
      dynamic: [
        {
          label: 'ETC通行',
        },
        {
          label: '苏A12345',
        },
      ],
      title: '某某收费站入口 某某收费站出口',
      cardNum: '苏通卡 123456123456',
      time: '2022-08-01 23：00',
      cost: '50.00',
    },
    {
      dynamic: [
        {
          label: 'ETC通行',
        },
        {
          label: '苏A12345',
        },
      ],
      title: '某某收费站入口 某某收费站出口',
      cardNum: '苏通卡 123456123456',
      time: '2022-08-01 23：00',
      cost: '50.00',
    },
    {
      dynamic: [
        {
          label: 'MTC通行',
        },
        {
          label: '苏A12345',
        },
      ],
      title: '某某收费站入口 某某收费站出口',
      cardNum: '苏通卡 123456123456',
      time: '2022-08-01 23：00',
      cost: '50.00',
    },
    {
      dynamic: [
        {
          label: '救援',
        },
        {
          label: '苏A12345',
        },
      ],
      title: '某某收费站入口 某某收费站出口',
      cardNum: '微信支付',
      time: '2022-08-01 23：00',
      cost: '50.00',
    },
  ],
  showSelectMonth: true,
  showSelectAll: true,
});

const showSearch = index => {
  index == 1 && (state.showSelectMonth = true);
  index == 2 && (state.showSelectAll = true);
};
const search = (index, type) => {
  debugger;
  const timeSelect = ['全部时间', '最近一个月', '最近三个月', '最近半年'];
  const allTime = ['全部类型', 'ETC通行', 'MTC通行', 'ETC+', '救援'];
  if (['ALL', 'ETC', 'MTC', 'ETCPRO', 'RESCUE'].includes(type)) {
    state.showSelectMonth = false;
    //调用接口
    allLabel.value = allTime[index];
    allType.value = index;
    state.showSelectAll = false;
  } else {
    state.showSelectAll = false;
    monthLabel.value = timeSelect[index];
    month.value = index;
    state.showSelectMonth = false;
  }
};
const confirmAllType = res => {
  console.log(res);
};
const root = ref();
useClickAway(root, () => {
  console.log('click outside!');
});
</script>
<style lang="less" scopde>
.active {
  color: #4287fe;
}
.wrapper {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  height: 100%;
}
.wrapper-item {
  width: 100%;
  height: 30px;
  font-size: 12px;
  background: #fff;
  text-align: center;
}
.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.van-overlay {
  top: 42px;
}
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
  .header {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 26px;
    justify-content: flex-end;
    padding-right: 20px;
    box-sizing: border-box;

    .month,
    .allType {
      .logo {
        width: 10px;
        height: 12px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: unset;
        }
      }
      .label {
        font-size: 11px;
        margin-left: 15px;
        margin-top: -4px;
        font-family: 'SourceHanSansCN';
      }
    }
    .allType {
      margin-left: 30px;
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 160px);
    overflow: auto;
    margin-bottom: 20px;
    .item {
      width: 96%;
      margin-left: 2%;
      height: 140px;
      margin-bottom: 20px;
      background: #fff;
      border-radius: 10px;
      padding: 15px;
      box-sizing: border-box;
      position: relative;
      .dynamic {
        display: flex;
        width: 100%;
        .label {
          width: 52px;
          height: 20px;
          padding: 0 3px;
          line-height: 20px;
          border-radius: 3px;
          text-align: center;
          background: #2d7ce7;
          color: #fff;
          font-size: 11px;
          margin-right: 5px;
        }
      }
      .title {
        font-size: 17px;
        height: 44px;
        font-weight: 600;
        line-height: 45px;
        width: fit-content;
      }
      .card-num,
      .time {
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        color: #666666;
      }
      .cost {
        width: fit-content;
        height: 50px;
        position: absolute;
        right: 10%;
        bottom: 10%;
        display: flex;
        .num {
          font-size: 32px;
        }
        .unit {
          font-size: 12px;
          margin-top: 14px;
          margin-left: 5px;
        }
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    height: 100px;
    line-height: 100px;
    .btn,
    .btn2 {
      width: 40%;
      height: 41px;
      line-height: 41px;
      text-align: center;
      background: #fff;
      border-radius: 20px;
      font-size: 15px;
      margin-left: 6%;
    }
    .btn2 {
      background: #4287fe;
      color: #fff;
    }
  }
}
</style>
