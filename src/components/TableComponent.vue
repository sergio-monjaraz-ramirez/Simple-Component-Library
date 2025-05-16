<script setup lang="ts">
import ProgressBarComponent from "./ProgressBarComponent.vue";
import TableProps from "../types/TableProps";


withDefaults(
  defineProps<{
    data: Array<TableProps>;
  }>(),
  {}
);
</script>
<template>
  <table class="bg-white border border-gray-100">
    <thead>
      <tr>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold w-1/2">
          Question
        </th>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold w-1/6">
          Blanks
        </th>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold">
          % Complete
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td class="p-2 border-b border-gray-500">{{ item.questionName }}</td>
        <td class="p-2 border-b border-gray-500">{{ item.blanksValue }}</td>
        <td class="p-2 border-b border-gray-500">
          <ProgressBarComponent
            :show-negative="item.progressBarValue.value < 0"
            :value="item.progressBarValue.value"
            :color="item.progressBarValue.color"
            size="small"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
