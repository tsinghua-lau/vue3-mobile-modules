<template>
  <div id="app">
     <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    <js-map />
    <layout id="footer" />
  </div>
</template>
<script setup>
import { onMounted, getCurrentInstance } from 'vue';
('vue');
import { Toast } from 'vant';
import layout from './components/layout/index.vue';
import JsMap from './components/JsMap/index.vue';
const { proxy } = getCurrentInstance();

onMounted(() => {
  let code = proxy.$getUrlCode('code');
  if (!code) {
    Toast('code异常');
  }
  if (proxy.$isWx()) {
    Toast('微信浏览器');
  } else {
    Toast('非微信浏览器');
  }

  //判断是否是苹果--苹果底部横杠
  var u = navigator.userAgent,
    app = navigator.appVersion;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    console.log('安卓');
  }
  if (isIOS && proxy.$isWx()) {
    document.getElementById('footer').style.padding = '0 0 10px 0';
    console.log('苹果');
  }
});
</script>
<style lang="less" scoped>
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
}
#footer {
  position: fixed;
  height: 70px;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
