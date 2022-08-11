import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/common.css';

Vue.config.productionTip = false;
// 导入vant包 和其相关样式
import Vant from 'vant';
import 'vant/lib/index.css';

// 将 vant 组件库安装到 Vue 上
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
