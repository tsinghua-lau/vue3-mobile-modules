import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./views/login/index.vue'),
        meta: {
            title: '登录',
        }
    },
    {
        path: '/user',
        component: () => import('./views/user/index.vue'),
        meta: {
            title: '个人中心',
        }
    },
    // {
    //   path: '/map',
    //   component: () => import('./views/map/index'),
    //   meta: {
    //     title: '高速地图',
    //   }
    // },
    {
        path: '/appointment',
        component: () => import('./views/appointment/index'),
        meta: {
            title: '路况预约',
        }
    },
    {
        path: '/information',
        component: () => import('./views/information/index'),
        meta: {
            title: '个人资料',
        }
    },
    // {
    //   path: '/rescue',
    //   component: () => import('./views/rescue/index'),
    //   meta: {
    //     title: '路线救援',
    //   }
    // },
    // {
    //   path: '/route',
    //   component: () => import('./views/route/index'),
    //   meta: {
    //     title: '驾车路线',
    //   }
    // },
    // {
    //   path: '/around',
    //   component: () => import('./views/around/index'),
    //   meta: {
    //     title: '周边生活',
    //   }
    // },

    {
        path: '/vehicleOwnerInfo',
        name: 'vehicleOwnerInfo',
        component: () => import('./views/vehicleOwnerInfo/index'),
        meta: {
            title: '车主信息',
        }
    },
    {
        path: '/addVehicle',
        name: 'addVehicle',
        component: () => import('./views/addVehicle/index'),
        meta: {
            title: '添加车辆',
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
