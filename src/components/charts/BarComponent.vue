<script setup lang="ts">
import BarProps from "../../types/BarProps";

const props = withDefaults(defineProps<BarProps>(), {
  display: "vertical",
});

const maxValue =
  props.items && props.items.length > 0
    ? props.items.reduce((max, current) => {
        return current.value > max ? current.value : max;
      }, props.items[0].value)
    : 0;

const calculateSize = (value: number): number => {
  if (maxValue > 0) {
    return value / maxValue;
  }
  return 0;
};


const getStyle = (item:{title: string, value: number, color?: string} ) => {
  return {
    "--size": `${calculateSize(item.value)}`,
    "--color": item.color ? item.color: '#4784C4'
  };
}

</script>
<template>
    <table
      :class="display == 'vertical' ? 'column' : 'bar'"
      class="charts-css w-full show-heading show-labels data-start show-primary-axis"
    >
      <caption class="font-semibold">
        {{
          title
        }}
      </caption>
      <tbody>
        <tr v-for="item in props.items" :style="display == 'vertical' ? '--labels-size: 5rem': '--labels-size: 12rem'">
          <th scope="row" class="text-sm font-[400] flow-root text-left">{{ item.title }}</th>
          <td :style="getStyle(item)">
            <div class="data font-bold" :style="display == 'horizontal' ? 'margin-left: 5px; margin-right: -50px;' : 'margin-left: 5px'">{{ item.value }}</div>
          </td>
        </tr>
      </tbody>
    </table>
</template>
