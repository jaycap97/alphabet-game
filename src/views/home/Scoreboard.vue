<template>
  <v-container class="fill-height">
    <v-row class="mb-5" justify="center" dense>
      <div class="text-h2 font-weight-bold">Scoreboard</div>
    </v-row>
    <v-row class="mb-1" justify="center" dense>
      <div class="text-h5 mr-2">Name: {{ state.name }}
        <v-icon size="x-small" @click="$emit('editName')">mdi-pencil</v-icon>
      </div>
    </v-row>
    <v-row class="mb-8" justify="center" dense>
      <div class="text-h6">Room: {{ state.room }}</div>
    </v-row>
    <v-row justify="center" dense>
      <v-card 
        class="rounded-lg"
        variant="outlined"
        max-width="500"
      >
        <v-table>
          <thead>
            <tr>
              <th class="text-center">
                Name
              </th>
              <th class="text-center">
                A to Z
              </th>
              <th class="text-center">
                Z to A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in store.state.users"
              :key="user.name"
            >
              <td>{{ user.name }}</td>
              <td>{{ user.az.length !== 0? `${getTime(user.az).toFixed(3)}s` : '' }}</td>
              <td>{{ user.za.length !== 0? `${getTime(user.za).toFixed(3)}s` : '' }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useStore } from '@/store'
  import { ActionTypes } from '@/store/modules/i_users';
  import { reactive, ref, watch } from 'vue'

  const store = useStore()
  const state = ref(store.state)
  const users = reactive(store.state.users)
  
  const getTime = (list: number[]) => (list.slice(-1)[0]-list[0])/1000
  
  watch(users, () => {
    store.dispatch(ActionTypes.LIST_USERS)
    console.log(users)
  },{
    immediate: true
  })
</script>
