<template>
  <v-timeline
    side="end" 
    align="start"
    truncate-line="both"
  >
    <v-timeline-item
      dot-color="pink"
      size="small"
      icon="mdi-alpha-a"
    >
      <div class="d-flex text-center">
        <strong>0.000s</strong>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
      icon="mdi-alpha-b"
    >
      <div class="d-flex text-center">
        <strong>0.012s</strong>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="pink"
      size="small"
      icon="mdi-alpha-c"
    >
      <div class="d-flex">
        <strong>0.024s</strong>
      </div>
    </v-timeline-item>

    <v-timeline-item
      dot-color="teal-lighten-3"
      size="small"
      icon="mdi-alpha-d"
    >
      <div class="d-flex">
        <strong>0.500s</strong>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
