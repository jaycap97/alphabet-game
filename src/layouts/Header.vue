<template>
  <v-app-bar flat color="secondary">
    <v-btn dark icon @click="toggleTheme()" class="mx-1">
      <v-icon>{{ theme.global.current.value.dark? 'mdi-white-balance-sunny' : 'mdi-power-sleep' }}</v-icon>
    </v-btn>
    <v-spacer />
    <v-btn dark icon to="/scoreboard" class="mx-1">
      <v-icon>mdi-counter</v-icon>
    </v-btn>
    <v-btn dark icon to="/ascending" class="mx-1">
      <v-icon>mdi-sort-alphabetical-ascending</v-icon>
    </v-btn>
    <v-btn dark icon to="/descending" class="mx-1">
      <v-icon>mdi-sort-alphabetical-descending</v-icon>
    </v-btn>
    <v-spacer />
    <v-btn dark icon @click="$emit('exit')" class="mx-1">
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
</script>