<script setup lang="ts">
import StarComponent from "./StarComponent.vue";
import StarProps from "../types/StarComponent";
import { computed } from "vue";

const props = withDefaults(defineProps<StarProps>(), {
  showNumbers: false,
});
const textFontSize = computed(() => {
  const size = props.size;
  let fontSize = "";
  if (size === "small") {
    fontSize = "text-3xl";
  } else if (size === "medium") {
    fontSize = "text-4xl";
  } else {
    fontSize = "text-6xl";
  }
  return fontSize;
});
</script>
<template>
  <div class="w-full bg-gray-200 ">
    <span class="font-bold"
      >Your average score for all questions this period</span
    >
    <div class="flex justify-between flex-column pt-3">
      <StarComponent v-bind="props" />
      <span :class="textFontSize" class="text-primary font-bold">{{
        props.value
      }}</span>
    </div>
  </div>
</template>
