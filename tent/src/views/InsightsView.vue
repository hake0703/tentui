<template>
  <div class="insights">
    <DigitalClock />
    <ChristmasCountdown />
    <Mario64Release />
    <Goldeneye64Release />
  </div>
</template>

<script>
import DigitalClock from "@/components/DigitalClock.vue";
import ChristmasCountdown from "@/components/ChristmasCountdown.vue";
import Mario64Release from "@/components/Mario64Release.vue";
import Goldeneye64Release from "@/components/Goldeneye64Release.vue";

export default {
  name: "InsightsView",
  components: {
    DigitalClock,
    ChristmasCountdown,
    Mario64Release,
    Goldeneye64Release,
  },
};
</script>

<style scoped>
/* Your styles go here */
</style>
