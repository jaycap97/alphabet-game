<template>
  <v-container class="fill-height">
    <v-row class="mb-5" justify="center" dense>
      <div class="text-h2 font-weight-bold">Z</div>
    </v-row>
    <v-row class="mb-8" justify="center" dense>
      <v-text-field
        variant="outlined"
        hide-details
      ></v-text-field>
    </v-row>
    <v-row class="mb-8" justify="center" dense>
      <div class="text-h5">Time: 0.000s</div>
    </v-row>
    <v-row justify="center" dense>
      <AppTimeline />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import AppTimeline from '@/components/AppTimeline.vue'
</script>