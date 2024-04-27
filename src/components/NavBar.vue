  <script>
    export default {
      data: () => ({ value: 1 }),
    }
  </script>

<template>
    <v-layout class="overflow-visible mx-14 my-4" style="height: 54px;">
      <v-bottom-navigation
        class="rounded-lg"
        :elevation="7" 
        v-model="value"
        color="teal"
        grow
      >
        <v-btn to="/">
          <v-icon>mdi-history</v-icon>
  
          Главная
        </v-btn>
  
        <v-btn to="/profile">
          <v-icon>mdi-heart</v-icon>
  
          Личный кабинет
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-map-marker</v-icon>
  
          Nearby
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </template>
