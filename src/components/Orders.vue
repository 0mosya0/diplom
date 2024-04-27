<script setup lang="ts">
import { ref } from "vue";

const tab = ref(0);
const processed = [
  {
    organizationName: "Министерство связи и информатизации",
    orderType: "Прием граждан",
    date: "17.07.2024",
    time: "11:00",
    icon: "mdi-text-box-outline",
  },
  {
    organizationName: "ГАИ Мингорисполкома",
    orderType: "Выдача водительского удостоверения",
    date: "12.08.2024",
    time: "09:00",
    icon: "mdi-rocket-launch-outline",
  },
  {
    organizationName: "Поликлиника №6",
    orderType: "Офтальмолог",
    date: "14.09.2024",
    time: "13:15",
    icon: "mdi-text-box-outline",
  },
  {
    organizationName: "Центр цифрового развития",
    orderType: "Прием граждан",
    date: "12.08.2024",
    time: "",
    icon: "mdi-text-box-outline",
  },
];

const unprocessed = [
  {
    organizationName: "Министерство торговли",
    orderType: "Прием граждан",
    date: "17.07.2024",
    time: "11:00",
    icon: "mdi-text-box-outline",
  },
];
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-tabs
        v-model="tab"
        align-tabs="center"
        class="mb-6"
        color="deep-purple-accent-4"
      >
        <v-tab :value="0">Обработанные</v-tab>
        <v-tab :value="1">Необработанные</v-tab>
      </v-tabs>

      <v-row v-if="tab === 0">
        <v-col v-for="(item, index) in processed" :key="index" cols="6">
          <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
              <v-card
                v-bind="activatorProps"
                class="py-4"
                color="surface-variant"
                :prepend-icon="item.icon"
                rel="noopener noreferrer"
                rounded="lg"
                :subtitle="item.orderType"
                :title="item.organizationName"
                variant="text"
              >
                <v-overlay
                  opacity=".06"
                  scrim="primary"
                  contained
                  model-value
                  persistent
                />
              </v-card>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Dialog">
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    text="Close Dialog"
                    @click="isActive.value = false"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row v-if="tab === 1">
        <v-col v-for="(item, index) in unprocessed" :key="index" cols="6">
          <v-card
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/"
            :prepend-icon="item.icon"
            rel="noopener noreferrer"
            rounded="lg"
            :subtitle="item.orderType"
            :title="item.organizationName"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
