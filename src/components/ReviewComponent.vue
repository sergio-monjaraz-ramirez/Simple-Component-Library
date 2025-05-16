<script setup lang="ts">
import ReviewProps from "../types/ReviewProps";
import StarComponent from "./StarComponent.vue";

withDefaults(defineProps<ReviewProps>(), {
  patientName: "Private Patient",
});
</script>

<template>
  <div class="grid grid-rows-[1fr_1.5fr] grid-cols-1 w-full">
    <div>
      <span class="grid font-bold"
        >{{ creationDate }}</span
      >
    </div>
    <hr class="border-gray-400 mt-3 h-1" />
    <div class="grid grid-cols-12 gap-4 ">
      <div v-if="experienceValue" class="col-span-1">
        <span class="font-bold text-4xl">{{ experienceValue }}</span>
      </div>
      <div :class="[experienceValue ? 'grid col-span-5' : 'grid col-span-6', `grid-rows-[repeat(${stars.length+2},_minmax(0,_25px))]`]">
        <div
          v-for="(item, index) in stars"
          :key="index"
          class="font-bold border-b h-6 border-gray-300"
        >
          <div class="flex justify-between">
            <span>{{ item.friendlyName }}</span>
            <StarComponent size="x-small" :value="item.value" />
          </div>
        </div>
        <div v-if="speciality" class="font-bold border-b h-6 border-gray-300">
          <div class="flex justify-between">
            <span>Speciality</span>
            <span>{{ speciality.value }}</span>
          </div>
        </div>
        <div v-if="location" class="font-bold">
          <div class="flex justify-between">
            <span>Seen at</span>
            <span>{{ location.value }}</span>
          </div>
        </div>
      </div>
      <div class="text-justify block col-span-6">
        <div class="pb-1" v-for="text in textQuestion">
          <span class="font-bold">{{ text.friendlyName }}</span>
          <p>{{ text.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
