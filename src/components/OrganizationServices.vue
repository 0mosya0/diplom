<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const search = ref("");
const newService: Ref<string | null> = ref(null);

const headers = [
  {
    title: "Наименование услуги",
    value: "name",
    sortable: true,
  },
  { title: "Электронный документ", value: "state" },
  {
    title: "Действия",
    value: "actions",
  },
];

const services = ref([
  {
    name: "Прием ЛОРа",
    state: "Нет",
  },
  {
    name: "Прием офтальмолога",
    state: "Нет",
  },
  {
    name: "Прием невролога",
    state: "Нет",
  },
  {
    name: "Прием хирурга",
    state: "Нет",
  },
  {
    name: "Выписка из медицинской карты",
    state: "Да",
  },
]);

function addService() {
  services.value.push({ name: newService.value! });
  newService.value = null;
}

function accept(item: any) {
  console.log(item);
}

function deleteService(index: number) {
  services.value.splice(index, 1);
}
</script>

<template>
  <v-container>
    <v-responsive>
      <v-row>
        <v-col>
          <v-text-field
            v-model="newService"
            placeholder="Введите наименование новой услуги"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox label="Электронный документ"></v-checkbox>
        </v-col>
        <v-col>
          <v-btn
            class="mt-2"
            :disabled="!newService?.length"
            color="teal-darken-3"
            prepend-icon="mdi-playlist-plus"
            @click="addService"
          >
            Добавить новую услугу
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-btn>
        </v-col>
      </v-row>

      <v-text-field v-model="search" label="Поиск"></v-text-field>

      <v-data-table
        :headers="headers"
        :items="services"
        :search="search"
        item-key="name"
        items-per-page="5"
      >
        <template v-slot:[`item.state`]>
          <div class="d-flex">
            <v-checkbox indeterminate></v-checkbox>
            <!--
            <span class="mdi mdi-plus-thick"></span>
            <span class="mdi mdi-minus-thick"></span>
            -->
          </div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex">
            <v-btn
              class="mr-2"
              size="small"
              color="teal-darken-3"
              @click="accept(item)"
              >Редактировать</v-btn
            >
            <v-btn
              class="mr-2"
              size="small"
              color="deep-orange-darken-1"
              @click="deleteService(services.indexOf(item))"
              >Удалить</v-btn
            >
          </div>
        </template>
      </v-data-table>
    </v-responsive>
  </v-container>
</template>
