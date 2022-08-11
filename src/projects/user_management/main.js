import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'amfe-flexible'
// import 'vant/lib/index.css';
//按需引入
import 'vant/lib/button/style';
import 'vant/lib/popup/style';
import 'vant/lib/cell/style';
import {
    Popup,
    Button,
    Cell,
} from 'vant';
// import { vant } from '../../vant.config'
let app = createApp(App)
// vant(app)
import '@/SvgIcon/index.js'

import SvgIcon from '@/SvgIcon/index.vue'// svg组件

app.component('svg-icon', SvgIcon)


app.use(store).use(router).use(Popup).use(Button).use(Cell).mount('#app')