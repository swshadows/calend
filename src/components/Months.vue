<template>
  <div class="grid" v-if="months">
    <router-link
      v-for="month in months"
      :key="month.id"
      :to="{ name: 'month', params: { id: month.id } }"
    >
      <div>
        <h2>{{ month.name }}</h2>
        <p>Total de dias: {{ month.days }}</p>
      </div>
    </router-link>
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
      const res = await fetch(process.env.VUE_APP_DEPLOY);
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
a {
  color: #2c3e50;
  text-decoration: none;
}
.grid {
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  gap: 20px;
}
.grid h2 {
  color: #5189c0;
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
