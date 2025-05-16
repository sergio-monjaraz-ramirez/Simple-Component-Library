<script setup lang="ts">
import PieProps from "../../types/PieProps";
import { ref } from "vue";

const props = withDefaults(defineProps<PieProps>(), {});

const total = props.data.reduce((acc, curr) => acc + curr.value, 0) || 0;
const defaultColors = ["#4784C4", '#48A634', '#EFF1F3', '#FBB03B', '#535353', '#F56A79', '#FAD02E', '#A5C8E1', '#D5E8D4', '#FCE8D4', '#E1E2E3' ]

const sumOfValues = ref(0);

const calculatePercent = (value: number) => {
  return ((value / total) * 100).toFixed(0) + "%";
};

const stylePie = (
  item: { title: string; value: number; color: string },
  index: number
) => {
  if (index == 0) {
    sumOfValues.value = 0;
  }

  const lastSum = sumOfValues.value;
  sumOfValues.value = sumOfValues.value + item.value / total;

  return {
    "--start": index == 0 ? 0 : lastSum,
    "--end": index == props.data.length - 1 ? 1 : sumOfValues.value,
    "--color": item.color ?? defaultColors[index],
  };
};

const calculateTransform = (item: { title: string; value: number; color: string }, index: number) => {

  const start = index == 0 ? 0 : sumOfValues.value - item.value / total;
  const end = index == props.data.length - 1 ? 1 : sumOfValues.value;
  const angle = (start + end) / 2;
  const x = Math.cos(angle * Math.PI * 1) * 0.3;
  const y = Math.sin(angle * Math.PI * 1.05) * 0.6;
  return {
    transform: `translate(${Math.round(x * 100)}%, ${Math.round(y * 100)}%)`,
  };
}
</script>

<template>
  <div class="flex gap-4">
    <table class="charts-css pie show-primary-axis data-center" :class="title ? 'show-heading' : ''">
      <caption class="text-md font-semibold">
        {{
          title
        }}
      </caption>
      <tbody>
        <tr v-for="(item, index) in data">
          <td v-if="item.value > 0" :style="stylePie(item, index)">
            
            <span class="data font-bold"  style="z-index: 1000;" :style="calculateTransform(item, index)"> {{ ((item.value / total) * 100) > 5 ? calculatePercent(item.value): '' }} </span>
          </td>
        </tr>
      </tbody>
    </table>
    <ul class="charts-css legend legend-square ">
      <li v-for="(item, index) in data" :style="`--color-${index+1}: ${item.color ?? defaultColors[index]}`">
        <span class="w-full flex justify-between">
          {{item.title }}:  <strong>{{ calculatePercent(item.value) }}</strong>
        </span>
      </li>
    </ul>
  </div>
</template>
