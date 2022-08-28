import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../../styles/common.less';
import mitt from "mitt";
import * as echarts from 'echarts'

import 'amfe-flexible';
// import Vant from 'vant';

import 'vant/lib/index.css';
//按需引入
import 'vant/lib/button/style';
import 'vant/lib/popup/style';
import 'vant/lib/cell/style';
import 'vant/lib/calendar/style';
import 'vant/lib/notify/style';
import 'vant/lib/overlay/style';
import {
    Row,Icon,Col,
    Popup,
    Button,
    Cell,
    Calendar,
    Overlay,Search,
    Tabbar, TabbarItem, Field, CellGroup,Checkbox,Notify,Toast,Tab, Tabs,Picker,DatetimePicker,Grid,GridItem
} from 'vant';
// import { vant } from '../../vant.config'
let app = createApp(App)
import '@/SvgIcon/index.js'

import SvgIcon from '@/SvgIcon/index.vue'// svg组件

app.component('svg-icon', SvgIcon)
app.config.globalProperties.$mybus = new mitt()
app.config.globalProperties.$echarts = echarts

import {getTime,getUrlCode,isWx} from '@/utils/publicFunctions.js'
app.config.globalProperties.$getTime = getTime
app.config.globalProperties.$getUrlCode = getUrlCode
app.config.globalProperties.$isWx = isWx

app.use(store).use(router).use(Popup).use(Overlay).use(Button).use(Notify).use(Row).use(Icon).use(Search)
.use(Cell).use(Calendar).use(Tabbar).use(TabbarItem).use(Grid).use(GridItem).use(Search).use(Col)
.use(Field).use(CellGroup).use(Checkbox).use(Toast).use(Tab).use(Tabs).use(Picker).use(DatetimePicker)
.mount('#app')