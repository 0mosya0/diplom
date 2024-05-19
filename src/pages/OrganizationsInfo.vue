<script setup lang="ts">
import { ref } from "vue";

const address = ref(null);
const email = ref(null);
const name = ref(null);
const pan = ref(null);
const showForm = ref(true);
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
  <v-img src="/src/assets/org-page.jpg" height="100vh" cover>
    <NavBar />

    <v-container>
      <h2 class="mb-1 text-blue-grey-lighten-4">Информация для организаций</h2>

      <h3 class="mb-1 text-blue-grey-lighten-4">
        Для добавления организации в систему необходимо
        <span
          class="cursor-pointer text-blue-lighten-3"
          @click="showForm = !showForm"
          >подать заявку</span
        >
        на регистрацию. <br />
        После проверки нашим администратором, на указанную вами почту будет
        выслан пароль от личного кабинета. Вы сможете изменить его позже в
        настройках.
      </h3>
      <v-card v-if="showForm" class="mt-6 pa-4" max-width="800">
        <v-form v-model="form" @submit.prevent="onSubmit">
          <h4>Заявка на регистрацию организации</h4>
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
                  v-model="pan"
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

            <v-row>
              <v-col align="end">
                <v-btn :disabled="!form" color="blue-grey-darken-2"
                  >Отправить заявку</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-form>
      </v-card>
    </v-container>
  </v-img>
</template>
