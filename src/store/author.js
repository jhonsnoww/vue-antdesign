export default {
  state: {
    authors: [
      { name: "မင်းထင်ကိုကိုကြီး", engName: "Min Htin Ko Ko Gyi" },
      { name: "မင်းကိုနိုင်", engName: "Min Ko Naing" },
      { name: "ဏကြီး", engName: "Na Gyi" },
      { name: "တင်ဦး", engName: "Tin OO" }
    ]
  },
  mutations: {},
  getters: {
    authors(state) {
      const temAuthors = [];
      for (let index = 0; index < state.authors.length; index++) {
        temAuthors.push({
          key: index.toString(),
          name: state.authors[index].name,
          eng_name: state.authors[index].engName
        });
      }
      return temAuthors;
    }
  },
  actions: {}
};
