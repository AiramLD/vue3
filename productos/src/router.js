import { createRouter, createWebHistory } from "vue-router";

// Components

import MyHeader from "./components/MyHeader.vue";
import Usuarios from "@/components/Usuarios.vue";
import Productos from "@/components/Productos.vue";


const routes = [
  { path: "/", component: MyHeader },

  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
