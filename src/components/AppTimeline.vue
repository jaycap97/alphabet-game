<template>
  <v-card 
    class="py-5 rounded-lg"
    variant="outlined"
    min-width="300"
  >
    <v-timeline
      side="end" 
      truncate-line="both"
    >
      <v-timeline-item
        v-for="i in props.alphabet.length"
        dot-color="teal-lighten-3"
        size="small"
        :icon="`mdi-alpha-${props.alphabet[i-1]}`"
      >
        <div class="d-flex">
          <div
            class="pt-1 headline font-weight-bold"
            v-text="`${((props.laps[i-1]-props.start)/1000).toFixed(3)}s`"
          ></div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps<{
    alphabet: string
    start: number
    laps: number[]
  }>()
</script>
