<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const search = ref("");
const newService: Ref<string | null> = ref(null);

const headers = [
  { title: "Наименование услуги", value: "name", sortable: true },
  {
    title: "Действия",
    value: "actions",
  },
];

const services = ref([
  {
    name: "Прием ЛОРа",
  },
  {
    name: "Прием офтальмолога",
  },
  {
    name: "Прием невролога",
  },
  {
    name: "Прием хирурга",
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
          <v-btn
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
