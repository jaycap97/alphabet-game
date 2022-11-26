<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="300"
        src="src/assets/logo.svg"
      />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Dashboard</h1>

      <router-link to="/portal">Portal</router-link>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
</script>
