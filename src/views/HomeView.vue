<template>
  <Months />
  <Footer />
</template>

<script>
import Months from "@/components/Months.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: { Months, Footer },
};
</script>
