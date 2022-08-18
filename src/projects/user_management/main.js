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
import 'vant/lib/popup/style';
import 'vant/lib/cell/style';
import 'vant/lib/calendar/style';
import 'vant/lib/notify/style';
import {
    Popup,
    Button,
    Cell,
    Calendar,
    Tabbar, TabbarItem, Field, CellGroup,Checkbox,Notify,Toast,Tab, Tabs,Picker,DatetimePicker,
} from 'vant';
// import { vant } from '../../vant.config'
let app = createApp(App)
import '@/SvgIcon/index.js'

import SvgIcon from '@/SvgIcon/index.vue'// svg组件

app.component('svg-icon', SvgIcon)
app.config.globalProperties.$mybus = new mitt()

import {getTime} from '@/utils/publicFunctions.js'
app.config.globalProperties.$getTime = getTime

app.use(store).use(router).use(Popup).use(Button).use(Notify)
.use(Cell).use(Calendar).use(Tabbar).use(TabbarItem)
.use(Field).use(CellGroup).use(Checkbox).use(Toast).use(Tab).use(Tabs).use(Picker)
.mount('#app')