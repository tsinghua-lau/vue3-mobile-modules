.<template>
  <div>
    <div class="title_top_t">
      <img class="tollimg" src="./../../icon/toll.png" />
      <span class="toll_gate_txt">收费站</span>
      <img src="./../../icon/close.png" @click="closePubop" class="closeButton" />
    </div>
    <div class="toll_centen">
      <highwaySign :msg="stontt" />
      <span class="toll_centen_right">
        <div>{{ params.name }}</div>
        <div class="toll_centen_right_bottom">
          <span class="toll_centen_right_icon1" v-if="params.status == 0">开</span>
          <span class="toll_centen_right_icon2" v-else-if="params.status == 1">开</span>
          <span class="toll_centen_right_icon3" v-else-if="params.status == 2">关</span>
          <span class="toll_centen_right_cl9_1" v-if="params.examineType == 0">疫情查验</span>
          <span class="toll_centen_right_cl9_2" v-else-if="params.examineType == 1">疫情免检</span>
        </div>
      </span>
      <van-row class="toll_centen_t" v-for="item in params.list" :key="item.id">
        <div class="toll_centen_center">{{ item.stationName }}</div>
        <div :style="{ flex: 1 }"></div>
        <van-button color="#2d7ce7" size="small" v-show="item.io == 0 && item.infoType == 0" class="toll_centen_r">出口开启</van-button>
        <van-button size="small" v-show="item.io == 0 && item.infoType == 1" class="toll_centen_rclose">出口关闭</van-button>
        <van-button color="#2d7ce7" size="small" v-show="item.io == 1 && item.infoType == 0" class="toll_centen_r">入口开启</van-button>
        <van-button color="#2d7ce7" size="small" v-show="item.io == 1 && item.infoType == 1" class="toll_centen_r">入口关闭</van-button>
      </van-row>
      <div>
        <span class="postion_l"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
        <van-button class="postion_c" v-show="params.focusState == 0" color="#2d7ce7" round>关注</van-button>
        <van-button class="postion_ct" v-show="params.focusState == 1" round>已关注</van-button>
        <van-button class="postion_ct" v-show="params.focusState == 2" round>关注已达上限</van-button>
        <van-button class="postion_r" color="#2d7ce7" round size="small">路线</van-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import highwaySign from './../highway_sign.vue';
import { gettollevent } from '../../../../applications/app_mlgj/api/baseapi/index';
import { ref, reactive, onMounted, onBeforeMount, getCurrentInstance } from 'vue';
onMounted(() => {
  tollStionclick();
});
const { proxy } = getCurrentInstance();
var params = reactive({
  roadNum: 'G25', // 道路编号
  roadName: '长深高速', // 道路名称
  roadType: 0, //高速性质 0：国家高速:1：苏高速
  name: '铁山寺', //收费站名称
  focusState: 0, //	是否关注，0：未关注、1：关注、2：已达关注上线
  examineType: 0, //防疫情况 0:查验、1:免验
  status: 0, //状态：0全开，1半开、2关
  lon: '119.220977', // 收费站经度
  lat: '34.277926', // 收费站纬度
  list: [
    // {
    //   id: '0175b8f4-d81d-47d3-a899-8e27d877c53a', // 	道口id
    //   stationName: '灌云南副站(入口)', // 	道口名称
    //   io: '1', // 出口、入口 (0：出，1：入)
    //   direction: '连云港', // 道口方向
    //   infoType: 0, //“开关状态”: 0（0：开通；1：关闭）
    // },
    {
      direction: '淮安',
      id: '109d4f1a-268c-11e8-b916-525472867167',
      infoType: 0,
      io: '0',
      stationName: '铁山寺(入)',
    },
    {
      direction: '南京',
      id: '606d4f1a-268c-11e8-b916-525472867167',
      infoType: 0,
      io: '1',
      stationName: '铁山寺(入)',
    },
    {
      direction: '南京',
      id: '606d4f7a-268c-11e8-b916-525472867167',
      infoType: 1,
      io: '1',
      stationName: '铁山寺(出))',
    },
  ],
});

var stontt = reactive({
  roadNum: 'G25', // 道路编号
  roadName: '长深高速', // 道路名称
  roadType: 0, //高速性质 0：国家高速:1：苏高速
});
const closePubop = () => {
  proxy.$mybus.emit('closePubop', false);
};
const tollStionclick = () => {
  proxy.$mybus.on('tollStionclickevent', data => {
    params.name = data.name;
    params.focusState = data.focusState;
    params.examineType = data.examineType;
    params.status = data.status;
    params.list = data.list;
    stontt.roadNum = data.roadNum;
    stontt.roadName = data.roadName;
    stontt.roadType = data.roadType;

    // var p1 = [116.434027, 39.941037];
    // var p2 = [116.461665, 39.941564];
    // // 返回 p1 到 p2 间的地面距离，单位：米
    // var dis = AMap.GeometryUtil.distance(p1, p2);
    // console.log(dis);
  });
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
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
  margin-bottom: 100px;
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
        height: 18px;
        background: #ffffff;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #2d7ce7;
        line-height: 18px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #2d7ce7;
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
  .postion_ct {
    font-size: 14px;
    margin-left: 12px;
    width: 120px;
    height: 35px;
    background: #83b1ff;
    color: #fff;
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