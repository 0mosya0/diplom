<script setup lang="ts">
import { ref } from "vue";

const address = ref("г. Минск ул. Ульяновская улица, д. 5");
const email = ref("info@poliklinika6.by");
const name = ref(
  "6-я центральная районная клиническая поликлиника Ленинского района г. Минска"
);
const registrationNumber = ref("101224683");
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
              disabled
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
