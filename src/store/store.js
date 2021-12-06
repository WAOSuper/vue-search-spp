import Vuex from 'vuex'
import Vue from 'vue'

import searchStore from './searchStore';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search: searchStore,
  }
})