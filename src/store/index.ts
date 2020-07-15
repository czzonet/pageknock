import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

import helloworld from "../components/helloworld/store";
import itemlist from "../components/itemlist/store";

const store = {
  state: {
    loading: false,
    token: "",
  },
  mutations: {},
  actions: {},
  modules: { helloworld, itemlist },
} as StoreOptions<State>;

const MainStore = new Vuex.Store(store);

export default MainStore;

/** 状态 */
type State = {
  loading: boolean;
  token: string;
};
