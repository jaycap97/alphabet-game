<template>
  <v-container class="fill-height">
    <v-row class="mb-5" justify="center" dense>
      <div class="text-h2 font-weight-bold">{{ field.length === alphabet.length? 'Success' : alphabet[field.length].toUpperCase() }}</div>
    </v-row>
    <v-row class="mb-8" justify="center" dense>
      <v-text-field
        :value="field"
        @update:model-value="(val: string) => buff = val"
        variant="outlined"
        hide-details
      ></v-text-field>
      <v-btn
        @click="reset()"
        class="ml-4"
        size="x-large"
      >Reset</v-btn>
    </v-row>
    <v-row class="mb-8" justify="center" dense>
      <div class="text-h5">{{ `Time: ${(time/1000).toFixed(3)}s` }}</div>
    </v-row>
    <v-row justify="center" dense>
      <AppTimeline
        v-if="laps.length === alphabet.length"
        :alphabet="alphabet"
        :start="start"
        :laps="laps"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import AppTimeline from '@/components/AppTimeline.vue'
  import { useStore } from '@/store'
  import { ActionTypes, MutationTypes } from '@/store/modules/i_users';

  const alphabet = 'zyxwvutsrqponmlkjihgfedcba'
  const field = ref('')
  const buff = ref('')
  const start = ref(0)
  const time = ref(0)
  const isTimerEnabled = ref<boolean>(false)
  const laps = ref<number[]>([])
  const store = useStore()
  const za = ref(store.state.za)

  const reset = () => {
    isTimerEnabled.value = false
    setTimeout(() => {
      field.value = ''
      buff.value = ''
      start.value = 0
      time.value = 0
      laps.value = []
    }, 100)
  }

  const addTime = () => {
    const startLap = laps.value[0]
    const endLap = laps.value.slice(-1)[0]
    const startZa = za.value[0]
    const endZa = za.value.slice(-1)[0]
    if((endLap-startLap) < (endZa - startZa)){
      store.commit(MutationTypes.SET_ZA, laps.value)
      store.dispatch(ActionTypes.UPDATE_CURRENT)
    } else if (za.value.length === 0) {
      store.commit(MutationTypes.SET_ZA, laps.value)
      store.dispatch(ActionTypes.UPDATE_CURRENT)
    }
  }

  watch(buff, (newVal) => {
    if(alphabet.substring(0, field.value.length + 1) === newVal){
      field.value = newVal
      if(newVal === 'z') {
        start.value = Date.now()
        time.value = Date.now()
        isTimerEnabled.value = true
        laps.value.push(start.value)
      } else {
        laps.value.push(Date.now())
      }
    }
  })

  watch(field, () => {
    if(field.value === alphabet && laps.value.length === alphabet.length) addTime()
  })

  watch(time, () => {
    if(isTimerEnabled.value){
      setTimeout(() => {
          if(alphabet !== field.value) time.value = Date.now() - start.value
          else time.value  = (laps.value.slice(-1)[0]-start.value)
      }, 1);
    }
  })
</script>