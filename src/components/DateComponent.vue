<script setup lang="ts">
withDefaults(
    defineProps<{
        startDate: Date;
        endDate: Date;
        compareStartDate?: Date;
        compareEndDate?: Date;
    }>(),
    {},
);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formattedDate = (date: any) => {
  if (typeof date === "number") {
    const newDate = new Date(date);
    return `${newDate.getDate()}  ${
      months[newDate.getMonth()]
    } ${newDate.getFullYear()}`;
  }
  return `${date.getDate()}  ${months[date.getMonth()]} ${date.getFullYear()}`;
};
</script>
<template>
    <div class="flex flex-col gap-1 w-full h-40 bg-[#5C514F] px-5 py-0">
        <span class="text-gray-300">Date: </span>
        <span class="text-white font-bold text-md">{{ formattedDate(startDate) }} - {{ formattedDate(endDate) }}</span>
        <div v-if="compareStartDate && compareEndDate" class="text-[#958b86] font-bold text-sm"
            >Compared with: 
            <p  class="text-[#958b86] font-bold text-sm">
          {{ formattedDate(compareStartDate) }} - {{ formattedDate(compareEndDate) }}
        </p>
        </div>
      
    </div>
</template>
