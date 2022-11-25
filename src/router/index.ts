import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/home/Dashboard.vue'
import Portal from '@/views/auth/Portal.vue'
import Layout from '@/layouts/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/portal',
    name: 'Portal',
    component: Portal
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router