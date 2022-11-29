<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="300"
        src="src/assets/logo.svg"
      />
      <h1>Portal</h1>
      <router-link to="/scoreboard">Scoreboard</router-link>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
