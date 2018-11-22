import api from '../apis/zapfloor.js'

const state = {
  token: window.localStorage.getItem('zap_token'),
  user: null
}

const getters = {
  isLoggedIn: state => !!state.token,
  customer: state => state.user
}

const actions = {
  login: () => {
    api.login()
  },
  finalizeLogin({ commit }, token) {
    commit('setToken', token)
    window.localStorage.setItem('zap_token', token)
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
