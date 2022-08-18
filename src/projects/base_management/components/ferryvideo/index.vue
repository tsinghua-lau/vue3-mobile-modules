<template>
  <div>
    <div class="title_top_fv">
      <img class="tollimg" src="./../../icon/princi_10.png" />
      <span class="toll_gate_txt">南京S204绕越高速出入口</span>
      <img src="./../../icon/close.png" class="closeButton" />
    </div>
    <div class="fv_video_box">
      <video src="./">视频正在加载中</video>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title_top_fv {
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
    font-size: 40px;
    font-family: Source Han Sans CN, Source Han Sans CN-Regular;
    font-weight: 400;
    color: #333333;
  }
  .closeButton {
    float: right;
    width: 31.88px;
    height: 31.88px;
    margin-right: 50.56px;
  }
}
.fv_video_box {
  margin: 0px 50px 0 51px;
  height: 340px;
  video {
    width: 100%;
    height: 100%;
  }
}
</style>