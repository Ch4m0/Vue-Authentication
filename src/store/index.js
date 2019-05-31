import Vue from "vue";
import Vuex from "vuex";
import { ModuleAuthentication } from "./login/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ModuleAuthentication
  }
});
