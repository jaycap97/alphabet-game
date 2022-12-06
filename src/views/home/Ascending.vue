<template>
  <v-container class="fill-height">
    <v-row class="mb-5" justify="center" dense>
      <div class="text-h2 font-weight-bold">{{ alphabet[field.length].toUpperCase() }}</div>
    </v-row>
    <v-row class="mb-8" justify="center" dense>
      <v-text-field
        :value="field"
        @update:model-value="(val: string) => buff = val"
        variant="outlined"
        hide-details
      ></v-text-field>
      <v-btn class="ml-4" size="x-large">Reset</v-btn>
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
  import { ref, watch } from 'vue'
  import AppTimeline from '@/components/AppTimeline.vue'

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const field = ref('')
  const buff = ref('')

  watch(buff, (newVal) => {
    // console.log('Fld: ', field.value)
    // console.log('Bff: ', buff.value)
    // console.log('Ref: ', alphabet.substring(0, field.value.length + 1))
    if(alphabet.substring(0, field.value.length + 1) === newVal){
      field.value = newVal
    }
  })
</script>