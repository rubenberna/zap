import api from './api/authAPI.js'

const state = {
  token: window.localStorage.getItem('zap_token'),
  user: null
}

const getters = {
  isLoggedIn: state => !!state.token,
  customer: state => state.user
}

const actions = {
  login({ dispatch }) {
    dispatch('changeStatus', {root: true})
    // delay spinner effect
    setTimeout(function() { api.login()}, 2000)
  },
  finalizeLogin({ commit, dispatch }, token) {
    commit('setToken', token)
    window.localStorage.setItem('zap_token', token)
    dispatch('changeStatus', {root: true})
  },
  logout({ commit }) {
    commit('setToken', null)
    window.localStorage.removeItem('zap_token')
  },
  saveUser({ commit}, user) {
    commit('setUser', user)
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  setUser: (state, user) => {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
