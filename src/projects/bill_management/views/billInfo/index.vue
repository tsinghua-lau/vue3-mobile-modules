<template>
  <div class="box">
    <div class="form">
      <div class="item">
        <div class="label">发票类型</div>
        <div class="component">
          <van-checkbox v-model="state.electronicBill" icon-size="18px">电子发票</van-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="label">抬头类型</div>
        <div class="component">
          <van-checkbox-group v-model="state.bill" style="display: flex" :max="1" ref="checkboxGroup">
            <van-checkbox name="gr" icon-size="18px">个人发票</van-checkbox>
            <van-checkbox name="qy" icon-size="18px" style="margin: 0 5px">企业发票</van-checkbox>
            <van-checkbox name="zp" icon-size="18px">企业专票</van-checkbox>
          </van-checkbox-group>
        </div>
      </div>
      <van-form @failed="onFailed" @submit="submit">
        <van-cell-group inset>
          <van-field label="发票抬头" v-if="state.bill.includes('gr')" v-model="state.taitou" name="asyncValidator" placeholder="请输入发票抬头" :rules="[{ required: true, message: '发票抬头格式错误' }]" />

          <van-field
            label="企业名称"
            v-if="state.bill.includes('qy') || state.bill.includes('zp')"
            v-model="state.name"
            name="asyncValidator"
            placeholder="请输入企业名称"
            :rules="[{ required: true, message: '企业名称格式错误' }]"
          />
          <van-field
            label="企业税号"
            v-if="state.bill.includes('qy') || state.bill.includes('zp')"
            v-model="state.ein"
            name="asyncValidator"
            placeholder="请输入企业税号"
            :rules="[{ validator: isNum, message: '企业税号格式错误' }]"
          />
          <van-field label="邮箱号码" v-model="state.email" name="asyncValidator" placeholder="请输入邮箱" :rules="[{ validator: isEmail, message: '邮箱格式错误' }]" />

          <!-- <van-field label="企业地址" v-model="state.address" name="asyncValidator" placeholder="请输入企业地址" :rules="[{ required: true, message: '企业地址格式错误' }]" />
          <van-field label="企业电话" v-model="state.phone" name="asyncValidator" placeholder="请输入企业电话" :rules="[{ validator: isNum, message: '企业电话格式错误' }]" />
          <van-field label="开户银行" v-model="state.bank" name="asyncValidator" placeholder="请输入开户银行" :rules="[{ required: true, message: '开户银行格式错' }]" />
          <van-field label="银行卡号" v-model="state.num" name="asyncValidator" placeholder="请输入银行卡号" :rules="[{ validator: isBankCardNo, message: '行卡号格式错误' }]" /> -->
        </van-cell-group>
        <div style="margin: 16px" class="submit-btn">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, toRef, ref, watch, onMounted, getCurrentInstance } from 'vue';
import { Form, Field, CellGroup, Toast, CheckboxGroup, Checkbox } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import { prints } from '../../api/index';
import loading from '@/components/loading/loading.js'
const route = useRouter();
const routeInfo = useRoute();
const { proxy } = getCurrentInstance();
onMounted(() => {
  console.log(routeInfo.query.id);
  // loading.show()
});

const state = reactive({
  electronicBill: true,
  bill: ['gr'], //电子发票\个人发票\Z企业专票
  name: '',
  ein: '',
  address: '',
  phone: '',
  bank: '',
  num: '',
  email: '', //邮箱
  taitou: '', //抬头
});
// const  {checked,name,ein,address}  = toRefs(state)

//表单正则
const isNum = val => /^[0-9]+$/.test(val);
const isEmail =val=>/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);

//银行卡号
const isBankCardNo = bankNo => {
  var num = /^\d*$/;
  if (bankNo.length < 16 || bankNo.length > 19 || !num.test(bankNo)) {
    return false;
  }
  return true;
};

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = val => {
  if (val !== '') {
    return true;
  }
  return false;
};

//全部验证成功
const submit = () => {
  if (!state.electronicBill) {
    Toast('请选择发票类型');
    return;
  } else if (!state.bill.length) {
    Toast('请选择一种抬头类型');
    return;
  }

  //调用接口
  let ps = null;
  if (state.bill[0] == 'gr') {
    //个人
    ps = {
      account: window.g.mobile || '加密',
      payId: routeInfo.query.id,
      type: 'dzfp', //发票类型
      headType: state.bill[0], //抬头类型
      headName: state.taitou,
      billEmail: state.email,
      sourceType:routeInfo.query.sourceType
    };
  } else {
    //企业
    ps = {
      account: window.g.mobile || '加密',
      payId: routeInfo.query.id,
      type: 'dzfp', //发票类型
      headType: state.bill[0], //抬头类型
      headComName: state.name, //企业名称
      headComNsr: state.ein, //纳税号
      billEmail: state.email,
       sourceType:routeInfo.query.sourceType
    };
  }

  prints(ps).then(res => {
    if (res && res.code == 200) {
      Toast('发票已申请');
    } else {
      Toast('开票失败,请稍后重试');
    }
  });
  
  route.push({
    path: '/',
    query:{
      scope:''
    }
  });

  setTimeout(() => {
    //进入bill页面后点击开票记录
    proxy.$mybus.emit('goKpjl',{id:routeInfo.query.id,sourceType:routeInfo.query.sourceType});
  }, 200);
};
//表单完成点击提交
const onFailed = errorInfo => {
  console.log('failed', errorInfo);
  if (!errorInfo) {
  }
};
</script>

<style lang="less" scoped>
.submit-btn {
  position: absolute;
  bottom: 4%;
  width: 75%;
}
:deep(.van-checkbox__label) {
  margin-top: 4px !important;
  margin-left: 2px !important;
}
.van-cell {
  width: 100%;
  padding: var(--van-cell-vertical-padding) 0;
}
.van-cell:after {
  left: 0;
  right: 0;
}
:deep(.van-cell__title, .van-cell__value) {
  flex: none;
  margin-right: 0 !important;
  width: 23% !important;
}
.van-cell-group--inset {
  margin: 0 !important;
}
.box {
  width: 100%;
  height: 100%;
  background: #f6f7f8;
  overflow: hidden;
  > .form {
    width: 94%;
    margin-left: 3%;
    margin-top: 3%;
    height: fit-content;
    border-radius: 20px;
    background: #fff;
    padding: 11px;
    box-sizing: border-box;
    font-size: 13px;
    .item {
      display: flex;
      border-bottom: 1px solid #e8e8e8;
      // padding-bottom: 10px;
      height: 45px;
      line-height: 45px;
      .label {
        width: 23%;
      }
      .component {
        width: 79%;
        display: flex;
      }
    }
  }
}
</style>
