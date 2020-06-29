import "vue-tsx-support/enable-check";
import Vue from "vue";
import App from "./App";
import "@/assets/tailwind.css";
import VueRouter from "vue-router";
import router from "./documentation/router";
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
