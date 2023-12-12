<template>
  <div class="christmas-countdown">
    ⛄️ Christmas Countdown: ⛄️ <br />
    {{ days }} days, {{ hours }} hours, {{ minutes }} minutes,
    {{ seconds }} seconds
  </div>
</template>

<script>
export default {
  name: "ChristmasCountdown",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const nextChristmas = new Date(now.getFullYear(), 11, 25);
      if (now > nextChristmas) {
        nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
      }
      const diff = nextChristmas - now;
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    },
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
};
</script>

<style scoped>
.christmas-countdown {
  font-size: 48px;
  font-family: "Courier New", monospace;
  background-color: green;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.snowman {
  height: 50px;
  width: 50px;
}
</style>
