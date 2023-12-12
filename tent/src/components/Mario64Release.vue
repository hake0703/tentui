<template>
  <div class="mario-release">
    <div>Mario 64 Release Date: June 23, 1996</div>
    <img class="box-art" :src="marioBoxArt" alt="Mario 64 Box Art" />
    <div>
      Time since Mario 64 release: {{ years }} years, {{ months }} months,
      {{ weeks }} {{ weeks === 1 ? "week" : "weeks" }}, {{ days }} days
    </div>
  </div>
</template>

<script>
export default {
  name: "Mario64Release",
  data() {
    return {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
      marioBoxArt:
        "https://i.ebayimg.com/images/g/h3cAAOSwRxNkYCy9/s-l1200.jpg",
    };
  },
  methods: {
    updateTimeSinceRelease() {
      const releaseDate = new Date(1996, 5, 23);
      const now = new Date();
      const diff = now - releaseDate;
      this.years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      this.months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      this.weeks = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
      );
      this.days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
      );
    },
  },
  mounted() {
    this.updateTimeSinceRelease();
    setInterval(this.updateTimeSinceRelease, 1000);
  },
};
</script>

<style scoped>
.mario-release {
  font-size: 20px;
  font-family: "Courier New", monospace;
  background-color: red;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.box-art {
  width: 50%;
  height: auto;
}
</style>
