import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/index.js";
import { router } from "./router.js";
import Axios from "axios";

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
