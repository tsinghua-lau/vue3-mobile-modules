.<template>
  <div style="height: 100%">
    <div class="title_top">
      <img class="tollimg" src="./../../icon/serveicon.png" />
      <span class="toll_gate_txt">服务区</span>
      <img src="./../../icon/close.png" class="closeButton" />
    </div>
    <van-row class="tabclse">
      <van-col span="12" @click="tabClserac(1)">
        <div class="active">由扬州往新沂</div>
        <div class="tabclse_bottom"></div>
      </van-col>
      <van-col span="12" @click="tabClserac(2)">
        <div class="{{act}}">由新沂往扬州</div>
        <div class="{{actv}}"></div>
      </van-col>
    </van-row>
    <div class="toll_centen">
      <div>
        <highwaySign msg="苏高速"/>
        <span class="toll_centen_right">
          <div>平潮北服务区</div>
          <div class="toll_centen_right_bottom">
            <span class="toll_centen_right_icon1" v-if="status == 1">开</span>
            <span class="toll_centen_right_icon2" v-else-if="status == 2">开</span>
            <span class="toll_centen_right_icon3" v-else-if="status == 3">关</span>
            <span class="toll_centen_right_cl9_1" v-if="cl9 == 1">疫情查验</span>
            <span class="toll_centen_right_cl9_2" v-else-if="cl9 == 2">疫情免检</span>
          </div>
        </span>
        <span class="toll_centen_r">
          <div><img class="video_base" src="../../icon/video.base.png" /></div>
          <div class="video_base_text">广场</div>
        </span>
      </div>

      <van-cell-group class="toll_centen_phone">
        <div class="toll_centen_phone_l">联系电话</div>
        <div class="toll_centen_phone_r">13939393939</div>
      </van-cell-group>

      <p class="serve_count">服务内容</p>
      <van-grid :column-num="5" class="grid_value" :border="false">
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve01.png" alt="" />
          <div class="serviocn_t">餐饮</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve02.png" alt="" />
          <div class="serviocn_t">24小时超市</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve03.png" alt="" />
          <div class="serviocn_t">充电桩</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve04.png" alt="" />
          <div class="serviocn_t">停车位</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve05.png" alt="" />
          <div class="serviocn_t">92汽油</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve06.png" alt="" />
          <div class="serviocn_t">98汽油</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve07.png" alt="" />
          <div class="serviocn_t">0号柴油</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h" src="../../icon/serve08.png" alt="" />
          <div class="serviocn_t">母婴室</div>
        </van-grid-item>
      </van-grid>

      <div>
        <span class="postion_l"><img class="postion_l_icon" src="../../icon/position.png" />20.55KM</span>
        <van-button class="postion_r" color="#2d7ce7" round size="small">路线</van-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import highwaySign from './../highway_sign.vue';
