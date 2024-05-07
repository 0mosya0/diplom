<script setup lang="ts">
import { ORGANIZATIONS } from "@/constants/organizations";
import { computed, onMounted, ref, watch } from "vue";
import type { Ref } from "vue";

const selectedDate: Ref<Date> = ref(new Date());
const selectedDayTimesList: Ref<string[]> = ref([]);

const hasAvailableSlots = computed(() =>
  Boolean(selectedDayTimesList.value.length)
);

const organizations = ORGANIZATIONS.map((item) => item.name);
const services = ["Прием ЛОРа", "Прием офтальмолога"];

const availableDates = [
  "2024-05-01",
  "2024-05-03",
  "2024-05-04",
  "2024-05-05",
  "2024-05-14",
  "2024-05-16",
  "2024-05-17",
  "2024-05-21",
  "2024-05-23",
  "2024-05-31",
  "2024-06-01",
];

const availableTime = [
  {
    date: "2024-05-05",
    timeSlots: ["09:00", "12:00"],
  },
  {
    date: "2024-05-14",
    timeSlots: ["08:00"],
  },
  {
    date: "2024-05-17",
    timeSlots: ["08:00", "09:00", "10:00", "11:00", "12:00"],
  },
  {
    date: "2024-05-23",
    timeSlots: ["14:00", "15:00", "16:00", "17:00", "18:00"],
  },
];

const getLocaleDate = (value: Date) =>
  value.toLocaleDateString().split(".").reverse().join("-");

onMounted(() => {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const weekDays = document.querySelectorAll(".v-date-picker-month__weekday");
  weekDays.forEach((day, index) => {
    day.innerHTML = daysOfWeek[index];
  });

  // const backBtn = document.querySelector(
  //   ".v-date-picker-controls__month > .v-btn--density-default:first-of-type"
  // );
  // backBtn?.setAttribute("disabled", "true");
  // // const backBtn = document.querySelectorAll(".v-date-picker-controls__month");
  // console.log(backBtn);

  // const nextBtn = document.querySelector(
  //   ".v-date-picker-controls__month > .v-btn--density-default:last-of-type"
  // );

  // backBtn?.addEventListener("click", () => {
  //   const selectedMonth = selectedDate.value.getMonth();
  //   const currentMonth = new Date().getMonth();
  //   if (selectedMonth === currentMonth) {
  //     backBtn?.setAttribute("disabled", "true");
  //   }
  // });

  // nextBtn?.addEventListener("click", () => {
  //   const selectedMonth = selectedDate.value.getMonth();
  //   const currentMonth = new Date().getMonth();
  //   if (selectedMonth === currentMonth) {
  //     backBtn?.removeAttribute("disabled");
  //   }
  // });
});

watch(
  selectedDate,
  (value) => {
    selectedDayTimesList.value =
      availableTime.find((item) => item.date === getLocaleDate(value))
        ?.timeSlots ?? [];
    // const selectedMonth = value.getMonth();
    // const currentMonth = new Date().getMonth();
    // console.log(selectedMonth, currentMonth);
    // const backBtn = document.querySelector(
    //   ".v-date-picker-controls__month > .v-btn--density-default:first-of-type"
    // );
    // selectedMonth === currentMonth
    //   ? backBtn?.setAttribute("disabled", "true")
    //   : backBtn?.removeAttribute("disabled");
  },
  {
    immediate: true,
  }
);

function allowedDates(value: Date) {
  const today = new Date();
  const currentDate = getLocaleDate(today);
  const filteredDates = availableDates.filter((date) => date >= currentDate);
  return filteredDates.includes(getLocaleDate(value));
}
</script>

<template>
  <v-container class="fill-height d-flex">
    <v-responsive class="align-center fill-height mx-auto" max-width="900">
      <v-row align="center" class="mt-0">
        <v-col cols="4">Организация</v-col>
        <v-col cols="8">
          <v-autocomplete
            placeholder="Выберите организацию"
            :items="organizations"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row align="center" class="mt-0">
        <v-col cols="4">Услуга</v-col>
        <v-col cols="8">
          <v-autocomplete
            placeholder="Выберите услугу"
            :items="services"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">Выберите дату и время</v-col>
        <v-col align="center" cols="8">
          <v-date-picker
            v-model="selectedDate"
            :allowed-dates="allowedDates"
            locale="ru-RU"
            first-day-of-week="1"
            show-adjacent-months
            hide-header
          ></v-date-picker>
        </v-col>
      </v-row>

      <v-row style="height: 100px">
        <v-col cols="4"></v-col>

        <v-col v-if="!hasAvailableSlots" cols="8" align="center">
          В этот день нет свободного времени
        </v-col>

        <v-col v-else cols="8" align="center">
          <v-chip-group>
            <v-chip v-for="(item, index) in selectedDayTimesList" :key="index">
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="end">
          <v-btn color="blue-grey-lighten-1">Сохранить</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<!-- <style>
.v-date-picker-controls__month
  > .v-btn--density-default:first-of-type:disabled {
  color: gray;
  cursor: not-allowed;
}
</style> -->
