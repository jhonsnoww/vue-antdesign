// initial state
const state = {
  authenticated: false
};

// mutations
const mutations = {
  setAuthentication: (state, status) => {
    state.authenticated = status;
    console.log("authenticated" + state.authenticated);
  }
};
// getters
const getters = {
  authenticated(state) {
    return state.authenticated;
  }
};

// actions
const actions = {
  sayMyWord({ commit }) {
    commit("sayHello");
  },
  setAuth({ commit }, status) {
    commit("setAuthentication", status);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
