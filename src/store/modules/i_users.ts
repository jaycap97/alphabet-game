import { ActionContext, CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex'

export type Unsubscribe = () => void

//state
export type State = { 
  uid: string
  name: string
  room: string
  az: number[]
  za: number[]
  users: any[]
  is_current_active: boolean
  is_list_active: boolean
  current_unsubscribe: Unsubscribe
  list_unsubscribe: Unsubscribe
}

//actions
export enum ActionTypes {
  LISTEN_CURRENT = 'LISTEN_CURRENT',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  LIST_USERS = 'LIST_USERS'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ) : ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.LISTEN_CURRENT](
    { commit }: AugmentedActionContext,
  ) : void

  [ActionTypes.UPDATE_CURRENT](
    { commit }: AugmentedActionContext,
  ) : void

  [ActionTypes.LIST_USERS](
    { commit }: AugmentedActionContext,
    payload: State[],
  ) : void
}

//mutations
export enum MutationTypes {
  SET_UID = 'SET_UID',
  SET_NAME = 'SET_NAME',
  SET_ROOM = 'SET_ROOM',
  SET_AZ = "SET_AZ",
  SET_ZA = "SET_ZA",
  SET_USERS = "SET_USERS",
  SET_CURRENT_UNSUBSCRIBE = "SET_CURRENT_UNSUBSCRIBE",
  SET_LIST_UNSUBSCRIBE = "SET_LIST_UNSUBSCRIBE",
  SET_IS_CURRENT_ACTIVE = "SET_IS_CURRENT_ACTIVE",
  SET_IS_LIST_ACTIVE = "SET_IS_LIST_ACTIVE"
}

export type Mutations<S = State> ={
  [MutationTypes.SET_UID](state: S, payload: string): void
  [MutationTypes.SET_NAME](state: S, payload: string): void
  [MutationTypes.SET_ROOM](state: S, payload: string): void
  [MutationTypes.SET_AZ](state: S, payload: number[]): void
  [MutationTypes.SET_ZA](state: S, payload: number[]): void
  [MutationTypes.SET_USERS](state: S, payload: any[]): void
  [MutationTypes.SET_CURRENT_UNSUBSCRIBE](state: S, payload: Unsubscribe): void
  [MutationTypes.SET_LIST_UNSUBSCRIBE](state: S, payload: Unsubscribe): void
  [MutationTypes.SET_IS_CURRENT_ACTIVE](state: S, payload: boolean): void
  [MutationTypes.SET_IS_LIST_ACTIVE](state: S, payload: boolean): void
}

export type Store = Omit<
  VuexStore<State>,
  'commit' | 'dispatch'
> & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
}