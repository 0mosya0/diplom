<script setup lang="ts">
import { computed, ref } from "vue";
import router from "../router";
import Orders from "../components/Orders.vue";
import ProfileInfo from "../components/ProfileInfo.vue";

const selectedItem = ref("orders");

const isOrdersActive = computed(() => selectedItem.value === 'orders');
const isProfileInfoActive = computed(() => selectedItem.value === 'edit');

function navigateTo(path: string) {
  router.replace(path);
}

function updateSelection(value: string) {
  selectedItem.value = value;
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item
            prepend-icon="mdi-account-outline"
            subtitle="mail@gmail.com"
            title="Verified User"
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
            title="Заявки"
            value="orders"
            :active="isOrdersActive"
            @click="updateSelection('orders')"
          />
          <v-list-item
            prepend-icon="mdi-pencil-outline"
            title="Редактировать профиль"
            value="edit"
            :active="isProfileInfoActive"
            @click="updateSelection('edit')"
          />
          <!-- <v-list-item prepend-icon="mdi-cog-outline" title="Настройки" value="starred"></v-list-item> -->
          <!-- <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>, -->
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
      <Orders v-if="isOrdersActive"></Orders>
      <ProfileInfo v-if="isProfileInfoActive"></ProfileInfo>
      </v-main>
    </v-layout>
  </v-card>
</template>
