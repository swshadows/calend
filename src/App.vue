<template>
  <h1 class="main-title">Calend</h1>
  <Clock />
  <router-view />
</template>

<script>
import Clock from "@/components/Clock.vue";
export default {
  components: { Clock },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta&display=swap");

* {
  font-family: "Mukta", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  color: #4d4d4d;
  margin: 0 auto;
}
.main-title {
  color: #8f0085;
  font-size: 3rem;
  border: 3px solid transparent;
  display: inline-block;
  transition: 0.1s all;
}
.main-title:hover {
  border-bottom: 3px solid #ff00ee;
  border-top: 3px solid #ff00ee;
}
</style>
