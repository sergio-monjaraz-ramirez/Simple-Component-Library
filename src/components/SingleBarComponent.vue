<script setup lang="ts">
import { computed } from "vue";
import SingleBarProps from "../types/SingleBarProps";
const props = withDefaults(
  defineProps<SingleBarProps>(),
  {
    size: "medium",
    maxValue: 100,
  }
);

const getSizeClass = () => {
  if (props.size === "small") {
    return "w-6";
  } else if (props.size === "medium") {
    return "w-8";
  } else {
    return "w-12";
  }
};

const width = computed(() => {
  return getSizeClass();
});
</script>
<template>
  <div class="h-full flex flex-col items-center">
    <div class="h-full flex">
    <div class="bg-gray-200 content-end" :class="width">
      <div
        :class="width"
        class="text-center font-bold flex items-end justify-center"
        :style="{ height: `${Math.abs((100 / maxValue) * value)}%`, backgroundColor: props.color ?? '#588BC8'  }"
      >
        <span style="color: transparent;"> {{ value }}</span>
      </div>
    </div>
  </div>
  <span class="text-sm font-bold">{{ value}}</span>

  </div>

</template>
