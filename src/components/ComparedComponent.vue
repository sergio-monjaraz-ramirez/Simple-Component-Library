<script setup lang="ts">
import { computed } from "vue";
import ComparedProps from "../types/ComparedProps";
const props = withDefaults(
  defineProps<ComparedProps>(),
  {
    value: "higher",
    size: "large",
  }
);

const parseSize = computed(() => {
  switch (props.size) {
    case "small":
      return "size-6";
    case "medium":
      return "size-8";
    case "large":
      return "size-10";
  }
});
</script>
<template>
  <div v-if="props.value == 'higher'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      :class="parseSize"
      class="font-bold"
      :style="{color: color?? 'green' }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  </div>
  <div v-if="props.value == 'lower'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      :class="parseSize"
      class="font-bold"
      :style="{color: color?? 'red' }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
  <div v-if="props.value == 'equal'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      :class="parseSize"
      class="font-bold"
      :style="{color: color ?? 'green', transform: 'rotate(90deg)' }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  </div>
</template>
