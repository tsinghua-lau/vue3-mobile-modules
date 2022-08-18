import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path:'/',
    component:()=>import('./views/Home.vue'),
    meta:{
      title:'收费站'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
