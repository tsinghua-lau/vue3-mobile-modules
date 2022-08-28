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
    <div class="content" ref="content" v-if="chargeList.length">
      <div class="item" v-for="item in chargeList">
        <div class="dynamic">
          <div class="label" v-for="k in item.dynamic">
            {{ k.label }}
          </div>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="card-num">{{ item.cardNum }}</div>
        <div class="time">{{ item.time }}</div>
        <div class="cost" :class="listStatus == 'wait' || listStatus == 'complete' ? 'cost2' : ''">
          <div class="num">{{ item.cost }}</div>
          <div class="unit">元</div>
        </div>

        <!-- 发票按钮 -->
        <div class="btn2" v-if="listStatus !== 'default' && item.cardStatus == 'success'" @click="goUrl(4,item.id)">查看发票</div>
        <div class="btn2" v-if="listStatus !== 'default' && item.cardStatus == 'faild'" @click="goUrl(3)">重新申请</div>
        <div class="btn2" v-if="listStatus == 'wait'" @click="goUrl(3,item.id,item.sourceType)">申请开票</div>

        <!-- 发票状态 -->
        <div class="status-card" :class="item.cardStatus == 'success' ? 'success' : ''" v-if="listStatus == 'complete' && item.cardStatus == 'success'">开票成功</div>
        <div class="status-card" :class="item.cardStatus == 'faild' ? 'faild' : ''" v-if="listStatus == 'complete' && item.cardStatus == 'faild'">开票失败</div>
        <div class="status-card" :class="item.cardStatus == 'wait' ? 'wait' : ''" v-if="listStatus == 'complete' && item.cardStatus == 'wait'">申请中</div>
      </div>
    </div>
    <div class="content" style="overflow: hidden" v-else>
      <empty text="当前条件无费用记录" />
    </div>
    <div class="footers" v-show="listStatus == 'default'">
      <div class="btn-w" @click="goUrl(1)">开票记录</div>
      <div class="btn2-w" @click="goUrl(2)">申请开票</div>
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
import { ref, reactive, toRefs, defineProps,defineEmits, onBeforeMount, watch, watchEffect, getCurrentInstance } from 'vue';
import { Toast, Popup } from 'vant';
import empty from '@/components/Empty.vue';
import { useRouter } from 'vue-router';
const { proxy } = getCurrentInstance();



onBeforeMount(() => {
  proxy.$mybus.on('changeBoxHeight', data => {
    document.getElementsByClassName('content')[0].style.height = '92%';
  });

  //点击发票记录
  proxy.$mybus.on('goKpjl', data => {
    goUrl(1,data.id,data.sourceType)
  });
});
watch(listStatus, () => {});
var props = defineProps({
  chargeList: Array,
  listStatus: String,
});
var { listStatus } = toRefs(props);
const emit = defineEmits(['changeListStatus','getList','getJlList']);

const route = useRouter();
//使用父组件传递过来的值
const { chargeList } = toRefs(props);

//当前选中月份
const month = ref(1);
//当前选中类型
const allType = ref(0);
//默认最近一个月
const monthLabel = ref('最近一个月');
//默认全部类型
const allLabel = ref('全部类型');

const applyOrapplyed = ref('申请开票');

const state = reactive({
  showSelectMonth: false,
  showSelectAll: false,
});

const timeIndex = ref(1)
const typeIndex = ref('')

//
const goUrl = (val,id,sourceType) => {
  if (val == 1) {
    //开票记录
  //  route.replace({
  //   path: '/bill',
  // });

   setTimeout(() => {
    document.title = '开票记录';
    proxy.$mybus.emit('changeListStatus', 'complete');
    proxy.$mybus.emit('changeBoxHeight', '');

     emit('getJlList', {index:timeIndex.value,type:typeIndex.value});
    proxy.$mybus.emit('changeListStatus', 'complete');

  }, 200);
  } else if (val == 2) {
     document.title = '待开票列表';
    //申请开票
    emit('changeListStatus', 'wait');
  } else if (val == 4) {
    //查看已开好的发票--查看pdf
    route.push({
      path: '/billdetails',
      query: {
        id: id,
      },
    });
  } else {
    
    //具体开票某一条---填发票信息页面
    route.push({
      path: '/billinfo',
      query: {
        id: id,
        sourceType:sourceType
      },
    });
  }
};
//展示搜索条件
const showSearch = index => {
  index == 1 && (state.showSelectMonth = true);
  index == 2 && (state.showSelectAll = true);
};

