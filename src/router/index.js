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
  },
  {
    path: "/way3",
    name: "way3",
    component: () =>
      import(/* webpackChunkName: "way3" */ "../views/way3/index.vue")
  },
  {
    path: "/way4",
    name: "way4",
    component: () =>
      import(/* webpackChunkName: "way4" */ "../views/way4/index.vue")
  },
  {
    path: "/way5",
    name: "way5",
    component: () =>
      import(/* webpackChunkName: "way5" */ "../views/way5/index.vue")
  },
  {
    path: "/way6",
    name: "way6",
    component: () =>
      import(/* webpackChunkName: "way6" */ "../views/way6/index.vue")
  },
  {
    path: "/way7",
    name: "way7",
    component: () =>
      import(/* webpackChunkName: "way7" */ "../views/way7/index.vue")
  },
  {
    path: "/way8",
    name: "way8",
    component: () =>
      import(/* webpackChunkName: "way8" */ "../views/way8/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
