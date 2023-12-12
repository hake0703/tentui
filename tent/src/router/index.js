import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import InsightsView from "../views/InsightsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: InsightsView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/insights",
    name: "insights",
    component: () =>
      import(/* webpackChunkName: "insights" */ "../views/InsightsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
