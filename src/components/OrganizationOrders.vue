<script setup lang="ts">
import { ref } from "vue";

const tab = ref(1);
const search = ref("");
const loading = ref(false);
const form = ref(true);

function onSubmit() {
  if (!form.value) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
}

const headersProcessed = [
  { title: "ФИО заказчика", value: "clientFullName", sortable: true },
  {
    title: "Идентификационный номер паспорта заказчика",
    value: "identificationNumber",
    sortable: true,
  },
  { title: "Наименование услуги", value: "serviceName", sortable: true },
  { title: "Файл", value: "fileName", sortable: true },
];

const ordersProcessed = [
  {
    clientFullName: "Петрова Любовь Леонидовна",
    identificationNumber: "123456787654321",
    serviceName: "Выписка из медицинской карты",
    fileName: "Выписка_Петрова_Л_Л.pdf",
  },
  {
    clientFullName: "Синичкин Михаил Андреевич",
    identificationNumber: "2143567589432617",
    serviceName: "Выписка из медицинской карты",
    fileName: "Выписка_Синичкин_М_А.pdf",
  },
];

const headersUnprocessed = [
  { title: "ФИО заказчика", value: "clientFullName", sortable: true },
  {
    title: "Идентификационный номер паспорта заказчика",
    value: "identificationNumber",
    sortable: true,
  },
  { title: "Наименование услуги", value: "serviceName", sortable: true },
  {
    title: "Действия",
    value: "actions",
  },
];

const unprocessed = [
  {
    clientFullName: "Синичкин Константин Михайлович",
    identificationNumber: "98764536217623456",
    serviceName: "Выписка из медицинской карты",
  },
];

const headersAutomatic = [
  { title: "ФИО сотрудника", value: "employeeFullName", sortable: true },
  { title: "Наименование услуги", value: "serviceName", sortable: true },
  { title: "ФИО заказчика", value: "clientFullName", sortable: true },
  { title: "Дата и время", value: "serviceDateTime", sortable: true },
];

const ordersAutomatic = [
  {
    clientFullName: "Синичкина Мария Ивановна",
    serviceName: "Прием ЛОРа",
    employeeFullName: "Иванов Иван Иванович",
    serviceDateTime: "14.05.2024 08:00",
  },
  {
    clientFullName: "Фролов Игорь Геннадьевич",
    serviceName: "Прием офтальмолога",
    employeeFullName: "Петров Петр Петрович",
    serviceDateTime: "20.05.2024 16:00",
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
        <v-tab :value="2">Автоматические</v-tab>
      </v-tabs>

      <v-text-field v-model="search" label="Поиск"></v-text-field>

      <v-data-table
        v-if="tab === 0"
        :headers="headersProcessed"
        :items="ordersProcessed"
        :search="search"
        item-key="name"
        items-per-page="5"
      >
        <template v-slot:[`item.fileName`]="{ item }">
          <a href="/">
            {{ item.fileName }}
          </a>
        </template>
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
            <v-dialog class="ml-auto" max-width="600">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  size="small"
                  color="blue-grey-darken-2"
                  @click="accept(item)"
                  >Прикрепить файл

                  <v-overlay
                    opacity=".06"
                    scrim="primary"
                    contained
                    model-value
                    persistent
                  />
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card style="overflow: hidden">
                  <v-toolbar>
                    <v-toolbar-title>Загрузить файл</v-toolbar-title>
                    <v-btn
                      icon="mdi-close"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-toolbar>

                  <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-card-text>
                      <v-row align="center" dense>
                        <v-col cols="2">Файл</v-col>
                        <v-col>
                          <v-file-input label="Выберите файл"></v-file-input>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col align="end">
                          <v-btn :disabled="!form" color="blue-grey-darken-2"
                            >Сохранить</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-card>
              </template>
            </v-dialog>
          </div>
        </template>
      </v-data-table>

      <v-data-table
        v-if="tab === 2"
        :headers="headersAutomatic"
        :items="ordersAutomatic"
        :search="search"
        item-key="name"
        items-per-page="5"
      >
      </v-data-table>
    </v-responsive>
  </v-container>
</template>
