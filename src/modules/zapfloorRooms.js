import api from '../apis/zapfloor.js'

const state = {
  zapfloorRooms: []
}

const getters = {
  zapfloorRooms: state => state.zapfloorRooms
}

const actions = {
  async fetchZapfloorRooms({ rootState, commit }) {
    commit('setZapfloorRooms', null)
    const { token } = rootState.Auth
    const response = await api.fetchZapfloorRooms(token)
    commit('setZapfloorRooms', response)
  }
}

const mutations = {
  setZapfloorRooms: (state, list) => {
    state.zapfloorRooms = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
