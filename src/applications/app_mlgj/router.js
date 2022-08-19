import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
const routes = [{
    path: '/',
    redirect: '/base',
    meta: {
      title: '高速地图',
    },
    children: [{
      path: 'base',
      name: 'Base',
      component: () => import('../../projects/base_management/views/Home.vue'),
      meta: {
        title: '高速地图',
      }
    }]
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
  {
    path: '/base',
    name: 'Base',
    component: () => import('../../projects/base_management/views/Home.vue'),
    meta: {
      title: '基础服务',
    },
  },
  {
    path: '/Chargingstandard',
    name: 'Chargingstandard',
    component: () => import('../../projects/rescue_management/views/notice/Chargingstandard.vue'),
    meta: {
      title: '救援费用',
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router