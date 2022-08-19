import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('./views/chargeList/index.vue'),
    meta: {
      title: '费用列表',
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
