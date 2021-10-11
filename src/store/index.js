import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    application: [],
  },
  getters: {
    getApp(state) {
      return state.application
    },
  },
  mutations: {
    setApp(state, item) {
      state.application.push(item)
    },
    editApp(state, item) {
      let app = state.application.findIndex((e) => e.id === item.id)
      state.application[app] = item
      console.log(state.application)
    },
  },
  actions: {
    addApp({ commit }, item) {
      commit('setApp', item)
    },
    editApp({ commit }, item) {
      commit('editApp', item)
    },
  },
})
