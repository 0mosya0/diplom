<script setup lang="ts">
import { ref } from "vue";

const address = ref(null);
const email = ref(null);
const name = ref(null);
const registrationNumber = ref(null);
const password = ref(null);
const passwordNew = ref(null);
const passwordNewRepeated = ref(null);
const loading = ref(false);
const form = ref(true);

function onSubmit() {
  if (!form.value) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
}

function required(value: string) {
  return !!value || "Поле обязательно для заполнения";
}

// function regNumber(value: string) {
//   return value.length === 9 || "Поле должно содержать 9 символов";
// }
</script>

<template>
  <v-container>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <h3>Информация о пользователе</h3>
      <v-card-text>
        <v-row align="center" dense>
          <v-col cols="4">ФИО</v-col>
          <v-col>
            <v-text-field
              v-model="name"
              :rules="[required]"
              placeholder="Иванов Иван Иванович"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-0">
          <v-col cols="4">Номер паспорта</v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="registrationNumber"
              :rules="[required]"
              placeholder="XXXXXXXXXXXXXX"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="4">Адрес</v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="address"
              :rules="[required]"
              placeholder="г. Минск, ул. Вокзальная 1, кв. 2, этаж 3"
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

        <v-row>
          <v-col align="end">
            <v-btn :disabled="!form" color="blue-grey-darken-2"
              >Сохранить</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>

    <v-form v-model="form" @submit.prevent="onSubmit">
      <h3>Изменить пароль</h3>
      <v-card-text>
        <v-row align="center" dense>
          <v-col cols="4">Пароль</v-col>
          <v-col>
            <v-text-field
              v-model="password"
              class="mb-2"
              :readonly="loading"
              :rules="[required]"
              placeholder="Введите пароль"
              type="password"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" dense class="mt-0">
          <v-col cols="4">Новый пароль</v-col>
          <v-col>
            <v-text-field
              v-model="passwordNew"
              class="mb-2"
              :readonly="loading"
              :rules="[required]"
              placeholder="Введите новый пароль"
              type="password"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" class="mt-0">
          <v-col cols="4">Повторите новый пароль</v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="passwordNewRepeated"
              class="mb-2"
              :readonly="loading"
              :rules="[required]"
              placeholder="Введите пароль"
              type="password"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="end">
            <v-btn :disabled="!form" color="blue-grey-darken-2"
              >Изменить пароль</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-container>
</template>
