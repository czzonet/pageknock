const store = {
  namespaced: true,
  state: {
    titles: [],
  },
  mutations: {
    TITLES: (state, payload: string[]) => {
      state.titles.splice(
        0,
        state.titles.length,
        ...JSON.parse(JSON.stringify(payload))
      );
    },
  },
  modules: {},
  actions: {
    Titles: async ({ commit, dispatch }, payload) => {
      commit("TITLES", payload);
      console.log("Titles");
    },
    Add: async ({ commit, state, dispatch }, payload) => {
      const tempTitles = JSON.parse(JSON.stringify(state.titles)) as string[];
      tempTitles.push(payload);
      await dispatch("Titles", tempTitles);
      console.log("Add");
    },
  },
} as MyStoreOption<State>;

export default store;

/** 状态 */
type State = {
  titles: string[];
};
