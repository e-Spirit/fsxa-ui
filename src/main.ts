import "@/assets/tailwind.css";
import Vue from "vue";
import VueRouter from "vue-router";
import "vue-tsx-support/enable-check";
import App from "./App";
import router from "./documentation/router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
