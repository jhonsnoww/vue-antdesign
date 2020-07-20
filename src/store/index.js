import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import author from "./author";
import book from "./book";
import genre from "./genre";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    author,
    book,
    genre
  }
});
