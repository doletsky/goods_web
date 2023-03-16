import { createRouter, createWebHistory } from 'vue-router'
import GoodsList from '../views/GoodsList.vue'
import GoodsCreate from '../views/GoodsCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: GoodsList
    },
    {
      path: '/new_item',
      name: 'create_item',
      component: GoodsCreate
    }
  ]
})

export default router
