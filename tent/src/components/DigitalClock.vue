<template>
  <div class="clock">Current Time: {{ currentTime }}</div>
</template>

<script>
export default {
  name: "DigitalClock",
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
    };
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>

<style scoped>
.clock {
  font-size: 48px;
  font-family: "Courier New", monospace;
  background-color: black;
  color: lime;
  padding: 20px;
  border-radius: 5px;
}
</style>
