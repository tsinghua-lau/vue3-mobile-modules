import {
  createApp
} from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';
import mitt from "mitt";
import '../../styles/common.less';
// 导入vant包 和其相关样式
import {
  Button,
  Cell,
  Calendar,Search,
  Tabbar, TabbarItem, Field, CellGroup,Checkbox,Notify,Toast,Row,Icon,Tab, Tabs,Grid, GridItem,Col,Popup
} from 'vant';
import 'vant/lib/index.css';
import '@/SvgIcon/index.js';
import SvgIcon from '@/SvgIcon/index.vue';// svg组件
let app = createApp(App);
app.config.globalProperties.$mybus = new mitt();
app.component('svg-icon', SvgIcon);
app.use(store).use(router).use(Notify).use(Icon).use(Tab).use(Tabs).use(Grid).use(GridItem).use(Col)
.use(Cell).use(Calendar).use(Popup).use(Button).use(Tabbar).use(TabbarItem).use(Search)
.use(Field).use(CellGroup).use(Checkbox).use(Row).use(Toast)
.mount('#app')
