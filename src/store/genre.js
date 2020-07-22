// initial state
const state = {
  genreform: {
    name: ""
  },
  genres: [
    {
      title: "Biography"
    },
    {
      title: "Essay"
    },
    {
      title: "Memoir"
    },
    {
      title: "Comic fantasy"
    }
  ]
};

// mutations
const mutations = {
  addGenre: state => {
    console.log("Mutations Called");
    console.log(state.genres.length);
    state.genres.push({ title: state.genreform.name });
    console.log(state.genres.length);
  }
};
// getters
const getters = {
  genreform(state) {
    console.log(state.genreform.name);
    return state.genreform;
  },
  genres(state) {
    return state.genres;
  }
};

// actions
const actions = {
  pushGenre({ commit }) {
    console.log("Actions Called");
    commit("addGenre");
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
