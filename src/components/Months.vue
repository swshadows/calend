<template>
  <div class="grid" v-if="months">
    <div v-for="month in months" :key="month.id">
      <h2>{{ month.name }}, {{ month.id }}</h2>
      <p>Total de dias: {{ month.days }}</p>
      <h4>Feriados</h4>
      <ul v-if="month.holidays.length > 0">
        <li v-for="holiday in month.holidays" :key="holiday.name">{{ holiday.name }}, {{ holiday.duration }} dia(s)</li>
      </ul>
      <ul v-else>
        <li style="color: #fc5a5a">Sem feriados definidos</li>
      </ul>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import Spinner from "./Spinner.vue";
export default {
  components: { Spinner },
  setup() {
    const months = ref();
    onMounted(async () => {
      const res = await fetch("https://swshadows-holid.herokuapp.com");
      if (res.status == 200) {
        const data = await res.json();
        months.value = data;
      }
    });
    return { months };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  gap: 20px;
}
.grid div {
  border: 3px solid #eee;
  border-radius: 10px;
  transition: 0.1s all;
}
.grid div:hover {
  transform: translate(-10px, -10px);
  box-shadow: 10px 10px 0 0 #dddddd;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 14px;
  text-decoration: underline;
}
</style>
