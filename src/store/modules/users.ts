import { ActionTree, MutationTree } from 'vuex'
import { db } from '@/fb'
import { doc, setDoc, onSnapshot, collection, where, query, updateDoc } from 'firebase/firestore'
import { Actions, ActionTypes, Mutations, MutationTypes, State, Unsubscribe } from './i_users'

const state: State = {
  uid: '',
  name: '',
  room: '',
  az: [],
  za: [],
  users: [],
  is_current_active: false,
  is_list_active: false,
  current_unsubscribe: () => null,
  list_unsubscribe: () => null
}

const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.LISTEN_CURRENT]({ state, commit }){
    try {
      if(!state.is_current_active){
        commit(MutationTypes.SET_CURRENT_UNSUBSCRIBE,
          onSnapshot(
            doc(db, 'users', state.uid),
            { includeMetadataChanges: true },
            async (user) => {
              if (!user.data()) {
                await setDoc(doc(db, 'users', state.uid), {
                  uid: state.uid,
                  name: '',
                  room: '',
                  az: [],
                  za: [],
                })
              } else {
                commit(MutationTypes.SET_NAME, user.data()!.name)
                commit(MutationTypes.SET_ROOM, user.data()!.room)
                commit(MutationTypes.SET_AZ, user.data()!.az)
                commit(MutationTypes.SET_ZA, user.data()!.za)
              }
            }
          )
        )
      }
      commit(MutationTypes.SET_IS_CURRENT_ACTIVE, true)
    } catch (error) {
      console.log(error)      
    }
  },

  async [ActionTypes.UPDATE_CURRENT]({ state }){
    try {
      await updateDoc(doc(db, 'users', state.uid), {
        uid: state.uid,
        name: state.name,
        room: state.room,
        az: state.az,
        za: state.za,
      })
    } catch (error) {
      console.log(error)      
    }
  },

  [ActionTypes.LIST_USERS]({ state, commit }){
    try {
      if(!state.is_list_active){
        const q = query(collection(db, 'users'), where('room', '==', state.room))
        commit(MutationTypes.SET_LIST_UNSUBSCRIBE,
          onSnapshot(q, (querySnapshot) => {
            const users: any = []
            querySnapshot.forEach((user) => {
                users.push(user.data())
            })
            commit(MutationTypes.SET_USERS, users)
            console.log(users)
          })
        )
      }      
      commit(MutationTypes.SET_IS_LIST_ACTIVE, true)
    } catch (error) {
      console.log(error)      
    }
  }
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_UID](state: State, payload: string){
    state.uid = payload
  },

  [MutationTypes.SET_NAME](state: State, payload: string){
    state.name = payload
  },

  [MutationTypes.SET_ROOM](state: State, payload: string){
    state.room = payload
  },

  [MutationTypes.SET_AZ](state: State, payload: number[]){
    state.az = payload
  },

  [MutationTypes.SET_ZA](state: State, payload: number[]){
    state.za = payload
  },

  [MutationTypes.SET_CURRENT_UNSUBSCRIBE](state: State, payload: Unsubscribe){
    state.current_unsubscribe = payload
  },

  [MutationTypes.SET_LIST_UNSUBSCRIBE](state: State, payload: Unsubscribe){
    state.list_unsubscribe = payload
  },

  [MutationTypes.SET_USERS](state: State, payload: any[]){
    state.users = payload
  },
  
  [MutationTypes.SET_IS_CURRENT_ACTIVE](state: State, payload: boolean){
    state.is_current_active = payload
  },

  [MutationTypes.SET_IS_LIST_ACTIVE](state: State, payload: boolean){
    state.is_list_active = payload
  },
}

export default {
  state,
  actions,
  mutations
}