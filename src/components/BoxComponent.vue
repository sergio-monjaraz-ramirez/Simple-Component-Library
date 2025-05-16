<script setup lang="ts">
import { computed } from "vue";
import BoxProps from "../types/BoxProps";
const props = withDefaults(defineProps<BoxProps>(), {
  textColor: "#4784C4",
  titleColor: "#000",
});

const titlefontSize = computed(() => {
  const size = props.titleSize;
  switch (size) {
    case "x-small":
      return "text-xs";
    case "small":
      return "text-sm";
    case "medium":
      return "text-base";
    default:
      return "text-lg";
  }
});
const textFontSize = computed(() => {
  const size = props.textSize;

  switch (size) {
    case "x-small":
      return "text-base";
    case "small":
      return "text-lg";
    case "medium":
      return "text-2xl";
    default:
      return "text-4xl";
  }
});

</script>
<template>
    <div class=" bg-gray-300">
        <span :class="titlefontSize" :style="{ color: titleColor }" class="font-bold">{{ title }}
        </span>

        <p v-if="value" :class="textFontSize" class="pt-3 text-center font-bold">
            <span :style="{ color: textColor }">{{ value }}</span>
        </p>
        <slot v-else-if="$slots.default" />
        <p v-else class="pt-3 text-center font-bold" :class="textFontSize" :style="{ color: textColor }"> N/A </p>
    </div>
</template>
