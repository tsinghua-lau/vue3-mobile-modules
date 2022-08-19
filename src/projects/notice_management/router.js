import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details',
        name: 'details',
        component: () => import('./views/Details.vue'),
        meta: {
            title: '公告详情',
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
