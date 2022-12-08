import { createStore } from 'vuex'
import users from './modules/users'
import { Store } from './modules/i_users'

const store = createStore(users)

export default store

export function useStore() {
  return store as Store;
}