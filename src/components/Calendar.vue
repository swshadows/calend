<template>
  <div class="calendar">
    <span class="day" :class="{ 'holiday-color': day.name && !day.changes }" v-for="day in daysWithHolidays" :key="day">
      {{ day.day || day }}
      <p class="holiday-desc" v-if="day.name && !day.changes">
        <span>{{ day.name }}</span>
      </p>
    </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["month"],
  setup(props) {
    console.log(props);
    const daysWithHolidays = computed(() => {
      const days = [];

      for (let i = 1; i <= props.month.days; i++) days.push(i);

      props.month.holidays.map((item) => {
        for (let i in days) {
          if (item.day == days[i]) days[i] = item;
        }
      });
      return days;
    });

    return { daysWithHolidays };
  },
};
</script>

<style scoped>
.calendar {
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}
.day {
  display: grid;
  place-items: center;
  border: 3px solid #eee;
  padding: 10px;
  width: 100px;
  height: 100px;
  transition: 0.1s all;
  position: relative;
}
.day:hover {
  transform: translate(-10px, -10px);
  box-shadow: 10px 10px 0 0 #dddddd;
}
.holiday-color {
  color: #ff0000;
}
.holiday-desc {
  opacity: 0;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  transition: 0.1s all;
  margin: 0;
}
.day:hover .holiday-desc {
  opacity: 1;
}
</style>
