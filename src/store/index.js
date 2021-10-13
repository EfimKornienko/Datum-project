import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    application: [],
    point: null,
  },
  getters: {
    getApp(state) {
      return state.application
    },
    getPoint(state) {
      return state.point
    },
  },
  mutations: {
    setApp(state, item) {
      state.application.push(item)
    },
    editApp(state, item) {
      let app = state.application.findIndex((e) => e.id == item.id)
      state.application[app] = item
      console.log(state.application)
    },
    setPoint(state, item) {
      state.point = item
    },
  },
  actions: {
    addApp({ commit }, item) {
      commit('setApp', item)
    },
    editApp({ commit }, item) {
      commit('editApp', item)
    },
    setPoint({ commit }, item) {
      commit('setPoint', item)
    },
  },
})
