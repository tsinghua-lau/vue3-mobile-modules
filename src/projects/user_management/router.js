import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/user',
    component: () => import('./views/user/index.vue'),
    meta: {
      title: '个人中心',
    },
  },
  {
    path: '/bill',
    component: () => import('../bill_management/views/chargeList/index.vue'),
    meta: {
      title: '费用列表',
    },
  },
  {
    path: '/billinfo',
    component: () => import('../bill_management/views/billInfo/index.vue'),
    meta: {
      title: '填写发票信息',
    },
  },
  {
    path: '/billdetails',
    component: () => import('../bill_management/views/billDetails/index.vue'),
    meta: {
      title: '发票PDF',
    },
  },
  {
    path: '/notice',
    name: 'Home',
    component: () => import('../notice_management/views/Home.vue'),
    meta: {
      title: '公告列表',
    },
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../notice_management/views/Details.vue'),
    meta: {
      title: '公告详情',
    },
  },
  {
    path: '/appointment',
    component: () => import('./views/appointment/index'),
    meta: {
      title: '路况预约',
    },
  },
  {
    path: '/information',
    component: () => import('./views/information/index'),
    meta: {
      title: '个人资料',
    },
  },
  {
    path: '/vehicleOwnerInfo',
    name: 'vehicleOwnerInfo',
    component: () => import('./views/vehicleOwnerInfo/index'),
    meta: {
      title: '车主信息',
    },
  },
  {
    path: '/addVehicle',
    name: 'addVehicle',
    component: () => import('./views/addVehicle/index'),
    meta: {
      title: '添加车辆',
    },
  },
  {
    path: '/access',
    name: 'access',
    component: () => import('@/components/IsPopUp.vue'),
    meta: {
      title: '关注公众号',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 全局前置路由守卫
 */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
//   if (to.path == '/' && from.path == '/') {
//     //权限判断
//     // next('/access');
//   } else {
//     next();
//   }
});

export default router;
