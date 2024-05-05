<script setup lang="ts">
import { ref } from "vue";
import { ORGANIZATIONS } from "@/constants/organizations";

const tab = ref(1);
const search = ref("");
const headers = [
  { title: "Наименование организации", value: "name", sortable: true },
  { title: "УНП организации", value: "registrationNumber", sortable: true },
  { title: "Адрес организации", value: "address", sortable: true },
  {
    title: "Адрес электронной почты администратора",
    value: "email",
    sortable: true,
  },
];

const headersUnprocessed = [
  { title: "Наименование организации", value: "name", sortable: true },
  { title: "УНП организации", value: "registrationNumber", sortable: true },
  { title: "Адрес организации", value: "address", sortable: true },
  {
    title: "Адрес электронной почты",
    value: "email",
    sortable: true,
  },
  {
    title: "Действия",
    value: "actions",
  },
];

const unprocessed = [
  {
    name: "13-я городская стоматологическая поликлиника",
    registrationNumber: "100520010",
    address: "г. Минск, пр-т Газеты Правда 58/2",
    email: "13stom@gmail.com",
  },
  {
    name: "Медицинский центр «Кравира»",
    registrationNumber: "100049877",
    address: "г. Минск, пр-т Победителей, 45",
    email: "kravira@gmail.com",
  },
];

function accept(item: any) {
  console.log(item);
}

function decline(item: any) {
  console.log(item);
}
</script>

<template>
  <v-container>
    <v-responsive>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mb-6"
        color="deep-purple-accent-4"
      >
        <v-tab :value="0">Обработанные</v-tab>
        <v-tab :value="1">Необработанные</v-tab>
      </v-tabs>

      <v-text-field v-model="search" label="Поиск"></v-text-field>

      <v-data-table
        v-if="tab === 0"
        :headers="headers"
        :items="ORGANIZATIONS"
        :search="search"
        item-key="name"
        items-per-page="5"
      >
      </v-data-table>

      <v-data-table
        v-if="tab === 1"
        :headers="headersUnprocessed"
        :items="unprocessed"
        :search="search"
        item-key="name"
        items-per-page="5"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex">
            <v-btn
              class="mr-2"
              size="small"
              color="deep-orange-darken-1"
              @click="decline(item)"
              >Отклонить</v-btn
            >
            <v-btn
              class="mr-2"
              size="small"
              color="teal-darken-3"
              @click="accept(item)"
              >Одобрить</v-btn
            >
          </div>
        </template>
      </v-data-table>
    </v-responsive>
  </v-container>
</template>
