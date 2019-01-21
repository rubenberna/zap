const state = {
  status: false
}

const getters = {
  loading: state => state.status
}

const actions = {
  changeStatus({ commit }) {
    commit('setStatus')
  }
}

const mutations = {
  setStatus: (state) => {
    state.status = !state.status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
