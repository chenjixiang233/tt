import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/moundel/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/moundel/About.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/moundel/News.vue')
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('../views/moundel/System.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
