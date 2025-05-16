<script setup lang="ts">
import ServiceProps from "../types/ServiceProps";
import ComparedComponent from "./ComparedComponent.vue";

defineProps<{
  data: Array<ServiceProps>;
  questions: Array<string>;
}>();
</script>
<template>

    <table class="w-full bg-white border border-[#e5e7eb]">
      <thead>
        <tr class="">
          <th
            id="serviceName"
            class="p-2 h-20 border-b border-r bg-[#5C514F] border-[#e5e7eb] text-left text-white font-bold"
          >
            Service Name
          </th>
          <th
            id="period"
            class="p-2 h-20 border-b border-r bg-[#5C514F] border-[#e5e7eb] text-left text-white font-bold w-10"
          >
            This period
          </th>
          <th
            id="lastMonths"
            class="p-2 h-20 border-b border-r bg-[#5C514F] border-[#e5e7eb] text-left text-white font-bold w-10"
          >
            Last 6 months
          </th>
          <th
            id="questions"
            class="p-2 h-20 border-b bg-[#5C514F] border-[#e5e7eb] text-left text-white font-bold"
          >
            Questions
          </th>
        </tr>
        <tr>
          <th id="blank" class="h-60 border-b border-r bg-[#D3D3D3] border-[#e5e7eb] w-3/5"></th>
          <th id="coso" class="h-60 border-b border-r bg-[#D3D3D3] border-[#e5e7eb] p-3">
            <div class="flex min-w-24 h-full justify-around">
              <span
                class="rotate-180 text-start"
                style="
                  writing-mode: vertical-rl;
                  text-orientation: sideways-right;
                "
              >
                Responses</span
              >
              <span
                class="rotate-180 text-start"
                style="
                  writing-mode: vertical-rl;
                  text-orientation: sideways-right;
                "
                >Average Score</span
              >
            </div>
          </th>
          <th class="h-60 border-b border-r border-[#e5e7eb] bg-[#D3D3D3] p-3">
            <div
              class="flex min-w-16 items-center h-full w-full rotate-180 text-start"
              style="
                writing-mode: vertical-rl;
                text-orientation: sideways-right;
              "
            >
              Average Score
            </div>
          </th>
          <th class="h-60 border-b border-r border-[#e5e7eb] bg-[#D3D3D3] p-3">
            <div v-if="data.length > 0" class="flex h-full gap-4">
              <span
                v-for="item in questions"
                class="rotate-180 text-start text-md"
                style="
                  writing-mode: vertical-rl;
                  text-orientation: sideways-right;
                "
                >{{ item }}</span
              >
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.serviceName">
          <td class="p-2 border-b border-r border-[#e5e7eb]">
            <div>
              <span class="font-bold text-sm">{{ item.serviceName }}</span>
              <p class="font-normal text-sm">{{ item.parentName }}</p>
            </div>
          </td>
          <td class="p-2 border-b border-r border-[#e5e7eb] px-3">
            <span class="pl-5 text-sm">
              {{ `${item.thisPeriod.responses.responseRate}` }}</span
            >
            <div class="flex justify-around text-sm">
              <span>{{ `(${item.thisPeriod.responses.numReview})` }}</span>
              <span> {{ `${item.thisPeriod.averageScore}` }}</span>
            </div>
          </td>
          <td class="p-2 border-b border-r border-[#e5e7eb] text-center text-sm">
            <br />
            <span class="">{{ item.last6Months.averageScore }}</span>
          </td>
          <td class="p-2 border-b border-[#e5e7eb]">
            <div class="flex gap-4">
              <div v-for="(_, index) in questions">
                <ComparedComponent
                  v-if="item.questions[index]"
                  :value="item.questions[index].direction"
                  :color="item.questions[index].color"
                  size="small"
                />
                <div v-else class="pt-5">
                  &nbsp;
                   -- </div>

              </div>
             
            </div>
          </td>
        </tr>
      </tbody>
    </table>

</template>
