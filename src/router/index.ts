import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import BarLayout from "../views/layout/index.vue";

import HelloWorld from "../components/helloworld/route";
import Template from "../components/template/route";
import ItemList from "../components/itemlist/route";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: BarLayout,
    redirect: "/main/helloworld",
    children: [HelloWorld, Template, ItemList],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
