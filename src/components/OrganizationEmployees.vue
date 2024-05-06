<script setup lang="ts">
import { ref } from "vue";

const search = ref("");
const name = ref(null);
const loading = ref(false);
const form = ref(true);

const headers = [
  { title: "ФИО сотрудника", value: "employeeFullName", sortable: true },
  { title: "Услуги", value: "employeeServices", sortable: true },
  { title: "График работы", value: "employeeSchedule", sortable: true },
  {
    title: "Действия",
    value: "actions",
  },
];

const items = [
  {
    employeeFullName: "Иванов Иван Иванович",
    employeeServices: "Прием ЛОРа",
    employeeSchedule: "четные дни месяца 08:00-14:00",
  },
  {
    employeeFullName: "Петров Петр Петрович",
    employeeServices: "Прием офтальмолога",
    employeeSchedule: "четные дни месяца 14:00-20:00",
  },
];

const selectedServices = ref([]);
const services = [
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
];

const selectedSchedule = ref([]);
const schedule = [
  {
    name: "четные дни 8:00-14:00",
  },
  {
    name: "четные дни 14:00-20:00",
  },
];

function accept(item: any) {
  console.log(item);
}

function deleteEmployee(item: any) {
  console.log(item);
}

function onSubmit() {
  if (!form.value) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
}

function required(value: string) {
  return !!value || "Поле обязательно для заполнения";
}

function regNumber(value: string) {
  return value.length === 9 || "Поле должно содержать 9 символов";
}
</script>

<template>
  <v-container>
    <v-responsive>
      <v-row>
        <v-col>
          <v-dialog class="ml-auto" max-width="800">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                color="teal-darken-3"
                prepend-icon="mdi-account-plus"
              >
                Добавить сотрудника
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
                  <v-toolbar-title>Информация о сотруднике</v-toolbar-title>
                  <v-btn
                    icon="mdi-close"
                    @click="isActive.value = false"
                  ></v-btn>
                </v-toolbar>

                <v-form v-model="form" @submit.prevent="onSubmit">
                  <v-card-text>
                    <v-row align="center" dense>
                      <v-col cols="4">ФИО сотрудника</v-col>
                      <v-col>
                        <v-text-field
                          v-model="name"
                          :rules="[required]"
                          placeholder="Иванов Иван Иванович"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row align="center">
                      <v-col cols="4">Оказываемые услуги</v-col>

                      <v-col class="pt-0">
                        <v-autocomplete
                          v-model="selectedSchedule"
                          :items="services"
                          color="blue-grey-lighten-2"
                          item-title="name"
                          item-value="name"
                          label="Выберите услуги"
                          chips
                          closable-chips
                          multiple
                        >
                          <template v-slot:chip="{ props, item }">
                            <v-chip
                              v-bind="props"
                              :text="item.raw.name"
                            ></v-chip>
                          </template>

                          <template v-slot:item="{ props, item }">
                            <v-list-item
                              v-bind="props"
                              :text="item.raw.name"
                            ></v-list-item>
                          </template>
                        </v-autocomplete>
                      </v-col>
                    </v-row>

                    <v-row align="center">
                      <v-col cols="4">Время работы</v-col>

                      <v-col class="pt-0">
                        <v-autocomplete
                          v-model="selectedServices"
                          :items="schedule"
                          color="blue-grey-lighten-2"
                          item-title="name"
                          item-value="name"
                          label="Выберите время работы "
                          chips
                          closable-chips
                          multiple
                        >
                          <template v-slot:chip="{ props, item }">
                            <v-chip
                              v-bind="props"
                              :text="item.raw.name"
                            ></v-chip>
                          </template>

                          <template v-slot:item="{ props, item }">
                            <v-list-item
                              v-bind="props"
                              :text="item.raw.name"
                            ></v-list-item>
                          </template>
                        </v-autocomplete>
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
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="search" label="Поиск"></v-text-field>
        </v-col>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        item-key="employeeFullName"
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
              @click="deleteEmployee(items.indexOf(item))"
              >Удалить</v-btn
            >
          </div>
        </template>
      </v-data-table>
    </v-responsive>
  </v-container>
</template>
