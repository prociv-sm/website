import Vue from "vue";
import Vuex from "vuex";
import vehicles from "./modules/vehicles";
import activities from "./modules/activities";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      vehicles,
      activities
    }
  });
};

export default createStore;
