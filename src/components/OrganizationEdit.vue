<script setup lang="ts">
import { ref } from "vue";

const address = ref(null);
const email = ref(null);
const name = ref(null);
const registrationNumber = ref(null);
const loading = ref(false);
const form = ref(true);

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
    <v-form v-model="form" @submit.prevent="onSubmit">
      <h3>
        6-я центральная районная клиническая поликлиника Ленинского района г.
        Минска
      </h3>
      <v-card-text>
        <v-row align="center" dense>
          <v-col cols="4"> Наименование организации</v-col>
          <v-col>
            <v-text-field
              v-model="name"
              :rules="[required]"
              placeholder="Открытое акционерное общество «Ромашка»"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-0">
          <v-col cols="4">УНП организации</v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="registrationNumber"
              :rules="[required, regNumber]"
              placeholder="123456789"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">Адрес организации</v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="address"
              :rules="[required]"
              placeholder="г. Минск, ул. Вокзальная 1, корпус 3"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">Адрес электронной почты</v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="email"
              :rules="[required]"
              placeholder="ivanov@gmail.com"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- <v-row align="center">
          <v-col cols="4">Перечень услуг</v-col>

          <v-col class="pt-0">
            <v-autocomplete
              v-model="selectedServices"
              :items="services"
              color="blue-grey-lighten-2"
              item-title="name"
              item-value="name"
              label="Выберете услуги"
              chips
              closable-chips
              multiple
            >
              <template v-slot:chip="{ props, item }">
                <v-chip v-bind="props" :text="item.raw.name"></v-chip>
              </template>

              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props" :text="item.raw.name"></v-list-item>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row> -->

        <v-row>
          <v-col align="end">
            <v-btn :disabled="!form" color="blue-grey-darken-2"
              >Сохранить</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-container>
</template>
