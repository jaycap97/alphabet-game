import { createRouter, createWebHistory } from 'vue-router'
import Scoreboard from '@/views/home/Scoreboard.vue'
import Alphabet from '@/views/home/Alphabet.vue'
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
        path: 'alphabet',
        name: 'Alphabet',
        component: Alphabet,
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