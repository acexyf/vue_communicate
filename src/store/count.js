export default {
  namespaced: true,
  state: {
    num: 1
  },
  mutations: {
    addnum(state) {
      state.num = state.num + 1;
    },
    subnum(state) {
      state.num = state.num - 1;
    }
  }
};
