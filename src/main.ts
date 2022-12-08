import App from './App.vue'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { auth } from '@/fb'
import { onAuthStateChanged } from "firebase/auth";


let app:any
onAuthStateChanged(auth, () => {
  if(!app) {
    app = createApp(App)
    registerPlugins(app)
    auth.onAuthStateChanged
    app.use(router).use(store).mount('#app')
  }
})