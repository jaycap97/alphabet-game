import { createRouter, createWebHistory } from 'vue-router'
import Scoreboard from '@/views/home/Scoreboard.vue'
import Ascending from '@/views/home/Ascending.vue'
import Descending from '@/views/home/Descending.vue'
import Portal from '@/views/auth/Portal.vue'
import Layout from '@/layouts/Layout.vue'
import { useStore } from '@/store'
import { nextTick } from 'process'

const store = useStore()
const routes = [
  {
    path: '/',
    redirect: '/scoreboard',
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

router.beforeEach(async (to, from, next) => {
  if (store.state.room === '' && to.name !== 'Portal') {
    next({ name: 'Portal' })
  } else if (store.state.room !== '' && to.name === 'Portal') {
    next({ name: 'Scoreboard' })
  } else {
    next()
  }
})

export default router