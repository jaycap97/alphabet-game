import { createRouter, createWebHistory } from 'vue-router'
import Scoreboard from '@/views/home/Scoreboard.vue'
import Ascending from '@/views/home/Ascending.vue'
import Descending from '@/views/home/Descending.vue'
import Portal from '@/views/auth/Portal.vue'
import Layout from '@/layouts/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'scoreboard',
        name: 'Scoreboard',
        component: Scoreboard,
      },
      {
        path: 'ascending',
        name: 'Ascending',
        component: Ascending,
      },
      {
        path: 'descending',
        name: 'Descending',
        component: Descending,
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