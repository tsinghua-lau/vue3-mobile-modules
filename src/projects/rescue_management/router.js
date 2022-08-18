import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Chargingstandard from './views/notice/Chargingstandard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chargingstandard',
    name: 'Chargingstandard',
    component: Chargingstandard
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
