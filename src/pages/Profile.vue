<script setup lang="ts">
import { computed, ref } from "vue";
import router from "@/router";
import Orders from "@/components/Orders.vue";
import NewOrder from "@/components/NewOrder.vue";
import ProfileInfo from "@/components/ProfileInfo.vue";

const selectedItem = ref("new-order");

const isNewOrderActive = computed(() => selectedItem.value === "new-order");
const isOrdersActive = computed(() => selectedItem.value === "orders");
const isProfileInfoActive = computed(() => selectedItem.value === "edit");

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
      <v-navigation-drawer color="blue-grey-darken-1">
        <v-list>
          <v-list-item
            prepend-icon="mdi-account-outline"
            subtitle="eliseenk0@gmail.com"
            title="Елисеенко Илья"
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
            prepend-icon="mdi-plus"
            title="Новая заявка"
            value="new-order"
            :active="isNewOrderActive"
            @click="updateSelection('new-order')"
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
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <Orders v-if="isOrdersActive"></Orders>
        <NewOrder v-if="isNewOrderActive"></NewOrder>
        <ProfileInfo v-if="isProfileInfoActive"></ProfileInfo>
      </v-main>
    </v-layout>
  </v-card>
</template>
