import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('./views/chargeList/index.vue'),
    meta: {
      title: '费用列表',
    }
  },
  {
    path: '/billinfo',
    component: () => import('./views/billInfo'),
    meta: {
      title: '发票信息',
    }
  },
  {
    path: '/billdetails',
    component: () => import('./views/billDetails'),
    meta: {
      title: '发票详情',
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
