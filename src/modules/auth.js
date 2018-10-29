import api from '../apis/zapfloor.js'

const state = {
  token: window.localStorage.getItem('zap_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: () => {
    api.login()
  },
  finalizeLogin({ commit }, token) {
    console.log(token)
    commit('setToken', token)
    window.localStorage.setItem('zap_token', token)
  },
  logout({ commit }) {
    commit('setToken', null)
    window.localStorage.removeItem('zap_token')
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
