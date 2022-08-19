.<template>
  <div style="height: 100%">
    <div class="title_top">
      <img class="tollimg"
           src="./../../icon/serveicon.png" />
      <span class="toll_gate_txt">服务区</span>
      <img src="./../../icon/close.png"
           @click="closePubopser"
           class="closeButton" />
    </div>
    <van-row class="tabclse">
      <van-col span="12"
               @click="tabClserac(1)">
        <div class="active">由扬州往新沂</div>
        <div class="tabclse_bottom"></div>
      </van-col>
      <van-col span="12"
               @click="tabClserac(2)">
        <div class="{{act}}">由新沂往扬州</div>
        <div class="{{actv}}"></div>
      </van-col>
    </van-row>
    <div class="toll_centen">
      <div>
        <highwaySign msg="苏高速" />
        <span class="toll_centen_right">
          <div>平潮北服务区</div>
          <div class="toll_centen_right_bottom">
            <span class="toll_centen_right_icon1"
                  v-if="status == 1">开</span>
            <span class="toll_centen_right_icon2"
                  v-else-if="status == 2">开</span>
            <span class="toll_centen_right_icon3"
                  v-else-if="status == 3">关</span>
            <span class="toll_centen_right_cl9_1"
                  v-if="cl9 == 1">疫情查验</span>
            <span class="toll_centen_right_cl9_2"
                  v-else-if="cl9 == 2">疫情免检</span>
          </div>
        </span>
        <span class="toll_centen_r">
          <div><img class="video_base"
                 src="../../icon/video.base.png" /></div>
          <div class="video_base_text">广场</div>
        </span>
      </div>

      <van-cell-group class="toll_centen_phone">
        <div class="toll_centen_phone_l">联系电话</div>
        <div class="toll_centen_phone_r">13939393939</div>
      </van-cell-group>

      <p class="serve_count">服务内容</p>
      <van-grid :column-num="5"
                class="grid_value"
                :border="false">
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve01.png"
               alt="" />
          <div class="serviocn_t">餐饮</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve02.png"
               alt="" />
          <div class="serviocn_t">24小时超市</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve03.png"
               alt="" />
          <div class="serviocn_t">充电桩</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve04.png"
               alt="" />
          <div class="serviocn_t">停车位</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve05.png"
               alt="" />
          <div class="serviocn_t">92汽油</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve06.png"
               alt="" />
          <div class="serviocn_t">98汽油</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve07.png"
               alt="" />
          <div class="serviocn_t">0号柴油</div>
        </van-grid-item>
        <van-grid-item>
          <img class="serviocn_h"
               src="../../icon/serve08.png"
               alt="" />
          <div class="serviocn_t">母婴室</div>
        </van-grid-item>
      </van-grid>

      <div>
        <span class="postion_l"><img class="postion_l_icon"
               src="../../icon/position.png" />20.55KM</span>
        <van-button class="postion_r"
                    color="#2d7ce7"
                    round
                    size="small">路线</van-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import highwaySign from './../highway_sign.vue';
import { ref, onMounted } from 'vue';
let act = ref('active');
let actv = ref('tabclse_bottom');
const emit = defineEmits(['closeAdd']);
const tabClserac = type => {
  //   if (type == 1) {
  //     act = ref('active');
  //     actv = ref('tabclse_bottom');
  //   } else {
  //   }
};
const closePubopser = () => {
  emit('closePubopser', false);
};
onMounted(() => {});
let status = ref('3');
let cl9 = ref('2');
</script>
<style lang="less" scoped>
.title_top {
  box-sizing: border-box;
  position: relative;
  padding: 8px;
  height: 64px;
  background: linear-gradient(to bottom, #eaf0fa 0%, #fff 100%);
  padding-left: 20px;
  padding-top: 16px;
  .tollimg {
    float: left;
    width: 21px;
    height: 21px;
  }
  .toll_gate_txt {
    font-size: 16px;
    float: left;
    margin-left: 4px;
    vertical-align: super;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  }
  .closeButton {
    float: right;
    width: 12px;
    height: 12px;
    margin-right: 20px;
  }
}
.tabclse {
  text-align: center;
  div {
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #333333;
  }
  div.active {
    font-size: 18px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 700;
    color: #333333;
  }
  .tabclse_bottom {
    margin: 0 auto;
    width: 29px;
    height: 5px;
    background: linear-gradient(#1a72f8 0%, #1ca7ff 100%);
    border-radius: 3px;
  }
}
.toll_centen {
  margin-top: 12px;
  // height: calc(100% - 64px);
  background-color: #f9f9fa;

  .toll_centen_right {
    display: inline-block;
    width: calc(100% - 160px);
    vertical-align: bottom;
    div {
      margin-left: 16px;
      font-size: 18px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 24px;
    }
    .toll_centen_right_bottom {
      margin-top: 8px;
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
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
      }
      .toll_centen_right_icon2 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #6eacff;
        border-radius: 3px;
        color: #fff;
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 20px;
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
        font-size: 16px;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        text-align: left;
        color: #2d7ce7;
        line-height: 20px;
        text-align: center;
        border-radius: 3px;
        border: 2px solid #2d7ce7;
      }
      .toll_centen_right_cl9_1 {
        margin-left: 8px;
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
        margin-left: 8px;
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
  .toll_centen_r {
    display: inline-block;
    width: 60px;
    height: 60px;
    margin-top: 20px;
    float: right;
    .video_base {
      margin-left: 4px;
      width: 22px;
      height: 26px;
    }
    .video_base_text {
      //  width: 69px;
      //  height: 34px;
      font-size: 14px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #666666;
      line-height: 22px;
    }
  }
  .toll_centen_t {
    padding: 0 20px 0 20px;
    .toll_centen_center {
      float: left;
      font-size: 16px;
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
      width: 60px;
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
      width: 60px;
      height: 60px;
    }
  }
  .postion_l {
    padding-left: 16px;
    vertical-align: -webkit-baseline-middle;
    width: 96px;
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
    margin-left: 12px;
    width: 124px;
    height: 40px;
    font-size: 14px;
  }
  .postion_r {
    float: right;
    margin-right: 20px;
    width: 100px;
    height: 40px;
    background: #4287fe;
    border-radius: 20px;
    font-size: 14px;
  }
  .serve_count {
    width: 86px;
    height: 16px;
    font-size: 16px;
    font-family: Source Han Sans CN, Source Han Sans CN-Bold;
    font-weight: 700;
    text-align: left;
    color: #333333;
    line-height: 40px;
    padding-left: 24px;
    margin-bottom: 21px;
  }
  .toll_centen_phone {
    height: 52px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 9px;
    box-shadow: 0px 3px 8px 0px rgba(59, 118, 239, 0.1);
    margin: 8px 8px 0 8px;
    .toll_centen_phone_l {
      height: 100%;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: left;
      color: #333333;
      line-height: 52px;
      float: left;
      padding-left: 16px;
    }
    .toll_centen_phone_r {
      height: 100%;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: right;
      color: #2d7ce7;
      line-height: 52px;
      float: right;
      padding-right: 16px;
    }
  }
  .grid_value {
    height: 160px;
    .serviocn_h {
      width: 24px;
      height: 20px;
    }
    .serviocn_t {
      width: 58px;
      height: 16px;
      font-size: 10px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
      text-align: center;
      color: #333333;
      line-height: 22px;
    }
  }
}
</style>