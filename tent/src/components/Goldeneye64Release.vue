<template>
  <div class="goldeneye-release">
    <div>Goldeneye 64 Release Date: August 25, 1997</div>
    <img class="box-art" :src="goldeneyeBoxArt" alt="Goldeneye 64 Box Art" />
    <div>
      Time since Goldeneye 64 release: {{ years }} years, {{ months }} months,
      {{ weeks }} {{ weeks === 1 ? "week" : "weeks" }}, {{ days }} days
    </div>
  </div>
</template>

<script>
export default {
  name: "Goldeneye64Release",
  data() {
    return {
      goldeneyeBoxArt:
        "https://media.zenfs.com/en/insidehook_952/b296ab39cfe59e8be37ce731a7edba27",
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
    };
  },
  methods: {
    updateTimeSinceRelease() {
      const releaseDate = new Date(1997, 7, 25);
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
.goldeneye-release {
  font-size: 20px;
  font-family: "Courier New", monospace;
  background-color: #ffd700; /* gold */
  color: #8b4513; /* saddle brown */
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.box-art {
  width: 50%;
  height: auto;
}
</style>
