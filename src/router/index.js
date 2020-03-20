import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/way1",
    name: "way1",
    component: () =>
      import(/* webpackChunkName: "way1" */ "../views/way1/index.vue")
  },
  {
    path: "/way2",
    name: "way2",
    component: () =>
      import(/* webpackChunkName: "way2" */ "../views/way2/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
