<script setup lang="ts">
import QuestionScoreProps from "../types/QuestionScoreProps";
import ProgressBarComponent from "./ProgressBarComponent.vue";
import ComparedComponent from "./ComparedComponent.vue";
import SingleBarComponent from "./SingleBarComponent.vue";

withDefaults(
  defineProps<{
    items?: Array<QuestionScoreProps>;
  }>(),
  {}
);
</script>
<template>
  <table class="w-full bg-white border border-gray-100">
    <thead>
      <tr>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold">
          Question
        </th>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold w-52">
          Average Score
        </th>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold w-52">
          Comparison vs org
        </th>
        <th class="p-2 border-b bg-gray-200 text-left text-sm font-bold w-32">
          Compared with last period
        </th>
        <th
          v-for="(_, index) in items?.[0]?.stars"
          class="p-2 border-b bg-gray-200 text-left text-sm font-bold"
        >
          {{ (index+1) + " *" }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td class="p-2 border-b border-gray-500">{{ item.questionName }}</td>
        <td class="p-2 border-b border-gray-500">{{ item.averageScore }}</td>
        <td class="p-2 border-b border-gray-500">
          <ProgressBarComponent
            :value="item.comparisonOrg.value"
            :color="item.comparisonOrg.color"
          />
        </td>
        <td class="p-2 border-b border-gray-500">
          <ComparedComponent :value="item.comparedLastPeriod" />
        </td>
        <td v-for="stars in item.stars" class="p-2 h-20 border-b border-gray-500">
          <SingleBarComponent :value="stars.value" :maxValue="stars.maxValue" size="medium" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
