import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobDetailView from '../views/JobDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      component: HomeView
    },
    {
      path: '/:id',
      component: JobDetailView
    }]
})

export default router
