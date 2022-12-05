import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { auth } from '@/fb'

let app:any
auth.onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App)
    registerPlugins(app)
    auth.onAuthStateChanged
    app.use(router).mount('#app')
  }
})