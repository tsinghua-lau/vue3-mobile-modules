import {
  createApp
} from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible';
import * as echarts from "echarts";

import mitt from "mitt";
import '../../styles/common.less';
import 'amfe-flexible';
// 导入vant包 和其相关样式
import {
  Row,Icon,Col,
  Popup,
  Button,
  Cell,
  Calendar,Search,
  Tabbar, TabbarItem, Field, CellGroup,Checkbox,Notify,Toast,Tab, Tabs,Grid, GridItem
} from 'vant';
import 'vant/lib/index.css';
import '@/SvgIcon/index.js';
import SvgIcon from '@/SvgIcon/index.vue';// svg组件
let app = createApp(App);
app.config.globalProperties.$mybus = new mitt();
app.component('svg-icon', SvgIcon);

app.config.globalProperties.$echarts = echarts
app.use(store).use(router).use(Notify).use(Icon).use(Tab).use(Tabs).use(Grid).use(GridItem).use(Col)
.use(Cell).use(Calendar).use(Popup).use(Button).use(Tabbar).use(TabbarItem).use(Search)
.use(Field).use(CellGroup).use(Checkbox).use(Row).use(Toast)
.mount('#app')
