import Vue from "vue";
import Vuex from "vuex";
import vehicles from "./modules/vehicles";
import equipments from "./modules/equipments";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      vehicles,
      equipments
    }
  });
};

export default createStore;
