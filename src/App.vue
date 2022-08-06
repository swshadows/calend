<template>
  <h1 class="main-title">Calend</h1>
  <Today />
  <Months />
  <Footer />
</template>

<script>
import Today from "@/components/Today.vue";
import Months from "@/components/Months.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Today, Months, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Uchen&display=swap");

* {
  font-family: "Uchen", serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1200px;
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
