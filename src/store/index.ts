import { createStore } from 'vuex'
import scores from './modules/scores'

const store = createStore({
  modules: {
    scores
  }
})

export default store