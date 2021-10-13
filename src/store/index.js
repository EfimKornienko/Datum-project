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
      state.application = item
      console.log(state.application)
    },
  },
  actions: {
    addApp({ commit }, item) {
      commit('setApp', item)
    },
    editApp({ commit, state }, item) {
      const app = state.application.slice(0)
      console.log('app', app)
      const ind = app.findIndex((e) => e.id == item.id)
      app[ind] = item
      commit('editApp', app)
    },
  },
})
