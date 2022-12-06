<template>
  <v-container class="fill-height">
    <v-row class="mb-5" justify="center" dense>
      <div class="text-h2 font-weight-bold">Scoreboard</div>
    </v-row>
    <v-row justify="center" dense>
      <v-card 
        class="rounded-lg"
        variant="outlined"
        max-width="500"
      >
        <v-table>
          <thead>
            <tr>
              <th class="text-center">
                Name
              </th>
              <th class="text-center">
                A to Z
              </th>
              <th class="text-center">
                Z to A
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.az }}</td>
              <td>{{ item.za }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const desserts = [
    {
      name: 'Frozen Yogurt',
      az: 159,
      za: 159,
    },
    {
      name: 'Ice cream sandwich',
      az: 237,
      za: 237,
    },
    {
      name: 'Eclair',
      az: 262,
      za: 262,
    },
    {
      name: 'Cupcake',
      az: 305,
      za: 305,
    },
    {
      name: 'Gingerbread',
      az: 356,
      za: 356,
    },
    {
      name: 'Jelly bean',
      az: 375,
      za: 375,
    },
    {
      name: 'Lollipop',
      az: 392,
      za: 392,
    },
    {
      name: 'Frozen Yogurt',
      az: 159,
      za: 159,
    },
    {
      name: 'Ice cream sandwich',
      az: 237,
      za: 237,
    },
    {
      name: 'Eclair',
      az: 262,
      za: 262,
    },
    {
      name: 'Cupcake',
      az: 305,
      za: 305,
    },
    {
      name: 'Gingerbread',
      az: 356,
      za: 356,
    },
    {
      name: 'Jelly bean',
      az: 375,
      za: 375,
    },
    {
      name: 'Lollipop',
      az: 392,
      za: 392,
    },
  ]
</script>
