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
  }
};
