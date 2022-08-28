<template>
  <div class="box">
    <chargeList :chargeList="state.chargeList" @getList="getPsList" @getJlList="getJlListS" @changeListStatus="changeListStatus" :listStatus="state.listStatus" />
  </div>
</template>
<script setup>
import { ref, reactive, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import { Toast, Popup } from 'vant';
import empty from '@/components/Empty.vue';
import chargeList from '../../components/chargeList/index.vue';
import { getBillList,getJlList } from './../../api/index';
const { proxy } = getCurrentInstance();
onBeforeMount(() => {
  proxy.$mybus.on('changeListStatus', data => {
    changeListStatus(data);
  });
});
const state = reactive({
  chargeList: [
    // {
    //   dynamic: [
    //     {
    //       label: 'ETC通行',
    //     },
    //     {
    //       label: '苏A12345',
    //     },
    //   ],
    //   title: '某某收费站入口 某某收费站出口',
    //   cardNum: '苏通卡 123456123456',
    //   time: '2022-08-01 23：00',
    //   cost: '50.00',
    //   cardStatus: 'success',
    // },
    // {
    //   dynamic: [
    //     {
    //       label: 'ETC通行',
    //     },
    //     {
    //       label: '苏A12345',
    //     },
    //   ],
    //   title: '某某收费站入口 某某收费站出口',
    //   cardNum: '苏通卡 123456123456',
    //   time: '2022-08-01 23：00',
    //   cost: '50.00',
    //   cardStatus: 'faild',
    // },
    // {
    //   dynamic: [
    //     {
    //       label: 'ETC通行',
    //     },
    //     {
    //       label: '苏A12345',
    //     },
    //   ],
    //   title: '某某收费站入口 某某收费站出口',
    //   cardNum: '苏通卡 123456123456',
    //   time: '2022-08-01 23：00',
    //   cost: '50.00',
    //   cardStatus: 'success',
    // },
    // {
    //   dynamic: [
    //     {
    //       label: 'MTC通行',
    //     },
    //     {
    //       label: '苏A12345',
    //     },
    //   ],
    //   title: '某某收费站入口 某某收费站出口',
    //   cardNum: '苏通卡 123456123456',
    //   time: '2022-08-01 23：00',
    //   cost: '50.00',
    //   cardStatus: 'success',
    // },
    // {
    //   dynamic: [
    //     {
    //       label: '救援',
    //     },
    //     {
    //       label: '苏A12345',
    //     },
    //   ],
    //   title: '某某收费站入口 某某收费站出口',
    //   cardNum: '微信支付',
    //   time: '2022-08-01 23：00',
    //   cost: '50.00',
    //   cardStatus: 'wait',
    // },
  ],
  listStatus: 'default',
});

onMounted(() => {
  getList(1);
});

const changeListStatus = status => {
  state.listStatus = status;
  debugger
  if(status == 'wait'){
    //点击申请开票
     let arr =  state.chargeList.filter(p=>p.isPrint == 0);
   state.chargeList = arr;
  }else if(status == 'complete'){
    //点击开票记录
    state.chargeList = [];
    //调用接口

  }

};

//获取列表
const getList = (time, type) => {
  let ps = null;
  if (type) {
    if (type == '1') {
      ps = {
        account: window.g.mobile || '加密',
        timeFlag: time,
        busType: 'E',
      };
    } else {
      ps = {
        account: window.g.mobile || '加密',
        timeFlag: time,
        subBusType: type,
      };
    }
  } else {
    //类型是全部
    ps = {
      account: window.g.mobile || '加密',
      timeFlag: time,
    };
  }

//默认加载列表
  getBillList(ps).then(res => {
    if (res && res.code == 200) {
      let data = res.data.list;
      state.chargeList = [];
      data.forEach(item => {
        let obj = {
          dynamic: [],
          title: item.enName + item.exName,
          cardNum: item.payModeName + '1234',
          time: item.dataCreateTime,
          cost: (Number(item.piafee) / 1000).toFixed(2),
          isPrint:item.isPrint,
          cardStatus: 'default',
          id:item.id,
          sourceType:item.sourceType
        };
        obj.dynamic.push({
          label: item.subBusName,
        });
        state.chargeList.push(obj);
      });
    }else if(res.code == 400){
      //查询结果为空
       state.chargeList = [];
    }
  });
};


const getPsList = obj => {
  getList(obj.index, obj.type);
};

//获取开票记录--完成
const getJlListS = obj=>{


    let ps = null;
  if (obj.type) {
    if (obj.type == '1') {
      ps = {
        account: window.g.mobile || '加密',
        timeFlag: obj.index,
        busType: 'E',
      };
    } else {
      ps = {
        account: window.g.mobile || '加密',
        timeFlag: obj.index,
        subBusType: obj.type,
      };
    }
  }else{
    ps = {
        account: window.g.mobile || '加密',
        timeFlag: obj.index,
        subBusType: obj.type,
      };
  }
 debugger
  console.log(ps);
  getJlList(ps).then(res=>{
   
    if (res && res.code == 200) {
      let data = res.data.list;
      state.chargeList = [];
      data.forEach(item => {
        let obj = {
          dynamic: [],
          title: item.enName + item.exName,
          cardNum: item.payModeName + '1234',
          time: item.dataCreateTime,
          cost: (Number(item.piafee) / 1000).toFixed(2),
          isPrint:item.isPrint,
          cardStatus: item.isPrint==1?'success':'faild',
          id:item.id,
          sourceType:item.sourceType
        };
        obj.dynamic.push({
          label: item.subBusName,
        });
        state.chargeList.push(obj);
      });
      state.listStatus = 'complete';
    }else if(res.code == 400){
      //查询结果为空
       state.chargeList = [];
    }
  })
}


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
  overflow: hidden;
}
</style>
