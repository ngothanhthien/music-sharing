import { createRouter, createWebHistory } from "vue-router";
import UserHome from "../views/UserHome.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/me",
      name: "UserHome",
      component: UserHome,
    },
  ],
});

export default router;
