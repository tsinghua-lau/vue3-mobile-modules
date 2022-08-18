<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  // min-width: 1200px;
}
@media screen and (max-width: 500px) {
  .el-message {
    min-width: 300px !important;
  }
}
@media screen and (max-width: 500px) {
  .el-message-box {
    width: 300px !important;
  }
}

@media screen and (max-width: 500px) {
  .el-dialog__wrapper .el-dialog {
    width: 300px !important;
    .el-dialog__body {
      padding: 10px 20px !important;
      .el-form-item__label {
        width: 68px !important;
      }
      .el-select,
      .el-input {
        width: 180px !important;
      }
    }
  }
}
</style>
