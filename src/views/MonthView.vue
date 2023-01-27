<template>
  <br />
  <router-link :to="{ name: 'home' }">Voltar à aplicação</router-link>
  <div v-if="month">
    <h1>{{ month.name }}, mês {{ month.id }}</h1>
    <p>Total de dias: {{ month.days }}</p>
    <Calendar :month="month" />
    <div class="mobile-holidays" v-if="mobileHolidays.length">
      <h3>Feriados móveis</h3>
      <ul>
        <li v-for="mobile in mobileHolidays" :key="mobile.name">
          {{ mobile.name }}
        </li>
      </ul>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import Calendar from "@/components/Calendar.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";

export default {
  props: ["id"],
  components: { Spinner, Calendar },
  setup(props) {
    const month = ref();
    onMounted(async () => {
      const res = await fetch("https://holid-production.up.railway.app/" + props.id);
      if (res.status == 200) {
        const data = await res.json();
        month.value = data;
      }
    });

    const mobileHolidays = computed(() => {
      return month.value.holidays.filter((item) => {
        return item.changes;
      });
    });

    return { month, mobileHolidays };
  },
};
</script>

<style scoped>
a {
  color: #2c3e50;
}
.mobile-holidays {
  text-align: left;
  margin-bottom: 20px;
}
.mobile-holidays ul {
  list-style-type: none;
  padding: 0;
}
</style>