import { ref, onMounted } from 'vue';
let act = ref('active');
let actv = ref('tabclse_bottom');
const tabClserac = type => {
  //   if (type == 1) {
  //     act = ref('active');
  //     actv = ref('tabclse_bottom');
  //   } else {
  //   }
};
onMounted(() => {});
let status = ref('3');
let cl9 = ref('2');
</script>
<style lang="less" scoped>
.title_top {
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  height: 158px;
  background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  padding-left: 51px;
  padding-top: 38px;
  .tollimg {
    float: left;
    width: 52px;
    height: 52px;
  }
  .toll_gate_txt {
    float: left;
    margin-left: 10px;
    vertical-align: super;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  }
  .closeButton {
    float: right;
    width: 31.88px;
    height: 31.88px;
    margin-right: 50.56px;
  }
}
.tabclse {
  text-align: center;
  div {
    font-size: 44px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #333333;
  }
  div.active {
    font-size: 44px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 700;
    color: #333333;
  }
  .tabclse_bottom {
    margin: 0 auto;
    width: 74px;
    height: 12px;
    background: linear-gradient(#1a72f8 0%, #1ca7ff 100%);
    border-radius: 6px;
  }
}
.toll_centen {
  margin-top: 60px;
  height: calc(100% - 158px);
  background-color: #f9f9fa;

  .toll_centen_right {
    display: inline-block;
    width: calc(100% - 400px);
    vertical-align: text-top;
    div {
      margin-left: 43px;
      font-size: 60px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 56px;
    }
    .toll_centen_right_bottom {
      margin-top: 22px;
      .toll_centen_right_icon1 {
        display: inline-block;
        width: 50px;
        height: 50px;
        background: #2d7ce7;
        border-radius: 6px;
        color: #fff;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 56px;
        text-align: center;
        border-radius: 6px;
      }
      .toll_centen_right_icon2 {
        display: inline-block;
        width: 50px;
        height: 50px;
        background: #6eacff;
        border-radius: 6px;
        color: #fff;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 56px;
        text-align: center;
        border-radius: 6px;
      }
      .toll_centen_right_icon3 {
        display: inline-block;
        width: 50px;
        height: 50px;
        background: #ffffff;
        border-radius: 6px;
        color: #fff;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #2d7ce7;
        line-height: 56px;
        text-align: center;
        border-radius: 6px;
        border: 2px solid #2d7ce7;
      }
      .toll_centen_right_cl9_1 {
        margin-left: 16px;
        display: inline-block;
        width: 150px;
        height: 50px;
        background: #f19f11;
        border-radius: 6px;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 50px;
      }
      .toll_centen_right_cl9_2 {
        margin-left: 16px;
        display: inline-block;
        width: 150px;
        height: 50px;
        background: #ffffff;
        border: 2px solid #f19f11;
        border-radius: 6px;
        font-size: 30px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: center;
        color: #f19f11;
        line-height: 50px;
      }
    }
  }
  .toll_centen_r {
    display: inline-block;
    width: 150px;
    height: 120px;
    vertical-align: text-top;
    float: right;
    .video_base {
      margin-left: 5px;
      width: 55px;
      height: 66px;
    }
    .video_base_text {
      //  width: 69px;
      //  height: 34px;
      font-size: 36px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #666666;
      line-height: 56px;
    }
  }
  .toll_centen_t {
    padding: 0 51px 0 51px;
    .toll_centen_center {
      float: left;
      font-size: 42px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 100px;
    }
    .toll_centen_r {
      float: right;
      border-radius: 6px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      width: 150px;
      height: 50px;
    }
    .toll_centen_rclose {
      float: right;
      border-radius: 6px;
      background: #ffffff;
      border: 2px solid #2d7ce7;
      color: #2d7ce7;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      width: 150px;
      height: 50px;
    }
  }
  .postion_l {
    padding-left: 41px;
    vertical-align: -webkit-baseline-middle;
    width: 230px;
    height: 100px;
    font-size: 44px;
    font-family: Source Han Sans CN, Source Han Sans CN-Medium;
    font-weight: 500;
    text-align: left;
    color: #333333;
    line-height: 100px;
    .postion_l_icon {
      display: inline-block;
      width: 36px;
      height: 40px;
      margin-right: 5px;
    }
  }
  .postion_c {
    margin-left: 30px;
    width: 310px;
    height: 100px;
    font-size: 36px;
  }
  .postion_r {
    float: right;
    margin-right: 50px;
    width: 250px;
    height: 100px;
    background: #4287fe;
    border-radius: 50px;
    font-size: 36px;
  }
  .serve_count {
    width: 217px;
    height: 41px;
    font-size: 42px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    text-align: left;
    color: #333333;
    line-height: 100px;
    padding-left: 61px;
    margin-bottom: 55px;
  }
  .toll_centen_phone {
    height: 130px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 26px;
    box-shadow: 0px 5px 20px 0px rgba(59, 118, 239, 0.1);
    margin: 21px 21px 0 21px;
    .toll_centen_phone_l {
      height: 100%;
      font-size: 42px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 130px;
      float: left;
      padding-left: 40px;
    }
    .toll_centen_phone_r {
      height: 100%;
      font-size: 42px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: right;
      color: #2d7ce7;
      line-height: 130px;
      float: right;
      padding-right: 40px;
    }
  }
  .grid_value {
    height: 400px;
    margin-left: 52px;
    margin-right: 21px;
    .serviocn_h {
      width: 67px;
      height: 54px;
    }
    .serviocn_t {
      width: 150px;
      height: 40px;
      font-size: 20px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: center;
      color: #333333;
      line-height: 56px;
    }
  }
}
</style>