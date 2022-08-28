import { createApp, reactive } from 'vue';

import myLoad from './loading.vue';

const msg = reactive({
  show: false,
  title: '拼命加载中...',
});

const $loading = createApp(myLoad, { msg }).mount(document.createElement('div'));
// console.log($loading);
const loading = {
  show(title) {
    // 控制显示loading的方法
    msg.show = true;
    msg.title = title;
    document.body.appendChild($loading.$el);
  },

  hide() {
    // 控制loading隐藏的方法
    setTimeout(() => {
      msg.show = false;
    }, 500);
  },
};
export default loading;
