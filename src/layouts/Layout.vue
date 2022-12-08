<template>
  <v-app>
    <Header
      @exit="toggleExitDialog = true"
    />
    <v-main>
      <router-view />
    </v-main>

    <!-- Enter a name dialog -->
    <AppDialog
      :toggle="toggleNameDialog"
      :title="'Name'"
      :width="'300'"
      :actions="['cancel', 'enter']"
      @cancel="toggleNameDialog = false"
    >
      <v-text-field
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
    >
      <p>You are about the exit the room.</p>
    </AppDialog>
  </v-app>
</template>

<script setup lang="ts">
  import Header from '@/layouts/Header.vue'
  import AppDialog from '@/components/AppDialog.vue'
  import { ref } from 'vue';

  const toggleNameDialog = ref(false)
  const toggleExitDialog = ref(false)
</script>