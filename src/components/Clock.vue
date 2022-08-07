<template>
  <div class="clock">
    <span>Hoje é {{ clock.weekday }}, {{ clock.day }}/{{ clock.month }}/{{ clock.year }}</span>
    <span> às {{ clock.hours }}:{{ clock.minutes }}:{{ clock.seconds }}</span>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import runClock from "@/functions/runClock";
export default {
  setup() {
    const clock = ref({});
    onMounted(() => {
      runClock(clock);
      setInterval(() => {
        runClock(clock);
      }, 1000);
    });

    return { clock };
  },
};
</script>

<style scoped>
.clock {
  margin: 20px;
}
span {
  font-size: 20px;
}
</style>
