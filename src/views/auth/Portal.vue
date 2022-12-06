<template>
  <v-container class="align-center fill-height">
    <v-responsive class="px-5 d-flex align-center text-center fill-height">
    <div class="mb-10 text-h2 font-weight-bold">Alphabet Game</div>
    <v-row justify="center">
      <v-card width="600" variant="flat">
        <v-container>
          <v-row class="mb-8">
          <v-text-field
            v-model="room_number"
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
          <v-btn :disabled="!room_number || room_number.length != 4" to="/scoreboard">
            Join a room
          </v-btn>
        </v-row>
        <v-divider class="mb-8" />
        <v-row class="mb-8" justify="center">
          <v-btn to="/scoreboard">
            Create a room
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
  import { signInAnonymously } from "firebase/auth"
  import { ref, onMounted } from 'vue'

  const room_number = ref('')

  onMounted(() => {
    try {
      signInAnonymously(auth)
      console.log(auth.currentUser)
    } catch (err) {
      console.log(err)
    }
  })
</script>
