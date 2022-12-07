<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>

    <!-- Enter a name dialog -->
    <AppDialog
      :toggle="toggleDialog"
      :title="'Name'"
      :width="'300'"
      :actions="['cancel', 'enter']"
      @cancel="toggleDialog = false"
    >
      <v-text-field
        variant="outlined"
        hide-details
      ></v-text-field>
    </AppDialog>
  </v-app>
</template>

<script setup lang="ts">
  import Header from '@/layouts/Header.vue'
  import AppDialog from '@/components/AppDialog.vue'
  import { ref } from 'vue';

  const toggleDialog = ref(true)
</script>