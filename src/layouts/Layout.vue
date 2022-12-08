<template>
  <v-app>
    <Header
      @exit="toggleExitDialog = true"
    />
    <v-main>
      <router-view @edit-name="toggleNameDialog = true"/>
    </v-main>

    <!-- Enter a name dialog -->
    <AppDialog
      :toggle="toggleNameDialog"
      :title="'Name'"
      :width="'300'"
      :actions="['cancel', 'enter']"
      @cancel="toggleNameDialog = false"
      @enter="updateName()"
    >
      <v-text-field
        v-model="tempName"
        :rules="[(v) => !!v || '']"
        variant="outlined"
        hide-details
      ></v-text-field>
    </AppDialog>

    <!-- Exit dialog -->
    <AppDialog
      :toggle="toggleExitDialog"
      :title="'Exit'"
      :width="'300'"
      :actions="['cancel', 'proceed']"
      @cancel="toggleExitDialog = false"
      @proceed="exitRoom()"
    >
      <p>You are about the exit the room.</p>
    </AppDialog>
  </v-app>
</template>

<script setup lang="ts">
  import Header from '@/layouts/Header.vue'
  import AppDialog from '@/components/AppDialog.vue'
  import { ref, watch } from 'vue'
  import { useStore } from '@/store'
  import { ActionTypes, MutationTypes } from '@/store/modules/i_users'
  import router from '@/router'

  const toggleNameDialog = ref(false)
  const toggleExitDialog = ref(false)
  const store = useStore()
  const name = ref(store.state.name)
  const tempName = ref('')

  watch(name, () => {
    if(name.value === '') toggleNameDialog.value = true
    else toggleNameDialog.value = false
  },{
    immediate: true
  })

  const updateName = () => {
    toggleNameDialog.value = false
    store.commit(MutationTypes.SET_NAME, tempName.value)
    store.dispatch(ActionTypes.UPDATE_CURRENT)
  } 
  const exitRoom = () => {
    toggleExitDialog.value = false
    store.commit(MutationTypes.SET_ROOM, '')
    store.dispatch(ActionTypes.UPDATE_CURRENT)
    router.push({ name: 'Portal' })
  }
</script>