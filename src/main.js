import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach(function(to, from, next) {
  console.log("beforeEach", to.path + " - Auth: " + store.state.authenticated);

  if (
    to.path !== "/login" &&
    to.path !== "login" &&
    !store.state.authenticated
  ) {
    next({ path: "/login" });
  } else if (
    (to.path === "/login" || to.path === "login") &&
    store.state.authenticated
  ) {
    next({ path: "/" });
  } else {
    next();
  }
});
