<script setup lang="ts">
import { ref, computed, watch } from "vue";
import StarProps from "../types/StarComponent";
const props = withDefaults(defineProps<StarProps>(), {
  value: 4.5,
  showNumbers: true,
  size: "large",
});

interface Star {
  raw: number;
  percent: string;
}

const styleStarWidth = computed(() => {
  switch (props.size) {
    case "x-small":
      return 20;
      case "small":
      return 40;
    case "medium":
      return 60;
    case "large":
      return 80;
    default:
      return 60;
  }
});
const styleStarHeight = computed(() => {
  switch (props.size) {
    case "x-small":
      return 20;
      case "small":
      return 40;
    case "medium":
      return 60;
    case "large":
      return 80;
    default:
      return 60;
  }
});
const styleEmptyStarColor = ref("#737373");
const styleFullStarColor = computed(() => props.color ?? "#4784C4");
const totalStars = ref(5);
const stars = ref<Array<Star>>([]);
const emptyStar = ref(0);
const fullStar = ref(1);

const getStarPoints = computed(() => {
  let centerX = styleStarWidth.value / 2;
  let centerY = styleStarWidth.value / 2;

  let innerCircleArms = 5;

  let innerRadius = styleStarWidth.value / innerCircleArms;
  let innerOuterRadiusRatio = 2.5;
  let outerRadius = innerRadius * innerOuterRadiusRatio;

  return calcStarPoints(
    centerX,
    centerY,
    innerCircleArms,
    innerRadius,
    outerRadius
  );
});

const calcStarPoints = (
  centerX: number,
  centerY: number,
  innerCircleArms: number,
  innerRadius: number,
  outerRadius: number
) => {
  let angle = Math.PI / innerCircleArms;
  let angleOffsetToCenterStar = 60;

  let totalArms = innerCircleArms * 2;
  let points = "";
  for (let i = 0; i < totalArms; i++) {
    let isEvenIndex = i % 2 == 0;
    let r = isEvenIndex ? outerRadius : innerRadius;
    let currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
    let currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
    points += currX + "," + currY + " ";
  }
  return points;
};

const initStars = () => {
  for (let i = 0; i < totalStars.value; i++) {
    stars.value.push({
      raw: emptyStar.value,
      percent: emptyStar.value + "%",
    });
  }
};

const setStars = () => {
  let fullStarsCounter = Math.floor(props.value);
  for (let i = 0; i < stars.value.length; i++) {
    if (fullStarsCounter !== 0) {
      stars.value[i].raw = fullStar.value;
      stars.value[i].percent = calcStarFullness(stars.value[i]);
      fullStarsCounter--;
    } else {
      let surplus = Math.round((props.value % 1) * 10) / 10; // Support just one decimal
      let roundedOneDecimalPoint = Math.round(surplus * 10) / 10;
      stars.value[i].raw = roundedOneDecimalPoint;
      return (stars.value[i].percent = calcStarFullness(stars.value[i]));
    }
  }
};

const getFullFillColor = (starData: Star) => {
  return starData.raw !== emptyStar.value
    ? styleFullStarColor.value
    : styleEmptyStarColor.value;
};

const calcStarFullness = (starData: Star) => {
  let starFullnessPercent = starData.raw * 100 + "%";
  return starFullnessPercent;
};

initStars();
setStars();

watch(
  () => props.value,
  () => {
    stars.value = [];
    initStars();
    setStars();
  }
);
</script>
<template>
  <div class="flex items-center" :aria-label="value + ' of 5'">
    <div v-for="(star, index) in stars" :key="index" class="flex mr-2">
      <svg
        :style="[
          { fill: `url(#gradient${star.raw})` },
          { width: styleStarWidth },
          { height: styleStarHeight },
        ]"
        aria-hidden="true"
      >
        <polygon :points="getStarPoints" style="fill-rule: nonzero" />

        <defs>
          <linearGradient :id="`gradient${star.raw}`">
            <stop
              id="stop1"
              :offset="star.percent"
              stop-opacity="1"
              :stop-color="getFullFillColor(star)"
            ></stop>
            <stop
              id="stop2"
              :offset="star.percent"
              stop-opacity="0"
              :stop-color="getFullFillColor(star)"
            ></stop>
            <stop
              id="stop3"
              :offset="star.percent"
              stop-opacity="1"
              :stop-color="styleEmptyStarColor"
            ></stop>
            <stop
              id="stop4"
              offset="100%"
              stop-opacity="1"
              :stop-color="styleEmptyStarColor"
            ></stop>
          </linearGradient>
        </defs>
        <foreignObject
          v-if="props.showNumbers"
          :x="size == 'medium' ? '25':'35'"
          :y="size == 'medium' ? '15':'25'"
          width="80"
          height="80"
          class="text-white font-bold"
        >
          <span xmlns="http://www.w3.org/1999/xhtml" class="">{{
            index + 1
          }}</span>
        </foreignObject>
      </svg>
    </div>
  </div>
</template>
