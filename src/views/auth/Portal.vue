<template>
  <v-container class="align-center fill-height">
    <v-responsive class="px-5 d-flex align-center text-center fill-height">
    <div class="mb-10 text-h2 font-weight-bold">Alphabet Game</div>
    <v-row justify="center">
      <v-card width="600" variant="flat">
        <v-container>
          <v-row class="mb-8">
            <v-text-field
              :model-value="state.room"
              @update:model-value="(val: string) => updateRoom(val)"
              :rules="[
                (v) => !!v || '',
                (v) => v.length == 4 || ''
              ]"
              class="my-3"
              label="Room Number"
              variant="outlined"
              hide-details
            ></v-text-field>
          </v-row>
          <v-row class="mb-8" justify="center">
            <v-btn :disabled="!state.room || state.room.length != 4" to="/scoreboard">
              Join a room
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { auth } from '@/fb'
  import { signInAnonymously, onAuthStateChanged } from "firebase/auth"
  import { ref, watch, onMounted } from 'vue'
  import { useStore } from '@/store'
  import { ActionTypes, MutationTypes } from '@/store/modules/i_users';

  const store = useStore()
  const state = ref(store.state)
  const uid = ref(store.state.uid)

  watch(uid, () => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        store.commit(MutationTypes.SET_UID, user.uid)
        store.dispatch(ActionTypes.LISTEN_CURRENT)
      }
    })
  },
  {
    immediate: true
  })

  const updateRoom = (val: string) => store.commit(MutationTypes.SET_ROOM, val)

  onMounted(() => {
    try {
      signInAnonymously(auth)
    } catch (err) {
      console.log(err)
    }
  })
</script>
