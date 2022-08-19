.<template>
  <div>
    <div class="title_top_t">
      <img class="tollimg" src="./../../icon/toll.png" />
      <span class="toll_gate_txt">收费站</span>
      <img src="./../../icon/close.png" @click="closePubop" class="closeButton" />
    </div>
    <div class="toll_centen">
      <highwaySign msg="苏高速" />
      <span class="toll_centen_right">
        <div>平潮北收费站</div>
        <div class="toll_centen_right_bottom">
          <span class="toll_centen_right_icon1" v-if="status == 1">开</span>
          <span class="toll_centen_right_icon2" v-else-if="status == 2">开</span>
          <span class="toll_centen_right_icon3" v-else-if="status == 3">关</span>
          <span class="toll_centen_right_cl9_1" v-if="cl9 == 1">疫情查验</span>
          <span class="toll_centen_right_cl9_2" v-else-if="cl9 == 2">疫情免检</span>
        </div>
      </span>
      <van-row class="toll_centen_t">
        <div class="toll_centen_center">平潮北方向</div>
        <div :style="{ flex: 1 }"></div>
        <van-button color="#2d7ce7" size="small" class="toll_centen_r">出口开启</van-button>
      </van-row>
      <van-row class="toll_centen_t">
        <div class="toll_centen_center">盐城方向</div>
        <div :style="{ flex: 1 }"></div>
        <van-button color="#2d7ce7" size="small" class="toll_centen_r">入口开启</van-button>
      </van-row>
      <van-row class="toll_centen_t">
        <div class="toll_centen_center">南通西方向</div>
        <div :style="{ flex: 1 }"></div>
        <van-button size="small" class="toll_centen_rclose">出口关闭</van-button>
      </van-row>
      <div>
        <span class="postion_l"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
        <van-button class="postion_c" color="#2d7ce7" round>关注</van-button>
        <van-button class="postion_r" color="#2d7ce7" round size="small">路线</van-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import highwaySign from './../highway_sign.vue';
import { ref, onMounted } from 'vue';
const emit = defineEmits(['closeAdd']);
onMounted(() => {});
const status = ref('1');
const cl9 = ref('1');
const closePubop = () => {
  emit('closePubop', false);
};
</script>
<style lang="less" scoped>
.title_top_t {
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  height: 60px;
  background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  padding-left: 20px;
  padding-top: 20px;
  .tollimg {
    float: left;
    width: 24px;
    height: 24px;
  }
  .toll_gate_txt {
    float: left;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  }
  .closeButton {
    float: right;
    width: 11px;
    height: 11px;
    margin-right: 20px;
    margin-top: 5px;
  }
}
.toll_centen {
  height: calc(100% - 64px);
  background-color: #fff;
  .toll_centen_right {
    display: inline-block;
    width: calc(100% - 80px);
    vertical-align: bottom;
    div {
      margin-left: 18px;
      font-size: 24px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 22px;
    }
    .toll_centen_right_bottom {
      margin-top: 9px;
      .toll_centen_right_icon1 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #2d7ce7;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 22px;
        text-align: center;
        border-radius: 2px;
      }
      .toll_centen_right_icon2 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #6eacff;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 22px;
        text-align: center;
        border-radius: 3px;
      }
      .toll_centen_right_icon3 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #ffffff;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #2d7ce7;
        line-height: 22px;
        text-align: center;
        border-radius: 3px;
        border: 2px solid #2d7ce7;
      }
      .toll_centen_right_cl9_1 {
        margin-left: 6px;
        display: inline-block;
        width: 60px;
        height: 20px;
        background: #f19f11;
        border-radius: 3px;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 20px;
      }
      .toll_centen_right_cl9_2 {
        margin-left: 6px;
        display: inline-block;
        width: 60px;
        height: 20px;
        background: #ffffff;
        border: 2px solid #f19f11;
        border-radius: 3px;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #f19f11;
        line-height: 20px;
      }
    }
  }
  .toll_centen_t {
    padding: 0 20px 0 20px;
    .toll_centen_center {
      float: left;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 40px;
    }
    .toll_centen_r {
      float: right;
      border-radius: 3px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      width: 70px;
      height: 20px;
    }
    .toll_centen_rclose {
      float: right;
      border-radius: 3px;
      background: #ffffff;
      border: 2px solid #2d7ce7;
      color: #2d7ce7;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      width: 70px;
      height: 20px;
    }
  }
  .postion_l {
    padding-left: 16px;
    vertical-align: -webkit-baseline-middle;
    width: 92px;
    height: 40px;
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 40px;
    .postion_l_icon {
      display: inline-block;
      width: 14px;
      height: 16px;
      margin-right: 2px;
    }
  }
  .postion_c {
    font-size: 14px;
    margin-left: 12px;
    width: 120px;
    height: 35px;
    background: #4287fe;
    border-radius: 20px;
  }
  .postion_r {
    float: right;
    margin-right: 20px;
    margin-top: 15px;
    font-size: 14px;
    width: 84px;
    height: 35px;
    background: #4287fe;
    border-radius: 20px;
  }
}
</style>