//点击搜索
const search = (index, type) => {
  debugger
  console.log(index, type);
  const timeSelect = ['全部时间', '最近一个月', '最近三个月', '最近半年'];
  const allTime = ['全部类型', 'ETC通行', 'MTC通行', 'ETC+', '救援'];
  if (['ALL', 'ETC', 'MTC', 'ETCPRO', 'RESCUE'].includes(type)) {
    state.showSelectMonth = false;
    //调用接口
    allLabel.value = allTime[index];
    allType.value = index;
    state.showSelectAll = false;

    let str = ''
    if(type=='ETC'){
      str = 'RE'
      typeIndex.value = 'RE'
    }else if(type=='MTC'){
      str = 'RM'
      typeIndex.value = 'RM'
    }else if(type == 'ETCPRO'){
      str = '1'
        typeIndex.value = '1'
    }else if(type == 'RESCUE'){
      str = 'RJY'
      typeIndex.value = 'RJY'
    }
       console.log('时间参数为',timeIndex.value);
    console.log('类型为',str);
  
      //调用时间接口
    if(listStatus.value == 'complete'){
      //完成状态调用开票接口
      emit('getJlList',{index:timeIndex.value,type:str})
    }else{
      //普通接口
      emit('getList',{index:timeIndex.value,type:str})
      
    }

  } else {
    timeIndex.value = index;
    state.showSelectAll = false;
    monthLabel.value = timeSelect[index];
    month.value = index;
    state.showSelectMonth = false;
    console.log('时间参数为',index);
    console.log('类型为',type);
    
    //调用时间接口
    if(listStatus.value == 'complete'){
      //完成状态调用开票接口
    emit('getJlList',{index:index,type:typeIndex.value==''?undefined:typeIndex.value})

    }else{
      //普通接口
    emit('getList',{index:index,type:typeIndex.value==''?undefined:typeIndex.value})
      
    }
  }
};

const confirmAllType = res => {
  console.log(res);
};
</script>
<style lang="less" scopde>
.active {
  color: #4287fe;
}
.wrapper {
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
  src: url('~@/assets/fonts/SourceHanSansCN-Bold.otf');
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
    overflow: hidden;

    .month,
    .allType {
      position: relative;
      height: 100%;
      .logo {
        width: 10px;
        height: 12px;
        margin-right: 5px;
        position: absolute;
        top: 2px;
        img {
          width: 100%;
          height: 100%;
          vertical-align: unset;
        }
      }
      .label {
        min-width: 50px;
        font-size: 11px;
        margin-left: 15px;
        margin-top: 8px;
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
        max-width: 69%;
        overflow: hidden;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
          font-size: 22px;
        }
        .unit {
          font-size: 12px;
          margin-top: 4px;
          margin-left: 5px;
        }
      }
      .cost2 {
        bottom: 32% !important;
      }

      .btn2 {
        text-align: center;
        background: #fff;
        border-radius: 20px;
        margin-left: 6%;
        background: #4287fe;
        color: #fff;
        width: 84px;
        height: 26px;
        font-size: 12px;
        line-height: 26px;
        position: absolute;
        right: 35px;
        bottom: 29px;
      }
      .status-card {
        position: absolute;
        right: 0;
        width: 75px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 11px;
        background: #cee0ff;
        top: 10px;
        border-top-left-radius: 15px;
        color: red;
        border-bottom-left-radius: 15px;
      }
      .success {
        background-image: linear-gradient(to right, #b5d0ff, #f8fbff);
        color: #4287fe;
      }
      .wait {
        background-image: linear-gradient(to right, #c6dbff, #f8fbff);
        color: #787d87;
      }
      .faild {
        background-image: linear-gradient(to right, #fbbcb1, #f8fbff);
        color: #ec543b;
      }
    }
  }
  .footers {
    width: 100%;
    height: 100px;
    line-height: 100px;
    display: flex;
    .btn-w,
    .btn2-w {
      width: 40%;
      height: 41px;
      line-height: 41px;
      text-align: center;
      background: #fff;
      border-radius: 20px;
      font-size: 15px;
      margin-left: 6%;
    }
    .btn-w {
    }
    .btn2-w {
      background: #4287fe;
      color: #fff;
      margin-right: 25px;
    }
  }
}
</style>
