import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: 'Card' */ './view/index.vue'),
      },
  ],
})

export default router