import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MonthView from "../views/MonthView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "month",
    component: MonthView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
