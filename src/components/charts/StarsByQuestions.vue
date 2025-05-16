<script setup lang="ts">import StarQuestionsProps from "../../types/StarQuestionsProps";
import { ref } from "vue";
const props = withDefaults(defineProps<StarQuestionsProps>(), {});

const labels =  ref<Array<string>>(props.labels ?? ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]);

const maxValue = props.stars?.reduce((max, current) => {
    return current > max ? current : max;
  }, props.stars[0]) || 0;



const calculateSize = (value: number): number => {

    if (maxValue > 0) {
        return value / maxValue;
    }

    return 0

}


</script>

<template>
  
  <div class="grid grid-cols-[50px_1fr] w-full m-0 p-5 items-center justify-center">
    <div class="text-sm rotate-180 " style=" writing-mode: tb-rl"> % Responses</div>
    <table
      class="charts-css column show-heading show-labels data-center data-spacing-20 "
    >
      <caption class="font-semibold text-start">
        {{ props.questionLabel }}
      </caption>
      <thead>
        <tr>
          <th>Stars</th>
          <th>Percent</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.stars">
          <th scope="row" class="text-sm font-[400]">{{ labels[index] }}</th>
          <td style="--color: #43AB3B;" :style="`--size: ${calculateSize(item)}`">
            <span class="data text-white">{{ item }}</span>
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>

