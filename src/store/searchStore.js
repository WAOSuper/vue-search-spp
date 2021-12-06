import axios from 'axios'


export default {
  namespaced: true,
  state: {
    fakeData: [],
    results: []
  },
  actions: {
    search({
      commit,
      state
    }, searchTerm) {
      let result = state.fakeData.filter(item => item.title.indexOf(searchTerm) > -1)
      commit('setSearchResult', result)
    },
    getFakeData({
      commit
    }) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => commit('setFakeData', res.data))
    }
  },
  mutations: {
    setSearchResult(state, results) {
      state.results = results;
    },
    setFakeData(state, data) {
      state.fakeData = data;
    }
  },
  getters: {
    getSearchResults: state => state.results,
  }
}