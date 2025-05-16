<script setup lang="ts">
import { computed } from "vue";
import ProgressBarProps from "../types/ProgressBarProps";
const props = withDefaults(
  defineProps<ProgressBarProps>(),
  {
    size: "medium",
    showNegative: true,
  }
);

const getSizeClass = () => {
  if (props.size === "small") {
    return "h-8";
  } else if (props.size === "medium") {
    return "h-10";
  } else {
    return "h-12";
  }
};

const height = computed(() => {
  return getSizeClass();
});
</script>
<template>
  <div class="flex" :class="height">
    <div v-if="showNegative" class="w-1/2 bg-gray-200">
      <div
        v-if="value < 0"
        :class="height"
        class="text-left pl-5 font-semibold float-end place-content-center max-w-full"
        :style="{
          width: `${Math.abs(value)}%`,
          backgroundColor: color ?? '#588BC8',
        }"
      ></div>
      <span v-if="value < 0" class="absolute py-2 px-1 font-semibold text-sm">
        {{ `${value} %` }}</span
      >
    </div>
    <div :class="height" class="w-[2px] bg-black"></div>

    <div :class="showNegative ? 'w-1/2' : 'w-full'" class="bg-gray-200 flex">
      <div
        v-if="value >= 0"
        :class="height"
        class="max-w-full"
        :style="{
          width: `${Math.abs(value)}%`,
          backgroundColor: color ?? '#588BC8',
        }"
      ></div>
      <span v-if="value >= 0" class="absolute py-2 text-sm px-4 font-semibold">
        {{ `${value} %` }}</span
      >
    </div>
  </div>
</template>
