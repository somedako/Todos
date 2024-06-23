import { createRouter, createWebHistory } from "vue-router";
import UsersView from "../views/UsersView.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Users",
      component: UsersView,
    },

    {
      path: "/user/",
      name: "UserView",
      props: true,
      component: UserView,
    },
  ],
});

export default router;
