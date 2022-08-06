<template>
  <div v-if="active">
    <span>Hoje é {{ date.day }}/{{ date.month }}/{{ date.year }}</span>
    <span> às {{ date.hours }}:{{ date.minutes }}:{{ date.seconds }}</span>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import format from "@/functions/format.js";
export default {
  setup() {
    const date = ref({});
    const active = ref(false);

    onMounted(() => {
      setTimeout(() => {
        active.value = true;
      }, 1000);
      setInterval(() => {
        const d = new Date();
        date.value = {
          hours: format(d.getHours()),
          minutes: format(d.getMinutes()),
          seconds: format(d.getSeconds()),
          day: format(d.getDay()),
          month: format(d.getMonth() + 1),
          year: d.getFullYear(),
        };
      }, 1000);
    });

    return { date, active };
  },
};
</script>
