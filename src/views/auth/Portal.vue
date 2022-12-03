<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="my-3 text-h2 font-weight-bold">Alphabet Game</div>
      <v-text-field
        class="my-3"
        label="Type your name"
        variant="outlined"
        hide-details
      ></v-text-field>
      <v-btn>
        Create a room
      </v-btn>
      <v-btn>
        Join a room
      </v-btn>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { auth } from '@/fb'
import { signInAnonymously } from "firebase/auth"

onMounted(() => {
  try {
    signInAnonymously(auth)
  } catch (err) {
    console.log(err)
  }
})
</script>
