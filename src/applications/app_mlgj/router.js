import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    // component: () => import('../../projects/user_management/views/login/index.vue'),
    // component: () => import('./components/JsMap/index.vue'),
    component: () => import('../../projects/user_management/views/test.vue'),
    meta: {
      title: '登录',
    }
  },
  {
    path: '/appointment',
    component: () => import('@user/views/MapAppointment/index.vue'),
    meta: {
      title: '路线预约',
    }
  },
  {
    path: '/rescue',
    name: 'Rescue',
    component: () => import('../../projects/rescue_management/views/Home.vue'),
    meta: {
      title: '救援服务',
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
