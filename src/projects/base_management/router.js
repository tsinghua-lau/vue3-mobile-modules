import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path:'/',
    component:()=>import('./views/Home.vue'),
    meta:{
      title:'主页'
    }
  },
  {
    path: '/tollgate',
    component: () => import('./components/tollGate/toll_gate.vue'),
    meta: {
      title: '收费站',
    }
  },
  {
    path: '/serve',
    component: () => import('./components/serve/index.vue'),
    meta: {
      title: '服务区',
    }
  },
  {
    path: '/motorwaycops',
    component: () => import('./components/motorway_cops/index.vue'),
    meta: {
      title: '高速交警',
    }
  },
  {
    path: '/handledquickly',
    component: () => import('./components/handledquickly/index.vue'),
    meta: {
      title: '事故快处点',
    }
  },
  {
    path: '/ferry',
    component: () => import('./components/Ferry/index.vue'),
    meta: {
      title: '汽渡',
    }
  },
  {
    path: '/trafficcontrol',
    component: () => import('./components/trafficcontrol/index.vue'),
    meta: {
      title: '管制',
    }
  },
  {
    path: '/epidemicprevention',
    component: () => import('./components/epidemicprevention/index.vue'),
    meta: {
      title: '防疫点',
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router