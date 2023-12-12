<template>
  <div class="insights">
    <DigitalClock />
    <ChristmasCountdown />
  </div>
</template>

<script>
import DigitalClock from "@/components/DigitalClock.vue";
import ChristmasCountdown from "@/components/ChristmasCountdown.vue";

export default {
  name: "InsightsView",
  components: {
    DigitalClock,
    ChristmasCountdown,
  },
};
</script>

<style scoped>
/* Your styles go here */
</style>
