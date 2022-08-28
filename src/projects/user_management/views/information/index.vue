<template>
  <div class="box">
    <div class="item">
      <div class="l" @click="aaa">头像</div>
      <div class="r">
        <img style="border-radius: 50%" :src="state.userLogo" alt="" />
      </div>
    </div>
    <div class="item" @click="showPopup(1)">
      <div class="l">昵称</div>
      <div class="r">
        {{ state.nickname }}
        <span>
          <img src="../../images/right.png" alt="" srcset="" />
        </span>
      </div>
    </div>
    <div class="item" @click="showGender">
      <div class="l">性别</div>
      <div class="r">
        {{ state.gender }}
        <span>
          <img src="../../images/right.png" alt="" srcset="" />
        </span>
      </div>
    </div>

    <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }" @click-overlay="confrimName">
      <div class="popup-box">
        <div class="text">输入昵称</div>
        <div class="input">
          <van-field v-model="state.tempname" input-align="center" placeholder="请输入用户名" />
        </div>
        <div class="border"></div>
        <div class="cancle" @click="showPopup(0)">取消</div>
      </div>
    </van-popup>
    <van-popup v-model:show="showSelect" @click-overlay="confrimNameGender" position="bottom">
      <div class="popup-box">
        <div class="text">选择性别</div>
        <div class="picker-w">
          <van-picker :visible-item-count="2" :show-toolbar="false" @change.native="onChange" @confirm="closeSelect(1)" @cancel="closeSelect" :columns="columns" :default-index="0" />
        </div>
        <div class="border"></div>
        <div class="cancle" @click="">取消</div>
      </div>
    </van-popup>
  </div>
</template>
<script setup>
const columns = ['男性', '女性'];
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
import { Popup, Picker, Toast } from 'vant';
import wx from 'weixin-js-sdk';

import { saveUserInfo, getLocalUserInfo, getWxConfig, getImgUrl, uploadImg } from '../../api/login/index';

const { proxy } = getCurrentInstance();

let state = reactive({
  nickname: '三毛', //昵称
  gender: '男性', //性别
  tempgenter: '男性',
  tempname: '三毛',
  userLogo: '',
});

onMounted(() => {
  //获取用户信息
  getLocalUserInfo({ mobile: window.g.mobile||'加密' }).then(res => {
    debugger;
    console.log(res);
    if (res && res.code == 200) {
      state.gender = res.data.sex == '0' ? '男性' : '女性';
      state.nickname = res.data.nickName;
      state.tempname = res.data.nickName;
      state.userLogo = res.data.hpPath || window.g.headimgurl;
    } else {
      state.nickname = window.g.nickname;
      state.gender = window.g.gender;
      state.tempname = window.g.nickname;
      state.userLogo = window.g.headimgurl;
    }
  });

  initConfig();
});

const show = ref(false);
const showSelect = ref(false);
const value = ref('');
const showPopup = isShow => {
  if (isShow === 1) {
    show.value = true;
  } else {
    show.value = false;
  }
};

//初始化微信方法
const initConfig = () => {
  let url = window.location.href.split('#')[0];
  getWxConfig(url).then(res => {
    if (res && res.code === 200) {
      let info = res.data || {};

      wx.config({
        debug: false,
        appId: info.appId,
        timestamp: info.timestamp,
        nonceStr: info.nonce,
        signature: info.signature,
        jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'downloadImage'],
      });
    }
  });
};

const aaa = () => {
  setTimeout(() => {
    uploadBtnChange(0);
  }, 500);
};

const handleUpload = (localIds, index) => {
  let i = 0;
  let length = localIds.length;
  console.log('localIds[i]==>', localIds[i]);

  //获取图片预览地址
  const getPreviewImageUrl = path => {
    getImgUrl({ ossPath: path }).then(res => {
      if (res && res.code === 200) {
        console.log('getImgUrl==>', res);
        state.userLogo = res.detail;
      }
    });
  };

  const upload = () => {
    wx.uploadImage({
      localId: localIds[i],
      success: res => {
        uploadImg({
          // id: res.serverId
          id: ['7lwQbHhXR95yicTJtBWak-STkb73l6Zh4HLOGcT6U9HnuSK9qy76_VmqNWq7GemZ'][index],
        }).then(res => {
          console.log('uploadImg==>', res);
          if (res && res.code === 200) {
            getPreviewImageUrl(res.detail);
         saveUserInfo({ account: window.g.mobile||'加密', hpPath: res.detail }).then(res => {
          if (res && res.code == 200) {
            Toast('头像上传成功');
          } else {
            Toast('头像上传失败');
          }
        });
            // data.ossPathList[index] = res.detail;
          }
        });
      },
      fail: error => {},
    });
  };
  upload();
};

/**
 * 上传图片
 * @param index 图片下标
 */
const uploadBtnChange = index => {
  wx.ready(function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        // _this.handleUpload(localIds,key)
        console.log('chooseImage==>', res);
        handleUpload(localIds, index);
      },
      fail: error => {},
    });
  });
};

const showGender = () => {
  showSelect.value = true;
};
const closeSelect = type => {
  if (type && type == 1) {
    state.gender = state.gender == state.tempgenter ? state.gender : state.tempgenter;
    //  proxy.$mybus.emit('updataUser',{gender: state.gender})
    window.g.gender = state.gender;
  }
  showSelect.value = false;
};
const onChange = (value, index) => {
  state.tempgenter = value;
  //  proxy.$mybus.emit('updataUser',{gender: state.gender})
  window.g.gender = state.gender;

  console.log(value);
};

const confrimName = () => {
  if (state.tempname.replace(/^\s*/, '') == '') {
    Toast('非法用户名');
    return;
  }
  if (state.tempname !== state.nickname) {
    state.nickname = state.tempname;
    // proxy.$mybus.emit('updataUser',{nickname: state.nickname})
    window.g.nickname = state.nickname;
    saveUserInfo({ account: window.g.mobile||'加密', nickName: state.nickname }).then(res => {
      if (res && res.code == 200) {
        Toast('修改成功');
      } else {
        Toast('修改失败');
      }
    });
  }
};

const confrimNameGender = () => {
  if (state.tempgenter !== state.gender) {
    state.gender = state.tempgenter;
    window.g.gender = state.gender;
    saveUserInfo({ account: window.g.mobile||'加密', sex: state.gender == '男性' ? '0' : '1' }).then(res => {
      if (res && res.code == 200) {
        Toast('修改成功');
      } else {
        Toast('修改失败');
      }
    });
  }
};
</script>
<style lang="less" scoped>
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
  overflow: hidden;
  .item {
    font-family: 'SourceHanSansCN';
    font-size: 15px;
    width: 96%;
    height: 45px;
    line-height: 45px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 2%;
    margin-top: 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    .l {
    }
    .r {
      img {
        width: 40px;
      }
      span {
        display: inline-block;
        width: 11px;
        height: 16px;
        vertical-align: sub;
        margin-left: 10px;
        img {
          width: 100%;
          height: 100%;
          margin-bottom: 2px;
        }
      }
    }
  }
}
.popup-box {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  .picker-w {
    width: 100%;
    height: 187px;
  }
  .text {
    color: #b4b4b4;
    text-align: center;
    font-size: 17px;
    margin-top: 30px;
  }
  .input {
    width: 50%;
    margin-left: 25%;
    margin-top: 20px;
  }
  .border {
    width: 40%;
    height: 2px;
    background: #e3e4e5;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .cancle {
    width: 100%;
    position: absolute;
    bottom: 10px;
    padding-top: 10px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border-top: 2px solid #f6f7f8;
  }
}
</style>
