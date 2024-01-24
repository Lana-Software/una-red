import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/lanateam",
      name: "lanateam",
      component: () => import("../views/Team.vue"),
    },
    {
      path: "/info",
      name: "info",
      component: () => import("../views/Info.vue"),
    },
  ]
})

export default router;