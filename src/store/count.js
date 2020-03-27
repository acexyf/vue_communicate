export default {
  namespaced: true,
  state: {
    num: 1
  },
  mutations: {
    ADD_NUM(state) {
      state.num = state.num + 1;
    },
    SUB_NUM(state) {
      state.num = state.num - 1;
    }
  },
  actions: {
    ADD_SYNC({ commit }) {
      setTimeout(() => {
        commit("ADD_NUM");
      }, 1000);
    },
    SUB_SYNC({ commit }) {
      setTimeout(() => {
        commit("SUB_NUM");
      }, 1000);
    }
  }
};
