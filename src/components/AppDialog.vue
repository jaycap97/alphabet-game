<template>
  <v-dialog
    :model-value="props.toggle"
    :width="props.width"
    persistent
  >
    <v-card>
      <v-card-title v-if="props.title" class="font-weight-medium pb-0">{{ props.title }}</v-card-title>
      <v-card-text class="py-3">
        <slot />
      </v-card-text>
    
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-for="(action, i) in actions"
          color="primary"
          :text="(actions.length === 1)? true : (i !== actions.length - 1)"
          @click="$emit(action)"
        >{{ action }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>  
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps<{
    toggle: boolean
    title: string
    width: string
    actions: string[]
  }>()
</script>