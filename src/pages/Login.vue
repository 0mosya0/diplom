<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

const email = ref(null);
const password = ref(null);
const form = ref(true);
const loading = ref(false);

function onSubmit() {
  if (!form.value) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
}

function required(value: string) {
  return !!value || "Поле обязательно для заполнения";
}

function navigateTo(path: string) {
  router.push(path);
}
</script>

<template>
  <v-img src="/src/assets/login.jpg" height="100vh" cover>
    <NavBar />
    <v-card class="mx-auto px-6 py-8" max-width="364">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Адрес электронной почты"
          placeholder="Введите адрес электронной почты"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          class="mb-2"
          :readonly="loading"
          :rules="[required]"
          type="password"
          label="Пароль"
          placeholder="Введите пароль"
          clearable
        ></v-text-field>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Вход
        </v-btn>

        <div class="mt-4">
          Новый пользователь?
          <span
            class="cursor-pointer text-blue-lighten-3"
            @click="navigateTo('registration')"
          >
            Зарегистрируйтесь
          </span>
        </div>
      </v-form>
    </v-card>
  </v-img>
</template>
