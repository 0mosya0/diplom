<script setup lang="ts">
import router from "@/router";
import Applications from "@/components/Applications.vue";

function navigateTo(path: string) {
  router.replace(path);
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer color="blue-grey-darken-1">
        <v-list>
          <v-list-item
            prepend-icon="mdi-account-outline"
            title="Администратор"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            prepend-icon="mdi-home-outline"
            title="На главную"
            value="home"
            @click="navigateTo('/')"
          />
          <v-list-item
            prepend-icon="mdi-folder"
            title="Заявки от организаций"
            value="applications"
            active
          />
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <Applications />
      </v-main>
    </v-layout>
  </v-card>
</template>
