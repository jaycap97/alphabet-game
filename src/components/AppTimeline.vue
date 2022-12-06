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
        dot-color="pink"
        size="small"
        icon="mdi-alpha-a"
      >
        <div class="d-flex">
          <div
            class="pt-1 headline font-weight-bold"
            v-text="'0.000s'"
          ></div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        dot-color="teal-lighten-3"
        size="small"
        icon="mdi-alpha-b"
      >
        <div class="d-flex">
          <div
            class="pt-1 headline font-weight-bold"
            v-text="'0.012s'"
          ></div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        dot-color="pink"
        size="small"
        icon="mdi-alpha-c"
      >
        <div class="d-flex">
          <div
            class="pt-1 headline font-weight-bold"
            v-text="'0.024s'"
          ></div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        dot-color="teal-lighten-3"
        size="small"
        icon="mdi-alpha-d"
      >
        <div class="d-flex">
          <div
            class="pt-1 headline font-weight-bold"
            v-text="'0.500s'"
          ></div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>
