/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createWebHistory, createRouter } from "vue-router";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   extendRoutes: setupLayouts,
// })

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import Profile from "../pages/Profile.vue";
import Info from "../pages/Info.vue";
import OrganizationsInfo from "../pages/OrganizationsInfo.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/registration", component: SignUp },
  { path: "/profile", component: Profile },
  { path: "/info", component: Info },
  { path: "/org-info", component: OrganizationsInfo },
  { path: "/about", component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
