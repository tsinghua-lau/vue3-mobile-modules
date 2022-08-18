<template>
  <div class="box">
    <div class="bg">
      <div class="portrait">
        <img src="../../images/user.png" alt="" />
      </div>
      <div class="name">
        茉莉高速用户
        <span class="man"> <img src="../../images/man.png" alt="" /></span>
        <!-- <span class="woman"><img src="../../images/woman.png" alt=""></span> -->
      </div>
    </div>
    <div class="user-info">
      <div class="item">
        <div class="logo">
          <img src="../../images/mine.png" alt="" />
        </div>
        <div class="label">车主信息</div>
        <div class="right">
          <img src="../../images/right.png" alt="" />
        </div>
      </div>
      <div class="item" @click="goUrl('appointment')">
        <div class="logo">
          <img src="../../images/appointment.png" alt="" />
        </div>
        <div class="label">关注预约</div>
        <div class="right">
          <img src="../../images/right.png" alt="" />
        </div>
      </div>
      <div class="item">
        <div class="logo">
          <img src="../../images/cost.png" alt="" />
        </div>
        <div class="label">费用开票</div>
        <div class="right">
          <img src="../../images/right.png" alt="" />
        </div>
      </div>

      <div class="item-group">
        <div class="items">
          <div class="logo">
            <img src="../../images/serve.png" alt="" />
          </div>
          <div class="label">在线客服</div>
          <div class="right">
            <img src="../../images/right.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="logo">
            <img src="../../images/business.png" alt="" />
          </div>
          <div class="label">业务受理</div>
          <div class="right">
            <img src="../../images/right.png" alt="" />
          </div>
        </div>
        <div class="items">
          <div class="logo">
            <img src="../../images/phone.png" alt="" />
          </div>
          <div class="label">客服电话</div>
          <div class="right">
            <img src="../../images/right.png" alt="" />
          </div>
        </div>
      </div>

      <div class="item">
        <div class="logo">
          <img src="../../images/notice.png" alt="" />
        </div>
        <div class="label">通知公告</div>
        <div class="right">
          <img src="../../images/right.png" alt="" />
        </div>
      </div>

      <div class="exit">退出登录</div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import {getCurrentInstance} from 'vue'
const { proxy, ctx } = getCurrentInstance();
const route = useRoute();
const router = useRouter();
const goUrl = url => {
   router.push({
        path: '/'+url
      });
};
</script>
<style lang="less" scoped>
@font-face {
  font-family: 'SourceHanSansCN';
  src: url('../../../../assets/fonts/SourceHanSansCN-Bold.otf');
  font-style: normal;
}
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .bg {
    width: 100%;
    height: 126px;
    background: url('../../images/map-bg.png');
    background-size: cover;
    position: relative;
    .portrait {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 20px;
      top: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      font-size: 15px;
      position: absolute;
      left: 100px;

      top: 56px;
      font-weight: 600;
      .man {
        display: inline-block;
        width: 13px;
        height: 13px;
        position: absolute;
        top: 4px;
        right: -17px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .user-info {
    background: #f6f7f8;
    width: 100%;
    position: absolute;
    z-index: 9999;

    height: calc(100vh - 130px);

    .item {
      width: 90%;
      margin-left: 5%;
      box-sizing: border-box;
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      background: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      margin-top: 10px;
      .logo {
        float: left;
        width: 16px;
        height: 18px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .label {
        float: left;
        font-size: 15px;
        margin-left: 20px;
        padding-top: 2px;
        font-family: 'SourceHanSansCN';
      }
      .right {
        width: 12px;
        height: 18px;
        float: right;
        margin-top: -3px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .item-group {
      width: 90%;
      margin-left: 5%;
      box-sizing: border-box;
      padding: 0 10px;

      background: #fff;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      margin-top: 10px;
      height: 187px;
      .items {
        width: 100%;
        box-sizing: border-box;
        //   padding: 0 10px;
        height: 50px;
        line-height: 50px;
        margin-top: 10px;
        .logo {
          float: left;
          width: 16px;
          height: 18px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .label {
          float: left;
          font-size: 15px;
          margin-left: 20px;
          padding-top: 2px;
          font-family: 'SourceHanSansCN';
        }
        .right {
          width: 12px;
          height: 18px;
          float: right;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .exit {
    width: 80%;
    height: 48px;
    margin-left: 10%;
    line-height: 48px;
    text-align: center;
    color: #fff;
    margin-top: 30px;
    font-size: 15px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background: #83b1ff;
  }
}
</style>
