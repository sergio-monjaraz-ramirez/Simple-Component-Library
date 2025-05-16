<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The name of the main component
     */
    name: string;

    /**
     * text that is located below the name
     *          */
    subtitle?: string;

    /**
     * text that will be displayed below the main component name
     */
    secondaryText?: string;
    /**
     * primary or secondary button
     */
    color?: string;
    /**
     * size of component
     */
    size?: "small" | "medium" | "large";

    classPrimary?: string;
    classSecondary?: string;
  }>(),
  {
    name: "Mr Rohit Jain",
    classPrimary: "h-20 px-4 py-2",
    classSecondary: "h-20 px-4 py-2",
    color: "primary",
  }
);
</script>
<template>
  <div>
    <div
      class="justify-start text-white bg-secondary font-bold"
      :class="classPrimary"
    >
      <span>{{ props.name }}</span>
      <p v-if="subtitle" class="text-sm mt-1">{{subtitle}}</p>
    </div>
    <div v-if="secondaryText" class="bg-white h-10"></div>
    <div
      v-if="secondaryText"
      :class="classSecondary"
      :style="`background-color: ${color}`"
      class="flex justify-start bg-primary text-white font-bold"
    >
      {{ props.secondaryText }}
    </div>
  </div>
</template>
