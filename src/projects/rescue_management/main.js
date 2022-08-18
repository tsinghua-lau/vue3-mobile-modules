import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mitt from "mitt";

import 'amfe-flexible';
// import Vant from 'vant';

import 'vant/lib/index.css';
//按需引入
import 'vant/lib/button/style';
import 'vant/lib/cell/style';
import 'vant/lib/calendar/style';
import 'vant/lib/notify/style';
import 'vant/lib/overlay/style';
import {
  Button,
  Cell, 
  Calendar,
  Overlay,
} from 'vant';
// import { vant } from '../../vant.config'
let app = createApp(App)
// import '@/SvgIcon/index.js'

// import SvgIcon from '@/SvgIcon/index.vue'// svg组件

// app.component('svg-icon', SvgIcon)
app.config.globalProperties.$mybus = new mitt()

app.use(store).use(router).use(Overlay).use(Button).use(Cell).use(Calendar).mount('#app')